import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting.module.css"
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
                <div className={styles.FAS_Banner_left} data-aos="fade-right">
                    <div className={styles.black36_heading_audit}>
                    Predicting Success!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    To aid in decision-making, financial forecasting is the act of estimating or projecting how a firm will perform in the future. Analysis of previous business performance, present business trends, and other pertinent elements are all part of the financial forecasting process. If you don&apos;t regularly anticipate your finances, you&apos;re theoretically left in the dark. Regular forecasting has numerous advantages for some of your company&apos;s core operations, including annual budget planning, setting realistic business goals, identifying problem areas, reducing financial risk, and improving the company&apos;s appeal to potential investors.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Using comprehensive tools and expertise, we offer the sensitivity, assumptions, and ratio analyses in the financial projections in an easy and approachable manner that helps our clients to make informed decisions.
                    </div>
            
                </div>
                <div className={styles.RA_banner} data-aos="fade-left">
                    <BookCall />
                </div>
            </div>


        </Container>
    )
}

export default Accounting_Banner2