import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./FBA.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

import Container from '../Common/Container';
function FBS_section3() {
    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container>
        <div className={cstyles.FBA_section4} data-aos="fade-up">
            <div className={cstyles.FBA_section3_sub}>
                <div className={cstyles.FBA_section4_L}>
                    <div className={styles.black36_heading_audit}>How can we help?</div>
                    <ul >
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>We offer leadership and executive coaching.</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>We assist in strategic and succession planning.</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>We provide advisory services for the family business.</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>We provide Tax Advisory Services and VAT health check-ups.</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>We provide financial analysis for the business.</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>We focus on efficiently managing your accounts and help grow your business.</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>We assist in optimizing governance and your business with the practical implementation of standards and system.</span>
                        </li>
                    </ul>

                </div>

                <div className={styles.details24400 + " " + styles.mobOnly} style={{ marginTop: 30, marginBottom: 30 }}>
                    Needless to say, we are there in creating the structure and processes that support families to create the strongest possible future!
                </div>

                <div className={cstyles.FBA_section3_R}>
                    {/* <div className={styles.webOnly}> */}
                        <Image src="/images/howCanWeHelp_img.jpg" alt="" width="632" height="553" />
                    {/* </div> */}
                    {/* <div className={styles.mobOnly}>
                        <Image src="/images/howCanWeHelp_img.jpg" alt="" width="400" height="302" />
                    </div> */}

                </div>

            </div>
            <div className={styles.details24400 + " " + styles.webOnly} style={{ marginTop: 30 }}>
                Needless to say, we are there in creating the structure and processes that support families to create the strongest possible future!
            </div>
        </div>
        </Container>
    )
}

export default FBS_section3