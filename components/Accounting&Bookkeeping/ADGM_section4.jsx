import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Styles.module.css"
import Image from 'next/image'

import Container from '../Common/Container';
function ADGM_section4() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    })
  }, []);

  return (
    <Container>
      <div className={styles.ADGM_container2} data-aos="fade-up">
        <div className={styles.ADGM_section4_Left}>
          <div className={styles.black36_heading_audit}>
            ADGM Tech Startup
          </div>
          <div className={styles.details18BlackPo400} style={{ marginTop: 20 }}>
            ADGM has launched its new Tech up License giving entrepreneurs cost-effective access to the ADGM Platforms. ADGM’s calibrated and tailored regulatory regime for investments and capital raising can help enterprises seek capital at various stages of their life cycle to launch grow or divest their business. However, it is limited in time to the first 2 years after which it must be converted to a full-fledged license.
          </div>

        </div>
        <div className={styles.ADGM_section4_right} >
          <Image src="/images/adgmBg2.png" alt="" width={524} height={327} />
        </div>
      </div>
    </Container>
  )
}

export default ADGM_section4