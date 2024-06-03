
import React , { useState , useEffect, useRef } from 'react'
import Head from 'next/head'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner3"
import Section from "../components/Accounting&Bookkeeping/Story_section"
import Services from "../components/Home/Story_section"
import MeetYourTeam from "../components/Home/MeetYourTeam"
import LearnMoreMS from "../components/Accounting&Bookkeeping/LearnMoreMS"
import Clients from "../components/Home/Clients"


import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";
function Story() {

    const sectionRef = useRef();

    const [isVisible,setIsVisible]= useState(false)
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      };
    
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // console.log('Section is in view!');
            setIsVisible(true)
            // do something when section is in view
          }
          else{
            setIsVisible(false)
          }
        });
      }, options);
    
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    
      // cleanup function
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                <title>About Us - MS</title>
                <meta name="description" content="About Us - MS" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="About Us - MS" />
                <meta property="og:url" content="https://ms-ca.com/about-us/" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-04-29T10:40:20+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2019/11/iconfinder_Linked_in_255149-300x300.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="35 minutes" />
                <link rel="icon" href="/favicon.png" />
                <link rel="canonical" href="https://ms-ca.com/about-us" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
           
            <div className={styles.banner_container_Blue}>
                <Banner heading={<>Story</>}
                    detail="At our firm, we have a story that we're proud to share. It's a story of dedication to 
                    helping entrepreneurs and businesses succeed. We believe that providing financial 
                    services coupled with business consulting and incorporations for UAE and Freezone 
                    are the key to helping our clients achieve their goals. Our passion lies in 
                    empowering our clients to succeed, and we're committed to working tirelessly to 
                    make that happen."
                    // detail2="Entrepreneurs & businesses succeed"
                   
                    image="/images/storyBgMob.svg" alt="" width="313" height="314" widthMob="156" heightMob="157" white={true} />
            </div>
            <Section templateTitle="aboutUsBookAConsulatation" />

            <Services />
          
            <div className={styles.ashBgWrap}>
                <MeetYourTeam />
            </div>
            <div className={styles.LearnMoreMS_container}>
                <LearnMoreMS />
            </div>

            <div className={Hstyles.ClientsContainer}  ref={sectionRef}>
                <Clients isVisible={isVisible} />
            </div>

            <div className={styles.marginTB}>
                <Section2  />
            </div>
          
                <Section3 categorySlug="about-us"/>
           


            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Story