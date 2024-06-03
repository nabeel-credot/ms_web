import Head from 'next/head'
import React from 'react'
import styles from '../../styles/JobVacancy.module.css'
import Hstyles from '../../styles/Home.module.css'
//components
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Section from "../../components/Accounting&Bookkeeping/Internship_section"
import Banner from "../../components/Accounting&Bookkeeping/Internship_Banner"
import { useRouter } from 'next/router'
import { data } from "../../data/internship_data"

function Job_Vacancy() {
    const router = useRouter()
    const id = router?.query?.id
 
    var current_post = data?.filter(emp => emp.id == id).map(obj => obj)

    return (
        <div className={styles.container}>
            <Head>
        <title>MS</title>
        <meta name="description" content="MS" /> 
         <link rel="icon" href="/favicon.png" />
      </Head>
           
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_work}>
                <Banner current_post={current_post}/>
            </div> 
            <div className={styles.Job_Vacancy_container}>
                <Section current_post={current_post}/>
            </div>
            <div className={Hstyles.footer}>
      <Footer  />
      </div>
        </div>
    )
}

export default Job_Vacancy