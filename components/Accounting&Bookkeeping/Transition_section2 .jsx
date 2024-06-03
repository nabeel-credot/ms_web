import React, { useEffect } from 'react'
import styles from "./Transition.module.css"
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
        <div className={styles.WhatYouGetWithMs_container4}>
            <div className={styles.WhatYouGetWithMs_left4} data-aos="fade-right">
                <div className={styles.heading}>
                    Our range of services<br />
                    tailored for clients to<br /> survive & thrive to<br /> achieve Growth
                </div>

            </div>
            <div className={styles.WhatYouGetWithMs_right6} data-aos="fade-left">

                <div className={styles.WhatYouGetWithMs_box3} style={{ borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg}>
                        <Image src="/images/transition1.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail3}>Growth Strategy</div>
                </div>
                <div className={styles.WhatYouGetWithMs_box3} style={{ borderLeft: ".5px solid rgba(33, 33, 32, 0.2)", borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg}>
                        <Image src="/images/transition2.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail3}>
                        Partner search
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box3} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg}>
                        <Image src="/images/transition3.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail3}>
                        Full M&A
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box3}>
                    <div className={styles.yellowBgImg}>
                        <Image src="/images/transition4.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail3}>
                        Integration execution
                    </div>
                </div>


            </div>


            <div className={styles.expertMobWrap} data-aos="fade-up">
                <h3> Our range of services
                    tailored for clients to survive & thrive to achieve Growth</h3>
                <div style={{ marginTop: 30 }}>
                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg} >
                                <Image src="/images/transition1.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail3} >Growth Strategy</div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg} >
                                <Image src="/images/transition2.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail3}  >
                                Partner search
                            </div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg} >
                                <Image src="/images/transition3.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail3}  >
                                Full M&A
                            </div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                        <div className={styles.imgBox}>
                            <div className={styles.yellowBgImg} >
                                <Image src="/images/transition4.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.whatYouGetWithMsDetail3} >
                                Integration execution
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