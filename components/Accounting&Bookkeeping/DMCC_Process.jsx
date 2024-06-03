import React, { useEffect } from 'react'
import styles from "./ADGM.module.css"
import cstyles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

import Card from "../LicenseCard";
import Container from '../Common/Container';

function ADGM_process() {

    useEffect(() => {
        AOS.init({
            duration: 1900,
            once: false,
        })
    }, []);
    return (
        <Container>
            <div className={styles.pContainer + " " + styles.paddingBtm} data-aos="fade-up">
                <div className={cstyles.white_heading + " " + cstyles.textCntr}>
                    Business Setup Process in DMCC
                </div>

                <div className={styles.pWrapper}>
                    <div className={styles.box}>
                        <Card num="01" title="Pre-Incorporation Steps">
                            <div className={styles.content1Wrap}>
                                <div className={styles.List}>
                                    <div className={styles.ListTitle}>
                                        <span style={{ marginRight: 10 }}>
                                            <Image src="/images/LarrowY.svg" alt="" width={10} height={15} />
                                        </span>
                                        Phase 1
                                    </div>
                                    <div className={styles.title}>- Client Onboarding and Preliminary arrangements</div>
                                    <div className={styles.listDetails}>
                                        Client on board - Signing engagement letter, collecting due diligence documents to on board client.
                                        Confirmation on corporate structure and other groundworks – Identify and confirm the licensed activities. Shareholders and share allocations, company directors, managers, 3 desired names in accordance with DMCC regulation and collecting initial documents from client for DMCC company setup.
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={styles.box}>
                        <Card num="02" title={<>Incorporation<br /> Steps</>}>
                            <div className={styles.content1Wrap}>
                                <div className={styles.List}>
                                    <div className={styles.ListTitle}>
                                        <span style={{ marginRight: 10 }}>
                                            <Image src="/images/LarrowY.svg" alt="" width={10} height={15} />
                                        </span>
                                        Phase 2
                                    </div>
                                    <div className={styles.title}>- Portal set up and Initial Approval</div>
                                    <div className={styles.listDetails}>
                                        Our team establishes the client’s DMCC portal account and prepares the initial approval application.
                                        An initial approval is provided by DMCC compliance, who reviews the application to ensure all is in order with their compliance and regulation polices. DMCC then provides guidelines for next steps in the incorporation.
                                    </div>
                                </div>
                            </div>
                            </Card></div>
                            <div className={styles.box}>

<Card num="03" title="Post Incorporation steps">
                            <div className={styles.content1Wrap}>
                                <div className={styles.List}>
                                    <div className={styles.ListTitle}>
                                        <span style={{ marginRight: 10 }}>
                                            <Image src="/images/LarrowY.svg" alt="" width={10} height={15} />
                                        </span>
                                        Phase 3
                                    </div>
                                    <div className={styles.title}>- Incorporation final steps</div>

                                    <div className={styles.listDetails}>
                                        Our client reviews, signs, notarizes, and attests the required documentations.
                                        In accordance with client’s confirmation, our team rents a DMCC- based office/flexi desk and submit it together with notarized documents.
                                    </div>
                                    <div className={styles.listDetails}>
                                        DMCC executive schedules a video call meeting with client for passport verification.
                                        Within a day DMCC issues the service license and article of association and bank introductory letter.
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={styles.box}>
                        <Card showLine={false} >
                            <div className={styles.content1Wrap}>
                                <div className={styles.List}>
                                    <div className={styles.ListTitle}>
                                        <span style={{ marginRight: 10 }}>
                                            <Image src="/images/LarrowY.svg" alt="" width={10} height={15} />
                                        </span>
                                        Phase 4
                                    </div>
                                    <div className={styles.title}>- Open a corporate bank account in Dubai </div>
                                    <div className={styles.listDetails}>
                                    Our team would assist the client in setup of business bank account by liaising with clients preferred banking partners, submit the documents and due diligence to complete account opening.
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className={styles.box}>
                        <Card showLine={false}>
                            <div className={styles.content1Wrap}>
                                <div className={styles.List}>
                                    <div className={styles.ListTitle}>
                                        <span style={{ marginRight: 10 }}>
                                            <Image src="/images/LarrowY.svg" alt="" width={10} height={15} />
                                        </span>
                                        Phase 5
                                    </div>
                                    <div className={styles.title}>- Employee visa and other requirements </div>
                                    <div className={styles.listDetails}>
                                        Upon request, our team would prepare and submit visa request for its client and schedules visa stamping.
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>


                </div>
            </div>
        </Container>
    )
}

export default ADGM_process