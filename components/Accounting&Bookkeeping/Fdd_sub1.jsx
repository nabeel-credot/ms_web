import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Styles.module.css"
import Image from 'next/image'

import Container from '../Common/Container';
function Fdd_sub1() {

    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false,
        })},[]);

    return (
        
        <Container style={{ padding: 0 }}>
            <div className={styles.fdd_sub1} data-aos="fade-up">
                <div className={styles.fdd_sub1_box}>
                    <div className={styles.fdd_sub1_L}>
                        <div className={styles.white_heading + " " + styles.keyWidth}>
                            As the name suggests, Financial due diligence (FDD) refers to undertaking a task with some degree of care and attention.
                        </div>
                        <div className={styles.details18OpenWhite}>
                            In all likelihood, financial due diligence is the most significant step in your business acquisition path. It provides an understanding of accounting matters and financial records that helps you determine your business’s true value. Due diligence is a comprehensive financial assessment performed by a potential investor to investigate a business opportunity and verify its value. The purpose is not to test the accuracy of financial statements, but to understand the company’s underlying risk and profit potential.
                        </div>
                        <div className={styles.details18OpenWhite}>
                            In short- a detailed financial risk assessment of an investment opportunity over a short period of time. It is not a compliance exercise, but an investigation of the opportunities the business can offer. A financial diligence review is also a cross-functional exercise that should be completed by an investor, prospective. It can require from a few minutes to several months depending on the complexity of the issue.
                        </div>
                        <div className={styles.mobOnly}>
                            <div className={styles.details18OpenWhite}>
                                During the process of financial due diligence, our team of experts examine a company’s accounting data to ensure that it is reported accurately and fairly. Doing so helps you understand the health of the business on both an operational and financial level. It can identify possible inefficiencies or exaggerations in the accounting records as well as potential issues or concerns with the management team. Due diligence can also help determine your exit strategy if a company is facing serious financial problems, preventing you from being caught unawares by any major surprises.
                            </div>
                        </div>
                    </div>
                    <div className={styles.fdd_sub1_R}>
                        <div className={styles.fddImgWrap}>
                        <Image src="/images/fddSub1.png" alt="" layout='fill'/>
                        </div>
                    </div>
                </div>
                <div className={styles.webOnly}>
                    <div className={styles.details18OpenWhite}>
                        During the process of financial due diligence, our team of experts examine a company’s accounting data to ensure that it is reported accurately and fairly. Doing so helps you understand the health of the business on both an operational and financial level. It can identify possible inefficiencies or exaggerations in the accounting records as well as potential issues or concerns with the management team. Due diligence can also help determine your exit strategy if a company is facing serious financial problems, preventing you from being caught unawares by any major surprises.
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default Fdd_sub1