import React, { useEffect } from 'react'

import styles from "./BannerTwo.module.css"


import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from '../Common/Container';
function BannerTwo() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false
    })
  }, []);


  return (
    <Container>
    <div className={styles.container_smartup}>
      <div className={styles.flex}>
      <div className={styles.left_smartup} data-aos="fade-right">
        <div className={styles.heading}>
          Welcome to the Smartups Family
        </div>
        <div className={styles.content} style={{marginTop:15}}>
        Join us and be part of a global community where you can connect and share your passion and enthusiasm with people near and far. We help you get your business off the ground.
        </div>
      </div>
      <div className={styles.right_smartup} data-aos="fade-left">

      </div>
      </div>
 
    </div>
    </Container>
  )
}

export default BannerTwo