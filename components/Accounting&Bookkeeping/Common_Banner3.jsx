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
      <div className={styles.container_Blue_whiteOther} >
        <div className={styles.CommonBanner3_left} data-aos="fade-right" >
          <h1 className={styles.white_heading48 + " " + styles.padding60 + " " + styles.textCntrMob}>
            {heading}
          </h1>

          <div className={styles.details24400W+ " " + styles.textCntrMob}>
            {detail}
            {detail2 ? <div style={{ color: "#D4AE31" }}>{detail2}</div> : ""}
            {/* {detail3 ? <div>{detail3}</div> : ""} */}
          </div>

        </div>
        <div className={styles.CommonBanner3_right} data-aos="fade-left">
          <div className={styles.webOnlyCB}>
            <Image src={image} alt="" width={width} height={height} />
          </div>
          <div className={styles.mobOnlyCB} >
            <Image src={image} alt="" width={widthMob} height={heightMob} style={{ objectFit: "cover" }} />
          </div>



        </div>
      </div>
    </Container>
  )
}

export default Banner