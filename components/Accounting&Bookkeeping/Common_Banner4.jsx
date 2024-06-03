import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

import Container from '../Common/Container';
import Link from 'next/link';
function Banner({ heading, detail, parent ,href,noWidth}) {

  useEffect(() => {
    AOS.init({
      duration: 1900,
      once: false,
    })
  }, []);


  return (
    <Container>
      <div className={styles.container_Blue} data-aos="fade-up" >
        <div className={styles.parentWrap}>
        <div className={styles.parentHead18+ " " + styles.margin20}>
          <Link href={href}  prefetch={false}>
          {parent}
          </Link>
         
        </div>
        <div>
        <Image src="/images/arrow.svg" alt="" width={20} height={18} />
        </div>
       
        </div>
   

        <h1 className={styles.white_heading48 + " " + styles.margin20}>
          {heading}
        </h1>

     {detail?   <div className={noWidth?styles.details24400W:styles.details24400W+ " " +styles.detailWidthCB3}>
          {detail}
        </div>:""
}
      </div>

    </Container>
  )
}

export default Banner