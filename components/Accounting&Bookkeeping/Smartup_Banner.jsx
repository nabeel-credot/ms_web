import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Smartup.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Container from '../Common/Container';
function Banner() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    })
  }, []);


  return (
    <Container>
    <div className={styles.container} >
      <div className={cstyles.smartUpBanner_left} data-aos="fade-right">
        <div className={styles.white_heading48}>
          MS Smartups
        </div>

        <div className={styles.bookbanner2_headingY}>
          For Startups & SME&apos;s in the UAE
        </div>
        {/* <div className={styles.details24400W+" "+styles.detailWidthCB2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
        </div> */}
        <div className={styles.sm_img} style={{marginTop:30}}>
        <Image src="/images/SME2.png" alt="" width={292} height={152} />
        </div>
      </div>
      <div className={cstyles.smartUpBanner_right} data-aos="fade-left">
        {/* <div className={styles.yellowBorder}></div> */}
        <Image src="/images/smartUpBg.png" alt="" width={632} height={432} style={{ borderBottomLeftRadius: "100px", borderTopRightRadius: "100px" }} />
      </div>
    </div>
    </Container>
  )
}

export default Banner