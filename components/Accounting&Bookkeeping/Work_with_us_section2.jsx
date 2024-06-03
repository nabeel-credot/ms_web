import React ,{useEffect} from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Work.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Card from '../WorkWithUsCardIntern'

import {data} from '../../data/internship_data'
import Container from '../Common/Container';
function Work_with_us_Section() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    })
  }, []);

  return (
    <Container>
    <div className={styles.Work_with_us_Section2} data-aos="fade-up">
        <div className={cstyles.black36_heading+" "+cstyles.textCntr}>Internship</div>
        <div className={styles.Work_with_us_Section_sub}>
           {data?.map((item,index)=>{
            return(
                <div key={index} className={styles.Work_with_us_Section_card}>
                    <Card date={item.date} title={item.title} details={item.details} id={item.id}/>
                </div>
            )
           })}
        </div>
    </div>
    </Container>
  )
}

export default Work_with_us_Section