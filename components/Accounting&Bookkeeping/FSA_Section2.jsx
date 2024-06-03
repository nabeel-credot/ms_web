import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./FSA.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

import Container from '../Common/Container';
function Accounting_Banner2() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container>
        <div className={styles.MA_section_container}>
            <div className={styles.FSA_sectionL} data-aos="fade-right">
                <div className={cstyles.black36_heading_audit}>
                Our audit team can help your business.
                </div>

                <ul>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={25} height={20} className={styles.wArrow} /></div>
                        <span className={styles.key+" "+styles.fsa_list_width }>We’ve developed our audits to suit the specific needs of the entrepreneurial business.</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={25} height={20} className={styles.wArrow} /></div>
                        <span className={styles.key+" "+styles.fsa_list_width}>We’ll work with you to ensure our assessment is highly efficient and extensive.</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={25} height={20} className={styles.wArrow} /></div>
                        <span className={styles.key+" "+styles.fsa_list_width2}>Gain an entrepreneur-led perspective on your business’ performance, and powerful advice for the future.</span>
                    </li>

                </ul>
            </div>
            <div  className={styles.FSA_sectionR} data-aos="fade-left">
            <Image src="/images/fsaBg.png" alt="" width="632" height="295" />
            </div>
            
        </div>
        </Container>
    )
}

export default Accounting_Banner2