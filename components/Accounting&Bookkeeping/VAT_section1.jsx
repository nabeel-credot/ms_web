import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./VAT_T.module.css"
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
        <div className={cstyles.acountingBanner_container}>
            <div className={cstyles.acountingBanner_left} data-aos="fade-right">
                <div className={styles.black36_heading_audit}>
                Get trained best!
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details18Open + " " + styles.ac2_detail1Width}>
                Apart from helping you in growing business, MSians do provide ample training in certain fields. Our bespoke VAT training will ensure you and your team have the necessary know-how in dealing with VAT.
                </div>
                <div style={{ marginTop: "10px" }} className={styles.details18Open + " " + styles.ac2_detail1Width}>
                As you know, VAT is an extremely confusing arena that is often time-consuming to figure out. But what we do to help you with this is that, our VAT experts ease your work by providing in-house tailored VAT training.This training helps you to ensure that potential errors are avoided and your business transactions are in compliance with the VAT law. Even organizations such as charities and various tax-exempt organizations may need a clarity on how VAT is creating an impact in their organization. Our experts will make sure you gain all the understanding you require in dealing with VAT. Hence, no more confusions regarding VAT, and everything is easier.
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