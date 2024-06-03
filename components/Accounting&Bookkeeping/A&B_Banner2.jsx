import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting2.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
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
                <div className={styles.FAS_Banner_left } data-aos="fade-right">
                    <div className={styles.black36_heading}>
                        Dedicated bookkeepers,<br/> Just for You
                    </div>


                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        Real humans. Perfect books. Your bookkeeping team collects
                        documents, categorizestransactions, tallying bank transactions,
                        prepares financial statements every month, provides payroll and HR
                        Support and helps with your tax compliances every month.
                        Questions ? MS bookkeepers work in –house and respond
                        within one business day.
                    </div>

                </div>
                <div className={cstyles.acountingBanner2Book_right} data-aos="fade-left">
                    <BookCall />
                </div>
            </div>
        </Container>
    )
}

export default Accounting_Banner2