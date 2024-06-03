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
      <div className={styles.container+" "+styles.HomePadding} data-aos="fade-up">
        <h3 className={styles.heading} style={{ textAlign: "center" }}>
          Why MS?
        </h3>
        <div className={styles.serviceWrap+" "+styles.marginHome}>
          <div className={styles.boxHome}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
              </div>
              <div className={styles.numHome}>01</div>
            </div>
            <div className={styles.title}>
              We are an energetic, passionate and curious mix <br/>of numHomeber crunchers, technologist, lawyers, problem solvers and business builders with<br/> diverse expertise and background.
            </div>
          </div>

          <div className={styles.boxHome}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
              </div>
              <div className={styles.numHome}>02</div>
            </div>
            <div className={styles.title}>
            We believe our success comes from giving our clients the support to become the best they can be. 
            </div>
          </div>

          <div className={styles.boxHome}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
              </div>
              <div className={styles.numHome}>03</div>
            </div>
            <div className={styles.title}>
            We value our clients and are committed to <br/> adding value to all our engagements without compromise.  
            </div>
          </div>

          <div className={styles.boxHome}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
              </div>
              <div className={styles.numHome}>04</div>
            </div>
            <div className={styles.title}>
            We strive to find solutions to the challenges as we are known to have mastered the “magic of getting things done.” 
            </div>
          </div>

          <div className={styles.boxHome}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
              </div>
              <div className={styles.numHome}>05</div>
            </div>
            <div className={styles.title}>
            We are responsive and believe in maintaining an open line of communication with our clients.
            </div>
          </div>

     


        </div>
      </div>

    </Container>
  )
}

export default RA_IA_service