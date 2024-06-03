import React, { useEffect } from 'react'
import styles from "./Accounting.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from '../Common/Container';
import Image from 'next/image'

function WhatYouGetWithMs() {
    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container>
        <div className={styles.WhatYouGetWithMs_container}>
            <div className={styles.WhatYouGetWithMs_left} data-aos="fade-right">
                <div className={styles.heading}>
                    What you get <br />with <span>MS</span>
                </div>

            </div>
            <div className={styles.WhatYouGetWithMs_right} data-aos="fade-left">

                <div className={styles.WhatYouGetWithMs_box} style={{ borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg}>
                        <Image src="/images/withMs1.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail}>Perfectly categorized and reconcited transactions comes standard</div>
                </div>
                <div className={styles.WhatYouGetWithMs_box} style={{ borderLeft: ".5px solid rgba(33, 33, 32, 0.2)", borderBottom: ".5px solid rgba(33, 33, 32, 0.2)", borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg}>
                        <Image src="/images/withMs3.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail}>
                        Business financials are always quality controlled and peer-revewed
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box} style={{ borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg}>
                        <Image src="/images/withMs3.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail}>
                        We always respond to messages or calls in one business day or less
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg}>
                        <Image src="/images/withMs4.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail}>
                        Think of us as an extension of your team, achieving results for you and supporting you as you grow.
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg}>
                        <Image src="/images/withMs5.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail}>
                        We combine quality and professionalism of a big firm with entrepreneurial drive and agility of a startup.
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box}>
                    <div className={styles.yellowBgImg}>
                        <Image src="/images/withMs6.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail}>
                        With accrual basis bookkeeping andKPI reports, we are built for growing businesses.
                    </div>

                </div>

            </div>

            <div className={styles.Mobheading}>
                What you get with <span style={{ color: "#D4AE31" }}>MS</span>
            </div>

            <div className={styles.WhatYouGetWithMs_mobContainer}>
                <div className={styles.WhatYouGetWithMs_mobContainerBox}>
                    <div className={styles.yellowBgImgMob}>
                        <Image src="/images/withMs1.svg" alt="" width="26" height="26" />
                    </div>
                    <div className={styles.WhatYouGetWithMs_mobContainerBoxDetails}>
                        Perfectly categorized and reconcited transactions comes standard
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_mobContainerBox}>
                    <div className={styles.yellowBgImgMob}>
                        <Image src="/images/withMs2.svg" alt="" width="26" height="26" />
                    </div>
                    <div className={styles.WhatYouGetWithMs_mobContainerBoxDetails}>
                        Business financials are always quality controlled and peer-revewed
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_mobContainerBox}>
                    <div className={styles.yellowBgImgMob}>
                        <Image src="/images/withMs3.svg" alt="" width="26" height="26" />
                    </div>
                    <div className={styles.WhatYouGetWithMs_mobContainerBoxDetails}>
                        We always respond to messages or calls in one business day or less
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_mobContainerBox}>
                    <div className={styles.yellowBgImgMob}>
                        <Image src="/images/withMs4.svg" alt="" width="26" height="26" />
                    </div>
                    <div className={styles.WhatYouGetWithMs_mobContainerBoxDetails}>
                        Think of us as an extension of your team, achieving results for you and supporting you as you grow.
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_mobContainerBox}>
                    <div className={styles.yellowBgImgMob}>
                        <Image src="/images/withMs5.svg" alt="" width="26" height="26" />
                    </div>
                    <div className={styles.WhatYouGetWithMs_mobContainerBoxDetails}>
                        We combine quality and professionalism of a big firm with entrepreneurial drive and agility of a startup.
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_mobContainerBox}>
                    <div className={styles.yellowBgImgMob}>
                        <Image src="/images/withMs6.svg" alt="" width="26" height="26" />
                    </div>
                    <div className={styles.WhatYouGetWithMs_mobContainerBoxDetails}>
                        With accrual basis bookkeeping andKPI reports, we are built for growing businesses.
                    </div>
                </div>
            </div>
        </div>
        </Container>
    )
}

export default WhatYouGetWithMs