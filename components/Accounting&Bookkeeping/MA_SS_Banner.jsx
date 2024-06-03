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
                        Promising success!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        You need a business advisor that can effectively serve as a mediator between the buyer and seller while selling your company. Organizations can identify the value of their portfolios and reduce interruptions with the aid of MS sell-side advisory services.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        To focus on selling or winding down firms in noncore or unattractive areas, MS can identify enterprises that are best positioned for growth. We will perform a thorough sell-side corporate due diligence and give you the necessary data to find and reduce stranded expenses, hence reducing the impact on the firm. MS Assess different divestment possibilities to increase deal value by assisting you in finding the right buyers, negotiating deals, and closing sales.
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