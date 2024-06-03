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
                <h4 className={styles.heading}>Type of Mergers & Acquisitions</h4>
                <div className={styles.contentWrap}>
                    <div className={styles.content2}>
                        <div className={styles.no_line_title}>
                            <div className={styles.no_and_line}>
                                <div className={styles.num}>01</div>
                                <div className={styles.line}>
                                    <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                                </div>
                            </div>
                            <div className={styles.step}>
                                Vertical integration
                            </div>
                        </div>
                        <div className={styles.details}>
                            A combination of two or more businesses engaged in a comparable form of production or industry to increase market share.
                        </div>
                    </div>

                    <div className={styles.content2}>
                        <div className={styles.no_line_title}>
                            <div className={styles.no_and_line}>
                                <div className={styles.num}>02</div>
                                <div className={styles.line}>
                                    <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                                </div>
                            </div>
                            <div className={styles.step}>
                            Horizontal integration
                            </div>
                        </div>
                        <div className={styles.details}>
                        The practice of one company acquiring another that operates in the same general areas or sectors is known as horizontal integration.
                        </div>
                    </div>

                    <div className={styles.content2}>
                        <div className={styles.no_line_title}>
                            <div className={styles.no_and_line}>
                                <div className={styles.num}>03</div>
                                <div className={styles.line}>
                                    <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                                </div>
                            </div>
                            <div className={styles.step}>
                            Conglomeration
                            </div>
                        </div>
                        <div className={styles.details}>
                        Acquisition of unrelated companies that continue to produce in unrelated sectors.
                        </div>
                    </div>

                </div>
            </div>
        </Container>

    )
}

export default Approach