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
                <div className={styles.heading}>Industries we add value</div>
                <div className={styles.contentWrap}>
                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            <div className={styles.iconTech}>
                                <Image src="/images/government.png" alt="" layout="fill" />
                            </div>

                            {/* <div className={styles.num}>01</div> */}
                            <div className={styles.lineTech}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepTech}>
                            Government
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            {/* <div className={styles.num}>02</div> */}
                            <div className={styles.iconTech}>
                                <Image src="/images/Helthcare.png" alt="" layout='fill' />
                            </div>
                            <div className={styles.lineTech}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepTech}>
                            Healthcare
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            {/* <div className={styles.num}>03</div> */}
                            <div className={styles.iconTech}>
                                <Image src="/images/Energy.png" alt="" layout='fill' />
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
                            {/* <div className={styles.num}>04</div> */}
                            <div className={styles.iconTech}>
                                <Image src="/images/Hospitality.png" alt="" layout='fill' />
                            </div>
                            <div className={styles.lineTech}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepTech}>
                            Hospitality
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            {/* <div className={styles.num}>05</div> */}
                            <div className={styles.iconTech}>
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
                            {/* <div className={styles.num}>06</div> */}
                            <div className={styles.iconTech}>
                                <Image src="/images/Realestate.png" alt="" layout='fill' />
                            </div>
                            <div className={styles.lineTech}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepTech}>
                            Real Estate
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            {/* <div className={styles.num}>07</div> */}
                            <div className={styles.iconTech}>
                                <Image src="/images/Manufacturing.png" alt="" layout='fill' />
                            </div>
                            <div className={styles.lineTech}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepTech}>
                            Manufacturing
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            {/* <div className={styles.num}>08</div> */}
                            <div className={styles.iconTech}>
                                <Image src="/images/Financialservices.png" alt="" layout='fill' />
                            </div>
                            <div className={styles.lineTech}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepTech}>
                            Financial Services
                        </div>
                    </div>

                </div>
            </div>
        </Container>

    )
}

export default Approach