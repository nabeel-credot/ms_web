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
                    Finding the right business!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    An effective acquisition strategy is a crucial component of a business&apos; growth plan. Finding the ideal company to buy is a challenging endeavor. When a client wishes to expand and enter new markets through the acquisition of businesses or assets, MS buy-side consulting services provide a focused strategy that is smart, personalized, adaptable, and results-driven. 

                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    To give a thorough market study and value the target companies, we will build and formulate an acquisition strategy according to the needs of the customer. MS will make sure an opportunity precisely matches with our client goals, so that our clients can identify high-potential targets. we perform financial and valuation analyses, to examine the fit of the business model, culture, and growth strategy with our clients’ organizational structure. 
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