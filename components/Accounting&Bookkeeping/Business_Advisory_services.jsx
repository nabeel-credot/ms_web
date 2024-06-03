import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import sstyles from "./Styles.module.css"
import styles from "./Business.module.css"

import YellowBorderCard from "../YellowBorderCardWithBorderAudit"

import Container from '../Common/Container';
function AuditService() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
<Container style={{padding:0}}>
        <div className={styles.Business_advisory_services}  data-aos="fade-up">
            <div className={styles.paddingMob}>
            <div className={sstyles.white_heading+" "+sstyles.textCntr}>
                Why choose us?
            </div>
            <div className={sstyles.details18PoY300+" "+sstyles.textCntr} style={{marginTop:20}}>
                If you are searching for that nuance, that will make a mighty difference!
            </div>
            <div className={styles.details18WhitePo300+" "+sstyles.textCntr} style={{marginTop:20}}>
                Our business advisory services are aimed at supporting your business in identifying its strengths and overcoming weaknesses in specifically identified areas. Our team of professionals with their knowledge of industry business issues, technical expertise, hands-on experiences, and perspectives develops and offers tailored, innovative, and comprehensive solutions for the pressing needs of your business.
            </div>
            </div>
          
            <div className={sstyles.white_heading+" "+sstyles.textCntr} style={{marginTop:60}}>Area of Business Advisory</div>
            <div className={sstyles.OS_sub_box}>
                <div className={sstyles.OS_sub_boxH}>
                    <YellowBorderCard src="/images/audit2.svg" title={<>Help me with <br />my Tax</>} />
                </div>
                <div className={sstyles.OS_sub_boxH}>
                    <YellowBorderCard src="/images/audit4.svg" title={<>Help my Company<br />to grow</>} />
                </div>
                <div className={sstyles.OS_sub_boxH}>
                    <YellowBorderCard src="/images/audit3.svg" title={<>In need of <br /> business advice</>} />
                </div>
                <div className={sstyles.OS_sub_boxH}>
                    <YellowBorderCard src="/images/audit5.svg" title={<>Help me sell/buy<br />business</>} />
                </div>
            </div>


        </div>
        </Container>
    )
}

export default AuditService