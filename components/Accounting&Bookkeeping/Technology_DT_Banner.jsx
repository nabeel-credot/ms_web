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
                    Take the first step with us
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        Adoption of the digital workplace is the first step in digital transformation. With the aid of technology, your teams may simply communicate remotely from any location in the world. Given the current state of the globe, investing in such digital workplaces is even more encouraged.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        Clear understandings of strategy, operating models for the present and the future, and risk tolerance are prerequisites for any successful digital transformation initiatives. Organizations must choose whether to play the waiting game, monitor the competitive landscape, and respond as necessary to defend market share, or whether to be the disruptor and attempt to take the lead as a transformer.
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