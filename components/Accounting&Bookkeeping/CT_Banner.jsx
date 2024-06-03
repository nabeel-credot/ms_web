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
                   
                    <div className={styles.details18Open}>
                    The UAE Federal Tax Authority (FTA) has announced on 31 January 2022 the new federal Corporate Tax that will effectively start on or after June 1st, 2023. It’s a turning point moment in UAE’s rich history 50 years of successful track record, integrating with global trade and best practices, unfolding an efficient tax framework, while minimizing compliance burden on businesses and making them more transparent.
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