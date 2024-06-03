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
                            Why MS as your Corporate Service Provider ?
                        </div>
                        <div className={cstyles.details18Open + " " + cstyles.margin40}>
                            The most crucial and significant stage of a business&apos;s journey is the beginning. In determining what kind of activity is appropriate for your business, what legal requirements must be fulfilled, etc., you must seek the assistance of a specialist.
                        </div>
                        <div className={cstyles.details18Open}>                        
                        MS can be your one stop solution in Dubai for all the business needs. At every stage of your company&apos; formation in DMCC, you can rely on us for unbiased advice and practical assistance. We pride ourselves for providing the best quality service for our business partners. You can count on us to always keep you informed and current with the information you require. We will take care of everything for you as your corporate service provider, allowing you to launch a business without concern. We will also assist you in making the best decisions possible.
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
