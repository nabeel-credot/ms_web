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
                        How can MS add value leveraging Blockchain technology?
                        </div>
                        <div  className={cstyles.details18Open+" "+cstyles.margin40}>
                        MS provide industry-specific blockchain solutions that deliver top-notch security and mobility to your companies, regardless of whether you&apos;re wanting to incorporate blockchain as an application layer on top of your current legacy system or need a full-scale standalone blockchain solution. By incorporating the most recent distributed ledger technology, smart contracts, and identification solutions, our team of highly qualified engineers and designers can assist your company in leveraging the potential advantages of blockchain.
                        </div>
                        <div className={styles.webOnly} onClick={()=>parentCallback(true)}>
                            <Button value="Book a Free Consultation"  backgroundColor="#D5AF32" color="#192B3A" width="357px"
                                height="70px" src="/images/LarrowB.svg" style={{ border: "2px solid #192B3A" ,fontSize:"20px" }} arrowH="20px" arrowW="12px" />
                        </div>

                        <div className={styles.mobOnly} onClick={()=>parentCallback(true)}>
                            <Button value="Book a Free Consultation"  backgroundColor="#D5AF32" color="#192B3A" width="277px"
                                height="50px" src="/images/LarrowB.svg" />
                        </div>

                    </div>
                    <div className={cstyles.a_right2_IA} data-aos="fade-left">
                    <div className={cstyles.imgWrap2}>
                            <Image src="/images/blockchain.jpg" alt=""layout='fill' className={cstyles.borderR} objectPosition="center"/>
                        </div>
                    </div>

                </div>
            </div>

        </Container>
    )
}
