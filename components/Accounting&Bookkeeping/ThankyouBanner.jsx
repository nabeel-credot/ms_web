import React, { useEffect } from 'react'
import styles from "./Thankyou.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'

import Container from '../Common/Container';

function ThankyouBanner({phoneNo}) {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

  return (
    <Container>
            <div className={styles.bannerWrapper} data-aos="fade-up">
                <div className={styles.imgWrapper}>
                    <Image src="/images/checked.png" alt ="" layout="fill" />
                </div>
               <div className={styles.content}>
                    <div>Our team would be reaching out to you at the earliest.</div>
                    <div>Feel free to drop a WhatsApp text on {phoneNo}, for quick information.</div>
                    <div>-Team MS</div>
               </div>
            </div>
    </Container>
    

  )
}

export default ThankyouBanner