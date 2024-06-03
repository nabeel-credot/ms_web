import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Appointment from "./Appointment_schedule"
import { useState } from 'react';

import styles from "./Styles.module.css"
// import styles from "./Services.module.css"
import Image from 'next/image'
import Button from "../ButtonYellow"

import Container from '../Common/Container';
function HaveAnyQue() {
    const [appoint,setAppoint]=useState(false)

    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false
        })},[]);

    return (
        
      <div style={{backgroundColor:"#192B3A"}}>
             <Container>
                  <div className={styles.haveAnyQue_container} data-aos="fade-up">
            <div className={styles.imgContainer}>
            <div className={styles.qMarknew+" "+styles.logo_is_animetion}>
                    <Image src="/images/QMark_hom.svg" alt="" width={86} height={86} />
                </div>

                <div className={styles.qMark1+" "+styles.logo_is_animetion+" "+styles.webOnly3}>
                    <Image src="/images/QMark_hom.svg" alt="" width={24} height={24} />
                </div>
                <div className={styles.qMark1+" "+styles.mobOnly3}>
                    <Image src="/images/QMark_hom.svg" alt="" width={24} height={24} />
                </div>

                <div className={styles.qMark2+" "+styles.logo_is_animetion}>
                    <Image src="/images/QMark_hom.svg" alt="" width={52} height={52} />
                </div>
                

                <div className={styles.qMarknew3+" "+styles.logo_is_animetion}>
                    <Image src="/images/QMark_hom.svg" alt="" width={86} height={86} />
                </div>

                <div className={styles.qMark4+" "+styles.logo_is_animetion+" "+styles.webOnly3}>
                    <Image src="/images/QMark_hom.svg" alt="" width={24} height={24} />
                </div>
                <div className={styles.qMark4+" "+styles.mobOnly3}>
                    <Image src="/images/QMark_hom.svg" alt="" width={24} height={24} />
                </div>

                <div className={styles.qMark5+" "+styles.logo_is_animetion}>
                    <Image src="/images/QMark_hom.svg" alt="" width={52} height={52} />
                </div>

                <div className={styles.qMark6}>
                    <Image src="/images/QMark_hom.svg" alt="" width="52" height="52" />
                </div>


                <div className={styles.qMark7}>
                    <Image src="/images/QMark_hom.svg" alt="" width="52" height="52" />
                </div>
            </div>
            <div className={styles.haveAnyQue_para}>
            <div className={styles.havequeTitle}>
            <span style={{color:"white"}}>For your queries, we hold solutions</span>
            </div>
            <p className={styles.empowerpara} style={{color:"white"}}>
            Within the service landscape of the UAE and, MS stands as a leading tax and compliance service provider. With the bespoke solutions crafted for our clientele, we empower your growth and excellence. We don&apos;t just address challenges, we sculpt opportunities, enabling you and your enterprise to seize the very essence of progress and ascendancy. So, as you explore new opportunities, count on our support through our comprehensive Business Process Solutions.
We are also committed to keep you informed and empowered with timely updates on regulatory changes and tax laws.
<br/>
<br/>
When it comes to availing of top-tier services, rest assured, we&apos;ve got your back.
            </p>
            <div className={styles.connectbtn} onClick={()=>setAppoint(true)}>Meet Our Team</div>
        {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>} 
          </div>
            </div>
            </Container>
            </div>
       
       
    )
}

export default HaveAnyQue