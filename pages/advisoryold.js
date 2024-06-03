import React from 'react'
import styles from '../styles/Advisory.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2";
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar10"
import Banner2 from "../components/Accounting&Bookkeeping/Advisory_Banner";
import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";
import Services from "../components/Accounting&Bookkeeping/Adv_services";

import VideoSection from "../components/VideoGallery"
import gqlRequest from "../utilities/graphql"

function enterprise(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Advisory Services in Abu Dhabi, Dubai, UAE | Advisory Expert - MS</title>
        <meta name="description" content="MS provides expert advisory services in Abu Dhabi, Dubai, UAE to companies seeking help with their business. Our aim is to assist you with proper consultation to grow your business." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Advisory Services in Abu Dhabi, Dubai, UAE | Advisory Expert - MS" />
        <meta property="og:description" content="MS provides expert advisory services in Abu Dhabi, Dubai, UAE to companies seeking help with their business. Our aim is to assist you with proper consultation to grow your business." />
        <meta property="og:url" content="https://ms-ca.com/advisory" />
        <meta property="og:site_name" content="MS" />
        <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
        <meta property="article:modified_time" content="2022-04-29T10:55:31+00:00" />
        <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://ms-ca.com/advisory" />
      </Head>
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container_Adv}>
        <Banner heading="Advisory"

          height="428" white={true} />
      </div>
      <div className={styles.MenuBar}>
        <MenuBar />
      </div>
      <Banner2 />


      <div className={styles.marginVG}>
        <VideoSection smartupPosts={props.smartupVideo} service="Advisory" />
      </div>
      
      <Section2 service="Advisory" />



      <div className={styles.marginBtm}>
        <Services />
      </div>

      <Section3 categorySlug="advisory" />


      <div className={Hstyles.footer}>
        <Footer />
      </div>
    </div >
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const response1 = await gqlRequest({
    "operationName": "getVideos",
    "query": `query getVideos{
        videos {
          edges {
            node {
              title
              content
              featuredImage {
                node {
                  sourceUrl
                }
              }
              videocategories {
                edges {
                  node {
                    name
                    slug
                  }
                }
              }
            }
          }
        }
      
        }`,
    "variables": {}
  })
  console.log("response1", response1);
  // const response2 = await gqlRequest({
  //     "operationName": "getVideoCategories",
  //     "query": `query getVideoCategories{
  //       videocategories{
  //           edges{
  //             node{
  //               id
  //               slug
  //               name
  //             }
  //           }
  //         }
  //       }`,
  //     "variables": {}
  //   })
  // console.log("response2", response2);

  return { props: { smartupVideo: response1?.data?.videos?.edges } };
}

export default enterprise