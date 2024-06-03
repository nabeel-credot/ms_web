import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Container from '../Common/Container';
function Banner({ heading, detail, image, width, height }) {

  useEffect(() => {
    AOS.init({
      duration: 1900,
      once: false,
    })
  }, []);


  return (
    <Container >
      <div className={styles.container} >
        <div className={styles.acountingBanner_left} data-aos="fade-right" >
          <h1 className={styles.black_heading600 + " " + styles.padding60}>
            {heading}
          </h1>

          <div className={styles.details24400 + " " + styles.detailWidthCB}>
            {detail}
          </div>

        </div>
        <div className={styles.acountingBanner_right + " " + styles.webOnly} data-aos="fade-left">
          {image ?
            <Image src={image} alt="" width={width} height={height} style={{ borderBottomLeftRadius: "100px", borderTopRightRadius: "100px" }} />
            : ""
          }

        </div>
        <div className={styles.acountingBanner_right + " " + styles.mobOnly} data-aos="fade-left">
          {image ?
            <Image src={image} alt="" width={401} height={317} style={{ borderBottomLeftRadius: "50px", borderTopRightRadius: "50px" }} />
            : ""
          }

        </div>
      </div>
      
    </Container>
  )
}

export default Banner