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
                <h4 className={styles.heading}>
                    Our CFO services could cover many verticals of your business, which includes
                </h4>
                <div className={styles.contentWrap}>
                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.numBase}>01</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                        Strategic <br/>Finance
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.numBase}>02</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                        Fund Raising Assistance
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.numBase}>03</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                        Compliance & Controls
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.numBase}>04</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                        Board Communications
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.numBase}>05</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                        Financial <br/>System & Operations
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.numBase}>06</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                        Reporting
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default Approach