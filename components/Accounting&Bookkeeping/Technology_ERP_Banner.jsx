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
                    Finding the right solution
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        Using enterprise resource planning software, businesses may automate and simplify their processes to run leaner, more precise, and effective operations. Our knowledgeable ERP consultants at MS will assist you in choosing a provider that best meets your requirements for your future state business process.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        Having the appropriate ERP in place is essential for your operations but putting a technology solution in place or optimizing it is a difficult task. The technical solution provided by the vendor is just the start. You need a partner who has in-depth product and market knowledge, as well as experienced resources, to help you implement a customized, effective, and agile transformation that will be sustainable for your organization.
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    In collaboration with you, our ERP team develops the protocols and clarity necessary to identify the solutions that will support your company&apos;s operations both now and in the future.
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