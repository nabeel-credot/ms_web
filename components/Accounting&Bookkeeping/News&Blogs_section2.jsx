import React, { useEffect, useState, useRef} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./News2.module.css";

import { data } from "../../data/blogs_data";
import { category_data } from "../../data/blogs_data";
import Image from "next/image";
import Link from "next/link";
import Container from "../Common/Container";
import Button from "../ButtonYellowForm";
import LetsConnect from "../Home/LetsConnectNews";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import readTime from "../../utilities/readTime";
import gqlRequest from "../../utilities/graphql";
import dayjs from "dayjs";
function News_and_Blogs_section({ current_post }) {
  console.log("current_post:", current_post);
  const postCategories=useRef()
  const recentPostsCount=useRef(0)
  const [seeAllLinkText,setSeeAllLinkText]=useState('')
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);
  useEffect(() => 
  {
    postCategories.current=current_post?.categories?.edges?.map((cat)=>{return cat?.node?.id})
    getTwoRecentPost()
    // .then(()=>{
    //   if(recentPostsCount.current==0)
    //   {
    //     postCategories.current=null
    //     getTwoRecentPost()
    //   }
    // })

  }, []);
  useEffect(()=>{
    try{
     
      let parsed=JSON.stringify(current_post?.categories?.edges?.map((cat)=>{return cat?.node?.id}))
      setSeeAllLinkText(parsed)
    }
    catch(err)
    {
      console.log("Stringify error")
    }
  },[])
  const getTwoRecentPost=async()=>{
    const response =await gqlRequest({
      "operationName": "GetPosts",
      "query": `query GetPosts($first:Int,$excludePostId:ID,$categorys:[ID]) {
          posts (first:$first,where:{notIn:[$excludePostId],categoryIn:$categorys}){
            edges {
              node {
                id
                title
                date
                slug
                content
                featuredImage{
                  node{
                    sourceUrl
                  }
                }
              }
            }
          }
        }`,
      "variables": {first:2,excludePostId:current_post?.id,categorys:postCategories?.current||null}
    })
    console.log("recent response in page",response)
    if(response.success===true)
    {
      
      console.log("edges in posts",response.data.posts.edges)
      setSlicedData(response.data.posts.edges)
      recentPostsCount.current=response.data.posts.edges.length
    }
  }
  const initialValues2 = { name: "", email: "", message: "" };
  const [formValues2, setFormValues2] = useState(initialValues2);
  const [formErrors2, setFormErrors2] = useState({});
  const [disableBtn,setDisableBtn]=useState(false)
  
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormValues2({ ...formValues2, [name]: value });
    if (formValues2.email) {
      formErrors2.email = "";
  }
 
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const errors = {};

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formValues2.name) {
      errors.name = "Name is required!";
    }

    if (!formValues2.email) {
      errors.email = "Email is required!";
    } else if (!mailformat.test(formValues2.email)) {
      errors.email = "Invalid Email";
    }

    setFormErrors2(errors);

    if (Object.keys(errors).length === 0) {
      toast("Message has been sent successfully");
      setFormValues2(initialValues2);
    }
    // else{
    //     toast("Invalid Form data")
    // }
  };

  const filteredData = data?.sort(function (a, b) {
    return b.id - a.id;
  });

  // const SlicedData = filteredData.slice(0, 2);
  const [SlicedData,setSlicedData]=useState([])

  return (
    <Container>
      <div className={styles.news_blog_containerSec2}>
        <div className={styles.news_blog2_L} data-aos="fade-right">
          
          {/* <div className={styles.searchBar2}>

                        <input type="search" className={styles.input_field} placeholder="Search here..." onChange={event => setQuery(event.target.value)} />
                    </div> */}
          {/* <div className={styles.blogs_ctyWrap2}>
                        <div className={styles.blogs_cty2} onClick={() => setSelectedCty("all")}>Categories</div>
                        <div className={styles.blogs_cty2} onClick={() => setSelectedCty("all")}>Articles</div>

                        {category_data?.map((item, index) => {
                            return (
                                <div className={styles.blogs_cty2} key={index} onClick={() => setSelectedCty(item)}>
                                    {item}
                                </div>
                            )
                        })}

                    </div> */}

          <div
            className={styles.post_title2}
            dangerouslySetInnerHTML={{ __html: current_post?.title }}
          ></div>
          <div className={styles.postCD}>
            <div className={styles.post_cty}>
              CATEGORY : 
              <span className={styles.categoryListingWrap}>
                {current_post?.categories?.edges?.map((it,index)=>
                <span key={`${index}-${Date.now()}`}>
                  <Link href={it?.node?.id?`/news-and-blogs/?categories=["${it?.node?.id}"]`:`/news-and-blogs`}>{it?.node?.name}</Link>
                  </span>
                )}
                </span>
            </div>
            <div className={styles.post_date}>
              <span className={styles.post_date_only}>{dayjs(current_post?.date).format("MMMM DD, YYYY") || " "}{" "}</span>
              <span className={styles.post_readTime}>{`${
                readTime(current_post?.content) || " "
              } mins read`}</span>
            </div>
          </div>
          <div className={styles.blogDataWrap}>
            <Image
              src={current_post?.featuredImage?.node?.sourceUrl?current_post?.featuredImage?.node?.sourceUrl:'/images/defaultThumbnail.png'}
              alt=""
              // width={815}
              // height={443}
              layout="fill"
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10PX",
              }}
              objectFit="cover"
            />
          </div>
          <div className={styles.post_content2}>
            <div
              className={styles.post_details}
              dangerouslySetInnerHTML={{ __html: current_post?.content }}
            ></div>
          </div>

          <div className={styles.formSection} style={{display:"none"}}>
            <h3 className={styles.title2}>Leave a Reply</h3>

            <div className={styles.formWrapper}>
              <form onSubmit={handleSubmit2}>
                <div className={styles.form2}>
                  <div className={styles.inputB}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      value={formValues2.name}
                      onChange={handleChange2}
                    />
                    {formErrors2.name ? (
                      <div style={{ color: "red" }}>{formErrors2.name}</div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className={styles.inputB}>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={formValues2.email}
                      onChange={handleChange2}
                    />
                    {formErrors2.email ? (
                      <div style={{ color: "red" }}>{formErrors2.email}</div>
                    ) : (
                      ""
                    )}
                  </div>

                  <textarea
                    placeholder="Message"
                    name="message"
                    value={formValues2.message}
                    onChange={handleChange2}
                    rows="4"
                  ></textarea>
                  {/* <input type="text" placeholder='Message' name="message" value={formValues.message}
                    onChange={handleChange} /> */}
                </div>
                {/* <input type="checkbox" id="saveName"/>
                                        <label htmlFor="saveName" style={{marginLeft:5,fontSize:"16px"}}>Save my name, email, and website in this browser for the next time I comment.</label> */}

                <label
                  className={styles.check_container}
                  style={{ fontSize: "16px" }}
                >
                  Save my name, email, and website in this browser for the next
                  time I comment.
                  <input type="checkbox" />
                  <span className={styles.checkmark}></span>
                </label>

                <div className={styles.webOnly} style={{ marginTop: 80 }}>
                  <Button
                    value="Post a comment"
                    backgroundColor="#D5AF32"
                    color="#192B3A"
                    width="278px"
                    height="70px"
                    src="/images/LarrowB.svg"
                    style={{ border: "2px solid black", fontSize: "16px" }}
                    arrowH={20}
                    arrowW={12}
                  />
                </div>
                <div
                  className={styles.mobOnly}
                  style={{ marginTop: 40, marginBottom: 30 }}
                >
                  <Button
                    value="Post a comment"
                    backgroundColor="#D5AF32"
                    color="#192B3A"
                    width="208px"
                    height="40px"
                    src="/images/LarrowB.svg"
                    style={{ border: "2px solid black", fontSize: "16px" }}
                    arrowH={20}
                    arrowW={12}
                  />
                </div>
              </form>
              {/* <ToastContainer
                                    autoClose={3000}
                                    duration={300}
                                    className="toast-container"
                                    hideProgressBar={true}
                                /> */}
            </div>
          </div>
        </div>
        <div className={styles.news_blog2_R} data-aos="fade-left">
         {SlicedData?.length>0?<div className={styles.news_blog2_R_sub}>
            <div className={styles.recent}>Recent Post</div>
            <div className={styles.seeAll}>
              <Link href={seeAllLinkText?`/news-and-blogs/?categories=${seeAllLinkText}`:`/news-and-blogs/?categories=`}>See All</Link>
            </div>
          </div>:null}
          <div className={styles.allPosts}>
          {SlicedData?.map((post, index) => {
            return (
              <Link href={`/news-and-blogs/${post?.node?.slug}`} passHref key={index}>
                <div className={styles.postWrap}>

                  <div className={styles.postThumbnail}>
                  <Image
                      src={`${post?.node?.featuredImage?.node?.sourceUrl?post?.node?.featuredImage?.node?.sourceUrl:'/images/defaultThumbnail.png'}`}
                      style={{
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10PX",
                      }}
                      alt=""
                     objectFit="cover"
                     layout="fill"
                    />
                  </div>
                  <div className={styles.post_content}>
                    <div className={styles.post_date}>
                      {dayjs(post?.node?.date).format("MMMM DD, YYYY")||' '} <span>{post.reading_duration}</span>
                    </div>

                    <div className={styles.post_title}>{post?.node?.title}</div>
                    <div className={styles.read_more}>
                      Read More{" "}
                      <span className={styles.read_arrow}>
                        <Image
                          src="/images/LarrowY.svg"
                          alt=""
                          width="15"
                          height="15"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
</div>
          <LetsConnect />
          {typeof window !== "undefined" && (
            <div className={styles.shareIcons2}>
              <div className={styles.share}>Share</div>
              <div className={styles.social}>
                <div className={styles.icon}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={
                      "https://www.facebook.com/share.php?u=" +
                      window.location.href
                    }
                  >
                    <Image
                      src="/images/facebook_icon.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
                <div className={styles.icon}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={
                      "https://twitter.com/share?text=Im Sharing on Twitter&url=" +
                      window.location.href
                    }
                  >
                    <Image
                      src="/images/twitterB.svg"
                      alt=""
                      width={30}
                      height={24.7}
                    />
                  </a>
                </div>
                <div className={styles.icon}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={
                      "https://www.linkedin.com/sharing/share-offsite/?url=" +
                      window.location.href
                    }
                  >
                    <Image
                      src="/images/linkedinB.svg"
                      alt=""
                      width={30}
                      height={28}
                    />
                  </a>
                </div>
                {/* <div className={styles.icon}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={
                      "https://www.facebook.com/share.php?u=" +
                      window.location.href
                    }
                  >
                    <Image
                      src="/images/instaB.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </a>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <ToastContainer
        autoClose={3000}
        duration={300}
        className="toast-container"
        hideProgressBar={true}
      /> */}
    </Container>
  );
}

export default News_and_Blogs_section;
