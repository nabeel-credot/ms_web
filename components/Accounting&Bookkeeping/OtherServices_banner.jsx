import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Container from '../Common/Container';
function ADGM_banner() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container>
        <div className={styles.container_Blue_OS} data-aos="fade-up">
              <div className={styles.webOnly}>
                <Image src="/images/otherServices1.svg" alt="" width={425} height={428} />
            </div>
            <div className={styles.mobOnly}>
                <Image src="/images/otherServices1.svg" alt="" width={157} height={158} />
            </div>
            <div className={styles.white_heading48}>
              Other Services
            </div>
        </div>
        </Container>
    )
}

export default ADGM_banner