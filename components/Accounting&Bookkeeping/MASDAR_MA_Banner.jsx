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
                    Masdar City, renowned for its sustainable innovation, offers a remarkable opportunity for businesses to establish themselves in an exceptional eco-friendly environment. As a management advisory firm, we highly recommend that companies in Masdar, as well as those considering incorporation in Masdar, prioritize sustainability as a core aspect of their operations. Embracing sustainable practices enables businesses to decrease their carbon footprint, enhance energy efficiency, and bolster their brand reputation. Moreover, Masdar City grants access to state-of-the-art technologies and research facilities, making it an ideal destination for companies operating in the clean energy sector. By capitalizing on the benefits offered by Masdar City, businesses can gain a competitive advantage while actively contributing to a more sustainable future. Reach out to us today for expert guidance on optimizing your business operations within the dynamic environment of Masdar City.
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