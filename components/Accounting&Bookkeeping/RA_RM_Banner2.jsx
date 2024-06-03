import React, { useEffect, useState } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Button from "../ButtonYellowForm"

import Container from '../Common/Container';
export default function BookkeepinServiceWork({parentCallback}) {

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
                        Why chose MS?
                        </div>
                        <div s className={cstyles.details18Open+" "+cstyles.margin40}>
                        Clients rely on MS to identify, prioritize, and reduce risk as well as grasp opportunities by leveraging our extensive expertise and experience implementing ERM solutions across industries. Clients like our objective, specialized, and customized techniques that are based on best practices because they enable them to connect risks and opportunities that appear to be incommensurable in strategy, finance, operations, technology, and compliance. Our ERM clients are consequently better positioned to lower the likelihood of loss, provide value for stakeholders, uphold financial stability, and foster innovation.
                        </div>
                        <div className={styles.webOnly} onClick={()=>parentCallback(true)}>
                            <Button value="Book a Free Consultation"  backgroundColor="#D5AF32" color="#192B3A" width="357px"
                                height="70px" src="/images/LarrowB.svg" style={{ border: "2px solid #192B3A" ,fontSize:"20px" }} arrowH="20px" arrowW="12px"/>
                        </div>

                        <div className={styles.mobOnly} onClick={()=>parentCallback(true)}>
                            <Button value="Book a Free Consultation"  backgroundColor="#D5AF32" color="#192B3A" width="277px"
                                height="50px" src="/images/LarrowB.svg" />
                        </div>

                    </div>
                    <div className={cstyles.a_right2_IA} data-aos="fade-left">
                    <div className={cstyles.imgWrap2}>
                            <Image src="/images/riskBanner.jpg" alt=""layout='fill' className={cstyles.borderR} objectPosition="center"/>
                        </div>
                    </div>

                </div>
            </div>

        </Container>
    )
}
