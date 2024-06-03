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
                    {/* <div className={styles.black36_heading_audit}>
                    ADGM
                    </div> */}

                    <div className={styles.details18Open}>
                    Our management consultant can support you in developing appropriate 
technological strategies, cost-cutting measures, organizational improvements, and 
better decision-making.
                    </div>
                    <div className={styles.details18Open}>
                    We offer ad hoc and regular advisory services for guidance and practical help with 
management issues ranging from organizational planning, decision-making, policy 
preparation, production planning, control planning to designing accounting methods
and procedures, tax advisories, budgetary control techniques, cost and 
management accounting, and guidance on business planning and corporate 
governance. We provide everything you need for Management Advisory & 
Assistance in Dubai under one roof.
                    </div>
                    <div className={styles.details18Open}>
                    We perform result oriented, and we are dedicated to deliver the value we promised.
Our commitment ensures your success in achieving the desired goals.
                    </div>

                </div>
                <div className={styles.RA_banner} data-aos="fade-left">
                    <BookCall  path={"dmcc"} />
                </div>
            </div>


        </Container>
    )
}

export default Accounting_Banner2