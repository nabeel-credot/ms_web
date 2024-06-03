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
                    Designing the right automation
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Digital automation is now a necessity for all businesses to boost profits, cut expenses, and enhance customer service. Robotics is widely utilized to automate commercial processes with the goal of enhancing speed, accuracy, flexibility, and resilience.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Even while tackling high-volume, repetitive work using RPA can benefit businesses in many ways, not every implementation is a success. Lack of user uptake is a major reason of project failure. Our experts in United Arab Emirates, can aid with user adoption and the implementation of a successful RPA program. 
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