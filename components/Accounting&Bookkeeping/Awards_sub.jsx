import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import cstyles from "./Styles.module.css"
import styles from "./Awards.module.css"
import Image from 'next/image'

function Awards_section2() {

    useEffect(() => {
        AOS.init({
          duration: 1400,
          once: false,
        })
      }, []);

  return (
    <div className={styles.award_container}>
            <div className={styles.award_container_L} data-aos="fade-right">
                <Image src="/images/award_winning_team.png" alt="" width={400} height={376} />
             </div> 
            
            <div className={styles.award_container_R} data-aos="fade-left">
                <div className={cstyles.black36_heading_audit+" "+cstyles.textCntrMob}>
                    Globally Recognized Advisor
                </div>
                <div className={cstyles.details18Open+" "+cstyles.textCntrMob} style={{marginTop:20}}>
                    We are proud to be a longstanding member of Global Advisory Expert Association, which currently represented in over 140 countries accredited with 2000+ experts. MS has been recognized as an accomplished firm in the domain of tax advisory & accounting service in the UAE.
                </div>
                <div  className={cstyles.details18Open+" "+cstyles.textCntrMob} style={{marginTop:20}}>
                    MS CEO, Mohammed Shafeek was selected for this prestigious role as a global advisor addressing the need for business outcomes that challenge the status quo in our rapidly changing environment. Underpinning his approach is the unique combination of creative thinking, sound business acumen and real-world knowledge & experience in design, delivery and operations.
                </div>
                <div  className={cstyles.details18Open+" "+cstyles.textCntrMob} style={{marginTop:20}}>
                  Mohammed Shafeek partners with clients throughout the business, leveraging his expertise to deliver integrated solutions with long-term benefits.
                </div>
            </div>
        </div>
  )
}

export default Awards_section2