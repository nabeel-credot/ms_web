import React, { useEffect, useState } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Button from "../ButtonYellowForm"

import Container from '../Common/Container';
export default function BookkeepinServiceWork() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container style={{ position: "relative" }} >
            <div className={cstyles.RA_IA_container} >
                <div className={cstyles.subContainer2}>
                    <div className={cstyles.a_left2_IA} data-aos="fade-right">
                        <div className={cstyles.dedicated_heading}>
                        Why Dubai International Financial Centre (DIFC) ?
                        </div>
                        <div className={cstyles.details18Open }>
                        World-Class Financial Ecosystem: DIFC is recognized as a world-class financial center, attracting multinational corporations, banks, asset management firms, law firms, and more, providing unparalleled opportunities for growth and success.
                        </div>
                        <div className={cstyles.details18Open}>                        
                        Independent Regulatory Framework: DIFC operates under its own legal and regulatory system based on English common law, ensuring security and transparency.
                        </div>
                        <div className={cstyles.details18Open}>                        
                        Cutting-Edge Infrastructure: Modern office spaces and state-of-the-art infrastructure make DIFC an ideal environment for businesses to thrive.
                        </div>
                        <div className={cstyles.details18Open}>                        
                        Global Connectivity: DIFC offers seamless access to international financial markets and services, making it a strategic gateway for businesses seeking to expand their global reach.
                        </div>
                        {/* <div className={cstyles.webOnlyBtn} onClick={() => parentCallback(true)}>
                            <Button value="Book a Free Consultation" backgroundColor="#D5AF32" color="#192B3A" width="357px"
                                height="70px" src="/images/LarrowB.svg" style={{ border: "2px solid #192B3A", fontSize: "20px" }} arrowH="20px" arrowW="12px" />
                        </div>

                        <div className={cstyles.mobOnlyBtn} onClick={() => parentCallback(true)}>
                            <Button value="Book a Free Consultation" backgroundColor="#D5AF32" color="#192B3A" width="277px"
                                height="50px" src="/images/LarrowB.svg" />
                        </div> */}

                    </div>
                    {/* <div className={cstyles.a_right2_IA} data-aos="fade-left">
                        <div className={cstyles.imgWrap}>
                            <Image src="/images/dmcc_2.jpg" alt="" layout='fill' className={cstyles.borderR} objectFit="cover" objectPosition="center" />
                        </div>
                    </div> */}

                </div>
            </div>

        </Container>
    )
}
