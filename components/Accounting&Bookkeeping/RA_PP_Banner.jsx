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
                    Designing the fundamentals!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        Consistency across your firm depends on sound policies and procedures. Organizations are more able to lessen their reliance on certain persons when they have a transparent business policy and processes that is available to all employees. Consider MS to help you in generating a user-friendly policy manual or staying up to speed with changes.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        To discover holes in the current business process and organizational structure, we analyze and evaluate your company&apos;s current structure, workflow, input, and output documents and we offer customized solutions based on our analysis that match the company&apos;s work culture, principles, values and working environment.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    MS will provide a Standard Operating Procedure (SOP) step-by-step guide that outlines an action required to complete a task or process in accordance with the rules and regulations regulating the business and the standards. We carefully consider the needs of our clients, gathers information from them, and classifies that information to create appropriate modules. We examine the consistency, accessibility, and reusability of established policies and procedures for the smooth functioning of enterprise.
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