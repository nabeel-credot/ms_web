import React from 'react'
import Head from 'next/head'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner"
import Section1 from "../components/Accounting&Bookkeeping/SR_section1"
import Section2 from "../components/Accounting&Bookkeeping/SR_section2"
import Lets_talk from "../components/Accounting&Bookkeeping/Lets_talk"

import Quote from "../components/Home/Quote"
import Services from '../components/Accounting&Bookkeeping/Advisory_services_sec'

import Awards from "../components/Home/Awards"
import Footer from "../components/Footer"

function business_startup() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Strategic Review - MS</title>
				<meta name="description" content="Strategic Review - MS" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" />
			<div className={styles.banner_container}>
				<Banner heading={<>Strategic Review</>}
					detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy"
					image="/images/vatBg.png"  width="631" height="439" />
			</div>
			<Section1 />

			<div className={styles.AccountingServiceWrap}>
				<Lets_talk />
			</div>
			<div className={styles.redBgWrap}>
				<Section2 />
			</div>

			{/* <Section2 />
      <div className={styles.whiteBg}>
      <Section3 />
      </div>
  
      <Services /> */}
			<Quote image="/images/SHAFEEK.png" width="589px" height="568px"
				details={'"We build a bespoke service for our clients. Whether they want to advance an idea, a capability, or the world at large, MS is with you every step of the way."'}
				fontSize="32px" name="Mohammed Shafeek" desig="Founder & CEO, MS" />

			<Services />
			<div className={styles.award_container}>
				<Awards />
			</div>
			<div className={Hstyles.footer}>
				<Footer />
			</div>
		</div>
	)
}

export default business_startup