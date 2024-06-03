import React, { useEffect, useState } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Transaction.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Button from '../ButtonYellow'
import Image from 'next/image'
function TAS_Lets_talk() {
    return (
        <div className={cstyles.TAS_Lets_talk_container2}>
            <div className={cstyles.TAS_Lets_talk_container2L}>
                <div className={styles.details20Open400TAS}>
                    Our team’s decades of experience in M&A Advisory in UAE enables us to provide turn-key solutions.
                </div>
                <div className={styles.details24500+" "+styles.textCntrMob} style={{ marginTop: 30 }}>
                    Get the Right Guidance.
                </div>
                <div className={cstyles.webOnly} style={{marginTop:60}}>
                <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="346px"
                    height="60px" src="/images/LarrowB.svg" href="/contact"/>
            </div>
            <div className={cstyles.mobOnly} style={{marginTop:60}}>
                <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="242px"
                    height="60px" src="/images/LarrowB.svg" href="/contact"/>
            </div>
            </div>
            <div className={cstyles.TAS_Lets_talk_container2R}>
                <div className={cstyles.TAS_Lets_talk_container2R_img+" "+styles.webOnly}>
                    <div className={cstyles.img}>
                        <Image src="/images/SHAFEEK.png" alt="" width={148} height={132} />
                    </div>
                </div>
                <div className={cstyles.TAS_Lets_talk_container2R_img+" "+styles.mobOnly}>
                    <div className={cstyles.img}>
                        <Image src="/images/SHAFEEK.png" alt="" width={116} height={104} />
                    </div>
                </div>
                <div className={cstyles.TAS_Lets_talk_container2R_content}>
                    <div className={styles.detail16Po} style={{marginBottom:10}}>Speak to Our Team</div>
                    <div className={styles.details20500Y } style={{marginBottom:5}}>
                        Mohammed Shafeek
                    </div>
                    <div className={styles.detail16Po400} style={{marginBottom:10}}>Founder & CEO, MS</div>
                    <div className={cstyles.tasDF}>
                          <Image src="/images/PhoneB1.svg" alt="" width={25} height={25} />
                        <div className={styles.detailsTas}>+97123093344</div>
                    </div>
                    <div className={cstyles.tasDF}>
                    <Image src="/images/MailB.svg" alt="" width={25} height={25} />
                        <div  className={styles.detailsTas}>info@ms-ca.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TAS_Lets_talk