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
                    Designing the right structure!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        Corporate governance refers to the procedures, systems, and organizational frameworks that enable a firm to achieve its strategic, operational, and financial objectives while maintaining long-term viability.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        A company&apos;s ethics are reflected in its corporate governance, which also has economic advantages by boosting productivity and raising share prices.
                    </div>
                    <div className={styles.black36_heading_audit} style={{ marginTop: "40px" }} >
                        Why Effective Corporate Governance is important?
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        In an increasingly complicated corporate world, good corporate governance standards are crucial. A strong corporate governance framework aids in protecting a company&apos;s interests while creating sustainable long-term returns against the backdrop of a dynamic business environment and growing competition.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    A strong corporate governance framework that is created and put into place makes it easier to make strategic decisions, use resources more effectively, and comply with regulations.
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