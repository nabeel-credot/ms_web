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
                        Why adopting technology is<br/> important?
                        </div>
                        <div className={cstyles.details18Open+" "+cstyles.margin40}>
                        Technology is essential to a company&apos;s success. It is now more crucial than ever for businesses to comprehend how to best harness technology given its rapid growth and penetration into practically every industry. Organizations may grow and develop, reduce risk, and enhance critical processes with the aid of technology consulting. Technology is now essential to guiding corporate strategy and assuring its success. However, investments in technology don&apos;t always yield the promised returns, and businesses are finding it extremely difficult to use technology to spur innovation. Therefore, in order to construct and manage technology and large-scale transformation, organizations require a fundamentally different strategy that is better adapted to the dynamic nature of the modern business environment. We step in at this point, the Technology practice at MS supports businesses in leveraging technology and innovation to develop their technology visions, carry out their digital transformation initiatives, and reinvent their businesses to derive exceptional, long-lasting value from their technology investments.
                        </div>
                        <div className={cstyles.webOnlyBtn} onClick={()=>parentCallback(true)}>
                            <Button value="Book a Free Consultation"  backgroundColor="#D5AF32" color="#192B3A" width="357px"
                                height="70px" src="/images/LarrowB.svg" style={{ border: "2px solid #192B3A" ,fontSize:"20px" }} arrowH="20px" arrowW="12px" />
                        </div>

                        <div className={cstyles.mobOnlyBtn} onClick={()=>parentCallback(true)}>
                            <Button value="Book a Free Consultation"  backgroundColor="#D5AF32" color="#192B3A" width="277px"
                                height="50px" src="/images/LarrowB.svg" />
                        </div>

                    </div>
                    <div className={cstyles.a_right2_IA} data-aos="fade-left">
                    <div className={cstyles.imgWrap}>
                            <Image src="/images/technology.jpg" alt="" layout='fill' className={cstyles.borderR} objectPosition="center"/>
                        </div>
                    </div>

                </div>
            </div>

        </Container>
    )
}
