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
                <div className={styles.FAS_Banner_left} data-aos="fade-right">
                    <div className={styles.black36_heading_audit}>
                    It’s about safeguarding your business!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Today&apos;s businesses compete in a changing risk environment while tackling ever-growing objectives. In order to control the complete range of risk, governance, and compliance issues in the context of an industry, operations, and culture, businesses are looking for a trusted advisor.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    We work in partnership with leaders from all levels and across all functions to support practical solutions from an organizational standpoint. We assist our clients in focusing on the strategic landscape of the organization and its future by using an integrated strategy.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    A sustainable risk management and internal audit strategy helps your firm to protect and increase value, exploit opportunities, and offer improvement of processes and operations. Our prospects are increasingly based on how well we respond to these risks.
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