import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./CBCR.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import RequestCall from './RequestCall';
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
        <div className={cstyles.acountingBanner_container}>
            <div className={cstyles.FAS_Banner_left} data-aos="fade-right">
                <div className={styles.black36_heading_audit}>
                    You want tax advisory session with our experts?
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details18OpenBlackPo300}>
                    By the end of MS Tax Advisory, participants will:
                </div>
                <div className={cstyles.CBCR_section_right}>
                    <ul>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>Understand the importance and principles of international transfer pricing in their professions.</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>Evaluate transactions of international cross border exchange of good, services and intangibles.</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>Identify the significance of a unified international political approach through the BEPS project.</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>Appreciate the focus of Government on transfer pricing in the Middle East and North Africa.</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>Proactively comply and implement processes and policies with future anticipated regulations.</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className={cstyles.acountingBanner2_right} data-aos="fade-left">
                <RequestCall subHeading="You want tax advisory session with our experts?" big={true} />
            </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2