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
                     Deals represent a chance!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        Deals represent a chance. Deals are essential for realizing your goals and advancing your company&apos;s development for accelerated growth, enhanced capabilities, and radical change employing a combination of knowledge and expertise. Our deal advisory teams assist businesses in more effectively defining and honing their growth plans across transactions and events.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        No matter where you are in your deal-making process, MS provides you with the unbiased guidance and information you need to make the best choice possible at the right moment. We can help with a range of your deal needs owing to our vast regional and sector experience, as well as our knowledge of your culture and position. Our diverse teams provide Boards and Management with advice on the best ways to move forward with regional, international, and far beyond transactions.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        We provide deep technical competence, individualized care, and consideration in all of our client’s transactions and events. Our integrated team of professionals works at deal speed to help you uncover and generate value throughout the course of your transaction lifecycle, helping you with anything from mergers and acquisitions to divestitures, debt and equity capital markets to real estate and infrastructure deals.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Our experts are savvy about the factors that influence an industry&apos;s growth and value, and they can explain to you the immediate advantages and disadvantages of a deal as well as project its future effects on the business. MS carefully examines each deal to give you deep operational, financial, and strategic insights before, during, and after the deal is completed.
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