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
                    Optimize Capital Structure
                </div>


                <div style={{ marginTop: "10px" }} className={styles.details24400 + " " + styles.ac2_detail1Width}>
                    Finance comes in many ways, you don’t have to worry about that. Instead of brooding about the different ways of making money, we work closely with you to provide honest, practical advice that aims to bring long term real value.
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details18Open + " " + styles.ac2_detail1Width}>
                    Accurate accounting of inventory can make all the difference between an entity reporting a profit or incurring a loss. “Periodic physical review of inventory helps identify variances between physical and book quantities and assists in evaluating internal control on movement, accounting and safeguarding of inventory. It also provides assurances to principals and business owners that the inventory reflected in the accounting records does not materially vary from the physical quantities. It can act as a deterrent against theft, damage and unauthorized write-offs.”
                </div>
                <div style={{ marginTop: "10px" }} className={styles.details18Open + " " + styles.ac2_detail1Width}>
                    We can assist you with inventory verification at regular intervals. Inventory verification includes amongst other things appropriate marking of physically verified stocks, identification of damaged and slow moving or obsolete items.
                </div>
                <div style={{ marginTop: "10px" }} className={styles.details18Open + " " + styles.ac2_detail1Width}>
                    Worry not about your business, it’s of our concern. We take care of it.
                </div>


            </div>
            <div className={styles.acountingBanner2Book_right2} data-aos="fade-left">
                <BookCall />
            </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2