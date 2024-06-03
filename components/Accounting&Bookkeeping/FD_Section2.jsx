import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./FD.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <div className={styles.FD_Section2_container} data-aos="fade-up">
            <div className={cstyles.black36_heading_audit} style={{marginBottom:30}}>
            Here are just a few ways our FD on<br/> demand service can help you
            </div>
            <div className={styles.FCS_Section3_sub}>
            <div className={styles.FCS_Section3_L}>
                <ul>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25}  /></div>
                        <span className={styles.key + " " + cstyles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>
                        Support business decision-making.</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25}  /></div>
                        <span className={styles.key + " " + cstyles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>
                        Liaise on behalf of the business with outside organizations, including the company’s bankers.</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25}  /></div>
                        <span className={styles.key + " " + cstyles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>
                        Work with the director(s) to develop the business’ strategy, goal setting and milestone tracking.</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25}  /></div>
                        <span className={styles.key + " " + cstyles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>
                        Manage or assist the implementation of cost saving/restructuring programs.</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25}  /></div>
                        <span className={styles.key + " " + cstyles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>
                        Review progress and support the business’ and directors’ personal tax planning.</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} /></div>
                        <span className={styles.key + " " + cstyles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>
                        Review existing remuneration packages for staff members.</span>
                    </li>
                   
                  
                </ul>
            </div>

            <div className={styles.FCS_Section3_L}>
                <ul>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} /></div>
                        <span className={styles.key + " " + cstyles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>
                        Provide specialist input if your business requires additional funding or reorganization.</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25}  /></div>
                        <span className={styles.key + " " + cstyles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>
                        Provide advice and guidance on financial systems, controls, policies and procedures</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25}  /></div>
                        <span className={styles.key + " " + cstyles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>
                        Prepare and/or review management accounts, analysis and commentary.</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} /></div>
                        <span className={styles.key + " " + cstyles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>
                        Perform share and business valuations.</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25}  /></div>
                        <span className={styles.key + " " + cstyles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>
                        Assist in the preparation or detailed review of financial forecasts, budgets and business plans.</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25}  /></div>
                        <span className={styles.key + " " + cstyles.details18BlackPo400ForLi+" "+cstyles.keyWidth }>
                        Advise on the structure and recruitment of the finance team within the business.</span>
                    </li>
                  
                </ul>
            </div>
          
           
            </div>
        </div>
        </Container>
    )
}

export default FCS_Section3