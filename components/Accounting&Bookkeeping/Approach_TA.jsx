import React, { useEffect } from 'react'
import styles from "./Approach.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'


import Container from '../Common/Container';
function Approach() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
            <div className={styles.container} data-aos="fade-up">
                <h4 className={styles.heading2}>MS have knowledge of numerous difficult transactions and unusual circumstances in a variety of industries & organizations, including</h4>
                <div className={styles.contentWrap}>
                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            <div className={styles.iconTech} style={{marginRight:5}}>
                                <Image src="/images/Energy.png" alt="" layout="fill" />
                            </div>

                            <div className={styles.lineTech}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepTech}>
                            Energy
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            <div className={styles.iconTech}  style={{marginRight:5}}>
                                <Image src="/images/Aviation.png" alt="" layout='fill' />
                            </div>
                            <div className={styles.lineTech}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepTech}>
                            Aviation
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            <div className={styles.iconTech}  style={{marginRight:5}}>
                                <Image src="/images/Construction.png" alt="" layout='fill' />
                            </div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                            Construction
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            <div className={styles.iconTech}  style={{marginRight:5}}>
                                <Image src="/images/government.png" alt="" layout="fill" />
                            </div>
                            <div className={styles.lineTech}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepTech}>
                            Government
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.iconTech}  style={{marginRight:5}}>
                                <Image src="/images/Financialservices.png" alt="" layout='fill' />
                            </div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                            Financial Services
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            <div className={styles.iconTech}  style={{marginRight:5}}>
                                <Image src="/images/Helthcare.png" alt="" layout='fill' />
                            </div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                            Healthcare
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            <div className={styles.iconTech}  style={{marginRight:5}}>
                                <Image src="/images/Manufacturing.png" alt="" layout='fill' />
                            </div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                            Manufacturing
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            <div className={styles.iconTech}  style={{marginRight:5}}>
                                <Image src="/images/FamilyOffice.png" alt="" layout='fill' />
                            </div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                            Family Offices
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                        <div className={styles.iconTech}  style={{marginRight:5}}>
                                <Image src="/images/SPvehicles.png" alt="" layout='fill' />
                            </div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                            Special Purpose Vehicles
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            <div className={styles.iconTech}  style={{marginRight:5}}>
                                <Image src="/images/Realestate.png" alt="" layout='fill' />
                            </div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                            Real estate
                        </div>
                    </div>

                   

                </div>
            </div>
        </Container>

    )
}

export default Approach