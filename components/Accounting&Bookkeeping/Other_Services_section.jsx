import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./OtherService.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Sub1 from './Other_services_sub1'
import Sub2 from './Other_services_sub2'
import Sub3 from './Other_services_sub3'
import Sub4 from './Other_services_sub4'
import Sub5 from './Other_services_sub5'
import Container from '../Common/Container';
function Other_Services_section() {
  return (
    <Container style={{padding:0}}>
    <div className={cstyles.Other_Services_section_container} >
        <div className={styles.black36_heading_audit+" "+styles.textCntr}>Services</div>
        <div className={styles.details18PoB500+" "+styles.textCntr} style={{marginTop:20}}>
        Solutions To Fit For Your Business And Time
        </div>
        <Sub1/>
        <Sub2/>
        <Sub3/>
        <Sub4/>
        <Sub5/>
    </div>
    </Container>
  )
}

export default Other_Services_section