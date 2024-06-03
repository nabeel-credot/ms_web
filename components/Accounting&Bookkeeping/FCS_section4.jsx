import React, { useEffect } from 'react'
import styles from "./FCS.module.css"
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
        <Container>
        <div className={styles.WhatYouGetWithMs_container3}>
            <div className={styles.WhatYouGetWithMs_left2} data-aos="fade-right">
                <div className={styles.heading2}>
                    Our expert team will<br /> help you create your<br /> dreams
                </div>

            </div>
            <div className={styles.WhatYouGetWithMs_right3} data-aos="fade-left">

                <div className={styles.WhatYouGetWithMs_box4} style={{ borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg2}>
                        <Image src="/images/fcs1.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail4}>Additional experience and expertise for your business.</div>
                </div>
                <div className={styles.WhatYouGetWithMs_box4} style={{ borderLeft: ".5px solid rgba(33, 33, 32, 0.2)", borderBottom: ".5px solid rgba(33, 33, 32, 0.2)", borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg2}>
                        <Image src="/images/fcs2.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail4}>
                        Financial data review.
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box4} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)", borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg2}>
                        <Image src="/images/fcs3.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail4}>
                        Bespoke Service for each client.
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box4} style={{ borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg2}>
                        <Image src="/images/fcs4.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail4}>
                        On site service if needed.
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box4} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg2}>
                        <Image src="/images/fcs5.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail4} >
                        Finance function oversight.
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box4} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg2}>
                        <Image src="/images/fcs6.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail4}>
                        Monthly management accounts.
                    </div>

                </div>
                <div className={styles.WhatYouGetWithMs_box4} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg2}>
                        <Image src="/images/fcs7.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail4}>
                        Outsourcing solutions.
                    </div>

                </div>
                <div className={styles.WhatYouGetWithMs_box4} >
                    <div className={styles.yellowBgImg2}>
                        <Image src="/images/fcs8.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail4}>
                        VAT returns.
                    </div>

                </div>


            </div>

            <div className={styles.expertMobWrap} data-aos="fade-up">
                <h3>Our expert team will help you create your dreams</h3>
                <div style={{ marginTop: 30 }}>
                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg2} >
                                <Image src="/images/fcs1.svg" alt="" width="40" height="40" />
                            </div>
                        </div>

                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail4} >Additional experience and expertise for your business.</div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg2} >
                                <Image src="/images/fcs2.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail4}  >
                                Financial data review.
                            </div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg2} >
                                <Image src="/images/fcs3.svg" alt="" width="40" height="40" />
                            </div>
                        </div>

                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail4}  >
                                Bespoke Service for each client.
                            </div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg2} >
                                <Image src="/images/fcs4.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail4} >
                                On site service if needed.
                            </div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg2} >
                                <Image src="/images/fcs5.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail4} >
                                Finance function oversight.
                            </div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg2} >
                                <Image src="/images/fcs6.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail4} >
                                Monthly management accounts.
                            </div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg2} >
                                <Image src="/images/fcs7.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail4} >
                                Outsourcing solutions.
                            </div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg2} >
                                <Image src="/images/fcs8.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail4} >
                                VAT returns.
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