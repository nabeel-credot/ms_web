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
                    Helping you choose the right path!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        If you have an idea, conducting a feasibility study can clearly identify every potential issue or problem that could arise once a plan is enforced or implemented.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        Our feasibility study assesses the economic, environmental, and technical aspects of your business idea. The primary benefit of an MS feasibility study is that our research team rationally and objectively identify the advantages and disadvantages of ongoing or current business initiative, as well as the opportunities and risks hidden and finally, the likelihood of success.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Once the feasibility study is completed and if the idea is proved to be feasible, preparing a business plan will aid in executing the idea. Our business plan outlines how the company will run, and it includes the aims and objectives of the company as well as the deadlines for achieving each goal and potential tactics. Every business especially startups must have a business plan in place before it commences the business. This will ensure them to gain more attraction towards investors.
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