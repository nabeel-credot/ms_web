import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./FBA.module.css"
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
        <div className={styles.FBA_section3}>
            <div className={styles.FBA_section3_sub} >
                <div className={styles.FBA_section3_L} data-aos="fade-right">
                    <div className={cstyles.black36_heading_audit}>How can we help?</div>
                    <ul >
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>We offer leadership and executive coaching.</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>We assist in strategic and succession planning.</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>We provide advisory services for the family business.</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>We provide Tax Advisory Services and VAT health check-ups.</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>We provide financial analysis for the business.</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>We focus on efficiently managing your accounts and help grow your business.</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>We assist in optimizing governance and your business with the practical implementation of standards and system.</span>
                        </li>
                    </ul>

                </div>
                <div className={styles.FBA_section3_R}  data-aos="fade-left">
                    <Image src="/images/ubo_img.png" alt="" width="632" height="406" />
                </div>
            </div>
            <div className={cstyles.headingY24500+" "+cstyles.textCntr} style={{marginTop:30}}>
            Needless to say, we are there in creating the structure and processes that support families to create the strongest possible future!
            </div>
        </div>
        </Container>
    )
}

export default FBS_section3