import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./FCS.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Button from '../ButtonYellow'
import Image from 'next/image'
import Container from '../Common/Container';
function FCS_Section3() {
    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);
    return (
        <Container>
        <div className={cstyles.FCS_Section3_container} data-aos="fade-up">
            <div className={styles.black36_heading_audit+" "+cstyles.mb}>
            A Financial Controller’s Duty, Which You Can Rightfully Look Up to:
            </div>
            <div className={cstyles.FCS_Section3_sub}>
            <div className={cstyles.FCS_Section3_L}>
                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>Regular budget consolidation and Forecasting</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>Cash flow management and projections</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>Management of bookkeeping and accounting processes</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi +" "+cstyles.keyWidth}>Mentoring</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi+" "+cstyles.keyWidth}>Boost efficiencies and cut costs around the company</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>Inventory tracking and job costing</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi +" "+cstyles.keyWidth}>Oversight and reporting month-end closingsg</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>Key metrics benchmarking</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>Payroll processing</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>High quality of financial reporting and analysis</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>Developing financial reviews investment advisory</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>Advisory services and audit preparation</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>Accounting documentation including procedures and processes</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi +" "+cstyles.keyWidth}>Stakeholder management</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <span className={cstyles.key + " " + styles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>Ensuring compliance with statutory law and financial regulations</span>
                    </li>
                  
                </ul>
            </div>
            {/* <div className={styles.FCS_Section3_R}></div> */}
            <div className={cstyles.letsTalk_Blue}>
                <div><Image src="/images/logo3.svg" alt="" width="182" height="181" /></div>
                <div className={styles.details24400W + " " + styles.textCntr} style={{ marginTop: 25 }}>
                I would like help with my business <br/>strategy
                </div>
                <div style={{ marginTop: 25 }}>
                    <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="415px"
                        height="60px" src="/images/LarrowB.svg" href="/contact" />
                </div>
            </div>
            </div>
        </div>
        </Container>
    )
}

export default FCS_Section3