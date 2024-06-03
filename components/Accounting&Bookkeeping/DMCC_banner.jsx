import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./ADGM.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookCall from './BookConsultationCall';

import Container from '../Common/Container';
import Image from 'next/image'

function Accounting_Banner2() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container>
            <div className={styles.acountingBanner_container}>
                <div className={styles.FAS_Banner_left} data-aos="fade-right" >
                    <div className={styles.black36_heading_audit}>
                        MS in Dubai Multi Commodities Centre (DMCC)
                    </div>
                    <div style={{ marginTop: "15px" }} className={styles.details18Open}>
                        MS group offers you an opportunity to access one of the most sought after freezone in the world where your business can thrive.
                    </div>
                    <div style={{ marginTop: "10px" }} className={styles.details18Open}>
                        Dubai Multi Commodity Center (DMCC) is one of the largest and fastest growing freezone in the world and was established in 2002 as a commodity marketplace in Jumeirah Lake Tower District (JLT) in the center of Dubai. Now it is home to more than 22000 businesses from a wide range of industries and sectors such as Argo, energy and financial services to diamonds, gold, and base metals.
                    </div>

                    <div style={{ marginTop: "10px" }} className={styles.details18Open}>
                        DMCC has been awarded Global free zone of the year by the Financial Times fDI magazine for 8 years in row, for being the best place to set up business in UAE with world class infrastructure, state of the art facilities and streamlined legal and regulatory frameworks. DMCC offers you a vibrant community with unparalleled business solutions that will convert your goals into reality.
                    </div>
                    <div className={cstyles.ADGM_newSectionFlexR} >
                        <div className={styles.details24500TAS}>
                            Setting up a Business in Free Zone
                        </div>


                        <div style={{ marginTop: "10px" }} className={styles.details18Open}>
                            Free zones have changed global economic markets, giving entrepreneurs all over the world a positive influence and a wide range of business possibilities. Operating in a freezone helps the business to access exclusive benefits.
                        </div>
                        <ul>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></div>
                                <span className={cstyles.key + " " + styles.keyWidth}>
                                    100% Repatriation of profit
                                </span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></div>
                                <span className={cstyles.key + " " + styles.keyWidth}>
                                    Steady & Transparent Laws & Regulations
                                </span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></div>
                                <span className={cstyles.key + " " + styles.keyWidth}>
                                    Easy Recruitment and competitive workforce
                                </span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></div>
                                <span className={cstyles.key + " " + styles.keyWidth}>
                                    Exemption from Import & Exports
                                </span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></div>
                                <span className={cstyles.key + " " + styles.keyWidth}>
                                    Fully Functional Infrastructure.
                                </span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></div>
                                <span className={cstyles.key + " " + styles.keyWidth}>
                                    0% corporate tax for qualified income
                                </span>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className={styles.RA_banner} data-aos="fade-left" >
                    <BookCall path={"dmcc"} />
                </div>
            </div>


        </Container>
    )
}

export default Accounting_Banner2