import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./OA.module.css"
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
                <div className={cstyles.black36_heading}>
                Helping you see the way ahead
                </div>

                <div style={{ marginTop: "10px" }} className={cstyles.details18Open + " " + cstyles.ac2_detail1Width}>
                Look and see what’s in store at the horizon. Yes, we, MSians are here to make you look at beyond borders and boundaries. Your business doesn’t have a border, unless you set one. Here, you go, with an ambitious heart and curious business tricks with MS.
                </div>

                <div style={{ marginTop: "10px" }} className={cstyles.details18Open + " " + cstyles.ac2_detail1Width}>
                Let’s get back to your business’s efficiency and effectiveness.
                </div>

                <div style={{ marginTop: "10px" }} className={cstyles.details18Open + " " + cstyles.ac2_detail1Width}>
                Operational Audit is systematic process of evaluating an organization’s operational efficiency and effectiveness. On completion of Operational Auditing, the results of the evaluation and the recommendations for improvements will be reported to the management for action. It means that the internal auditor goes beyond financials controls into operating areas. It is focused to strengthen Organization’s operations and control mechanism for day to day operations. Operational Audit will help to identify points of non-conformity in procedure implementation. It will help the management to take corrective actions.
                </div>

            </div>
            <div className={cstyles.acountingBanner2Book_right2} data-aos="fade-left">
                <BookCall />
            </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2