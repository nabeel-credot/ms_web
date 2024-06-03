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
                We love minimizing our clients’ tax liabilities. Isn’t that you’re looking for?
                </div>

             
                <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                    But why? Because it’s what we’re good at and it’s guaranteed to put a smile on the face of any shrewd business. There’s a lot more in a simple smile, we believe.
                </div>
                <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Tackling tax is all about adopting a commonsense approach that fits the individual. Much like a fingerprint, every business’ tax situation is unique – there’s no one-size-fits-all. So, we look at your circumstances with fresh eyes and apply our expertise according to your business’ numbers.
                </div>
                <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    If we already produce your annual accounts, this process will be seamless. Our Tax team work closely with our Accounts team to amplify efficiencies and value. We’re also proactive about how your tax liability can be mitigated and, importantly, what can be done in future to reduce your tax burdens. We can ensure your business is fully compliant with the numerous key filings and legislation, and that you have minimized your liability.
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