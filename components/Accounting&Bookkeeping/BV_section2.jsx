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
        <Container style={{ padding: 0 }}>
            <div className={styles.WhatYouGetWithMs_container3}>
                <div className={styles.WhatYouGetWithMs_left2} data-aos="fade-right">
                    <div className={styles.heading2}>
                        The Services we<br /> provide are wide-<br /> ranging and<br /> include
                    </div>

                </div>
                <div className={styles.WhatYouGetWithMs_right4} data-aos="fade-left">

                    <div className={styles.WhatYouGetWithMs_box6} style={{ borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                        <div className={styles.yellowBgImg}>
                            <Image src="/images/bv1.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.whatYouGetWithMsDetail5 + " " + styles.textCntr}>
                            Business<br/> Combinations /<br/>Relocation Valuation.</div>
                    </div>
                    <div className={styles.WhatYouGetWithMs_box6} style={{ borderLeft: ".5px solid rgba(33, 33, 32, 0.2)", borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                        <div className={styles.yellowBgImg}>
                            <Image src="/images/bv2.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.whatYouGetWithMsDetail5}>
                            Goodwill and Other Intangible Assets Valuations.
                        </div>
                    </div>
                    <div className={styles.WhatYouGetWithMs_box6} style={{ borderLeft: ".5px solid rgba(33, 33, 32, 0.2)", borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                        <div className={styles.yellowBgImg}>
                            <Image src="/images/bv3.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.whatYouGetWithMsDetail5}>
                            Business Financial modeling.
                        </div>
                    </div>
                    <div className={styles.WhatYouGetWithMs_box6} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                        <div className={styles.yellowBgImg}>
                            <Image src="/images/bv4.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.whatYouGetWithMsDetail5}>
                            Impairment or<br/> Disposal of Long-Lived Assets.
                        </div>
                    </div>
                    <div className={styles.WhatYouGetWithMs_box6} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                        <div className={styles.yellowBgImg}>
                            <Image src="/images/bv5.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.whatYouGetWithMsDetail5}>

                            Shareholder Value Optimization.
                        </div>
                    </div>
                    <div className={styles.WhatYouGetWithMs_box6} >
                        <div className={styles.yellowBgImg}>
                            <Image src="/images/bv6.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.whatYouGetWithMsDetail5}>
                            Business Advisory.
                        </div>
                    </div>
                </div>


                <div className={styles.expertMobWrap} data-aos="fade-up">
                    <h3> The services we provide are wide-ranging and include:</h3>
                    <div style={{ marginTop: 30 }}>
                        <div className={styles.displayFlex}>
                            <div className={styles.imgBox}>
                                <div className={styles.yellowBgImg} >
                                    <Image src="/images/bv1.svg" alt="" width="40" height="40" />
                                </div>
                            </div>

                            <div className={styles.contentBox}>
                                <div className={styles.whatYouGetWithMsDetail5} >
                                    Business Combinations / Relocation Valuation..</div>
                            </div>
                        </div>

                        <div className={styles.displayFlex}>
                            <div className={styles.imgBox}>
                                <div className={styles.yellowBgImg} >
                                    <Image src="/images/bv2.svg" alt="" width="40" height="40" />
                                </div>
                            </div>
                            <div className={styles.contentBox}>
                                <div className={styles.whatYouGetWithMsDetail5}  >
                                    Goodwill and Other Intangible Assets Valuations.
                                </div>
                            </div>
                        </div>

                        <div className={styles.displayFlex}>
                            <div className={styles.imgBox}>
                                <div className={styles.yellowBgImg} >
                                    <Image src="/images/bv3.svg" alt="" width="40" height="40" />
                                </div>
                            </div>

                            <div className={styles.contentBox}>
                                <div className={styles.whatYouGetWithMsDetail5}  >
                                    Business Financial modeling.
                                </div>
                            </div>
                        </div>

                        <div className={styles.displayFlex}>
                            <div className={styles.imgBox}>
                                <div className={styles.yellowBgImg} >
                                    <Image src="/images/bv4.svg" alt="" width="40" height="40" />
                                </div>
                            </div>
                            <div className={styles.contentBox}>
                                <div className={styles.whatYouGetWithMsDetail5} >
                                    Impairment or Disposal of Long-Lived Assets.
                                </div>
                            </div>
                        </div>

                        <div className={styles.displayFlex}>
                            <div className={styles.imgBox}>
                                <div className={styles.yellowBgImg} >
                                    <Image src="/images/bv5.svg" alt="" width="40" height="40" />
                                </div>
                            </div>
                            <div className={styles.contentBox}>
                                <div className={styles.whatYouGetWithMsDetail5} >
                                    Shareholder Value Optimization.
                                </div>
                            </div>
                        </div>

                        <div className={styles.displayFlex}>
                            <div className={styles.imgBox}>
                                <div className={styles.yellowBgImg} >
                                    <Image src="/images/bv6.svg" alt="" width="40" height="40" />
                                </div>
                            </div>
                            <div className={styles.contentBox}>
                                <div className={styles.whatYouGetWithMsDetail5} >
                                    Business Advisory.
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