import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

import BlueBox from "../BlueBox2"
import Container from '../Common/Container';
export default function BookkeepinServiceWork() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container>
        <div className={styles.adgmSec5_container} data-aos="fade-up" >
            <div className={styles.black36_heading_audit+ " " + styles.textCntr}>
            Process of Company Formation
            </div>
            {/* <div className={styles.details18Open + " " + styles.textCntr}>
                We consider that complying with the substance rules will be via a three-step process:
            </div> */}
            <div className={styles.curveLine2}>
                <Image src="/images/curveLine.svg" alt="" width={1781} height={418} />
            </div>
            <div className={styles.curveLineV}>
                <Image src="/images/curveLineV.svg" alt="" width={1126} height={3450} />
            </div>
            <div className={styles.subContainer}>
                <BlueBox num="01" fontSize="18px" detail="Reserve a company name in compliance with the ADGM Business and Company Names Rules 2016 and choose a registered office which must be located in Al Maryah Island, Abu Dhabi." />
                <BlueBox num="02" fontSize="18px" detail="Create a brief business plan and review the documentation requirements for the application & submit an application and required documentation to the Registrar via the online system. " />
                <BlueBox num="03" fontSize="18px" detail="Provided all information is accurately submitted and the Registrar is satisfied with the documents and information provided, a certificate of incorporation and commercial license will be issued. " />
            </div>

         
        </div>
        </Container>
    )
}
