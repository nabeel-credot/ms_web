import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Work.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../WorkWithUsCard'

import { data } from '../../data/job_vacancy_data'
import Container from '../Common/Container';
import Button from "../ButtonYellow"
function Work_with_us_Section(props) {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    })
  }, []);
  console.log("vacanciesPosts", props, props?.vacanciesPosts)


  return (
    <Container>
      <div className={styles.Work_with_us_Section} >
        <div className={cstyles.black36_heading + " " + cstyles.textCntr}>Job Vacancy</div>
        <div className={styles.Work_with_us_Section_sub}>


          {/* <a href="https://app.pyjamahr.com/careers?company=MS Group&company_uuid=DD0B207A53"
            className={styles.link} target="_blank" rel="noreferrer">
          </a> */}
          <div className={styles.link} >
          Clicking this button will redirect you to pyjamaHR, our dedicated recruitment platform for a seamless and efficient hiring process
          </div>
         
          <div>
            <Button value="Click Here" backgroundColor="#D5AF32" color="#192B3A" width="auto" style={{padding:"30px 60px"}}
              height="70px" src="/images/LarrowB.svg" href="https://app.pyjamahr.com/careers?company=MS Group&company_uuid=DD0B207A53" 
             />
          </div>

        </div>
      </div>
    </Container>
  )
}

export default Work_with_us_Section