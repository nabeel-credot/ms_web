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
                        A Professional, Efficient and unparalleled Approach
                    </div>

                    <div style={{ marginTop: "10px" }} className={styles.details20Open400 + " " + styles.ac2_detail1Width}>
                        You’re the face of your business, and you’re good at it. Be the paragon of the business everyone look up to.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.ac2_detail2Width}>
                        You work exceptionally hard and because of that, things tick along very nicely. Everything feels a little better to you because of that. But the financial systems that lie at the heart of your business need to be just as seamless.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        Whatever the size of your operation, it’s imperative that you can rely on its systems and the information they produce. Like the foundations of any good home, they need to be solid. Rigid and not breaking.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.ac2_detail3Width}>
                        We, MSians ensure that the financial systems that hold your business together are reliable, consistent and inherently robust. And by understanding your business and the industry you operate within, we can tailor our support to meet your needs, which will always get the best results. And that’s not just another promise.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.ac2_detail3Width}>
                        Whatever is your need, we can strengthen the ground beneath your business’ feet, whether it’s regulatory audits, statutory financial statements, annual accounts, systems and procedure reviews or reliable management information. Anything is handy with MSians.
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