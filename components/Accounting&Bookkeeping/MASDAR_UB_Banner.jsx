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
                    <ul>
                        <li>
                    Quick Set-Up: Experience a streamlined process with a license to start operations in just 5 working days. 
                   </li>
                   <li>
                   100% Foreign Ownership: Enjoy the advantage of 100% foreign ownership, giving you full control of your business. 
                    </li> 
                    <li>
                    Tax-Free Zone: Benefit from a 100% tax-free environment, exempting you from corporate and personal income taxes. 
                        </li>
                        <li>
                        Freedom of Repatriation: Enjoy the flexibility of repatriating your profits with no restrictions. 
                        </li>
                        <li>
                        R&D Hub Partnership: Access collaboration opportunities with Khatifa University, a renowned research and development institution.
                        </li>
                        <li>
                        Zero Import Tariffs: Save costs with 0% import tariffs, eliminating import duties.
                        </li>
                        <li>
                        Strategic Location: Capitalize on the advantageous location between Abu Dhabi and Dubai, facilitating easy access to both major cities. 
                        </li>
                        <li>
                        Cost-Effective Licensing: Optimize your expenses with cost-effective licensing options and affordable office spaces.
                        </li>
                        <li>
                        Proximity to Infrastructure: Benefit from the proximity to ports, airports, and commercial centers, enhancing logistical efficiency. 
                        </li>
                        <li>
                        Favorable Regulations: Enjoy business-friendly regulations and choose from a range of affordable license packages. 
                        </li>
                        <li>Sustainable Living Environment: Experience a unique sustainable living environment, promoting eco-friendly practices.</li>
                        <li>Massive Geographical Reach: Utilize the strategic location of Masdar City to access a large geographical market. </li>
                        <li>Unique Services: Explore exclusive services including flexible visas, medical facilities, service desks, and furnished offices, catering to your diverse needs.</li>
                        <li>Unlock the unparalleled benefits offered by Masdar City for your business. Contact us today to explore how we can assist your success. </li>
                        </ul>
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