import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./CTT.module.css"
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
            <div className={styles.acountingBanner_left} data-aos="fade-right">
                <div className={cstyles.black36_heading_audit}>
                Getting the greatest value to your business.
                </div>

                <div style={{ marginTop: "10px" }} className={cstyles.details18Open + " " + cstyles.ac2_detail1Width}>
                Value is more than a dollar amount – it’s also about the legacy you hope to leave and the viability of the business moving forward.
                </div>

                <div className={cstyles.details24400}>
                Taking your business up for success
                </div>

                <div style={{ marginTop: "10px" }} className={cstyles.details18Open + " " + cstyles.ac2_detail1Width}>
                While it may seem like the last box to check, planning for the next generation of owners and managers well in advance usually leads to better operational, financial, and tax outcomes.
                </div>

                <div style={{ marginTop: "10px" }} className={cstyles.details18Open + " " + cstyles.ac2_detail1Width}>
                MS has been helping business owners design and execute transition and wealth transfer plans for many years. We bring an exceptional combination of experience to every relationship we serve. We offer advice, guidance, and solutions to business owners through every phase of your journey – from starting out to growing the business to eventually transitioning it. Success is the name of the destination that we intend to take you to. Ready for the trip?
                </div>

            </div>
            <div className={cstyles.acountingBanner2Book_right2} data-aos="fade-left">
                <BookCall />
            </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2