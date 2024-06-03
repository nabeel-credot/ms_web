import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./News.module.css";
import fstyles from "../Footer.module.css";
import { data } from "../../data/blogs_data";

import Image from "next/image";
import Link from "next/link";
import Container from "../Common/Container";
import readTime from "../../utilities/readTime";
import gqlRequest from "../../utilities/graphql";
import dayjs from "dayjs";
function Latest_section(props) {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

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
        // setFilteredList(response.data.posts)
        // console.log("category detail", response.data.category)
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
        variables: { first: 3, categoryId: categoryData.current || null },
      });
      console.log("recent response in page", response);
      if (response.success === true) {
        // setFilteredList(response.data.posts)
        // console.log("edges in posts", response.data.posts.edges)
        setSlicedData(response.data.posts.edges);
      }
    };
    //fetch category details
    getCategoryDetail().then(() => {
      //fetch latest posts related to the category given in props
      getRecentPosts();
    });
  }, [props.categorySlug]);

  const filteredData = data?.sort(function (a, b) {
    return b.id - a.id;
  });

  const categoryData = useRef(null);
  const [slicedData, setSlicedData] = useState([]);
  return (
    <Container>
      {slicedData?.length > 0 ? (
        <div className={styles.news_blog_containerL} data-aos="fade-up">
          <div className={styles.displayFlex}>
            <div className={styles.black36_heading}>Latest Insights</div>
            <div className={styles.black24_heading + " " + styles.viewAll}>
              <Link
                href={
                  categoryData.current
                    ? `/news-and-blogs?categories=["${categoryData.current}"]`
                    : `/news-and-blogs`
                }
              >
                View all
              </Link>
              <span className={styles.read_arrow}>
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width="15"
                  height="15"
                />
              </span>
            </div>
          </div>

          <div className={styles.news_blog_R_Latest}>
            {slicedData?.map((post, index) => {
              return (
                <Link
                  href={`/news-and-blogs/${post?.node?.slug}`}
                  passHref
                  key={index}
                >
                  <div className={styles.postWrap2}>
                    <div className={styles.postThumbnail}>
                      {/* <Image src={post?.node?.featuredImage?.node?.sourceUrl?post?.node?.featuredImage?.node?.sourceUrl:'/images/defaultThumbnail.png'} style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10PX" }} alt="" width="414" height="263" /> */}
                      <Image
                        src={
                          post?.node?.featuredImage?.node?.sourceUrl
                            ? post?.node?.featuredImage?.node?.sourceUrl
                            : "/images/defaultThumbnail.png"
                        }
                        style={{
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10PX",
                        }}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className={styles.post_content}>
                      <div className={styles.post_date}>
                        {dayjs(post?.node?.date).format("MMMM DD, YYYY") || " "}{" "}
                        <span>
                          {`${readTime(post?.node?.content) || "1"} mins read`}
                        </span>
                      </div>
                      <div className={styles.post_title}>
                        {post?.node?.title}
                      </div>
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
        </div>
      ) : null}
    </Container>
  );
}

export default Latest_section;
