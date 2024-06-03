import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Smartup.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../ButtonYellowForm'

import Container from '../Common/Container';
function SmartUP_section2({ resultRef }) {
    const onSubmit = (e) => {
        e.preventDefault();
        resultRef?.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);
    return (
        <Container>
            <div className={cstyles.smartUp_sec2_container}>
                <div className={cstyles.smartUp_sec2_left} data-aos="fade-right">
                    <div className={styles.black36_heading_audit}>
                        Our SmartUp Package is the one-stop-shop for all the upcoming entrepreneurs.
                    </div>
                </div>
                <div className={cstyles.smartUp_sec2_right} data-aos="fade-left">
                    <div className={styles.details18Open}>
                        Here you will find advice and tips to help you launch your business. We&apos;ll take your numbers on track and take you through the journey.
                    </div>
                    <div className={styles.webOnly4} style={{ marginTop: 30 }} onClick={onSubmit}>
                        <Button value="Enquire Now" backgroundColor="#D5AF32" color="#192B3A" width="382px"
                            height="75px" src="/images/LarrowB.svg" style={{fontSize:20}} arrowH={20} arrowW={12}/>
                    </div>
                    <div className={styles.mobOnly4} style={{ marginTop: 30 }} onClick={onSubmit}>
                        <Button value="Enquire Now" backgroundColor="#D5AF32" color="#192B3A" width="218px"
                            height="50px" src="/images/LarrowB.svg" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SmartUP_section2