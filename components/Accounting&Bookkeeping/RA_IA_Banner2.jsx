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
                            Why should organization conduct<br /> Internal Audit?
                        </div>
                        <div  className={cstyles.details18Open+" "+cstyles.margin40}>
                            Internal audit contributes to improving the organization&apos;s overall governance structure, including the internal control framework and procedures as well as strategic risk management. Any organization can benefit from an efficient internal audit function because it aids in achieving goals.
                        </div>
                        <div className={styles.webOnly} onClick={()=>parentCallback(true)}>
                            <Button value="Book a Free Consultation"  backgroundColor="#D5AF32" color="#192B3A" width="357px"
                                height="70px" src="/images/LarrowB.svg" style={{ border: "2px solid #192B3A",fontSize:"20px" }} arrowH="20px" arrowW="12px" />
                        </div>

                        <div className={styles.mobOnly} onClick={()=>parentCallback(true)} >
                            <Button value="Book a Free Consultation"  backgroundColor="#D5AF32" color="#192B3A" width="277px"
                                height="50px" src="/images/LarrowB.svg" />
                        </div>

                    </div>
                    <div className={cstyles.a_right2_IA} data-aos="fade-left">
                    <div className={cstyles.imgWrap2}>
                            <Image src="/images/iaBannerN.jpg" alt=""layout='fill' className={cstyles.borderR} objectPosition="center"/>
                        </div>
                    </div>

                </div>
            </div>

         
        </Container>
    )
}
