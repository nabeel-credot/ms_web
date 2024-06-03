import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../../styles/SmartUp.module.css";
import Hstyles from "../../styles/Home.module.css";
//components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Accounting&Bookkeeping/Common_BannerNews";
import Slider from "../../components/Home/Slider";
import Section from "../../components/Accounting&Bookkeeping/News&Blogs_section2";

import { useRouter } from "next/router";
import { data } from "../../data/blogs_data";
import gqlRequest from "../../utilities/graphql";
function Job_Vacancy(props) {
  const router = useRouter();
  const id = router?.query?.id;

  // var current_post = data?.filter((emp) => emp.id == id).map((obj) => obj);

  return (
    <div className={styles.container}>
      <Head>
        <title>News & Blogs - MS</title>
        <meta name="description" content="News & Blogs - MS" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.current_post.title} />
            <meta property="og:description"content="News & Blogs - MS"  />
            <meta property="og:image" content={props.current_post.featuredImage.node.sourceUrl} />
            <meta property="og:site_name" content="MS-CA" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/MSGroupUAE/"
        />
        <meta
          property="article:modified_time"
          content="2022-09-14T07:30:52+00:00"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="19 minutes" />
      </Head>
      <Navbar
        color="#FFFFFF"
        hoverClr="#D4AE31"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
      />
      <div className={styles.banner_container_contact}>
        <Banner />
      </div>

      <Section current_post={props.current_post} />

      <div className={Hstyles.footer}>
        <Footer />
      </div>
    </div>
  );
}
// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.params;
  console.log("params", id);
  const response = await gqlRequest({
    operationName: "getDynamicPost",
    query: `query getDynamicPost($id:ID!){
      post(id:$id,idType:SLUG){
        id
       title
        content
        slug
        date
        categories{
          edges{
            node{
              name
              id
            }
          }
        }
        featuredImage{
        node{
          sourceUrl
        }
        }
      }
    }`,
    variables: { id: id },
  });
  console.log("response", response);
  if (response.success === false) {
    return { notFound: true };
  }
  if(response.success===true)
  {
    if(!response.data.post)
    {
      return { notFound: true };
    }
  }
  return { props: { current_post: response?.data?.post } };
}
export default Job_Vacancy;
