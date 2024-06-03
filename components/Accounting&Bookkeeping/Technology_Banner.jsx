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
                        Adopting a digital strategy entail blazing a trail!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        The objectives of every organization are unique. To generate development, reduce expenses, and invest in the future, you need innovative ideas, a business perspective, change management competence, and proper evaluation of relevant legal frameworks. Your success will be greatly influenced by technology, which will assist you in addressing important goals including regulatory requirements, external threats, and expansion aspirations.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        Technology developments, gives businesses a steady stream of chances to get better, more effective, leaner, innovative, and successful. For many firms, getting the most out of technology while properly managing the risks associated with it continues to be difficult. We assist our clients by assisting them in using information technology to accomplish their business goals. It is a &ldquo;client side&rdquo;  service centered on the provision of credible professional advice
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