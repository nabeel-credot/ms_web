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
                <div className={styles.heading}>Key processes as use cases</div>
                <div className={styles.contentWrap}>
                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.numBase}>01</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                        Finance & Accounting
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
                        HR
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
                        Information Technology
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
                        Sales & Marketing
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
                        Customer Services
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
                        Other<br/> Administrative<br/> Process
                        </div>
                    </div>

                </div>
            </div>
        </Container>

    )
}

export default Approach