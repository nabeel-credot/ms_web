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
                    Building Transparency
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    While the internet&apos;s rapid development has changed how people access information and communicate, improvements in data integrity and storage have sputtered. We can stream videos, communicate our opinions with people around the world, or instantly find a remote restaurant & order food using the internet. Data still gets lost, corrupted, filtered, unintentionally deleted, hacked, stolen, and destroyed despite the development of cloud storage technology.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Blockchain has the potential to solve all these issues. Developed in 2008, Blockchain is a technique for confirming bitcoin transactions, consist of a time-stamped, append-only collection of immutable data blocks that are not held by any one entity. A block of data cannot be altered or withdrawn after it has been added to the chain using cryptography. Bad people cannot alter it. Censors cannot take it away. What has already been given cannot be stolen by hackers. It could be just as ground-breaking for recording and data integrity as the internet has been for data access.
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