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
                    Meet your most demanding value!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Understanding the value of your business is very important, even if it is not meant for any business transactions or for inheritance purposes. Value defines the worth. Choosing a transaction value that is fair to all parties and acceptable to them is crucial. Business valuation necessitates in-depth financial analysis, which should be performed by a team of valuation professionals. Understanding how value has been created in the past and how it will be created moving forward is essential for business valuation.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Valuation is not a precise science. However, to determine the value that a business possess, the analysis cannot be done by just examining a company&apos;s past performance. We must comprehend the environment, including its economic, industrial, social, and other factors, as well as its internal resources and human capital, to evaluate its likelihood of future financial success.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    MS team of professionals use multiple methods, approaches and applicable benchmarks while carrying out Business valuation services. MS will provide you genuine and accurate reports to help you make sound financial decisions, whether you are buying or selling a business.
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