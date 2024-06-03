import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./OA.module.css"
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
        <div className={styles.OA_sec2_container} data-aos="fade-up">
            <div className={cstyles.white_heading + " " + cstyles.textCntr} >Operational Audit</div>
            <div className={styles.OA_sec2_sub}>
                <div className={styles.OA_sec2_subL}>
                    <div className={cstyles.details24400W}>How long does it take for the Operational Audit?</div>
                    <div className={cstyles.service_detail} style={{marginTop:20}}>This depends completely on the size of Operations.</div>
                    <div className={cstyles.service_detail+" "+styles.OA_sec2_sub_detail} style={{marginTop:20}}>Unlike financial audit which focuses on the financial controls as they relate to reporting, Operational audit focus on review and assessment of a business process. So, the time taken for completion of operational audit is purely dependent on the number of processes related to operations of business. The more the operational audit is, the more is the business.</div>
                </div>
                <div className={styles.MA_section}>
                    <div className={cstyles.details24400W}>How about the reporting & discussion?</div>
                    <div className={cstyles.detail12500} style={{marginTop:20}} >It won’t take longer. Seriously?</div>
                    <div className={cstyles.details14300+" "+styles.OA_sec2_sub_detail} style={{marginTop:20}}>Familiar with reporting? We’re sure it would be very helpful and accommodating to the Management. Operational Audit report provides in detail the observations, auditor’s recommendations to the reported observations, actions to be taken by the Management, responsibility of the process owner and the target date for the closure of the observation. This report is to be discussed with the Management and process owner in detail, so as to help Managers to evaluate and analyze the current effectiveness of a company’s operations while identifying areas of potential improvement. Because, we strongly believe good communication is still the best part of effective business, hence an elaborate discussion. But do not worry, we are just discussing your business, not the climate change.</div>
                    <div className={cstyles.details18OpenWhitePo} style={{marginTop:30}}>
                        MS also provide the following related services:
                    </div>
                    <div>
                    <ul>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowY.svg" alt="" width={25} height={20} className={styles.wArrow} /></div>
                        <span className={styles.key+" "+styles.fsa_list_width }>Compliance Audit</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowY.svg" alt="" width={25} height={20} className={styles.wArrow} /></div>
                        <span className={styles.key+" "+styles.fsa_list_width}>
                        Financial Control Audit
                        </span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowY.svg" alt="" width={25} height={20} className={styles.wArrow} /></div>
                        <span className={styles.key+" "+styles.fsa_list_width2}>
                        Internal Audit
                        </span>
                    </li>

                </ul>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2