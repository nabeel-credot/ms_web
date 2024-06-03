import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookCall from './BookConsultationCall';

import Container from '../Common/Container';
import Image from 'next/image'
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
                    {/* <div className={styles.black36_heading_audit}>
                        ADGM
                    </div> */}

                    <div  className={styles.details18Open}>
                    Corporate bank opening is no more a concern when you have MS with you. Starting from liaising with the right corporate bank partner for you to getting things done, MS is right at your service.
                    </div>
                    <div className={cstyles.imgWrapperWork}>
                <Image src="/images/bank-account.jpg" alt="work" layout='fill' className={cstyles.borderR} objectFit="cover" />
                </div>
                </div>
                <div className={styles.RA_banner} data-aos="fade-left">
                    <BookCall  path={"adgm"}/>
                </div>
            </div>


        </Container>
    )
}

export default Accounting_Banner2