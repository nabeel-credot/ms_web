import React, { useEffect } from 'react'
import styles from "./Styles.module.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import BookCall from './BookConsultationCall';

import Container from '../Common/Container';

function Banner({ heading, detail, image, width, height, white,pay ,dmccbanner}) {

  useEffect(() => {
    AOS.init({
      duration: 1900,
      once: false,
    })
  }, []);

  return (
    <Container>
      <div className={styles.container_Bluedifc} data-aos="fade-up">
        {dmccbanner && <h1 className={styles.dmccbannerhead}>DMCC</h1>}
        <h1 className={styles.white_heading48 + " " + styles.margin20}>
          {heading}
        </h1>

        <div className={pay?styles.details24400W+ " " +styles.detailWidthPay:styles.details24400W+ " " +styles.detailWidthCB3}>
          {detail}
        </div>

      </div>

    </Container>
  )
}

export default Banner


