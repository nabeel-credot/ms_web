import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/SmartUp.module.css";
import Hstyles from "../styles/Home.module.css";
//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer copy";
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2new";
import BookCall from "../components/Popup/Popup";
import { useRouter } from "next/router";
import gqlRequest from "../utilities/graphql";
import ADGM_overview from "../components/Accounting&Bookkeeping/ADGM_overview";
import ADGM_FAQ_Service from "../components/Accounting&Bookkeeping/ADGM_FAQ_Service";
import ADGM_Guidence from "../components/Accounting&Bookkeeping/ADGM_Guidence";
import VideoCard from "../components/Accounting&Bookkeeping/VideoCard";
import Container from "../components/Common/Container";
import ADGM_newsblogs from "../components/Accounting&Bookkeeping/ADGM_newsblogs";
import Al_reemBanner from "../components/Accounting&Bookkeeping/Al_reemBanner";
import Adgm_benefits from "../components/Accounting&Bookkeeping/Adgm_benefits";
import Opportunity_abudhabi from "../components/Accounting&Bookkeeping/Opportunity_abudhabi";
import ADGM_newservice from "../components/Accounting&Bookkeeping/ADGM_newservice";
import Testimonial from "../components/Accounting&Bookkeeping/Testimonial";
import Appointment from "../components/Accounting&Bookkeeping/Appointment_schedule";
import Alreem_yMs from "../components/Accounting&Bookkeeping/Alreem_yMs";
import Videotestimonial from "../components/Accounting&Bookkeeping/Videotestimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ADGM(props) {
  console.log(props);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerPadding: '250px',
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '50px',

        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '50px',

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '50px',

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px"

        }
      }
    ]
  }


  const adgmVideos = props.smartupVideo.filter(item => {
    
    return item.node.videocategories.edges.some(edge => edge.node.name === 'ADGM');
  });
  console.log(adgmVideos);
  const carouselTest = adgmVideos.map((item, index) => {
   
    const stripHtmlTags = (html) => {
      return html.replace(/(<([^>]+)>)/gi, "");
    };
  
    return {
      key: index,
      imagePath: item?.node?.title,
      title: stripHtmlTags(item?.node?.content),
      bgimage: item?.node?.featuredImage?.node?.sourceUrl,
    };
  });
