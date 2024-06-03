import React from 'react'
import Head from 'next/head'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2";
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar"

import Banner2 from "../components/Accounting&Bookkeeping/Accounting_Banner2"
import AccountingService from "../components/Accounting&Bookkeeping/Accounting_service"
import ServicesHighlight from '../components/Accounting&Bookkeeping/acc_services'

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import VideoSection from "../components/VideoGallery"
import gqlRequest from "../utilities/graphql"
function accounting_service(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Top Rated Accounting Firm | Accounting Services in Abu Dhabi, Dubai, UAE - MS</title>
        <meta name="description" content="MS is the top accounting firm in Abu Dhabi, Dubai, UAE. We offer a wide range of services, including bookkeeping services, payroll services, and audit services. Contact us" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Top Rated Accounting Firm | Accounting Services in Abu Dhabi, Dubai, UAE - MS" />
        <meta property="og:description" content="MS is the top accounting firm in Abu Dhabi, Dubai, UAE. We offer a wide range of services, including bookkeeping services, payroll services, and audit services. Contact us" />
        <meta property="og:url" content="https://ms-ca.com/accounting-services" />
        <meta property="og:site_name" content="MS" />
        <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
        <meta property="article:modified_time" content="2022-04-29T10:56:52+00:00" />
        <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minutes" />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://ms-ca.com/accounting-services" />
      </Head>
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container_Blue}>
        <Banner heading={<>Accounting Services in<br /> Abu Dhabi & Dubai, UAE</>}
          detail="Our range of Accounting services in Abu Dhabi includes Accounting and Bookkeeping services, Payroll Services, Audit Services and much more!"
          height="428" white={true} />
      </div>
      <div className={styles.MenuBar}>
        <MenuBar />
      </div>
      <Banner2 />
      <div className={styles.AccountingServiceWrap}>
        <AccountingService />
      </div>

      {/* <div className={styles.Accounting_services_pointsWrap}>
      <Accounting_services_points />
       </div>  */}

      <div className={styles.marginTp}>
        <VideoSection smartupPosts={props.smartupVideo} service="Accounting" />
      </div>

      
      <div className={styles.marginTp}>
        <Section2 service="Accounting services" />
      </div>

      <ServicesHighlight />

      <Section3 categorySlug="accounting" />

      <div className={Hstyles.footer}>
        <Footer />
      </div>
    </div>


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

export default accounting_service