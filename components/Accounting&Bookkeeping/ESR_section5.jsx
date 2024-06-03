import React, { useEffect } from 'react'
import styles from "./RA_Services.module.css"

import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';
function RA_IA_service() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
            <div className={styles.container + " " + styles.HomePadding} data-aos="fade-up">
                <h3 className={styles.heading} >
                    How can we help?
                </h3>
                <div className={styles.subdetail + " " + styles.marginTop} >
                    We consider that complying with the substance rules will be via a three-step process:
                </div>
                <div className={styles.serviceWrap}>
                    <div className={styles.box}>
                        {/* <div className={styles.topESR}>
                            <div className={styles.numAB}>01</div>
                        </div> */}
                              <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
                            </div>
                            <div className={styles.numAB}>01</div>
                        </div>
                        <div className={styles.titleESR}>
                        Undertaking an impact analysis to understand how and to what extent your business will be affected.
                        </div>
                    </div>

                    <div className={styles.box}>
                    <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
                            </div>
                            <div className={styles.numAB}>02</div>
                        </div>
                        <div className={styles.titleESR}>
                        Carrying out a readiness assessment to ensure your business is prepared or to advise on areas requiring improvement/amendment.
                        </div>
                    </div>

                    <div className={styles.box}>
                        {/* <div className={styles.topESR}>
                            <div className={styles.numAB}>03</div>
                        </div> */}
                              <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
                            </div>
                            <div className={styles.numAB}>03</div>
                        </div>
                        <div className={styles.titleESR}>
                        Obtaining assistance for tax return preparation and Income Tax Division liaison to ensure timely implementation of the requirements. 
                        </div>
                    </div>







                </div>
            </div>

        </Container >
    )
}

export default RA_IA_service