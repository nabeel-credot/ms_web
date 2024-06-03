import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting2.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
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
                <div className={styles.black36_heading}>
                    Leverage your uniqueness!
                </div>

                <div className={styles.details18Open} style={{marginTop:"10px"}}  >
                    Retail, construction, contracting, real estate, manufacturing and distribution, hospitality or health care, logistics, export or import – We understand the differences, but your solution is all at one place!
                </div>
                <div  style={{marginTop:"20px"}} className={styles.details18Open}>
                    Uniqueness is not a quality that everyone possesses. We believe that every single organization is different, which is why we offer bespoke financial solutions to all our clients. Utilizing our expertise and experience, we focus not only on efficiently managing your accounts, but also growing your business.
                </div>
                <div  style={{marginTop:"20px"}} className={styles.details18Open}>
                Accounting is the backbone of any business. It is one of the most adaptable services due to its flexibility and can be applied anywhere between our personal lives up until government finance. 
                </div>
                <div  style={{marginTop:"20px"}} className={styles.details18Open}>
                We believe in smart work and thereby provide customized accounting services tailored to our client’s needs by saving their time and money. We also assist to comply with tax regulations and procedures and let them focus on achieving the results. 
                </div>
            </div>
            <div className={cstyles.acountingBanner2Book_right} data-aos="fade-left">
            <BookCall />
            </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2