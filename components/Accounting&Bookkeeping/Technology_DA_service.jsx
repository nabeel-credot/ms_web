import React, { useEffect } from 'react'
import styles from "./RA_Services.module.css"

import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';
function RA_IA_service() {

  useEffect(() => {
    AOS.init({
        duration: 1400,
        once: false,
    })
}, []);

  return (
    <Container>
      <div className={styles.container} data-aos="fade-up">
        <h3 className={styles.heading}>
        Our key expertise covers
        </h3>
        <div className={styles.serviceWrap}>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>01</div>
            </div>
            <div className={styles.title}>
            Big Data Analytics
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>02</div>
            </div>
            <div className={styles.title}>
            Strategy & Program Execution
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>03</div>
            </div>
            <div className={styles.title}>
            Governance & Management
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>04</div>
            </div>
            <div className={styles.title}>
            Advance Analytics & <br/>Intelligence
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>05</div>
            </div>
            <div className={styles.title}>
            Platform Integration
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>06</div>
            </div>
            <div className={styles.title}>
            Data Visualization & Insights
            </div>
          </div>

        </div>
      </div>

    </Container>
  )
}

export default RA_IA_service