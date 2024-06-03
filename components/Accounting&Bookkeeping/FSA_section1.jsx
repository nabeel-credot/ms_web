import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
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
        <div className={styles.acountingBanner_container}>
            <div className={styles.acountingBanner_left} data-aos="fade-right">
                <div className={styles.black36_heading}>
                    Understanding your<br/>
                    Business like nobody else! Like <br/>never before!
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details18OpenBlackPo300 + " " + styles.ac2_detail1Width}>
                    There’s no doubt about it. In fact, there’s no more doubts regarding the business with MS. We tell you, success comes when you think out of the box. It comes from a different way. Having a professional, independent perspective on your business’ performance can take you to the heights of success, for sure.
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details18PoY300 + " " + styles.ac2_detail1Width}>
                    And this is exactly what our audit team does to you.
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details18Open + " " + styles.ac2_detail1Width}>
                   With every audit we carry out, it’s our uncompromising goal to make a noticeable improvement on your business. Hence with evaluating your company’s performance and financial health, we also assess the risks and, of course, the opportunities available to you. Remember, every single step you take is a waste if you do not grab opportunities rather than waiting for them to come your way.
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