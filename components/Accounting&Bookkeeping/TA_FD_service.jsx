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
        Our Risk Management Services includes
        </h3>
        <div className={styles.serviceWrap}>
          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>01</div>
            </div>
            <div className={styles.title}>
            Assess the current management’s ability to maintain financials.
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
            Understand any outstanding balance sheet liabilities, such as taxes due and accounts payable.
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
            Spot vendor/supply chain or key customer concentration risks.
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
            Gain insights into potential revenue declines or major expenses that might be on the horizon.
            </div>
          </div>

        </div>
      </div>

    </Container>
  )
}

export default RA_IA_service