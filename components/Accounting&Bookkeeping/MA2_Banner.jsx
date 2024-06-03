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
                     Aligning Vision! 
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Use our adaptable consulting engagement model to overcome your most difficult problems. Work with MS experts that have the practical experience, sector understanding, and technical knowledge your business requires.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Count on MS to assist your company in preserving and enhancing the value you have worked so hard to build. The point where strategy and execution meet is a focus for our consulting experts.
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