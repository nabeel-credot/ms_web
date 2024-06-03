import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./SME.module.css"
import Image from 'next/image'
import Container from '../Common/Container';
import Link from 'next/link';
function SME() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false
        })
    }, []);


    return (
        <Container style={{ padding: 0 }}>
            <div className={styles.sme_main} data-aos="fade-up">
                <div className={styles.blue_container}>
                    <div className={styles.sme_container}>
                        <div className={styles.sme_left}>
                            <div className={styles.sme_heading}>
                                <h3>Proudly Partnered with<br />
                                    Abu Dhabi SME Hub</h3>
                            </div>
                            <div className={styles.mobOnly}>
                                <Image src="/images/SME.png" alt="" width={367} height={194} />
                            </div>
                            <div className={styles.sme_detail}>
                                We are very honoured to partner with ADSME HUB, which is the flagship initiative of the Khalifa Fund For Enterprise Development (KFED-Government of Abu Dhabi). The collaboration aims to empower entrepreneurs in the UAE to help SMEs and startups scale their business by upskilling in Financial literacy and Tax knowledge. The time has come for us to continually prove to our clients and followers what we are capable of, not merely with our work but in making meaningful positive impacts on the lives of budding entrepreneurs and the changing ecosystem around us.
                            </div>
                        </div>

                        <div className={styles.sme_right + " " + styles.webOnly}>
                            <Image src="/images/SME.png" alt="" width={573} height={304} />
                        </div>
                    </div>
                    <div className={styles.sme_initiatives}>
                        <div className={styles.sme_subHeading}>
                            Initiatives
                        </div>

                        <div className={styles.sme_sub}>

                            <div className={styles.sme_box}>
                                <Link href="https://www.adsmehub.ae/en/expert-details/mohammed-shafeek" >
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div className={styles.webOnly}>
                                            <Image src="/images/sme1.png" alt="" width={308} height={160} />
                                        </div>
                                        <div className={styles.mobOnly}>
                                            <Image src="/images/sme1new.png" alt="" width={352} height={160} />
                                        </div>
                                        <div className={styles.smeContent}>
                                            Financial Literacy <br />Workshops
                                            <span className={styles.arrow} >
                                            </span>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div className={styles.sme_box}>
                                <Link href="/e-commerce-startup">
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div className={styles.webOnly}>
                                            <Image src="/images/sme3.png" alt="" width={308} height={160} />
                                        </div>
                                        <div className={styles.mobOnly}>
                                            <Image src="/images/sme3new.png" alt="" width={352} height={160} />
                                        </div>
                                        <div className={styles.smeContent}>
                                            Smart Up
                                            <span className={styles.arrow} >
                                            </span>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div className={styles.sme_box}>
                                <Link href="https://www.adsmehub.ae/en">
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div className={styles.webOnly}>
                                            <Image src="/images/smeW.png" alt="" width={308} height={160} />
                                        </div>
                                        <div className={styles.mobOnly} style={{ border: "1px solid #D4AE31" }}>
                                            <Image src="/images/smeW1.png" alt="" width={353} height={160} />
                                        </div>
                                        <div className={styles.smeContent}>
                                            Women Who <br />Hustle
                                            <span className={styles.arrow} >
                                            </span>
                                        </div>
                                    </a>
                                </Link>
                            </div>





                            <div className={styles.sme_box}>
                                <Link href="/our-awards">
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div className={styles.webOnlyMS}>
                                            <Image src="/images/MS_UAE_AWARD.png" alt="" width={300} height={140} style={{ borderTopRightRadius: "25px" }} objectFit="contain" />
                                        </div>
                                        <div className={styles.mobOnlyImg} >
                                            <Image src="/images/MS_UAE_AWARD.png" alt="" width={178} height={160} objectFit="contain" objectPosition="center" />
                                        </div>
                                        <div className={styles.smeContent}>
                                            MS UAE AWARDS<br /> 2022
                                            <span className={styles.arrow} >
                                            </span>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.sme_box}>
                                <Link href="/our-awards">
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div className={styles.webOnlyMS}>
                                            <Image src="/images/masdar.png" alt="" width={308} height={150} style={{ borderTopRightRadius: "25px" }} objectFit="contain" />
                                        </div>
                                        <div className={styles.mobOnlyImg} >
                                            <Image src="/images/masdar.png" alt="" width={178} height={160} objectFit="contain" objectPosition="center" />
                                        </div>
                                        <div className={styles.smeContent}>
                                           MASDAR<br /> 2022
                                            <span className={styles.arrow} >
                                            </span>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </Container>
    )
}

export default SME