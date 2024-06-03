import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import cstyles from "./Styles.module.css"
import styles from "./Advisory.module.css"
import Image from 'next/image'
import Button from '../ButtonYellow'

import Container from '../Common/Container';
function Advisory_section() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
            <div className={styles.Advisory_section_container}>
                <div className={styles.Advisory_section_sub}>
                    <div className={styles.Advisory_section_sub_L}  data-aos="fade-right">
                        <div className={styles.logoWrap}><Image src="/images/logo3.svg" alt="" layout='fill' /></div>

                        <div className={cstyles.detail + " " + cstyles.textCntr} style={{ marginTop: 25 }}>Experience the visionary financial<br /> solutions by MSian’s</div>
                        <div className={styles.webOnly} style={{ marginTop: 25 }}>
                            <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="244px"
                                height="73px" src="/images/LarrowB.svg" href="/contact" />
                        </div>
                        <div className={styles.mobOnly} style={{ marginTop: 25 }}>
                            <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="196px"
                                height="50px" src="/images/LarrowB.svg" href="/contact" />
                        </div>
                    </div>
                    <div className={styles.Advisory_section_sub_R}  data-aos="fade-left">
                        <div className={cstyles.white_heading + " " + styles.marginBottom}>Are you facing any of these challenges?</div>
                        <ul>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={12} height={20} className={styles.wArrow} /></div>
                                <span className={styles.key + " " + cstyles.keyWidth}>Stalled growth / difficulty scaling up</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={12} height={20} className={styles.wArrow} /></div>
                                <span className={styles.key + " " + cstyles.keyWidth}>Cash flow and squeezed profit margins</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={12} height={20} className={styles.wArrow} /></div>
                                <span className={styles.key + " " + cstyles.keyWidth}>Developing and executing a marketing plan</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={12} height={20} className={styles.wArrow} /></div>
                                <span className={styles.key + " " + cstyles.keyWidth}>Managers who do not work effectively together</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={12} height={20} className={styles.wArrow} /></div>
                                <span className={styles.key + " " + cstyles.keyWidth}>Financing growth</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={12} height={20} className={styles.wArrow} /></div>
                                <span className={styles.key + " " + cstyles.keyWidth}>Lack of technology to improve business</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={12} height={20} className={cstyles.wArrow} /></div>
                                <span className={styles.key + " " + cstyles.keyWidth}>Succession planning and reaching long-term goals</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={12} height={20} className={cstyles.wArrow} /></div>
                                <span className={styles.key + " " + cstyles.keyWidth}> Preparing to sell your business for maximum value</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={12} height={20} className={cstyles.wArrow} /></div>
                                <span className={styles.key + " " + cstyles.keyWidth}>Dealing with daily emergencies; spending all your time working “in” your business and not “on” your business</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.Advisory_section_sub2}  data-aos="fade-up">
                    <div className={cstyles.white_heading + " " + cstyles.textCntr}>
                        We have solutions! Don’t you think MS ‘Advisory<br /> Board’ team can help?
                    </div>
                    <div className={cstyles.details18OpenWhitePo + " " + cstyles.textCntr + " " + styles.padding_Advisorydetail} style={{ marginTop: 30 }}>
                        Worry not in the time of a challenge. Taking the challenges like a goodness and overcoming them without fear is a solid act of bravery. Why do you think our Advisory Board service exists? We’re here to help you meet these challenges. Or rather, we’re the solution.
                    </div>
                    <div className={cstyles.details18OpenWhitePo + " " + cstyles.textCntr + " " + styles.padding_Advisorydetail} style={{ marginTop: 30 }}>
                        Our advisors could bring diverse expertise dependent on your business needs. Advisors are committed to working with clients for at least a year with quarterly on-site meetings.
                    </div>
                    <div className={cstyles.details18OpenWhitePo + " " + cstyles.textCntr + " " + styles.padding_Advisorydetail} style={{ marginTop: 30 }}>
                        Our expertise includes leadership, sales, marketing, human resources, cash management, operations, finance, technology, social media, real estate, construction and other business areas.
                    </div>
                    <div className={styles.Advisory_section_sub2List}>
                        <div className={styles.headingY24500} style={{ marginBottom: 30 }}>Our process includes:</div>
                        <ul>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/Search1.svg" alt="" width={30} height={30} className={styles.wArrow} /></div>
                                <span className={styles.key + " " + cstyles.keyWidth}>An onsite business assessment to identify your company’s challenges.</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/Project.svg" alt="" width={30} height={30} className={styles.wArrow} /></div>
                                <span className={styles.key + " " + cstyles.keyWidth}>Develop a strategic and integrated action plan to address your challenges.</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/Ok.svg" alt="" width={30} height={30} className={styles.wArrow} /></div>
                                <span className={styles.key + " " + cstyles.keyWidth}>Partner with you to implement these plans in a timely manner to ensure success.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Advisory_section