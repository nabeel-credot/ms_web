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
        DMCC License Categories
        </h3>
        {/* <div className={styles.detailsP}>ADGM offers a wide range of business structures to use such as</div> */}
        <div className={styles.serviceWrap}>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>01</div>
            </div>
            <div className={styles.title}>
            Trading License
            </div>
            <div className={styles.details}> 
            Allows importing, exporting, distributing, consolidating, and storing almost all products types. 
            A company that has share capital and the liability of members is limited to the amount, if any, unpaid on their shares.
             It cannot offer its shares to the public.
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
            Industrial License
            </div>
            <div className={styles.details}>
            Allows the implementation of light production activities specified in the license.
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
            Service License
            </div>
            <div className={styles.details}>
            Allows carrying out service or consultancy activities specified in the license.
            </div>
          </div>

        </div>
      </div>

    </Container>
  )
}

export default RA_IA_service