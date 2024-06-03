import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Styles.module.css"
import Image from 'next/image'

import Container from '../Common/Container';
function Fdd_sub1() {

    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false,
        })},[]);
        

    return (
        <Container>
        <div className={styles.fdd_sub3} data-aos="fade-up">
            <div className={styles.fdd_sub3_L}>
                <div className={styles.black36_heading_audit}>
                    Financial due diligence also helps you:
                </div>
                <div className={styles.fdd_sub3_list}>
                    <div>  <Image src="/images/fdd1.svg" alt="" width={50} height={50} /></div>
                    <div className={styles.details18Open} style={{ marginLeft: 10 }}>
                        Assess the current management’s ability to maintain financials.
                    </div>
                </div>
                <div className={styles.fdd_sub3_list}>
                    <div>  <Image src="/images/fdd2.svg" alt="" width={50} height={50} /></div>
                    <div className={styles.details18Open} style={{ marginLeft: 10 }}>
                    Understand any outstanding balance sheet liabilities, such as taxes due and accounts payable.
                    </div>
                </div> <div className={styles.fdd_sub3_list}>
                    <div>  <Image src="/images/fdd3.svg" alt="" width={50} height={50} /></div>
                    <div className={styles.details18Open} style={{ marginLeft: 10 }}>
                    Spot vendor/supply chain or key customer concentration risks.
                    </div>
                </div>
                 <div className={styles.fdd_sub3_list}>
                    <div>  <Image src="/images/fdd4.svg" alt="" width={50} height={50} /></div>
                    <div className={styles.details18Open} style={{ marginLeft: 10 }}>
                    Gain insights into potential revenue declines or major expenses that might be on the horizon.
                    </div>
                </div>
                <div className={styles.details18Open} style={{marginTop:20}}>
                With this information in hand, you’ll be better able to determine a clear valuation for your potential investment and set a working capital target that makes sense for your business needs.
                </div>
            </div>
            <div className={styles.fdd_sub3_R}>
                <div>
                     <Image src="/images/fddSub3.png" alt="" width="500" height="365" style={{borderBottomLeftRadius:"50px",borderTopRightRadius:"50px"}}/>
                </div>
               
            </div>
        </div>
        </Container>
    )
}

export default Fdd_sub1