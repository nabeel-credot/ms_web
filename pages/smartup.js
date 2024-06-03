import React from 'react'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner_Smartup"
import Slider from "../components/Home/Slider"
import Section from "../components/Accounting&Bookkeeping/smartup_blogs"
import Footer from "../components/Footer"
import gqlRequest from "../utilities/graphql"
function Smartup(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>News & Blogs - MS</title>
                <meta name="description" content="News & Blogs - MS" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_contact}>
                <Banner />
            </div>
           
            <div className={styles.whiteBg}>
                {/* <div className={styles.blueBgWrap}> */}
                    <Section smartupPosts={props.smartupPosts} smartupCategories={props.smartupCategories}/>
                {/* </div> */}
            </div>


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
        "operationName": "getSmartupPosts",
        "query": `query getSmartupPosts {
            smartups {
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
                  smartupCategories{
                    edges
                    {
                      node{
                        name,
                        id
                      }
                    }
                  }
                }
              }
              pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
              }
            }
          }`,
        "variables": {}
      })
    console.log("response1", response1);
    const response2 = await gqlRequest({
        "operationName": "getSmartupCategories",
        "query": `query getSmartupCategories{
            smartupCategories{
              edges{
                node{
                  id
                  slug
                  name
                }
              }
            }
          }`,
        "variables": {}
      })
    console.log("response2", response2);
    
    return { props: { smartupPosts: response1?.data?.smartups,smartupCategories: response2?.data?.smartupCategories } };
  }
export default Smartup