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
        <div className={styles.acountingBanner_containerBook2}>
            <div className={styles.FAS_Banner_left} data-aos="fade-right">
                <div className={styles.bookbanner_details}>
                Are you sure, what you feel about your business, is what’s real? 
                </div>

                <div style={{marginTop:"10px"}} className={ styles.bookbanner2_heading}>
                Pre-booked expenses, advance income, provision for depreciating, accrued revenue. We know, these are not the things you should be cracking your heads on.
                </div>
                <div  style={{marginTop:"20px"}} className={styles.bookbanner2_headingY}>
                We know – You have an endless list of tasks to accomplish. Managing your books shouldn’t be one of them. We are particular about that!
                </div>
                <div  style={{marginTop:"20px"}} className={styles.details18Open+" "+styles.detailWidth}>
                Having all your transactions organized is the most important task in a business. Every stakeholder of your business is interested in looking at your company’s financial statements. Opting for Professional accounting and bookkeeping services in Abu Dhabi, UAE can help you run your business smoothly and efficiently. Bookkeeping services may offer some crucial insight into your business’s financial situation. It may be positive or negative insight, but either way it is valuable information you may have missed otherwise!
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