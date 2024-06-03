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
                     Tackle risks in a systematic way!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                    Effective risk management focuses more on knowing the hazards, appropriately assessing them, and maintaining control over them than it does on completely eradicating them.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Organizations are experiencing risk in every aspect of their operations nowadays due to the complexity of risk, including the danger of missing out on opportunities. Without the assistance of experts, creating a systematic enterprise risk management (ERM) program to proactively discover, classify, and prioritize the multitude of risks and opportunities across the company requires a significant time and resource commitment.
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