import React from 'react'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner"
import Section1 from "../components/Accounting&Bookkeeping/CF_section1"
import Lets_talk from "../components/Accounting&Bookkeeping/Lets_talk"
import Quote from "../components/Home/Quote"
import Services from '../components/Accounting&Bookkeeping/Advisory_services_sec'

import Awards from "../components/Home/Awards"

function business_startup() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Corporate Finance - MS</title>
				<meta name="description" content="Corporate Finance - MS" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" />
			<div className={styles.banner_container}>
				<Banner heading={<>Corporate Finance</>}
					detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy"
					image="/images/corporateBg4.png" width="632" height="412" />
			</div>
			<Section1 />
			<div className={styles.AccountingServiceWrap}>
				<Lets_talk />
			</div>
			<div className={styles.paddingBgMob1}>
				<Quote image="/images/SHAFEEK.png" width="589px" height="568px"
					details={'"We build a bespoke service for our clients. Whether they want to advance an idea, a capability, or the world at large, MS is with you every step of the way"'}
					fontSize="32px" name="Mohammed Shafeek" desig="Founder & CEO, MS" />
			</div>
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