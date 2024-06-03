import React from 'react'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner"
import Section1 from "../components/Accounting&Bookkeeping/OA_section1"
import Section2 from "../components/Accounting&Bookkeeping/OA_section2"
import Lets_talk from "../components/Accounting&Bookkeeping/Lets_talk"
import Section3 from "../components/Accounting&Bookkeeping/FSA_Section2"
import Quote from "../components/Home/Quote"
import Services from '../components/Accounting&Bookkeeping/FSA_services'

import Awards from "../components/Home/Awards"
import Footer from "../components/Footer"
function business_startup() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Operational Audit - MS</title>
				<meta name="description" content="Operational Audit - MS" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" />
			<div className={styles.banner_container}>
				<Banner heading={<>Operational Audit</>}
					detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy"
					image="/images/operationalBg.png" width="632" height="412" />
			</div>
			<Section1 />
			<div className={styles.AccountingServiceWrap}>
				<Section2 />
			</div>

			<div className={styles.whiteBgDown}>
				<Section3 />
			</div>
			<div className={styles.AccountingServiceWrap}>
				<Lets_talk />
			</div>

			<Services />

			<div className={styles.downloadContainerWhite2}>
				<Quote image="/images/SHAFEEK.png" width="589px" height="568px"
					details={'"We build a bespoke service for our clients. Whether they want to advance an idea, a capability, or the world at large, MS is with you every step of the way."'}
					fontSize="32px" name="Mohammed Shafeek" desig="Founder & CEO, MS" />
			</div>
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