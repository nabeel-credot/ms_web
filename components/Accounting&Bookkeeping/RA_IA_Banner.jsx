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
                    Fixing the gap!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                    Internal audit services bring value to the entire organization in addition to providing confidence to the Board. The MS internal audit service is created to deliver ideas and innovation to Executives and the Board, assisting businesses in achieving their ambitions. It provides assurance that financials, governance, risk management, and internal controls are effective.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    We create and provide appropriate internal audit services for both large and small firms, including comprehensive risk assessments across the organization, strategic internal audit programs, and reporting findings to management, the board, and other stakeholders. Along with identifying problems, we work with management to design custom solutions and set up the necessary controls.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                    Internal auditing plays a key role in helping an organization protect its resources, reputation, and sustainability while also assuring its efficient operation. The position also plays a number of other important responsibilities in businesses, though. The internal audit function is expected to assess risks, keep an eye on and evaluate controls, guarantee reporting accuracy, and enhance operations. The internal auditor is also expected to investigate fraudulent activity, ensure protections to stop it from happening again, examine systems and procedures, and provide senior management with unbiased observations and advice.
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