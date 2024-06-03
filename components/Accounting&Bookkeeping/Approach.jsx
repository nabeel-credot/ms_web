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
                <div className={styles.heading}>Our Approach</div>
                <div className={styles.contentWrap}>
                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            <div className={styles.num}>01</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                            Proactive
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            <div className={styles.num}>02</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                            Targeted
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            <div className={styles.num}>03</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                            Compliant
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.no_and_line}>
                            <div className={styles.num}>04</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.step}>
                            Beneficial
                        </div>
                    </div>

                </div>
            </div>
        </Container>

    )
}

export default Approach