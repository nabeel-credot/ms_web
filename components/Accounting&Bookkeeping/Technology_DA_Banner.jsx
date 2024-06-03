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
                    Enabling Smart Decisions
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    With our comprehensive knowledge throughout the data and analytics lifecycles, MS empowers businesses to tackle transformational issues. For the best possible business results, we offer cutting-edge solutions such as Business Intelligence solutions, data insights, and predictive modeling.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    The ability to use data effectively is something that businesses strive to do every day, so having the appropriate data programs in place can mean the difference between success and failure. We make sure to add cutting-edge data strategy, technological know-how, and business acumen to each of our data services because there is so much at stake with each project.
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    We promise to enhance data operations, regulatory compliance, and business intelligence, and we employ rigorous techniques to assist your company in generating revenue from data. We work to provide reliable and secure data assets for your company using our business intelligence, data processing, and visualization capabilities.
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