//   const carouselTest = props.smartupVideo.map((item, index) => {
//     // Define stripHtmlTags function within the map function
//     const stripHtmlTags = (html) => {
//       return html.replace(/(<([^>]+)>)/gi, "");
//     };
// console.log(stripHtmlTags(item?.node?.content));
//     return {
//       key: index,
//       imagePath: item?.node?.title,
//       title: stripHtmlTags(item?.node?.content),
//       bgimage: item?.node?.featuredImage?.node?.sourceUrl,
//     };
//   });
  const [popup, setPopup] = useState(false);
  const [initialpopup, setInitialPopup] = useState(true);
  const [appoint, setAppoint] = useState(false);
  const [state, setState] = useState(0);
  // const handleNext = () => {
  //   console.log("click");
  //   setState((i) => {
  //     if (carouselTest.length > i + 1) return i + 1;
  //     else return 0;
  //   });
  // };

  // const handlePrev = () => {
  //   setState((i) => {
  //     if (i - 1 >= 0) return i - 1;
  //     else return carouselTest.length - 1;
  //   });
  // };
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
  const router = useRouter();
  const closepopup = () => {
    setInitialPopup(false);
  };
  console.log(props);
  // console.log(carouselTest[state].bgimage);
  // console.log(carouselTest[state].imagePath);
  return (
    <div className={styles.container}>
      <Head>
        <title>
        ADGM | Abu Dhabi Global Market - MS
        </title>
        <meta
          name="description"
          content="Discover endless possibilities for your business at Abu Dhabi Global Market (ADGM). Explore comprehensive services and support for company setup and growth."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="ADGM | Abu Dhabi Global Market - MS"
        />
        <meta
          property="og:description"
          content="Discover endless possibilities for your business at Abu Dhabi Global Market (ADGM). Explore comprehensive services and support for company setup and growth."
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/#abu-dhabi-global-market-uae"
        />
        <meta property="og:site_name" content="MS" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/MSGroupUAE/"
        />
        <meta
          property="article:modified_time"
          content="2022-09-14T07:30:52+00:00"
        />
        <meta
          property="og:image"
          content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png"
        />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="19 minutes" />
        <link
          rel="canonical"
          href="https://ms-ca.com/#abu-dhabi-global-market-uae"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar
        color="#FFFFFF"
        hoverClr="#D4AE31"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
        bgcolor="transparent"
        
      />
      {/* <div className={styles.banner_container_adgm}>
                <Banner />
            </div> */}
      <div className={styles.banner_container_adgmnew}>
        <Banner
          heading={
            <div style={{ fontWeight: "400" }}>Abu Dhabi Global Market (ADGM)</div>
          }
          height="428"
          //   white={true}
          detail="Abu Dhabi Global Market(ADGM) stands tall as a premier International Financial Centre (IFC), where excellence flourishes within a community driven by forward-thinking initiatives, actively shaping the future of finance on a global scale. MS stands by your side, providing incorporation and authorization assistance, alongside comprehensive Financial and Advisory services. From compliance to taxes and accounting we handle it all, empowering you to concentrate on growing your business. With our seven years of experience in the UAE, we offer invaluable insights into local regulations, strategically positioned in ADGM.  With over seven years of experience, we offer invaluable insights into local regulations, strategically positioned in ADGM."
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
          <img src="images/mobAppoint.svg" alt="appointment" />
          Schedule your Appointment
        </span>
      </div>
      <div className={styles.video1}>
        <Container>
          <VideoCard
            imagePath="/images/ms_ceo1.webp"
            author="Mohammad Shafeek"
            title="Let MS empower your business in ADGM"
            position="Founder & Group CEO, MS"
          />
        </Container>
      </div>
      <div className={styles.mobvideo1}>
        <VideoCard
          imagePath="/images/CEO_mobile.png"
          title="Let MS empower your business in ADGM"
        />
      </div>
      <div>
        <ADGM_overview />
        {/* <ADGM_servicenew
          heading="Overview"
          detail="In ADGM, having an Outsourced Compliance Officer is a strategic move that brings expertise and efficiency to your business operations. They oversee things like anti-money laundering (AML), risk management, and planning. The outsourced CO connects regulatory rules with how a company works, making sure they follow ADGM rules well. They bring in strategic benefits and makes operations smoother, reducing the risk of breaking rules. Opting MS for outsourced CCO services provides your firm with a comprehensive approach to compliance. This includes deep expertise and seamless integration into the ever-changing landscape of ADGM."
        /> */}
      </div>
       <div className={styles.testimonialvideowrapper}> 
<Videotestimonial/></div> 
      <Al_reemBanner appoint={appoint} setAppoint={setAppoint} />
      <Adgm_benefits />
      <Opportunity_abudhabi />
      <div style={{ marginTop: "90px" }}>
        <ADGM_newservice />
      </div>
      <div style={{ marginTop: "120px" }}>
        <Testimonial />
      </div>
      <Alreem_yMs
        title={"as your Partner in ADGM"}
        content1={
          "MS in ADGM is your ideal partner. Our team is Energetic, Passionate, and Curious Tax practitioners, Accountants, Lawyers, Technologists & Problem solvers with diverse expertise and backgrounds who guarantee a flawless business. With efficiency, transparency, and regulatory compliance as our guiding principles, we adopt a client-centric approach, providing ongoing support. With cutting-edge technology and a deep understanding of the economic system, MS can be the catalyst for your business excellence in the ADGM."
        }
      />
      {/* <div style={{ background: "#D5AF32" }}>
        <ADGM_WHYMS buttonColor="#FFFFFF"
    buttonBackgroundColor="#002A3A" />
      </div> */}
      <div className={styles.newsBlogWrapper}>
        <ADGM_newsblogs categorySlug="ADGM" />
      </div>

      {/* <div className={styles.servicemedia}>
        <Container>
          <div className={`${styles.video2} ${styles.customtitlediv}`}>
            <div
              className={newstyle.servicenewTitle}
              // style={{ marginBottom: "59px" }}
            >
              Media
            </div>
           
          </div>

          <div className={style.videocarousel1}>
            <div className={style.leftimage}>
              <img src="/images/media1.png" alt="adgm media" />
            </div>

            
 
              <Media
              
                service="ADGM"
                
                 styles={{ width: "100%", flex: 1, borderRadius: "25px" }}
               
              />

             
            <div className={style.rightimage}>
              <img src="/images/media2.png" alt="adgm media" />
            </div>
            
          </div>
        </Container>
      </div> */}

      <div className={styles.faqWrapper}>
        <ADGM_FAQ_Service />
      </div>
      <div className={styles.guidenceWraper}>
        <ADGM_Guidence />
      </div>
      <div className={styles.footerWrapper}>
        <div className={Hstyles.footer}>
          <Footer />
        </div>
      </div>

      {popup && <BookCall onClick={() => setPopup(false)} />}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const response1 = await gqlRequest({
    operationName: "getVideos",
    query: `query getVideos{
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
    variables: {},
  });
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

export default ADGM;
