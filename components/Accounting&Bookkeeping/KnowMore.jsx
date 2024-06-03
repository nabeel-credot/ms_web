import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import cstyles from "./Styles.module.css"
import styles from "./Download.module.css"
import Button from '../ButtonYellow'
import Container from '../Common/Container';
function Download({ title, handleClick, bg }) {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

  

    return (
        <Container>
            <div className={bg ? styles.downloadContainer : ""} data-aos="fade-up">
                <div className={styles.downloadContainerBlue}>
                    <div className={styles.downloadTitle}>
                        {title}
                    </div>   
                        <div className={cstyles.webOnly} onClick={()=>{handleClick(true)}}>
                            <Button value="Book a Free Consultation" backgroundColor="#D5AF32" color="#192B3A" width="352px"
                                height="60px" src="/images/LarrowB.svg" style={{fontSize:"20px"}} />
                        </div>
                        <div className={cstyles.mobOnly} onClick={()=>{handleClick(true)}}>
                            <Button value="Book a Free Consultation" backgroundColor="#D5AF32" color="#192B3A" width="250px"
                                height="40px" src="/images/LarrowB.svg"  />
                        </div>
                </div>
            </div>
        </Container>

    )
}

export default Download