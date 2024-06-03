import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./WhyMs1.module.css"
import Image from 'next/image'

import Container from '../Common/Container';
function WhyMs1() {

    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false
        })},[]);
        
    return (
        <Container>
        <div className={styles.container} >
            <h3 className={styles.heading}>
                Why MS?
            </h3>
            <div className={styles.sub_container} data-aos="fade-up">
                <div className={styles.box}>
                    <div className={styles.iconImg}>
                    <Image src="/images/tImg1.svg" alt="" width={41} height={41} /> 
                    </div>
                    <div className={styles.content}>
                        <div className={styles.content_heading}>GLOBAL INSIGHTS AND BEST PRACTICES</div>
                        <div className={styles.content_details}>
                        Extensive global client footprint of professional consultation, and services for high-growth businesses and multi-national companies.
                        </div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.iconImg}>
                    <Image src="/images/tImg2.svg" alt="" width={41} height={41} /> 
                    </div>
                    <div className={styles.content}>
                        <div className={styles.content_heading}>
                        CLIENT-CENTRIC COMMUNICATIONS
                       </div>
                        <div className={styles.content_details}>
                        Thorough understanding of your business model & operational details in order to tailor solutions to best fit your business needs and growth plan.
                        </div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.iconImg}>
                    <Image src="/images/tImg3.svg" alt="" width={41} height={41} /> 
                    </div>
                    <div className={styles.content}>
                        <div className={styles.content_heading}>BUSINESS-DRIVEN RESULTS</div>
                        <div className={styles.content_details}>
                        Business is our foremost language – we align our services with your business priorities to improve your company’s competencies and business results.
                        </div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.iconImg}>
                    <Image src="/images/tImg4.svg" alt="" width={41} height={41} /> 
                    </div>
                    <div className={styles.content}>
                        <div className={styles.content_heading}> END-TO-END BUSINESS
                        CONSULTANCY</div>
                        <div className={styles.content_details}>
                        Smart analysis of your end-to-end business process to help optimise your operations for improved efficiency and revenue.
                        </div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.iconImg}>
                    <Image src="/images/tImg5.svg" alt="" width={41} height={41} /> 
                    </div>
                    <div className={styles.content}>
                        <div className={styles.content_heading}>QUALITY DELIVERY BY GLOBAL EXPERTS</div>
                        <div className={styles.content_details}>
                        MS has been named as the Tax and Accounting Consultancy Firm of the year 2020 in the UAE by Global Advisory Experts Awards.
                        </div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.iconImg}>
                    <Image src="/images/tImg6.svg" alt="" width={41} height={41} /> 
                    </div>
                    <div className={styles.content}>
                        <div className={styles.content_heading}> BUSINESS COMPLIANCE AND AGILITY</div>
                        <div className={styles.content_details}>
                        Tax and system integration, meeting the local compliance requirements.
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
        </Container>
    )
}

export default WhyMs1