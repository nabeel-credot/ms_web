import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Container from '../Common/Container';

function Banner({ heading, detail, image, width, height, widthMob, heightMob,detail2 }) {

  useEffect(() => {
    AOS.init({
      duration: 1900,
      once: false,
    })
  }, []);


  return (
    <Container>
      <div className={styles.container_Lengthy} >
        {/* <div className={styles.CommonBannerL_left} data-aos="fade-right" > */}
          <h1 className={styles.white_heading48 + " " + styles.padding60 + " " + styles.textCntrMob}>
            {heading}
          </h1>

          <div className={styles.details24400W+ " " + styles.textCntrMob}>
            {detail}
            {/* {detail3 ? <div>{detail3}</div> : ""} */}
          </div>

        {/* </div> */}
      </div>
    </Container>
  )
}

export default Banner