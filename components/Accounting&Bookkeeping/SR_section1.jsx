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
        <div className={styles.payrollBanner_container}>
             <div className={styles.payrollBanner_sub_container}>
            <div className={styles.FAS_Banner_left} data-aos="fade-right">
                <div className={styles.black36_heading_audit}>
                    A goal without a plan is just a useless dream.
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details20500 + " " + styles.ac2_detail1Width}>
                    Are you a do-everything-in-the-moment- person? If yes, business is not your cup of coffee.
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details20500 + " " + styles.ac2_detail1Width}>
                    We warn you. Nothing works great without a right plan. For a business to succeed and grow, you need to plan.
                </div>

                <div className={styles.details24500SR}>
                    But when you’re caught up in the flow of your business activities, finding the time and space to ensure you’re on the path to success isn’t easy.
                </div>

                <div className={styles.details24500SR2}>
                That’s where MSians resolutes to help you.
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details18Open + " " + styles.ac2_detail1Width}>
                With the help of trained professionals, the MS Strategic Review creates a space for you to assess your business methodically, allowing you to move your business forward purposefully and positively. Having a regular eye on what your business is through is inevitable for the keeping and growth of your business.
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details18Open + " " + styles.ac2_detail1Width}>
                We can’t help but say our services dive deep into industry and client needs. They’re guided by a perfect mix of careful decision-making and creative approaches to the complexity of our clients’ financial goals and the countries where they do business.
                </div>
                <div style={{ marginTop: "30px" }} className={styles.details24500SR+" "+styles.textCntr+" "+styles.mobOnly}>
            We can’t help but say our services dive deep into industry and client needs. They’re guided by a perfect mix of careful decision-making and creative approaches to the complexity of our clients’ financial goals and the countries where they do business.
            </div>
            </div>
            <div className={styles.acountingBanner2Book_right2} data-aos="fade-left">
                <BookCall />
            </div>
            </div>
            <div style={{ marginTop: "30px" }} className={styles.details24500+" "+styles.textCntr+" "+styles.webOnly}>
            We can’t help but say our services dive deep into industry and client needs. They’re guided by a perfect mix of careful decision-making and creative approaches to the complexity of our clients’ financial goals and the countries where they do business.
            </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2