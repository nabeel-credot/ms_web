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
                    Unlocking your growth
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    The cognitive, machine learning, and artificial intelligence platforms allow ground-breaking adjustments to real-world business requirements. We reduce false positives by using statistical methods, human intelligence grading, and structured data sets. To address quantifiable business ambitions, we develop intelligent applications that make use of cognitive talents.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    We believe, effective Return on Investments (ROI) realization requires a balance between creativity and practicality. Many businesses start with sales, marketing, and customer service before moving on to HR, finance, and strategic planning and development.
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    To create adaptable AI solutions that can revolutionize industries, we mobilize collaborative teams of AI engineers, data scientists, and machine learning experts.
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