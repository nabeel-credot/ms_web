import React,{ useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar2"
import Banner2 from "../components/Accounting&Bookkeeping/Taxation_Banner"
import Taxation_service from "../components/Accounting&Bookkeeping/Taxation_service"
import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";
import TaxServicesHighlight from '../components/Accounting&Bookkeeping/tax_services'
import VideoSection from "../components/VideoGallery"
import Footer from "../components/Footer"
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import gqlRequest from "../utilities/graphql"

function Taxation(props) {
  const router=useRouter();
  const [initialpopup, setInitialPopup] = useState(true);
  // const closepopup = () => {
  //   setInitialPopup(false);
  // };
  return (
    <div className={styles.container}>
       {/* {initialpopup && (
        <div className={styles.popup_div}>
          <div className={styles.popup_container}>
            <div className={styles.popup_head2}>
              <div className={styles.popup_close}>
                <Image
                  src="/images/popupclose.svg"
                  layout="fill"
                  onClick={closepopup}
                />
              </div>

              <div className={styles.popup_img}>
                <Image src="/images/clock.svg" layout="fill" />
              </div>
              <h3 className={styles.popup_bg_title}>The Clock is Ticking!</h3>
              <span className={styles.popesr} style={{ maxWidth: "300px" }}>
                Submit your ESR Notification <br />
                before June 30!
              </span>
            </div>
            <div className={styles.popup_content}>
              <p>
                The Economic Substance Regulations (ESR) require businesses to
                submit their ESR Notification by June 30th to demonstrate
                compliance with UAE regulations. Don&apos;t miss this crucial
                deadline and ensure your business meets the requirements.
              </p>
              <div className={styles.popup_button_div}>
                
                  <button className={styles.popup_button}onClick={()=>router.push("/economic-substance-regulations")}>Submit Now</button>
                
               <button className={styles.popup_button} onClick={()=>router.push("/contact")}>
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
      <Head>
        <title>Expert Tax Consultancy Services | Tax Consultants in Abu Dhabi, Dubai, UAE - MS</title>
        <meta name="description" content="Looking for expert tax consultants in UAE? Look no further than MS. We provide taxation consultancy services to businesses and companies in Abu Dhabi, Dubai, UAE" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Expert Tax Consultancy Services | Tax Consultants in Abu Dhabi, Dubai, UAE - MS" />
        <meta property="og:description" content="Looking for expert tax consultants in UAE? Look no further than MS. We provide taxation consultancy services to businesses and companies in Abu Dhabi, Dubai, UAE" />
        <meta property="og:url" content="https://ms-ca.com/taxation" />
        <meta property="og:site_name" content="MS" />
        <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
        <meta property="article:modified_time" content="2022-04-29T11:07:12+00:00" />
        <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="19 minutes" />
        <link rel="canonical" href="https://ms-ca.com/taxation" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container_Blue}>
        <Banner heading={<>Taxation</>}
          detail="MS’ian Approach to TAX; unique and unfindable elsewhere"
          height="428" white={true} />
      </div>

      <div className={styles.MenuBar}>
        <MenuBar />
      </div>
      <Banner2 />
      <div className={styles.AccountingServiceWrap}>
        <Taxation_service />
      </div>

      <div className={styles.marginTp}>
      <VideoSection smartupPosts={props.smartupVideo} smartupCategories={props.smartupCategories} service="Taxation"/> 
            </div>
      <div className={styles.marginTp}>
        <Section2 service="Taxation" />
      </div>


      <TaxServicesHighlight />
   
  

      <Section3 categorySlug="taxes" />


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
  
  return { props: {smartupVideo: response1?.data?.videos?.edges} };
}

export default Taxation