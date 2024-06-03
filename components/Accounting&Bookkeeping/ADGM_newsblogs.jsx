import React, { useEffect, useRef, useState } from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Link from "next/link";
import readTime from "../../utilities/readTime";
import gqlRequest from "../../utilities/graphql";
import dayjs from "dayjs";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { useWindowSize } from "@uidotdev/usehooks";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
function ADGM_newsblogs(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const sliderRef = React.useRef(null);
  console.log(props);
  const screen = useWindowSize();
  useEffect(() => {
    const getCategoryDetail = async () => {
      const response = await gqlRequest({
        operationName: "getCategoryDetail",
        query: `query getCategoryDetail($slugName:ID!){
                    category(id:$slugName, idType:SLUG){
                    name
                    id
                    }
                }`,
        variables: { slugName: props?.categorySlug || null },
      });
      console.log("recent response in category details", response);
      if (response.success === true) {
        if (response?.data?.category?.id) {
          categoryData.current = response?.data?.category?.id;
        }
      }
    };
    const getRecentPosts = async () => {
      const response = await gqlRequest({
        operationName: "getRecentPosts",
        query: `query getRecentPosts($first:Int,$categoryId:[ID]) {
                  posts (first:$first,where:{categoryIn:$categoryId}){
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
        variables: { categoryId: categoryData.current || null },
      });
      console.log("recent response in page", response);
      if (response.success === true) {
        setSlicedData(response.data.posts.edges);
      }
    };
    //fetch category details
    getCategoryDetail().then(() => {
      //fetch latest posts related to the category given in props
      getRecentPosts();
    });
  }, [props.categorySlug]);

  const categoryData = useRef(null);
  const [slicedData, setSlicedData] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (step) => {
    const newIndex = (currentIndex + step + slicedData.length) % slicedData.length;
    setCurrentIndex(newIndex);
};

 
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < slicedData.length - 1;

  const sliceSize = 1;

  const handleNextClick = () => {
    if (currentIndex < slicedData.length - sliceSize) {
      setCurrentIndex(currentIndex + sliceSize);
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - sliceSize);
    }
  };
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  // const currentData = data.slice(currentIndex, currentIndex + sliceSize);
  
  return (
    <Container>
      {slicedData?.length > 0 && (
        <>
          <div className={styles.news_titleWrap}>
            <div className={styles.servicenewTitle} data-aos="fade-right" >Latest Insights</div>
            <div className={styles.sliderbtn_wrapper1} data-aos="fade-left" ><button onClick={previous} className={styles.test_circle}><MdArrowLeft style={{fontSize:"30px"}}/></button>
          <button onClick={next} className={styles.test_circle}> <MdArrowRight style={{fontSize:"30px"}}/></button></div>
            <div className={styles.news_slider}>
              {screen.width <= 600
                ? slicedData?.length > 1 && (
                    <>
                      <div data-aos="fade-left" 
                        className={styles.test_circle}
                        onClick={() => handleChange(-1)}
                      >
                        <MdArrowLeft style={{ fontSize: "30px" }} />
                      </div>
                      <div data-aos="fade-left" 
                        className={styles.test_circle}
                        onClick={() => handleChange(1)}
                      >
                        <MdArrowRight style={{ fontSize: "30px" }} />
                      </div>
                    </>
                  )
                : slicedData?.length > 3 && (null
                    // <>
                    //   <div
                    //     className={styles.test_circle}
                    //     onClick={() => handlePreviousClick()}
                    //   >
                    //     <MdArrowLeft />
                    //   </div>
                    //   <div
                    //     className={styles.test_circle}
                    //     onClick={() => handleNextClick()}
                    //   >
                    //     <MdArrowRight />
                    //   </div>
                    // </>
                  )}
            </div>
          </div>
          <div className={styles.newsAdgm}>
            {screen.width <= 600 ? ( // Check for mobile screen size
              <div className={styles.newscard} key={currentIndex}>
                <img
                  src={
                    slicedData[currentIndex]?.node?.featuredImage?.node
                      ?.sourceUrl
                      ? slicedData[currentIndex]?.node?.featuredImage?.node
                          ?.sourceUrl
                      : "/images/defaultThumbnail.png"
                  }
                  alt="news and blogs"
                />
                <div className={styles.newscardcontent}>
                  <p className={styles.newsdate}>
                    {dayjs(slicedData[currentIndex]?.node?.date).format(
                      "DD MMMM YYYY"
                    ) || " "}
                  </p>
                  <p className={styles.newsTitle}>
                    {slicedData[currentIndex]?.node?.title &&
                    slicedData[currentIndex]?.node.title.length > 55
                      ? `${slicedData[currentIndex]?.node.title.slice(
                          0,
                          55
                        )}...`
                      : slicedData[currentIndex]?.node.title}
                  </p>
                  <Link
                    href={`/news-and-blogs/${slicedData[currentIndex]?.node?.slug}`}
                    passHref
                  >
                    <button className={styles.newsreadmore}>Read More</button>
                  </Link>
                </div>
              </div>
            ) : (
              // Display 3 cards for web
              // slicedData.slice(currentIndex, currentIndex + sliceSize).map((post, index) => (
              //   <div className={styles.newscard} key={index}>
              //     <img
              //       src={
              //         post?.node?.featuredImage?.node?.sourceUrl
              //           ? post?.node?.featuredImage?.node?.sourceUrl
              //           : "/images/defaultThumbnail.png"
              //       }
              //     />
              //     <div className={styles.newscardcontent}>
              //       <p className={styles.newsdate}>
              //         {dayjs(post?.node?.date).format("DD MMMM YYYY") || " "}
              //       </p>
              //       <p className={styles.newsTitle}>
              //         {post?.node?.title && post.node.title.length > 75
              //           ? `${post.node.title.slice(0, 75)}...`
              //           : post.node.title}
              //       </p>
              //       <Link href={`/news-and-blogs/${post?.node?.slug}`} passHref>
              //         <button className={styles.newsreadmore}>Read More</button>
              //       </Link>
              //     </div>
              //   </div>
              // ))
              
              <Slider {...settings}   ref={sliderRef} style={{maxHeight:"516px"}}>
               { slicedData.map((post,index)=>{
                return(
<div className={styles.newscard} key={index} data-aos="fade-up" >
                   <img
                     src={
                       post?.node?.featuredImage?.node?.sourceUrl
                         ? post?.node?.featuredImage?.node?.sourceUrl
                         : "/images/defaultThumbnail.png"
                     }
                     alt="news and blogs"
                   />
                   <div className={styles.newscardcontent}>
                     <p className={styles.newsdate}>
                       {dayjs(post?.node?.date).format("DD MMMM YYYY") || " "}
                     </p>
                     <p className={styles.newsTitle}>
                       {post?.node?.title && post.node.title.length > 75
                         ? `${post.node.title.slice(0, 75)}...`
                         : post.node.title}
                     </p>
                     <Link href={`/news-and-blogs/${post?.node?.slug}`} passHref>
                     <button className={styles.newsreadmore}>Read More</button>
                     </Link>
                   </div>
                 </div>
                )
               })}
                </Slider>
            )
            } 
          </div>
        </>
      )}
    </Container>
  );
}

export default ADGM_newsblogs;
