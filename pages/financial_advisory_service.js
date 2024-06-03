import React from 'react'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'

//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner"
import Section1 from "../components/Accounting&Bookkeeping/FAS_section1"
import Section2 from "../components/Accounting&Bookkeeping/FAS_FAQs"

import Quote from "../components/Home/Quote"
// import Services from "../components/Home/Story_Services"
import Clients from "../components/Home/Clients"
import Awards from "../components/Home/Awards"

function business_startup() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Financial Advisory Service in UAE</title>
				<meta name="description" content="Financial Advisory Service in UAE" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" />
			<div className={styles.banner_container}>
				<Banner heading={<>Financial Advisory Service in UAE</>}
					detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy"
					image="/images/fasBg.png" width="632" height="412" />
			</div>
			<Section1 />
			<div className={styles.AccountingServiceWrap}>
				<Section2 />
			</div>
			<div className={Hstyles.ClientsContainer}>
				<Clients />
			</div>
			<div className={styles.whiteBgDown}>
				<Quote image="/images/SHAFEEK.png" width="589px" height="568px"
					details={'"We build a bespoke service for our clients. Whether they want to advance an idea, a capability, or the world at large, MS is with you every step of the way."'}
					fontSize="32px" name="Mohammed Shafeek" desig="Founder & CEO, MS" />
			</div>
			{/* <div className={styles.whiteBgDown1}>
				<div className={styles.service_container}>
					<Services />
				</div>
			</div> */}

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