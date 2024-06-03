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
        Our Feasibility Study & Business Plan Covers
        </h3>
        <div className={styles.serviceWrap2}>
          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>01</div>
            </div>
            <div className={styles.title}>
            In depth market research and analysis
            </div>
          </div>

          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>02</div>
            </div>
            <div className={styles.title}>
            Proper industry wise study
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
            Projection of profits and <br/>losses
            </div>
          </div>

          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>04</div>
            </div>
            <div className={styles.title}>
            Sensitive Analysis
            </div>
          </div>

          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>05</div>
            </div>
            <div className={styles.title}>
            Projection of Balance sheet
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
            Cash-flow projection
            </div>
          </div>

          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>07</div>
            </div>
            <div className={styles.title}>
            Breakeven Analysis
            </div>
          </div>

          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>08</div>
            </div>
            <div className={styles.title}>
            Comparative business <br/>analysis
            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}

export default RA_IA_service