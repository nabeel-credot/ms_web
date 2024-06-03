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
                    {/* MS | Company Formation  Advisory and Assistance  */}
                    MS | DMCC Freezone Setup Services
                    </div>

                    <div className={styles.details18Open}>
                        With more than 22000 companies and 170 new ones who join each month, DMCC is the dedicated global center for wide range of industries and sectors.
                        If you are thinking about setting up a business in the DMCC Free Zone, MS  is here to help you in Dubai every way possible starting from pre business setup services onwards. We can help you designing a unique plan and package, establish the best corporate structure, establish and complete the registration process in dmcc portal, locate the ideal location of your  future company, and support you as you progress toward success in the world&apos;s top free zone. Write to us to know more about DMCC company formation and License Cost.
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