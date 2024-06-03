import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import BookCall from './BookConsultationCall';
import Button from '../ButtonYellow'

import Container from '../Common/Container';
function Accounting_Banner2() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container>
        <div className={styles.payrollBanner_container}>
            <div className={styles.payrollBanner_sub_container}>
                <div className={styles.FAS_Banner_left} data-aos="fade-right">
                    <div className={styles.payrollBanner_heading}>
                        Economic Substance<br />
                        A Concept to Familiarise!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                        Despite the fact that most of the countries are having full-fledged tax authorities, tax profile and tax treaties, annual tax revenues are being leaked through loopholes, or call it “creative tax planning”.
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                        In order to combat harmful tax practices including unlawful avoidance or tax evasion and to comply with initiatives introduced by the Organization for Economic Co-operation and Development (OECD), Economic Substance Regulation was introduced.
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                        The Organisation for Economic Co-operation and Development, (OECD), came up with 15 Action Plan to tackle tax avoidance caused by Base Erosion and Profit Shifting and G20 countries took joint action and developed these action plans.
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                        Under the OECD/G20 Inclusive Framework on BEPS, over 135 countries are collaborating to put an end to tax avoidance strategies that exploit gaps and mismatches in tax rules to avoid paying tax.
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                        Economic Substance Regulation (ESR) been introduced in countries with low or no corporate taxes. The Economic Substance Regulation is an act that requires specific legal entities (Such as free zones) to demonstrate that they carry out substantial economic activities in these jurisdictions.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                        Economic Substance Regulations were introduced as a part of action plan 5 to curb harmful tax practices and became effective in the UAE as of 1 January 2019.
                    </div>
                    <div >
                        <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                            As a member of the OECD Inclusive Framework, the UAE is committed to ensuring that the UAE’s legal and commercial framework is in line with global standards and is subject to review by the OECD to ensure that these standards are implemented.
                        </div>
                    </div>

                    <div>
                        <div style={{ marginTop: "20px" }} className={styles.details18Open } >
                            The Regulations require UAE onshore and free zone companies and other UAE business forms that carry out any of the Relevant Activities listed below to maintain an adequate economic presence in the UAE relative to the activities they undertake.
                        </div>
                    </div>
                </div>
                <div className={styles.acountingBanner2Book_right2} data-aos="fade-left">
                    <BookCall />
                </div>
            </div>
        
            <div className={styles.esrRel_sub_container+" "+styles.marginT60} >
                <div className={styles.esrBanner_left} data-aos="fade-right">
                    <div className={styles.headingW24500}>
                        To ensure an entity fall under this legislation, there are specific questions that you can ask concerning your entity:
                    </div>
                    <div className={styles.detail16300} style={{ marginTop: 20,fontWeight:400 }}>
                        1. Does the Licensee have a commercial / trade licence/permit issued by a UAE Regulatory Authority?
                    </div>
                    <div className={styles.detail16300} style={{ marginTop: 20 ,fontWeight:400 }}>
                        2. Does the Licensee conduct a Relevant Activity?
                    </div>
                    <div className={styles.detail16300} style={{ marginTop: 20 ,fontWeight:400 }}>
                        3. Does the Licensee earn income from its Relevant Activity?
                    </div>
                    <div className={styles.details18OpenWhitePo} style={{ marginTop: 20 }}>
                        If the answer to all the questions is “Yes”, then the entity is in the scope of this legislation and has to meet the Economic Substance Requirements.
                    </div>
                  
                    <div className={styles.webOnly3} style={{marginTop: 40 }} >
                        <Button value="Schedule a Consultation With Us" backgroundColor="#D5AF32" color="#192B3A" width="476px"
                            height="75px" src="/images/LarrowB.svg" href="/contact" style={{fontSize:20}} arrowH={20} arrowW={12} />
                    </div>
                    <div className={styles.mobOnly3} style={{ marginTop: 40 }} >
                        <Button value="Schedule a Consultation With Us" backgroundColor="#D5AF32" color="#192B3A" width="auto"
                             src="/images/LarrowB.svg" href="/contact"  style={{fontSize:15,padding:10}}/>
                    </div>
                </div>
                <div className={styles.esrBanner_right} data-aos="fade-left">
                    <div className={styles.black36_heading}>
                        Relevant Activity?
                    </div>
                    <ul>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                            <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt=""  width={13} height={23}/></div>
                            <span className={styles.key}>Banking Business</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                            <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt=""  width={13} height={23}/></div>
                            <span className={styles.key}>Insurance Business</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                            <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt=""  width={13} height={23}/></div>
                            <span className={styles.key}>Investment Fund Management Business</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                            <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt=""  width={13} height={23}/></div>
                            <span className={styles.key}>Lease-Finance Business</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                            <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt=""  width={13} height={23}/></div>
                            <span className={styles.key}>Headquarters Business</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                            <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt=""  width={13} height={23}/></div>
                            <span className={styles.key}>Shipping Business</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                            <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt=""  width={13} height={23}/></div>
                            <span className={styles.key}>Holding Company Business</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                            <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt=""  width={13} height={23}/></div>
                            <span className={styles.key}>Intellectual Property Business</span>
                        </li>
                        <li>
                            <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                            <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt=""  width={13} height={23}/></div>
                            <span className={styles.key}>Distribution & Service Center Business</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2