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
                            Why MS as your Service Provider ?
                        </div>
                        <div className={cstyles.details18Open}>
                        Looking for a reliable corporate service provider for your business in MASDAR? Look no further than MS! Our comprehensive solutions cater to all your business needs, ensuring that you meet all legal requirements while receiving unbiased advice and practical support. We are committed to delivering high-quality services and keeping you updated with the latest information, enabling you to make informed decisions with confidence. Trust us to take care of everything as your corporate service provider and help you launch your business successfully. Contact us today for all your corporate needs!
                        </div>
                       

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
