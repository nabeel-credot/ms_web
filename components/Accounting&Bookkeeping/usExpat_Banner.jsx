import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import BookCall from './BookConsultationCall';
import Button from '../ButtonYellow'

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
                    <div className={styles.black36_heading_audit}>
                        Get your US Tax filed right with MS soon!
                    </div>

                    <div style={{ marginTop: "10px" }} className={styles.headingY24500}>
                        Know this now!
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        If, you are living in the UAE, and you still remain a citizen or permanent resident of the United States, then you will need to file a US tax return based on your worldwide income with the US federal government each year. In addition to the income tax return, you may be required to file further informational returns based on assets held outside the US. With our step by step guidance we ensure your tax return is filed in compliance with the IRS law and you are not paying excess taxes. Your taxes will be prepared by our US tax experts who specializes in US expatriate taxation, ensuring your taxes are prepared correctly and that you take advantage of all the expatriate concessions available.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.headingY24500}>
                        Why pay more when you have people around to help you with your tax issues?
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                        Our sole focus is tax return preparation and providing advisory services to Americans living abroad. From simple tax returns to very complex tax returns, we have the expertise to guide you in any situation and give you the peace of mind you need.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                        Because, our clients are important. And we value your mental health.
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