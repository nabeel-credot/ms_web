import React, { useState } from "react";
import Head from "next/head";
import styles from "../../styles/SmartUp.module.css";

import Hstyles from "../../styles/Home.module.css";

//components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer copy";
// import Banner from "../components/Accounting&Bookkeeping/ADGM_bannerTop";
import Banner from "../../components/Accounting&Bookkeeping/Common_Banner2new";

import { useRouter } from "next/router";
import gqlRequest from "../../utilities/graphql";

import Appointment from "../../components/Accounting&Bookkeeping/Appointment_schedule";
import News_BlogsNew from "../../components/Accounting&Bookkeeping/News_BlogsNew";


function ADGM(props) {
  console.log(props);

  const router = useRouter();
  const id = router?.query?.id;


  // const adgmVideos = props.smartupVideo.filter(item => {
    
  //   return item.node.videocategories.edges.some(edge => edge.node.name === 'ADGM');
  // });
  // console.log(adgmVideos);
 

  const [popup, setPopup] = useState(false);
  const [initialpopup, setInitialPopup] = useState(true);
  const [appoint, setAppoint] = useState(false);
  const [state, setState] = useState(0);
  
  const slider = React.useRef(null);
  const handleNext = () => {
    console.log("click");
    if (carouselTest.length > state + 1) setState(s => s + 1);
    else setState(0);
  };

  const handlePrev = () => {
    setState((prevState) => {
      if (prevState - 1 >= 0) return prevState - 1;
      else return carouselTest.length - 1;
    });
  };

  const handleClick = (popup) => {
    setPopup(popup);
  };
 
  const closepopup = () => {
    setInitialPopup(false);
  };
  console.log(props);
  // console.log(carouselTest[state].bgimage);
  // console.log(carouselTest[state].imagePath);
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
      {/* <div className={styles.banner_container_adgm}>
                <Banner />
            </div> */}
      <div className={styles.banner_container_news_blogs}>
        <Banner
          heading={
            <div style={{ fontWeight: "400" }}>Insights</div>
          }
          height="428"
          //   white={true}
          detail="Lorem ipsum dolor sit amet consectetur. Eget magna sociis quam scelerisque sapien. In purus euismod ultrices sit enim ut. Blandit iaculis consequat cum arcu purus egestas scelerisque. Malesuada vulputate amet dictumst tortor elit sit."
        />
        {appoint && (
          <div className={styles.appointwrapper}>
            {" "}
            <Appointment appoint={appoint} setAppoint={setAppoint} />
          </div>
        )}
        <div className={styles.appointmentdiv}>
          <span
            className={styles.banner_popup}
            onClick={() => setAppoint(true)}
          >
            <img
              src="/images/appointment.svg"
              alt="appointment"
              className={styles.appointmentImage}
            />
            <span className={styles.appointhover}>
              {" "}
              Schedule your Appointment
            </span>
          </span>
        </div>
      </div>
      <div className={styles.mobAppoint}>
        <span
          className={styles.banner_popupmob}
          onClick={() => setAppoint(true)}
        >
          <img src="/images/mobAppoint.svg" alt="appointment" />
          Schedule your Appointment
        </span>
      </div>
    <div>
        <News_BlogsNew current_post={props.current_post}/>
    </div>
    
     
    
     
     
     
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

export default ADGM;
