import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./MA.module.css"
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
            <div className={styles.MA_sectionL} data-aos="fade-right">
                <div className={cstyles.black36_heading_audit}>
                    Management accounts are not <br/>just about numbers.
                </div>

                <div style={{ marginTop: "20px" }} className={cstyles.detail16P300 + " " + cstyles.ac2_detail1Width}>
                    To be of real benefit to your business managers and owners, they should ideally incorporate one or more of the following criteria:
                </div>
            </div>
            <div className={styles.MA_section} data-aos="fade-left">
                <ul>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={12}  /></div>
                        <span className={styles.key  }>Comparisons to budgets/ forecasts.</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={12}  /></div>
                        <span className={styles.key}>Analysis of key performance indicators.</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={12}  /></div>
                        <span className={styles.key}>Commentary on performance.</span>
                    </li>
                     <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={12}  /></div>
                        <span className={styles.key}>Areas of financial focus.</span>
                    </li>
                </ul>
            </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2