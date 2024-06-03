import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import cstyles from "./Styles.module.css"
import styles from "./Download.module.css"
import Button from '../ButtonYellow'
import Container from '../Common/Container';
function Download({ title, action, bg }) {

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
                    <form method="get" action={action}>
                        <div className={cstyles.webOnly}>
                            <Button value="Download" backgroundColor="#D5AF32" color="#192B3A" width="278px"
                                height="60px" src="/images/LarrowB.svg" href="/" />
                        </div>
                        <div className={cstyles.mobOnly}>
                            <Button value="Download" backgroundColor="#D5AF32" color="#192B3A" width="180px"
                                height="40px" src="/images/LarrowB.svg" href="/" />
                        </div>

                    </form>

                </div>
            </div>
        </Container>

    )
}

export default Download