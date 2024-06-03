import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./CBCR.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'
import Container from '../Common/Container';
function ESR_section() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
        <div className={styles.accounting_service_container} data-aos="fade-up">
            <div className={styles.white_heading}>
                How We Help Clients?
            </div>
            <div className={styles.details18OpenWhitePo}>
                MS help groups manage their transfer pricing issues by:
            </div>
            <div className={cstyles.cbcrSection4_sub}>

                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                       
                        <span className={cstyles.key+" "+styles.keyWidth }>Designing and developing economically supportable transfer pricing policies</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                       
                        <span className={cstyles.key + " " + styles.keyWidth1}>Helping manage risk within the current tax environment of detailed transfer pricing regulations, strict documentation requirements, sophisticated audit practices, and significant penalties for non-compliance with an objective perspective which provides consistency when analysing and documenting intra-group transactions. </span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                       
                        <span className={cstyles.key + " " + styles.keyWidth}>Developing and implementing policies, procedures, and systems for setting, monitoring, and documenting intra-group transactions, including assistance with country by country reporting.</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                       
                        <span className={cstyles.key + " " + styles.keyWidth}>Assistance with transfer pricing disputes, including assistance with advance pricing agreements, competent authority negotiations, arbitration, and litigation support.</span>
                    </li>
                </ul>
                <div className={styles.details18OpenY} style={{ marginBottom: 30, marginTop: 30 }}>
                    We have got a specialist transfer pricing team. And this team helps us look beyond borders and understand the nuances of different national tax regulations.
                </div>
                <div className={styles.details18OpenWhite} style={{ marginTop: 30 }}>
                    For more information on how MS’s transfer pricing services practice can help with your global transfer pricing, feel free to contact us.<span style={{color:'#D4AE31'}}> +971 50 639 99 024</span>
                </div>

            </div>
        </div>
        </Container>
    )
}

export default ESR_section