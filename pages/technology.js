import React, { useState } from 'react'
import styles from '../styles/Advisory.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2";
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar8"
import Banner2 from "../components/Accounting&Bookkeeping/Technology_Banner";
import Banner3 from "../components/Accounting&Bookkeeping/Technology_Banner2";
import Section1 from "../components/Accounting&Bookkeeping/Approach_Tech";
import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Services from "../components/Accounting&Bookkeeping/Technology_services";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";

import BookCall from '../components/Popup/Popup';
import VideoSection from "../components/VideoGallery"
import gqlRequest from "../utilities/graphql"
function RM(props) {
    const [popup, setPopup] = useState(false)

    const handleCallback = (popup) => {
        setPopup(popup)
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Technology Consulting | Technology Practice in Abu Dhabi, Dubai, UAE - MS</title>
                <meta name="description" content="Get the best technology consulting services in Abu Dhabi, Dubai, UAE with MS. Our innovative solutions help businesses achieve their goals with effectiveness. Contact us now!" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Technology Consulting | Technology Practice in Abu Dhabi, Dubai, UAE - MS" />
                <meta property="og:description" content="Get the best technology consulting services in Abu Dhabi, Dubai, UAE with MS. Our innovative solutions help businesses achieve their goals with effectiveness. Contact us now!" />
                <meta property="og:url" content="https://ms-ca.com/technology" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-04-29T10:55:31+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
                <meta property="og:image:width" content="152" />
                <meta property="og:image:height" content="152" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <link rel="canonical" href="https://ms-ca.com/technology" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_Tech}>
                <Banner heading="Technology"

                />
            </div>
            <div className={styles.MenuBar}>
                <MenuBar />
            </div>
            <Banner2 />
            <Banner3 parentCallback={handleCallback} />

            <div className={styles.blueBgWrap}>
                <Section1 />
            </div>

            <div className={styles.marginVG2}>
                <VideoSection smartupPosts={props.smartupVideo} service="Technology" />
            </div>


            <div className={styles.marginTp}>
                <Section2 service="Technology" />
            </div>

            <Services />

            <div className={styles.marginTpW}>
                <Section3 categorySlug="technology" />
            </div>




            <div className={Hstyles.footer}>
                <Footer />
            </div>

            {popup && <BookCall onClick={() => setPopup(false)} />}
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

export default RM