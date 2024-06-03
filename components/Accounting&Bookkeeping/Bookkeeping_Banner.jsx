import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Bookkeeping.module.css"
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
    <div className={styles.container}>
      <div className={styles.acountingBanner_left} data-aos="fade-right">
        <div  className={cstyles.black36w600_heading+" "+styles.paddingTop80}>
          Book Keeping Services in <br />  Abudhabi, UAE
        </div>

        <div className={styles.bookbanner_details + " " + cstyles.detailWidthCB}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
        </div>
        <div >

        </div>
      </div>
      <div className={styles.bookkeepingBanner_right} data-aos="fade-left">
        <div className={styles.webOnly}>
          <div className={styles.blueContainer}>
            <Image src="/images/blueBg.png" alt="" width={523} height={424} />
          </div>
          <div className={styles.manImg}>
            <Image src="/images/MAN.png" alt="" width={440} height={566} />
          </div>
          <div className={styles.chat1}>
            Hi! Your books are all set for this month
          </div>
          <div className={styles.chat2}>
            Amazing, thanks guyz
          </div>
          <div className={styles.chat3}>
            My Pleasure! I am hre if u need me
          </div>
        </div>
        <div className={styles.mobOnly}>
        <Image src="/images/manBg.png" alt="" width={400} height={400} style={{objectFit:"cover"}}/>
        </div>

      </div>
    </div>
    </Container>
  )
}

export default Banner