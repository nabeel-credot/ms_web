import React ,{useEffect} from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Button from '../ButtonYellow'

import Container from '../Common/Container';
function Enterprise_section2() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
        <div className={styles.Enterprise_section2_container}>
            <div className={styles.Enterprise_section2_left} data-aos="fade-right">
                <div className={styles.black36_heading_audit+" "+styles.textCntrMob}>We are MSians | Enabling Entrepreneurs to shape a better world.</div>
                <div className={styles.details18OpenBlackPo300+" "+styles.Enterprise_section2_width+" "+styles.textCntrMob} style={{
                    marginTop:20
                }}>You are not alone in this journey – Get equipped with the MSians tools and social impact insights to develop your own entrepreneurial potential to solve the world’s biggest problems.</div>
            </div>
            <div className={styles.Enterprise_section2_right} data-aos="fade-left">
                <div>
                    <Image src="/images/logo3.svg" alt="" width={110} height={109} />
                </div>
                <div className={styles.details24500} style={{marginTop:20}}>
                    Start My Business
                </div>
                <div style={{marginTop:20}}>
                    <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="228px"
                        height="58px" src="/images/LarrowB.svg" href="/contact" style={{fontSize:24}}/>
                </div>
            </div>
        </div>
        </Container>
    )
}

export default Enterprise_section2