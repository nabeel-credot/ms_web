import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./ADGM.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookCall from './BookConsultationCall';
import Image from 'next/image'
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
                   
                    <div className={styles.details18Open}>
                    Complying with specific regulations and procedures is necessary when establishing a company in MASDAR. MASDAR offers a comprehensive range of corporate services aimed at assisting companies in meeting these regulatory requirements. These services encompass legal and accounting support, as well as aid in obtaining the required permits and licenses. MASDAR also provides assistance with corporate governance, company formation, and other matters following incorporation. At MASDAR Free Zone Business Consulting, our team of experts is dedicated to delivering reliable and professional corporate services, ensuring that our clients can smoothly operate their businesses while adhering to all relevant regulations. Our commitment extends to providing high-quality services such as financial advisory, investment consulting, tax planning, risk management, business growth strategies, and market research. Leveraging our extensive experience and knowledge of the local business landscape, we empower businesses to thrive in MASDAR and accomplish their long-term objectives.
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