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
                        As the name suggests, Financial due diligence (FDD) refers to undertaking a task with some degree of care and attention.
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        In all likelihood, financial due diligence is the most significant step in your business acquisition path. It provides an understanding of accounting matters and financial records that helps you determine your business’s true value. Due diligence is a comprehensive financial assessment performed by a potential investor to investigate a business opportunity and verify its value. The purpose is not to test the accuracy of financial statements, but to understand the company’s underlying risk and profit potential.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        In short- a detailed financial risk assessment of an investment opportunity over a short period of time. It is not a compliance exercise, but an investigation of the opportunities the business can offer. A financial diligence review is also a cross-functional exercise that should be completed by an investor, prospective. It can require from a few minutes to several months depending on the complexity of the issue.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    During the process of financial due diligence, our team of experts examine a company’s accounting data to ensure that it is reported accurately and fairly. Doing so helps you understand the health of the business on both an operational and financial level. It can identify possible inefficiencies or exaggerations in the accounting records as well as potential issues or concerns with the management team. Due diligence can also help determine your exit strategy if a company is facing serious financial problems, preventing you from being caught unawares by any major surprises.
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