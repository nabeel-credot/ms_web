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
                    Partner in Strategy! 
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                    The burden need not be yours alone to bear: We provide continuous or project-based assistance in everything financial, big, and small, so you may comprehend and relieve yourself of your business.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    With the demonstrated practical experience in finance that our team have amassed over the years at various industries, you can be confident that you will receive the most professional suitable service from our competent and highly experienced consultants who will serve as your Company&apos;s CFO. One of the most vital roles in every organization is the chief financial officer (CFO), and emerging businesses like startups place even more emphasis on this position&apos;s significance.
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