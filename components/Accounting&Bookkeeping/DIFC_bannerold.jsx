import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./ADGM.module.css"
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
                <div className={styles.FAS_Banner_left} data-aos="fade-right" >
                    <div className={styles.black36_heading_audit}>
                    What is Dubai International Financial Centre (DIFC)?
                    </div>
                    <div style={{ marginTop: "15px" }} className={styles.details18Open}>
                    DIFC, the Dubai International Financial Centre, stands as a beacon of excellence in the world of finance. Renowned as a world-class financial centre, DIFC has redefined the landscape of global finance with its cutting-edge infrastructure, independent regulatory framework, and a vibrant, multinational community of businesses and professionals. As a hub for international financial institutions, law firms, and service providers, DIFC offers a dynamic ecosystem where innovation, growth, and global connectivity thrive. With its unparalleled tax advantages, transparent legal system, and strategic location in the heart of Dubai, DIFC provides an unrivalled platform for businesses seeking to make their mark on the international financial stage.
                    </div>
                    <div style={{ marginTop: "10px" }} className={styles.details18Open}>
                    DIFC also offers the largest innovation community in the region, supporting companies and generating new economic value.
Discover the world of opportunities that DIFC presents to those who aspire to be at the forefront of the financial industry.
                    </div>

                   
                </div>
                <div className={styles.RA_banner} data-aos="fade-left" >
                    <BookCall path={"difc"} />
                </div>
            </div>


        </Container>
    )
}

export default Accounting_Banner2