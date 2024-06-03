import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./CTT.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import BookCall from './BookConsultationCall';

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
        <div className={cstyles.acountingBanner_container}>
            <div className={cstyles.acountingBanner_left} data-aos="fade-right">
                <div className={styles.black36_heading}>
                Helping you see the way ahead
                </div>
                <div style={{ marginTop: "10px" }} className={styles.details24400 + " " + styles.ac2_detail1Width}>
                Unlocking the growth potential for dynamic business
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details18Open+ " " + styles.ac2_detail1Width}>
                In a frequently spinning world, fast-changing global markets demand organizations to have financial stability and liquidity. The right outcomes depend on continuous rigor in governance and processes across an array of transactional events. MS’s Financial Risk, Transactions & Restructuring team helps companies effectively manage finance and operations risk in order to drive performance and results and become stronger than ever. We offer solutions designed to help address a variety of risks that result from regulatory changes, market volatility, corporate events, and growing third-party relationships. Whatever be your risk, come to us, and solve it. We’re not the only solution to your business concerns, but the best.
                </div>
            </div>
            <div className={styles.acountingBanner2Book_right2} data-aos="fade-left">
                <BookCall />
            </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2