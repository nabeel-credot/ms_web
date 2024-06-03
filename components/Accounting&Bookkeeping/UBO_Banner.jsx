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
                    <div className={styles.payrollBanner_heading}>
                        Filing is more necessary than ever!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.detailWidth2+" "+styles.marginBottom}>
                        The Department of Economic Development in reference to its Cabinet Resolution No. (58) of 2020 regarding the regulation of the true beneficiary procedures has made the notification submission live.
                    </div>

                    <div className={styles.payrollBanner_heading}>
                        What is the purpose of  UBO?
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.detailWidth2}>
                        The main purpose is to enhance transparency of entities registered in the UAE, as well as to develop effective and sustainable executive and regulatory mechanisms and procedures in respect of beneficial owner data.
                    </div>
                </div>
                <div className={styles.acountingBanner2Book_right2} data-aos="fade-left">
                    <BookCall />
                </div>
            </div>
        
        </div>
        </Container>
    )
}

export default Accounting_Banner2