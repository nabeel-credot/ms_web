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
                        Why hire a CFO from MS?
                        </div>
                        <div  className={cstyles.details18Open +" "+cstyles.margin40}>
                        At every significant crossroads in your daily operations and unquestionably at key turning points, MS will assist you in making decisions. The fundamental competency of our team is the comprehensive understanding of the sustainable triangle of the firm, which combines business, finance, and management with an emphasis on added-value services and compliance.
                        </div>
                        <div className={styles.webOnly}onClick={()=>parentCallback(true)}>
                            <Button value="Book a Free Consultation"  backgroundColor="#D5AF32" color="#192B3A" width="357px"
                                height="70px" src="/images/LarrowB.svg" style={{ border: "2px solid #192B3A",fontSize:"20px" }}  arrowH="20px" arrowW="12px" />
                        </div>

                        <div className={styles.mobOnly}onClick={()=>parentCallback(true)}>
                            <Button value="Book a Free Consultation"  backgroundColor="#D5AF32" color="#192B3A" width="277px"
                                height="50px" src="/images/LarrowB.svg" />
                        </div>

                    </div>
                    <div className={cstyles.a_right2_IA} data-aos="fade-left">
                        {/* <Image src="/images/cfoBanner.jpg" alt="" width={522} height={319}  className={cstyles.borderR}/> */}
                        <div className={cstyles.imgWrap2}>
                            <Image src="/images/cfoBanner.jpg" alt=""layout='fill' className={cstyles.borderR} objectPosition="center"/>
                        </div>
                    </div>

                </div>
            </div>

        </Container>
    )
}
