import React, { useEffect } from 'react'
import styles from "./Banner.module.css"

import Button from "../Button"

import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';
function Banner() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false
    })
  }, []);

  return (
    <Container>
    <div className={styles.container} data-aos="fade-up">
      <h1 className={styles.banner_heading} >
        We are MSians,<br />
        Your perfect elite and <br />
        award-winning advisory firm.
      </h1>
    
      <div className={styles.banner_content}>
      {/* Our team of highly motivated and energetic professionals is dedicated to providing 
exceptional mentoring and support to ambitious and driven entrepreneurs 
worldwide, helping them soar to new heights of success. We specialize in providing 
top-notch business setup services in UAE freezones, as well as expert accounting 
and tax consulting services in the region. With our comprehensive expertise and 
personalized approach, we empower entrepreneurs to navigate the intricacies of 
setting up their businesses in freezones and ensure compliance with accounting and
tax regulations in the UAE. Trust our vibrant and dynamic team to guide you 
towards achieving your entrepreneurial dreams. */}
Team of vibrant and dynamic minds working towards one goal of mentoring and forwarding ambitious and driven entrepreneurs across the globe towards the peaks of success.
      </div>
      <div className={styles.webBtn}>
        <Button href="/about-us" value="Explore"  backgroundColor="transparent" color="#FFFFFF" width="222px"
          height="78px" src="/images/arrow.svg" style={{fontSize:25}} />
      </div>
      <div className={styles.mobBtn}>
        <Button href="/about-us" value="Explore" backgroundColor="transparent" color="#FFFFFF" width="120px"
          height="40px" src="/images/arrow.svg" />
      </div>


    </div>
    </Container>
  )
}

export default Banner