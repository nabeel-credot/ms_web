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
                        MS in MASDAR
                    </div>
                    <div style={{ marginTop: "15px" }} className={styles.details18Open}>
                        <span style={{ fontWeight: "bold", fontStyle: "italic",marginRight:3 }}>
                            &quot;Establish your Sustainable Business in UAE&apos;s Masdar City Free Zone - Your Gateway to Regional Success&quot;.
                        </span>
                        Looking to set up your tech business in the UAE?
                        Masdar City Free Zone offers a strategic location, favorable regulations,
                        and a unique sustainable living environment for startups and established tech companies alike.
                        Looking to set up your tech business in the UAE? Masdar City Free Zone offers a strategic location,
                        favorable regulations, and a unique sustainable living environment for startups and established tech companies alike. 
                        <span style={{ fontWeight: "bold", fontStyle: "italic",margin:"0 3px" }}>
                             Masdar City Free Zone: The Ideal Location for Sustainable Tech Businesses in UAE </span>
                         Masdar City, located 17 km from Abu Dhabi, is a planned city that serves as a role model for sustainable urban growth. It is built entirely on renewable energy sources and serves as a regional hub for clean tech businesses. The Masdar City Free Zone is the perfect destination for technology companies and general businesses looking to establish or expand their roots in the United Arab Emirates.
                    </div>



                </div>

                <div className={styles.RA_banner} data-aos="fade-left" >
                    <BookCall />
                </div>
            </div>


        </Container>
    )
}

export default Accounting_Banner2