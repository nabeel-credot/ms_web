import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./CBCR.module.css"
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
                            Businesses will be required to provide FTA with visibility over their global operations.
                        </div>

                        <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.detailWidth2}>
                            UAE decided to undertake certain tax reforms to strengthen the UAE’s international position and enhance its cooperation with the international community with regard to the exchange of information for tax purposes. The Ministry of Finance (MoF) signed a multilateral competent authority agreement (MCAA) on the exchange of Country-by-Country reports (CbCR) under the Base Erosion and Profit Shifting (BEPS) Inclusive Framework. UAE has committed to implement certain BEPS minimum standards in which Action 13 is Transfer Pricing documentation and Country-by-Country Reporting. This will be a significant step for multinational enterprises (MNE’s) to optimize their operating structures and understand additional compliance and reporting standards.
                        </div>

                        <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.detailWidth2}>
                            In this context, what a team like ours can do is to help you are developing strategy and policy to recognize key CbCR risk areas and estimate your organizational readiness for the regulation. We will help you in optimizing governance and assist your business with the practical implementation of standards and system. You have to believe that every single organization is different, which is why we offer bespoke financial solutions to all our clients.
                        </div>

                        <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.detailWidth2}>
                            Utilizing our expertise and experience, we focus not only on efficiently managing your accounts, but also growing your business. At the same time, we understand that the foundation of any high-performing partnership is a strong relationship, and we take care to get to know you, as well as your firm
                        </div>


                        <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.detailWidth}>
                            It’s our heartfelt mission to provide all our clients with truly visionary accounting and bookkeeping services that increase profits, save time, and ultimately stimulate growth. What is business without proper mutual relationship?
                        </div>

                    </div>
                    <div className={styles.acountingBanner2Book_right2 + " " + cstyles.marginBt} data-aos="fade-left">
                        <BookCall />
                    </div>
                </div>
             
            </div>
        </Container>
    )
}

export default Accounting_Banner2