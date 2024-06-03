import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Styles.module.css"
import Image from 'next/image'

import Container from '../Common/Container';
function Fdd_sub4() {

    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false,
        })},[]);
        

    return (
        <Container>
        <div className={styles.fdd_sub4} data-aos="fade-up">
            <div className={styles.black36_heading}>
            Our financial due diligence services –
            </div>
            <div className={styles.details18Open} style={{marginTop:20}}>
            We will be conducting a 360-degree financial due diligence process at the end of which you will have actionable insights to successful close a deal. We will provide you with  a due diligence report which includes major risks identified, corrected financials, forward projections, and recommendations This is more than what an audit report provides, including forward-looking projections and management concerns which can inform your strategic business plan. Our financial diligence team will hold a consultation meeting with you to explain findings in detail and answer your questions. The overall financial due diligence process we carry out will serve the below purposes –
            </div>
            <div className={styles.fdd_sub4_list} style={{marginTop:40}}>
                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.details18BlackPo400ForLi + " " + styles.keyWidth}>Understanding the key drivers of business</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.details18BlackPo400ForLi + " " + styles.keyWidth}>
                        Analyzing and assessing the accounting policies and processes in place.</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.details18BlackPo400ForLi + " " + styles.keyWidth}>
                        Review and sample financial records like invoices, receipts etc.</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.details18BlackPo400ForLi + " " + styles.keyWidth}>
                        Assessing control procedures to identify gaps and suggest corrective method.</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.details18BlackPo400ForLi + " " + styles.keyWidth}>
                        Forecast and estimate future revenues, cashflow etc. and overall future financial performance.</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.details18BlackPo400ForLi + " " + styles.keyWidth}>
                        Identify and correct previous financials.</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.details18BlackPo400ForLi + " " + styles.keyWidth}>
                        Estimate a working capital target if and when applicable.</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.details18BlackPo400ForLi + " " + styles.keyWidth}>
                        Clear insights into strengths and limitations of the organization being purchased</span>
                    </li>
                </ul>
            </div>
        </div>
        </Container>
    )
}

export default Fdd_sub4