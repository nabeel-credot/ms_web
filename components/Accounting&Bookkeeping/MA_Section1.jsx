import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./MA.module.css"
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
        <div className={cstyles.acountingBanner_container}>
            <div className={cstyles.acountingBanner_left} data-aos="fade-right">
                <div className={styles.black36_heading_audit}>
                    Specialists in
                    Owner Managed Businesses
                </div>


                <div style={{ marginTop: "10px" }} className={styles.details24400 + " " + styles.ac2_detail1Width}>
                MSians do compliment people’s worthy efforts. It’s high time we say that, if you’ve got the time and energy to review your business’ financial information and then interpret the data, hats off to you.
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details18Open + " " + styles.ac2_detail1Width}>
                In our experience, entrepreneurs simply have too much on their plate to deal with what is actually a very important task. Which is where the art of delegation comes into its own. Here’s where you need us, or rather, we help you. Bringing clarity to your management accounts is what we do best. We’ll identify the key financial indicators and drivers that will help analyse performance against targets and provide you with a broader picture of your business’ financial health. We can then give you valuable advice on your main concerns as an entrepreneur, including improving business growth, cash flow and rocketing profitability
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