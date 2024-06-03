import React ,{useEffect}from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Work.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Card from '../WorkWithUsCard'

import {data} from '../../data/job_vacancy_data'
import Container from '../Common/Container';
function Work_with_us_Section(props) {
  
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    })
  }, []);
console.log("vacanciesPosts",props,props?.vacanciesPosts)


  return (
    <Container>
    <div className={styles.Work_with_us_Section}  data-aos="fade-up">
        <div className={cstyles.black36_heading+" "+cstyles.textCntr}>Job Vacancy</div>
        <div className={styles.Work_with_us_Section_sub}>
           {props?.vacanciesPosts.map((item,index)=>{
            return(
                <div key={index} className={styles.Work_with_us_Section_card}>
                    <Card 
                    date={item?.node?.date}
                     title={item?.node?.title} 
                     details={item?.node?.content} 
                     id={item?.node?.id}
                      slug={item?.node?.slug}
                       index={index}
                    parentCallBack={props?.parentCallback}
                     parentCallback2={props?.parentCallback2}/>
                    
                </div>
            )
           })}
        </div>
    </div>
    </Container>
  )
}

export default Work_with_us_Section