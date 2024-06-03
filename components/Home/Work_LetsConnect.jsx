import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'

import styles from "./LetsConnect.module.css"
import Form from "../WhiteCardWork"
import Button from "../ButtonYellow"

import 'react-toastify/dist/ReactToastify.css';
function LetsConnect() {
    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <div className={styles.letsConnect_container}>
            <div className={styles.letsConnect_left} data-aos="fade-right">
                    <Form style={{  display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div className={styles.webOnly}>
                    <Image src="/images/logo3.svg" alt="" width={224} height={223} />
                    </div>
                    <div className={styles.mobOnly}>
                    <Image src="/images/logo3.svg" alt="" width={162} height={161} />
                    </div>
                    <div className={styles.form_heading3} style={{marginTop:10}}>
                    Your Success. Our Commitment.
                    </div>
                    
                    <div className={styles.webOnly}  style={{  marginTop: 40, marginBottom: 30 }}>
                        <Button value="Start the Conversation" backgroundColor="#D5AF32" color="#192B3A" width="406px"
                            height="75px" src="/images/LarrowB.svg" href="/contact" />
                    </div>
                    <div className={styles.mobOnly}  style={{  marginTop: 40, marginBottom: 30 }}>
                        <Button value="Start the Conversation" backgroundColor="#D5AF32" color="#192B3A" width="256px"
                            height="50px" src="/images/LarrowB.svg" href="/contact" />
                    </div>
                </Form>
            </div>
            <div className={styles.letsConnect_right+" "+styles.webOnly3} data-aos="fade-left">
                <Form  style={{ position:"relative", display: "flex", flexDirection: "column",padding:80}}>
                    <div className={styles.form_heading1}>
                        Let’s Connect
                    </div>
                    <div className={styles.letsConnect_detail2+" "+styles.margin}>
                        Reach out to us for all your queries. Assuring you a best solution from the most energetic team at MS.
                    </div>
                    <div className={styles.webOnly2}  >
                        <Button value="Our Team" backgroundColor="#D5AF32" color="#192B3A" width="340px"
                            height="70px" src="/images/LarrowB.svg" href="/team_msain" />
                    </div>
                </Form>

            </div>
            <div className={styles.letsConnect_right+" "+styles.mobOnly} data-aos="fade-left">
                <Form  style={{   display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div className={styles.form_heading1}>
                        Let’s Connect
                    </div>
                    <div className={styles.letsConnect_detail+" "+styles.margin}>
                        Reach out to us for all your queries. Assuring you a best solution from the most energetic team at MS.
                    </div>
                    <div   style={{  marginTop: 40, marginBottom: 30 }}>
                        <Button value="Our Team" backgroundColor="#D5AF32" color="#192B3A" width="201px"
                            style={{padding:10}} src="/images/LarrowB.svg" href="/ms" />
                    </div>
                </Form>

            </div>
        </div>
    )
}

export default LetsConnect