import React from 'react'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2";
import Section from "../components/Accounting&Bookkeeping/Enterprise_section1";
import Clients from "../components/Home/Clients"
import Section2 from "../components/Accounting&Bookkeeping/Enterprise_section2";
import Quote from "../components/Home/Quote"

function enterprise() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Enterprise - MS</title>
                <meta name="description" content="Enterprise - MS" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_Blue}>
                <Banner heading=" Enterprise"
                    detail=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy"
                    height="428" white={true} />
            </div>
            <Section />
            <div className={Hstyles.ClientsContainer}>
                <Clients />
            </div>
            <Section2 />
            <div className={styles.downloadContainerWhite}>
                <Quote image="/images/SHAFEEK.png" width="589px" height="568px"
                    details={'"MSATC’s foundation is laid on strong values. MSians are driven by unbreakable passion, and we chase is vision that would make a positive impact in the world. For us, all of our stakeholders are important. We are committed to delivering value to each of them, leading towards the success of our companies, communities and the country."'}
                    fontSize="32px" name="Mohammed Shafeek" desig="Founder & CEO, MS" />
            </div>
            {/* <Enterprise_services/> */}
            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default enterprise