import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookCall from './BookConsultationCall';
import Image from 'next/image'
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
                        We make the process of setting up a DMCC Business Bank Account easier
                    </div>

                    <div className={styles.details18Open}>
                        You must go through a dizzying variety of complicated steps to set up a bank account in Dubai.Corporate bank opening is no more a concern when you have MS with you. Starting from liaising with the right corporate bank partner for you to getting things done, MS is right at your service.We have extensive experiance in setting up all kind of personal and Business bank account, solid relationship with lead banks in UAE  and a commitment to helping our client to fulfill all requirements for a successful bank account setup in the DMCC. Write to us to know more about DMCC Business Bank Account Setup Assistance.
                    </div>

                </div>
                <div className={styles.RA_banner} data-aos="fade-left">
                    <BookCall path={"dmcc"} />
                </div>
            </div>


        </Container>


    )
}

export default Accounting_Banner2