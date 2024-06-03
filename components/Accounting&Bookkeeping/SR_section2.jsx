import React, { useEffect } from 'react'
import styles from "./CTT.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'
import Container from '../Common/Container';

function WhatYouGetWithMs() {
    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container style={{padding:0}}>
        <div className={styles.WhatYouGetWithMs_container3}>
            <div className={styles.WhatYouGetWithMs_left2} data-aos="fade-right">
                <div className={styles.heading2}>
                    The Services we<br /> provide are wide-<br /> ranging and<br /> include
                </div>

            </div>
            <div className={styles.WhatYouGetWithMs_right5} data-aos="fade-left">

                <div className={styles.WhatYouGetWithMs_box6_sr} >
                    <div className={styles.yellowBgImg}>
                        <Image src="/images/sr1.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail7 + " " + styles.textCntr}>
                        Identification of ‘key<br /> priorities’ for the business <br />and entrepreneur, which <br />
                        can be used in business <br />planning.</div>
                </div>
                <div className={styles.WhatYouGetWithMs_box6_sr} style={{ borderLeft: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg}>
                        <Image src="/images/sr2.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail7}>
                        Facilitated session with<br /> experienced professionals<br /> trained to ask those<br /> insightful questions.
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box6_sr} style={{ borderLeft: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg}>
                        <Image src="/images/sr3.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail7}>
                        Can be delivered in an <br />
                        integrated way with other<br /> advisors – lawyers,<br />
                        bankers, non-executive<br /> directors etc. – to suit<br /> your needs.
                    </div>
                </div>

            </div>
            <div className={styles.expertMobWrap} data-aos="fade-up">
                <h3> The services we provide are wide-ranging and include:</h3>
                <div style={{ marginTop: 30 }}>
                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg} >
                                <Image src="/images/sr1.svg" alt="" width="40" height="40" />
                            </div>
                        </div>

                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail7} >
                            Identification of ‘key priorities’ for the business and entrepreneur, which 
                        can be used in business planning.</div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg} >
                                <Image src="/images/sr2.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail7}  >
                            Facilitated session with  experienced professionals  trained to ask those  insightful questions.
                            </div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg} >
                                <Image src="/images/sr3.svg" alt="" width="40" height="40" />
                            </div>
                        </div>

                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail7}  >
                            Can be delivered in an 
                        integrated way with other advisors – lawyers,
                        bankers, non-executive directors etc. – to suit your needs.
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
        </Container>
    )
}

export default WhatYouGetWithMs