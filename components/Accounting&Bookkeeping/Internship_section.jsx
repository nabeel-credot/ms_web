import React, { useEffect } from 'react'
import styles from "./Work.module.css"
import cstyles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

import Form from './RequestForm'
import Container from '../Common/Container';
function Job_Vacancy_section({ current_post }) {

  useEffect(()=>{
    AOS.init({
      duration: 1400,
      once: false,
    })},[]);
    
  return (
    <Container>
    <div className={styles.Job_Vacancy_section}>
      {/* <div style={{ marginTop: 80 }}>
        <Card title={current_post[0]?.title} detail={current_post[0]?.details2} />
      </div> */}

      {current_post[0]?.description ?
        <div className={styles.job_description}  data-aos="fade-up">
          <div className={cstyles.heading32B500}>Description</div>
          <div className={cstyles.detail16P300} style={{ marginTop: 30 }}>
            {current_post[0]?.description}
          </div>
        </div> : ""
      }
      {current_post[0]?.resposibilities ?
        <div className={styles.job_resposibilities} data-aos="fade-up">
          <div className={cstyles.heading32B500} style={{ marginBottom: 30 }}>Responsibilities</div>
          {
            current_post[0]?.resposibilities?.map((item, index) => {
              return (
                <ul key={index}>
                  <li>
                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                    <span className={styles.key + " " + styles.keyWidth} style={{ color: "#212120" }}>{item}</span>
                  </li>

                </ul>
              )
            })
          }
        </div> : ""}

      {current_post[0]?.requirements ?
        <div className={styles.job_resposibilities} data-aos="fade-right">

          <div className={styles.Job_Vacancy_section_sub}>
            <div className={styles.Job_Vacancy_section_subL}>
              <div className={cstyles.heading32B500} style={{ marginBottom: 30 }}>Requirements</div>
              {
                current_post[0]?.requirements?.map((item, index) => {
                  return (
                    <ul key={index}>
                      <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.keyWidth} style={{ color: "#212120" }}>{item}</span>
                      </li>

                    </ul>
                  )
                })
              }
              <div  className={styles.noteWidth}>
              <div  style={{ color: "#D4AE31" }}>Please note that due to the volume of the application, only the Shortlisted candidates will be notified.</div>
              <div style={{ color: "#D4AE31" ,marginTop:15}}>Thank you.</div>
              </div>
            </div>
            <div className={styles.Job_Vacancy_section_subR} data-aos="fade-left">
              <Form />
            </div>
          </div>
        </div> : ""}

    </div>
    </Container>
  )
}


export default Job_Vacancy_section