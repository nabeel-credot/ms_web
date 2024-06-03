import React, { useEffect, useState } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Advisory.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

import Button from '../ButtonYellow'

import Container from '../Common/Container';
function Advisory_services() {

  useEffect(() => {
    AOS.init({
        duration: 1400,
        once: false,
    })
}, []);

  return (
    <Container>
    <div className={styles.Advisory_services2_container}>
     

      <div className={styles.Advisory_services_sub}>
        <div className={styles.Advisory_services_subL}  data-aos="fade-right">
        <div className={styles.logoWrap}><Image src="/images/logo3.svg" alt="" width={182} height={181} /></div>
          <div className={styles.detail + " " + cstyles.textCntr} style={{ marginTop: 25 }}>Would you like a team to help your business overcome obstacles?</div>
          <div style={{ marginTop: 25 }}>
            <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="244px"
              height="73px" src="/images/LarrowB.svg" href="/contact"/>
          </div>
        </div>

        <div className={styles.Advisory_services_subR}  data-aos="fade-left">
          <div className={styles.heading32B500 + " " + cstyles.textCntr}>Our Approach could be summed up in one phrase:<br />
            <span style={{ color: "#D4AE31" }}>
              We are Ethical, Transparent and Sustainable
            </span></div>
          <div  className={styles.webOnly} style={{marginTop:30}}><Image src="/images/shafeek2.png" alt="" width={270} height={312} /></div>
          <div  className={styles.mobOnly} style={{marginTop:30}}><Image src="/images/shafeek2.png" alt="" width={180} height={208} /></div>

        </div>

      </div>
    </div>
    </Container>
  )
}

export default Advisory_services