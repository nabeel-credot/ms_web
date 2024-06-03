import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./FBA.module.css"
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
        <Container >
        <div className={styles.WhatYouGetWithMs_container3}>
            <div className={styles.WhatYouGetWithMs_left5} data-aos="fade-right">
                <div className={styles.heading}>
                    The Services we<br /> provide are wide-<br /> ranging and<br /> include
                </div>

            </div>
            <div className={styles.WhatYouGetWithMs_right7} data-aos="fade-left">

                <div className={styles.WhatYouGetWithMs_box3} style={{ borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg3}>
                        <Image src="/images/fb1.png" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail8 + " " + cstyles.textCntr}>
                        The sheer commitment of the<br /> family members to get the<br /> business running.
                        </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box3} style={{ borderLeft: ".5px solid rgba(33, 33, 32, 0.2)", borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg3}>
                        <Image src="/images/fb2.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail8 + " " + cstyles.textCntr}>
                        There is a sense of trust in the<br /> family that allows transparency<br />within the company
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box3} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={styles.yellowBgImg3}>
                        <Image src="/images/fb2.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail8 + " " + cstyles.textCntr}>
                        There is a sense of trust in the <br />family that allows transparency<br /> within the company
                    </div>
                </div>
                <div className={styles.WhatYouGetWithMs_box3}>
                    <div className={styles.yellowBgImg3}>
                        <Image src="/images/fb3.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={styles.whatYouGetWithMsDetail8 + " " + cstyles.textCntr}>

                        The overall productivity of the<br /> employees increases as they are <br />generally happier working under a <br />Family owned business.
                    </div>
                </div>


            </div>

            <div className={styles.expertMobWrap}>
                <h3> The services we provide are wide-ranging and include:</h3>
                <div style={{marginTop:30}}>
                    <div className={styles.displayFlex}>
                    <div className={styles.imgBox}>
                        <div className={styles.yellowBgImg3} >
                            <Image src="/images/fb1.png" alt="" width="40" height="40" />
                        </div>
                        </div>
                        <div className={styles.contentBox}>
                        <div className={styles.whatYouGetWithMsDetail8}>
                        The sheer commitment of the<br /> family members to get the<br /> business running.
                            </div>
                            </div>
                    </div>

                    <div className={styles.displayFlex}>
                    <div className={styles.imgBox}>
                        <div className={styles.yellowBgImg3} >
                            <Image src="/images/fb2.svg" alt="" width="40" height="40" />
                        </div>
                        </div>
                        <div className={styles.contentBox}>
                        <div className={styles.whatYouGetWithMsDetail8}  >
                        There is a sense of trust in the<br /> family that allows transparency<br />within the company
                        </div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                    <div className={styles.imgBox}>
                        <div className={styles.yellowBgImg3} >
                            <Image src="/images/fb2.svg" alt="" width="40" height="40" />
                        </div>
                        </div>
                        <div className={styles.contentBox}>
                        <div className={styles.whatYouGetWithMsDetail8}  >
                        There is a sense of trust in the <br />family that allows transparency<br /> within the company
                        </div>
                        </div>
                    </div>

                    <div className={styles.displayFlex}>
                    <div className={styles.imgBox}>
                        <div className={styles.yellowBgImg3} >
                            <Image src="/images/fb2.svg" alt="" width="40" height="40" />
                        </div>
                        </div>
                        <div className={styles.contentBox}>
                        <div className={styles.whatYouGetWithMsDetail8} >
                        The overall productivity of the<br /> employees increases as they are <br />generally happier working under a <br />Family owned business.
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