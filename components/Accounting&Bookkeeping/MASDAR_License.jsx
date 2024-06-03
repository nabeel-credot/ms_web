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
                        MASDAR License Categories
                        </div>
                        <div className={cstyles.details18Open}>
                        The Masdar City free zone is an ideal destination for those interested in investing in technology, sustainable solutions, and educational institutions, and offers 19 license categories that encompass thousands of business activities. These categories include Renewable Energy, Cleantech and Information & Communications Technologies, Marketing & Events, Human Resource Development, General Service Providers, Energy Industry Goods & Services, Industry Goods & Services, Healthcare, Carbon Management, Property Management Services, Community Services Development, Holding Company, Trading Company, Business Center, Data Center, Onshore and Offshore Oil and Gas Field and Facilities Services, Environment, Nuclear Energy, and Outsourcing Services. This provides a great opportunity for organizations, SMBs, entrepreneurs, and startups to engage in permitted activities in a progressive community committed to green living. Choose the right category that suits your business needs and make the most of the business-friendly environment in the Masdar City free zone.
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
