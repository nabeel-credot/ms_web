import React, { useEffect, useState } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Transaction.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Button from '../ButtonYellow'

function TAS_Lets_talk() {
    return (
        <div className={cstyles.TAS_Lets_talk_container}>
            <div className={styles.black_heading2  + " " + styles.textCntr}>
                Have Specific Questions?
            </div>
            <div className={styles.details24500TAS + " " + styles.textCntr}  style={{marginTop:40}}>
                Speak to our experts who can guide you in the right direction and help you to stay ahead.
            </div>
            <div className={cstyles.webOnly} style={{marginTop:60}}>
                <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="416px"
                    height="60px" src="/images/LarrowB.svg" href="/contact"/>
            </div>
            <div className={cstyles.mobOnly} style={{marginTop:60}}>
                <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="242px"
                    height="60px" src="/images/LarrowB.svg" href="/contact"/>
            </div>
        </div>
    )
}

export default TAS_Lets_talk