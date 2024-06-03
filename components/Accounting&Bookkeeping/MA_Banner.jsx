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
                    Unleashing true synergy!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    When you merge or combine your business operations, overall performance efficiency typically rises. Recent times M&A have gained momentum in emerging and fast-moving UAE business world. Mergers and acquisitions in the UAE necessitate the involvement of experts who are familiar with the country&apos;s legal and tax systems.  
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    MS can quickly deploy skilled professional team that combine specialized M&A tax expertise with local and sector knowledge to handle any type of transaction you are considering, including an acquisition, disposition, merger, joint venture, IPO, public-to-private, restructuring, or refinancing. 
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