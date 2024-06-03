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
                <div className={styles.WhatYouGetWithMs_right5ctt} data-aos="fade-left">

                    <div className={styles.WhatYouGetWithMs_box5} style={{ borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                        <div className={styles.yellowBgImg}>
                            <Image src="/images/ctt1.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.whatYouGetWithMsDetail5ctt + " " + styles.textCntr}>Treasury.</div>
                    </div>
                    <div className={styles.WhatYouGetWithMs_box5} style={{ borderLeft: ".5px solid rgba(33, 33, 32, 0.2)", borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                        <div className={styles.yellowBgImg}>
                            <Image src="/images/ctt2.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.whatYouGetWithMsDetail5ctt}>
                            Financial <br/>Advisory.
                        </div>
                    </div>
                    <div className={styles.WhatYouGetWithMs_box5} style={{ borderLeft: ".5px solid rgba(33, 33, 32, 0.2)", borderBottom: ".5px solid rgba(33, 33, 32, 0.2)", borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                        <div className={styles.yellowBgImg}>
                            <Image src="/images/ctt3.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.whatYouGetWithMsDetail5ctt}>
                            Controller-ship.
                        </div>
                    </div>
                    <div className={styles.WhatYouGetWithMs_box5} style={{ borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                        <div className={styles.yellowBgImg}>
                            <Image src="/images/ctt4.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.whatYouGetWithMsDetail5ctt}>
                            Acquisitions.
                        </div>
                    </div>
                    <div className={styles.WhatYouGetWithMs_box5} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                        <div className={styles.yellowBgImg}>
                            <Image src="/images/ctt5.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.whatYouGetWithMsDetail5ctt}>
                            Cost and profitability.
                        </div>
                    </div>
                    <div className={styles.WhatYouGetWithMs_box5} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                        <div className={styles.yellowBgImg}>
                            <Image src="/images/ctt6.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.whatYouGetWithMsDetail5ctt}>
                            Divestitures.
                        </div>
                    </div>
                    <div className={styles.WhatYouGetWithMs_box5} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                        <div className={styles.yellowBgImg}>
                            <Image src="/images/ctt6.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.whatYouGetWithMsDetail5ctt}>
                            Capital assets.
                        </div>
                    </div>
                </div>

                <div className={styles.expertMobWrap} data-aos="fade-up">
                    <h3> The services we provide are wide-ranging and include:</h3>
                    <div style={{ marginTop: 30 }}>
                        <div className={styles.displayFlex}>
                            <div className={styles.imgBox}>
                                <div className={styles.yellowBgImg} >
                                    <Image src="/images/ctt1.svg" alt="" width="40" height="40" />
                                </div>
                            </div>

                            <div className={styles.contentBox}>
                                <div className={styles.whatYouGetWithMsDetail5} >
                                    Treasury.</div>
                            </div>
                        </div>

                        <div className={styles.displayFlex}>
                            <div className={styles.imgBox}>
                                <div className={styles.yellowBgImg} >
                                    <Image src="/images/ctt2.svg" alt="" width="40" height="40" />
                                </div>
                            </div>
                            <div className={styles.contentBox}>
                                <div className={styles.whatYouGetWithMsDetail5}  >
                                    Financial Advisory.
                                </div>
                            </div>
                        </div>

                        <div className={styles.displayFlex}>
                            <div className={styles.imgBox}>
                                <div className={styles.yellowBgImg} >
                                    <Image src="/images/ctt3.svg" alt="" width="40" height="40" />
                                </div>
                            </div>

                            <div className={styles.contentBox}>
                                <div className={styles.whatYouGetWithMsDetail5}  >
                                    Controller-ship.
                                </div>
                            </div>
                        </div>

                        <div className={styles.displayFlex}>
                            <div className={styles.imgBox}>
                                <div className={styles.yellowBgImg} >
                                    <Image src="/images/ctt4.svg" alt="" width="40" height="40" />
                                </div>
                            </div>
                            <div className={styles.contentBox}>
                                <div className={styles.whatYouGetWithMsDetail5} >
                                    Acquisitions.
                                </div>
                            </div>
                        </div>

                        <div className={styles.displayFlex}>
                            <div className={styles.imgBox}>
                                <div className={styles.yellowBgImg} >
                                    <Image src="/images/ctt5.svg" alt="" width="40" height="40" />
                                </div>
                            </div>
                            <div className={styles.contentBox}>
                                <div className={styles.whatYouGetWithMsDetail5} >
                                    Cost and profitability.
                                </div>
                            </div>
                        </div>

                        <div className={styles.displayFlex}>
                            <div className={styles.imgBox}>
                                <div className={styles.yellowBgImg} >
                                    <Image src="/images/ctt6.svg" alt="" width="40" height="40" />
                                </div>
                            </div>
                            <div className={styles.contentBox}>
                                <div className={styles.whatYouGetWithMsDetail5} >
                                    Divestitures.
                                </div>
                            </div>
                        </div>

                        <div className={styles.displayFlex}>
                            <div className={styles.imgBox}>
                                <div className={styles.yellowBgImg} >
                                    <Image src="/images/ctt6.svg" alt="" width="40" height="40" />
                                </div>
                            </div>
                            <div className={styles.contentBox}>
                                <div className={styles.whatYouGetWithMsDetail5} >
                                    Capital assets.
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