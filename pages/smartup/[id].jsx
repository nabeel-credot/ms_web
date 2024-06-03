import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../../styles/SmartUp.module.css";
import Hstyles from "../../styles/Home.module.css";
//components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Accounting&Bookkeeping/Common_BannerNews_Smartup_Blog";
import Slider from "../../components/Home/Slider";
import Section from "../../components/Accounting&Bookkeeping/smartup_blogs_section2";

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
      smartup(id:$id,idType:SLUG){
        id
       title
        content
        slug
        date
        smartupCategories{
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
    if(!response.data.smartup)
    {
      return { notFound: true };
    }
  }
  return { props: { current_post: response?.data?.smartup } };
}
export default Job_Vacancy;
