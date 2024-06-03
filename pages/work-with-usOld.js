import React, { useState } from 'react'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import Banner2 from "../components/Accounting&Bookkeeping/Work_Banner"
import CV_upload from '../components/Popup_cv/Popup';

import Section4 from "../components/Accounting&Bookkeeping/Work_with_us_Section"

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";

import gqlRequest from "../utilities/graphql"

function Awards(props) {


  const [popup, setPopup] = useState(false)

  const handleCallback = (popup) => {
    setPopup(popup)
  }

  const [title, setTitle] = useState("")

  const handleTitle = (title) => {
    setTitle(title)
  }

  console.log("props", props, props?.vacanciesPosts?.edges)
  return (
    <div className={styles.container}>
      <Head>
        <title>Work With Us - MS</title>
        <meta name="description" content="Work With Us - MS" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Work With Us - MS" />
        <meta property="og:url" content="https://ms-ca.com/work-with-us" />
        <meta property="og:site_name" content="MS" />
        <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
        <meta property="article:modified_time" content="2022-04-29T10:52:29+00:00" />
        <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="21 minutes" />
        <link rel="canonical" href="https://ms-ca.com/work-with-us" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />

      <div className={styles.banner_container_Work}>
        <Banner heading="Work With Us"

          height="428" white={true} />
      </div>


      <div className={styles.topWhiteBg}>
        <Section4 vacanciesPosts={props?.vacanciesPosts?.edges}  parentCallback={handleCallback} parentCallback2={ handleTitle} />
      </div>

      {/* <Banner2 />

      <Section2  /> */}

      <div className={styles.marginBt}>
        <Section2 />
      </div>


      <div>
        <Section3 categorySlug="about-us" />
      </div>
      <div className={Hstyles.footer}>
        <Footer />
      </div>

      {popup && <CV_upload onClick={() => setPopup(false)} id={title} />}
    </div>
  )
}


// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const response1 = await gqlRequest({
    "operationName": "getVacanciesPosts",
    "query": `query getVacanciesPosts {
        vacancies {
          edges {
            node {
              id
              title
              databaseId
              date
              content
              desiredSlug
              slug
            }
          }
        }
        }`,
    "variables": {}
  })
  console.log("response1", response1);


  return { props: { vacanciesPosts: response1?.data?.vacancies } };
}

export default Awards