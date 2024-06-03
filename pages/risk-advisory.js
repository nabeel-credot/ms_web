import React from 'react'
import styles from '../styles/Advisory.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2";
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar4"
import Banner2 from "../components/Accounting&Bookkeeping/RA_Banner";
import Section1 from "../components/Accounting&Bookkeeping/Approach";
import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";
import Services from "../components/Accounting&Bookkeeping/RA_services";



function enterprise() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Risk Advisory Services in Abu Dhabi, Dubai, UAE | Risk Consultant - MS</title>
                <meta name="description" content="MS is your trusted partner for risk management advisory services in Abu Dhabi, Dubai, and UAE. Our expert team helps businesses mitigate financial losses and ensure their long-term success." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Risk Advisory Services in Abu Dhabi, Dubai, UAE | Risk Consultant - MS"/>
                <meta property="og:description" content="MS is your trusted partner for risk management advisory services in Abu Dhabi, Dubai, and UAE. Our expert team helps businesses mitigate financial losses and ensure their long-term success." />
                <meta property="og:url" content="https://ms-ca.com/risk-advisory" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-04-29T10:55:31+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
                <meta property="og:image:width" content="152" />
                <meta property="og:image:height" content="152" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <link rel="canonical" href="https://ms-ca.com/risk-advisory" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_Blue}>
                <Banner heading="Risk Advisory"
                    height="428" white={true} detail="Our Risk Advisory services provide expert analysis and 
                    insights to help financial service providers in the UAE manage risks and comply with
                    regulatory requirements. Trust our experienced team to help safeguard your 
                    business and enhance your risk management strategies." />
            </div>
            <div className={styles.MenuBar}>
                <MenuBar />
            </div>
            <Banner2/>
            <div className={styles.blueBgWrap}>
            <Section1/>
            </div>

            <div className={styles.marginTp}> 
            <Section2 service="Risk Advisory" />
            </div>
         
            <Services/>
            <Section3 categorySlug="advisory"/>
          
            {/* <Section />
            <div className={Hstyles.ClientsContainer}>
                <Clients />
            </div>
            <Section2 />
            <div className={styles.downloadContainerWhite}>
                <Quote image="/images/SHAFEEK.png" width="589px" height="568px"
                    details={'"MSATC’s foundation is laid on strong values. MSians are driven by unbreakable passion, and we chase is vision that would make a positive impact in the world. For us, all of our stakeholders are important. We are committed to delivering value to each of them, leading towards the success of our companies, communities and the country."'}
                    fontSize="32px" name="Mohammed Shafeek" desig="Founder & CEO, MS" />
            </div> */}
            {/* <Enterprise_services/> */}
            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default enterprise