import React from 'react'
import Head from 'next/head'
import styles from '../../styles/SmartUp.module.css'
import Hstyles from '../../styles/Home.module.css'
//components
import Navbar from "../../components/Navbar"
// import Banner from "../../components/Accounting&Bookkeeping/Job_Banner"
import Banner from "../../components/Accounting&Bookkeeping/Common_Banner2"
import Banner2 from "../../components/Accounting&Bookkeeping/Work_Banner"

import Footer from "../../components/Footer"
// import Section from "../../components/Accounting&Bookkeeping/Job_Vacancy_section"
import Section2 from "../../components/Accounting&Bookkeeping/Blue_Lets_talk";
import { useRouter } from 'next/router'
import { data } from "../../data/job_vacancy_data"
import gqlRequest from "../../utilities/graphql";
function Job_Vacancy(props) {
    const router = useRouter()
    const id = router?.query?.id

    let current_post = props?.current_post
console.log("post",props,current_post)
    return (
        <div className={styles.container}>
            <Head>
                <title>Careers - MS</title>
                <meta name="description" content="Careers - MS" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Careers - MS" />
                <meta property="og:url" content="https://ms-ca.com/careers" />
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
                <link rel="canonical" href="https://ms-ca.com/careers" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            {/* <Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" /> */}
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            {/* <div className={styles.banner_container_work}>
                <Banner current_post={current_post}/>
            </div> */}

            <div className={styles.banner_container_Work}>
                <Banner heading="Careers"

                    height="428" white={true} />
            </div>
            <Banner2 current_post={current_post}/>
            <div className={styles.marginBt}>
            <Section2 />
            </div>
            {/* <div className={styles.Job_Vacancy_container}>
                <Section current_post={current_post} />
            </div> */}
            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}


// This gets called on every request
export async function getServerSideProps(context) {
    // Fetch data from external API
    const { id } = context.params;
    console.log("params", id);
    const response = await gqlRequest({
      operationName: "getDynamicPost",
      query: `query getDynamicPost($id:ID!){
        vacancy(id:$id,idType:SLUG){
          id
         title
          content
          slug
          date
          }
        }
      `,
      variables: { id: id },
    });
    console.log("response", response);
    if (response.success === false) {
      return { notFound: true };
    }
    if(response.success===true)
    {
      if(!response.data.vacancy)
      {
        return { notFound: true };
      }
    }
    return { props: { current_post: response?.data?.vacancy } };
  }

export default Job_Vacancy