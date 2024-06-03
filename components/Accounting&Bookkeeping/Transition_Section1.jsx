import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Transition.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'
import Button from '../ButtonYellow'
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
            <div className={styles.transition_section1_container}>
                <div className={styles.transition_section1_L} data-aos="fade-right">
                    <div className={cstyles.black36_heading_audit}>
                        Transitioning your business &<br /> leaving a legacy.
                    </div>


                    <div style={{ marginTop: "20px" }} className={cstyles.details18Open + " " + cstyles.ac2_detail1Width}>
                        An early planning of your succession provides more options, more control, and a better chance at a successful transfer to the next generation.
                    </div>

                    <div style={{ marginTop: "20px" }} className={cstyles.details18Open + " " + cstyles.ac2_detail1Width}>
                        We offer clients a more nuanced, more relational and operational approach. We are focused as much on “quick wins” that build momentum as we are on building foundations for the long term.
                    </div>

                </div>
                <div className={styles.transition_section1_R} data-aos="fade-left">
                <div className={styles.logoWrap}><Image src="/images/logo3.svg" alt=""layout='fill'/></div>
                    <div className={cstyles.details24400W + " " + cstyles.textCntr + " " + styles.spclWidth} style={{ marginTop: 25 }}>Experience the visionary financial solutions <br />by MSian’s</div>
                    <div className={styles.webOnly} style={{ marginTop: 25 }}>
                        <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="415px"
                            height="60px" src="/images/LarrowB.svg" href="/contact" />
                    </div>
                    <div className={styles.mobOnly} style={{ marginTop: 25 }}>
                        <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="196px"
                            height="50px" src="/images/LarrowB.svg" href="/contact" />
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default Accounting_Banner2