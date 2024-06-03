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
                Startups are great, but scale ups matter too.
                </div>
                <div className={styles.black36_heading_audit}>
                Are you a business start up?  You should be looking at our services then.
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details20Open400BS + " " + styles.ac2_detail1Width}>
                We provide independent advisory on complex business problems at senior levels. We take a hands-on role to ensure solutions are not only conceived, but also delivered with genuine benefits.
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details20Open400BS + " " + styles.ac2_detail1Width}>
                We understand turning your corporate vision and strategy into operational reality can be challenging and disruptive to business as usual. Hence we provide direction, guidance and innovative services to support and enable the successful execution of change initiatives. Our experienced consultants guide and support your team through strategic based analysis to develop and implement the entire business portfolio, prioritizing projects and programs leading to achieve business success.
                </div>

                <div className={styles.black36_heading}  style={{ marginTop: "10px" }} > 
                Our leadership
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details20Open400BS + " " + styles.ac2_detail1Width}>
                We believe in performing with a “one team” attitude, with a sharp focus on winning and achieving results. Our partners lead the firm in our mission of delivering unprecedented results for our clients, our people, and our communities.
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