import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mstyle from "../Accounting&Bookkeeping/Styles.module.css";
import styles from "./News2.module.css";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { data } from "../../data/blogs_data";
import { category_data } from "../../data/blogs_data";
import Image from "next/image";
import Link from "next/link";
import Container from "../Common/Container";
import Button from "../ButtonYellowForm";
import LetsConnect from "../Home/LetsConnectNews";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import readTime from "../../utilities/readTime";
import gqlRequest from "../../utilities/graphql";
import dayjs from "dayjs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useWindowSize } from "@uidotdev/usehooks";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import Guidance from '../Accounting&Bookkeeping/Guidence'
import Connect from '../Accounting&Bookkeeping/Connect_hom'
function News_BlogsNew({ current_post }) {
  const screen = useWindowSize();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerPadding: "50px",
    slidesToScroll: 1,
    cssEase: 'linear',
    // dots: true,
    loop: false,
    arrow: false,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
          // autoplay: true,
          speed: 500,
          dots:true
        },
      },
    ],
  };
  console.log("current_post:", current_post);
  const postCategories = useRef();
  const recentPostsCount = useRef(0);
  const [SlicedData, setSlicedData] = useState([]);
  const sliderRef = React.useRef(null);
  const [seeAllLinkText, setSeeAllLinkText] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);
  useEffect(() => {
    postCategories.current = current_post?.categories?.edges?.map((cat) => {
      return cat?.node?.id;
    });
    getTwoRecentPost();
  }, []);
  useEffect(() => {
    try {
      let parsed = JSON.stringify(
        current_post?.categories?.edges?.map((cat) => {
          return cat?.node?.id;
        })
      );
      setSeeAllLinkText(parsed);
    } catch (err) {
      console.log("Stringify error");
    }
  }, []);
  const getTwoRecentPost = async () => {
    const response = await gqlRequest({
      operationName: "GetPosts",
      query: `query GetPosts($first:Int,$excludePostId:ID,$categorys:[ID]) {
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
      variables: {
        first: 5,
        excludePostId: current_post?.id,
        categorys: postCategories?.current || null,
      },
    });
    console.log("recent response in page", response);
    if (response.success === true) {
      // setFilteredList(response.data.posts)
      console.log("edges in posts", response.data.posts.edges);
      setSlicedData(response.data.posts.edges);
      recentPostsCount.current = response.data.posts.edges.length;
    }
  };

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  console.log(SlicedData);

  return (
    <div>
    <Container>
      <div className={styles.breadcrumbcontainer}>

       <span className={styles.breadcrumbItems}><p>Home</p><RiArrowRightSLine /><p>Blog</p><RiArrowRightSLine /><p>Mergers & Acquisition</p><RiArrowRightSLine /><p style={{fontSize:"13px"}} dangerouslySetInnerHTML={{ __html: current_post?.title }}></p></span>
      </div>
      <div className={styles.newsdetailcontainer}>
        <div
          className={styles.news_detail_innercontainer}
          data-aos="fade-right"
        >
           <div
            className={styles.post_title2}
            dangerouslySetInnerHTML={{ __html: current_post?.title }}
          ></div>
          <div className={styles.news_detail_header}>
            {/* <div className={styles.post_cty}>
              CATEGORY : 
              <span className={styles.categoryListingWrap}>
                {current_post?.categories?.edges?.map((it,index)=>
                <span key={`${index}-${Date.now()}`}>
                  <Link href={it?.node?.id?`/news-and-blogs/?categories=["${it?.node?.id}"]`:`/news-and-blogs`}>{it?.node?.name}</Link>
                  </span>
                )}
                </span>
            </div> */}
            <div className={styles.post_date}>
              <span
                className={styles.post_date_only}
                style={{ color: "#515151" }}
              >
                {dayjs(current_post?.date).format("MMMM DD, YYYY") || " "}{" "}
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <span style={{ color: "#000000" }}>MS BLOG</span>
              </span>
              {/* <span className={styles.post_readTime}>{`${
                readTime(current_post?.content) || " "
              } mins read`}</span> */}
            </div>
          </div>

        

          <div className={styles.blogDataWrap}>
            <Image
              src={
                current_post?.featuredImage?.node?.sourceUrl
                  ? current_post?.featuredImage?.node?.sourceUrl
                  : "/images/defaultThumbnail.png"
              }
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
              className={styles.newspost_details}
              dangerouslySetInnerHTML={{ __html: current_post?.content }}
            ></div>
          </div>
          <div className={styles.news_sharebtn}>
            <div>
             
            </div>
            <div>Share on</div>
            <div className={styles.newsicons}>
              <div className={styles.news_socialicons}>
                {" "}
                <Image src={"/images/newsfb.svg"} layout="fill" />
              </div>
              <div className={styles.news_socialicons}>
                {" "}
                <Image src={"/images/newstwitter.svg"} layout="fill" />
              </div>
              <div className={styles.news_socialicons}>
                {" "}
                <Image src={"/images/newslinked.svg"} layout="fill" />
              </div>
              <div className={styles.news_socialicons}>
                {" "}
                <Image src={"/images/newsyoutube.svg"} layout="fill" />
              </div>
              <div className={styles.news_socialicons}>
                {" "}
                <Image src={"/images/newsinsta.svg"} layout="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Guidance/>
      {/* recent post */}
      <div style={{ position: "relative",marginBottom:"70px",marginTop:"80px" }}>
        <div className={styles.recentblogarrows}>
          <div className={styles.recentblogtitle}>Recent Blogs</div>
          <div className={styles.sliderbtn_wrapper}><button onClick={previous} className={styles.newsblogbtn}><IoMdArrowDropleft style={{fontSize:"30px"}}/></button>
          <button onClick={next} className={styles.newsblogbtn}> <IoMdArrowDropright style={{fontSize:"30px"}}/></button></div>
        </div>

        <div className={styles.recentblog_wrapper}>
          <Slider
            {...settings}
            key={JSON.stringify(SlicedData)}
            ref={sliderRef}
          >
            {SlicedData?.map((post, index) => {
              return (
              
                <div className={styles.singlerecentpost} key={post.node?.id}>
                <Link href={`/news-and-blogsnew/${post?.node?.slug}`} passHref >
                  <div className={styles.recent_postimage}>
                    <Image
                      src={post?.node?.featuredImage?.node?.sourceUrl}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  </Link>
                  <Link href={`/news-and-blogsnew/${post?.node?.slug}`} passHref >
                  <div className={styles.recentBlogcontent}>
                    <span style={{ color: "#515151",fontSize:"14px" }}>{dayjs(post?.node?.date).format('MMMM DD, YYYY')}<span style={{fontWeight:"500", color:"black"}}>&nbsp;&nbsp;| &nbsp;&nbsp;MS BLOG</span> </span>
                    <p>
                      {post?.node?.title && post.node.title.length > 75
                        ? `${post.node.title.slice(0, 75)}...`
                        : post.node.title}{" "}
                    </p>
                   <div style={{display:"flex",alignItems:"center",gap:"17px"}}> <p style={{fontWeight:400,color:"#212120"}}>Read More </p><IoIosArrowForward style={{color:"#212120",fontWeight:"600",fontSize:"18px"}}/></div>
                  </div>
                  </Link>
                </div>
               
              );
            })}
          </Slider>
        </div>
      </div>
    </Container>
    <Connect/>
    </div>
  );
}

export default News_BlogsNew;
const CustomPrevArrow = (props) => {
  const { onClick, className } = props;
  return (
    <div
      onClick={onClick}
      style={{
        ...props.style,
        width: "50px",
        height: "50px",
        background: "green",
        position: "absolute",
      }}
    >
      <IoMdArrowDropleft />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick, className } = props;
  return (
    <div onClick={onClick} style={{ ...props.style }}>
      <IoMdArrowDropright />
    </div>
  );
};
export { CustomPrevArrow, CustomNextArrow };
