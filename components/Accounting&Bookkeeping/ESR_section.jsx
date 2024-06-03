import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'

import Container from '../Common/Container';
function ESR_section() {

    useEffect(() => {
        AOS.init({
          duration: 1400,
          once: false,
        })
      }, []);
    
    return (
        <Container>
        <div className={styles.esrConsequence} data-aos="fade-up">
            <div className={styles.white_heading + " " + styles.textCntr}>
                Consequences?
            </div>
            <div className={styles.textCntr + " " + styles.details18OpenWhite + " " + styles.esrPadding}>
                In case an entity does not adhere to the Economic Substance Regulations and fails to notify its Regulatory Authority, the entity will face penalty charges for the following situations:
            </div>
            <div className={styles.esrSection_sub}>
                <div className={styles.headingW24500} style={{ marginBottom: 30, marginTop: 30 }}>
                    Failure to notify:
                </div>
                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key + " " + styles.keyWidth}>AED 10,000 to AED 50,000</span>
                    </li>
                </ul>
                <div className={styles.headingW24500} style={{ marginBottom: 30, marginTop: 30 }}>
                    Failure to provide accurate or complete information:
                </div>
                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key + " " + styles.keyWidth}>AED 10,000 to AED 50,000</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key + " " + styles.keyWidth}>Deemed failure to demonstrate economic substance in the UAE.</span>
                    </li>
                </ul>
                <div className={styles.headingW24500ESR} style={{ marginBottom: 30, marginTop: 30 }}>
                Failure to demonstrate sufficient economic substance in the UAE for the relevant financial year:
                </div>
                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key+" "+styles.keyWidth }><span style={{color:"#D4AE31"}}>FIRST FAILURE</span>: The penalty of AED 10k to 50k and information exchange with the foreign competent authority of (1) parent company, (2) ultimate parent company, and (3) ultimate beneficial owner.</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key+" "+styles.keyWidth}><span  style={{color:"#D4AE31"}}>CONSECUTIVE FAILURE</span>: The penalty of AED 100k to 300k and Trade / commercial license could be suspended, withdrawn or not renewed and Information exchange with the foreign competent authority of (1) parent company, (2) ultimate parent company, and (3) ultimate beneficial owner.</span>
                    </li>
                </ul>
            </div>
        </div>
        </Container>
    )
}

export default ESR_section