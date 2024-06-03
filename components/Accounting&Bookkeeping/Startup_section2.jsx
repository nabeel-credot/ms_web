import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Startup.module.css"
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
        <div className={cstyles.WhatYouGetWithMs_container2}>
            <div className={cstyles.WhatYouGetWithMs_left2} data-aos="fade-right">
                <div className={cstyles.heading2}>
                    Our expert team will<br /> help you create your<br /> dreams
                </div>

            </div>
            <div className={cstyles.WhatYouGetWithMs_right2} data-aos="fade-left">

                <div className={cstyles.WhatYouGetWithMs_box2} style={{ borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={cstyles.yellowBgImg2}>
                        <Image src="/images/startup1.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={cstyles.whatYouGetWithMsDetail2}>Financial Forecasting and Planning</div>
                </div>
                <div className={cstyles.WhatYouGetWithMs_box2} style={{ borderLeft: ".5px solid rgba(33, 33, 32, 0.2)", borderBottom: ".5px solid rgba(33, 33, 32, 0.2)", borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={cstyles.yellowBgImg2}>
                        <Image src="/images/startup2.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={cstyles.whatYouGetWithMsDetail2}>
                        Feasibility Report , Project Report
                    </div>
                </div>
                <div className={cstyles.WhatYouGetWithMs_box2} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)", borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={cstyles.yellowBgImg2}>
                        <Image src="/images/startup3.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={cstyles.whatYouGetWithMsDetail2}>
                        Valuation and Due-diligence
                    </div>
                </div>
                <div className={cstyles.WhatYouGetWithMs_box2} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)", borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={cstyles.yellowBgImg2}>
                        <Image src="/images/startup4.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={cstyles.whatYouGetWithMsDetail2}>
                        Business Planning – Constructing Plans and Critically Reviewing existing plans
                    </div>
                </div>
                <div className={cstyles.WhatYouGetWithMs_box2} style={{ borderBottom: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={cstyles.yellowBgImg2}>
                        <Image src="/images/startup5.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={cstyles.whatYouGetWithMsDetail2} >
                        Financial Forecasting and Planning
                    </div>
                </div>
                <div className={cstyles.WhatYouGetWithMs_box2} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={cstyles.yellowBgImg2}>
                        <Image src="/images/startup6.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={cstyles.whatYouGetWithMsDetail2}>
                        Private Placement Memorandum
                    </div>

                </div>
                <div className={cstyles.WhatYouGetWithMs_box2} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={cstyles.yellowBgImg2}>
                        <Image src="/images/startup7.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={cstyles.whatYouGetWithMsDetail2}>
                        Transaction Advisory
                    </div>

                </div>
                <div className={cstyles.WhatYouGetWithMs_box2} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={cstyles.yellowBgImg2}>
                        <Image src="/images/startup8.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={cstyles.whatYouGetWithMsDetail2}>
                        Development of Business Cases
                    </div>

                </div>
                <div className={cstyles.WhatYouGetWithMs_box2} style={{ borderRight: ".5px solid rgba(33, 33, 32, 0.2)" }}>
                    <div className={cstyles.yellowBgImg2}>
                        <Image src="/images/startup9.svg" alt="" width={50} height={50} />
                    </div>
                    <div className={cstyles.whatYouGetWithMsDetail2}>
                        Fund Document and Fund Structuring
                    </div>

                </div>

            </div>

            <div className={cstyles.expertMobWrap} data-aos="fade-up">
                <h3>Our expert team will help you create your dreams</h3>
                <div style={{ marginTop: 30 }}>
                    <div className={cstyles.displayFlex}>
                        <div className={cstyles.imgBox}>
                            <div className={cstyles.yellowBgImg2}>
                                <Image src="/images/startup1.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={cstyles.contentBox}>
                            <div className={cstyles.whatYouGetWithMsDetail2} >Financial Forecasting and Planning</div>
                        </div>
                    </div>

                    <div className={cstyles.displayFlex}>
                        <div className={cstyles.imgBox}>
                            <div className={cstyles.yellowBgImg2}>
                                <Image src="/images/startup2.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={cstyles.contentBox}>
                            <div className={cstyles.whatYouGetWithMsDetail2}  >
                                Feasibility Report , Project Report
                            </div>
                        </div>
                    </div>

                    <div className={cstyles.displayFlex}>
                        <div className={cstyles.imgBox}>
                            <div className={cstyles.yellowBgImg2}>
                                <Image src="/images/startup4.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={cstyles.contentBox}>
                            <div className={cstyles.whatYouGetWithMsDetail2}  >
                                Business Planning – Constructing Plans and Critically Reviewing existing plans
                            </div>
                        </div>
                    </div>

                    <div className={cstyles.displayFlex}>
                        <div className={cstyles.imgBox}>
                            <div className={cstyles.yellowBgImg2}>
                                <Image src="/images/startup5.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={cstyles.contentBox}>
                            <div className={cstyles.whatYouGetWithMsDetail2} >
                                Financial Forecasting and Planning
                            </div>
                        </div>
                    </div>
                    <div className={cstyles.displayFlex}>
                        <div className={cstyles.imgBox}>
                            <div className={cstyles.yellowBgImg2}>
                                <Image src="/images/startup6.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={cstyles.contentBox}>
                            <div className={cstyles.whatYouGetWithMsDetail2} >
                                Private Placement Memorandum
                            </div>
                        </div>
                    </div>

                    <div className={cstyles.displayFlex}>
                        <div className={cstyles.imgBox}>
                            <div className={cstyles.yellowBgImg2}>
                                <Image src="/images/startup7.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={cstyles.contentBox}>
                            <div className={cstyles.whatYouGetWithMsDetail2} >
                                Transaction Advisory
                            </div>
                        </div>
                    </div>
                    <div className={cstyles.displayFlex}>
                        <div className={cstyles.imgBox}>
                            <div className={cstyles.yellowBgImg2}>
                                <Image src="/images/startup8.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={cstyles.contentBox}>
                            <div className={cstyles.whatYouGetWithMsDetail2} >
                                Development of Business Cases
                            </div>
                        </div>
                    </div>
                    <div className={cstyles.displayFlex}>
                        <div className={cstyles.imgBox}>
                            <div className={cstyles.yellowBgImg2}>
                                <Image src="/images/startup9.svg" alt="" width="40" height="40" />
                            </div>
                        </div>
                        <div className={cstyles.contentBox}>
                            <div className={cstyles.whatYouGetWithMsDetail2} >
                                Fund Document and Fund Structuring
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