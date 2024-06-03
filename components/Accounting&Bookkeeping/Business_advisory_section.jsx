import React, { useEffect } from 'react'
import styles from "./Business.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';
function Business_advisory_section() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
             <div className={styles.Business_advisory_section1} data-aos="fade-up">
            Don’t Adapt to the energy in the room. Rather influence the energy in the room!
            To be that influencer, stay proactive!
        </div>
        </Container>
       
    )
}

export default Business_advisory_section