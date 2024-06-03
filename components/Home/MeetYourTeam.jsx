import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Services.module.css"
import Image from 'next/image'
import Button from "../ButtonYellow"
import Link from 'next/link';
import Container from '../Common/Container';
function MeetYourTeam() {

    useEffect(() => {
        AOS.init({
            duration: 1900,
            once: false
        })
    }, []);
    return (
        <Container>
            <div className={styles.meet_container}>
                <div className={styles.meet_left} data-aos="fade-right">

                    <div className={styles.meet_heading + " " + styles.widthMeet}>
                        <h3>What you need and what
                            MS can  deliver is a strong
                            match because,</h3>
                    </div>
                    <div className={styles.meet_detail}>
                        <div>Creating a success story is no fun-game. It takes great effort and great time to build an empire. That’s why we’ve become a planning team, to build and maintain a strong client base in planning and executing your financial strategies. We’re solely interested in you and your entrepreneurial aspirations because promises are not just words for us, but to be kept and cherished. Your unique visions and missions defines our team and powers us everyday. Our unparalleled culture and approach deliver’s enduring results, customized to
                            each clientele. Being able to work for radiant clients makes our team brighter every passing day.</div>
                        <div>
                            It’s all about you, what you do and where you want to be. Decide it for yourselves and go for it yourselves.
                        </div>
                    </div>
                    <div className={styles.webOnly}>
                        <Button value="Meet Our Team" href="/ms" backgroundColor="#D4AE31" color="#192B3A" width="316px"
                            height="75px" src="/images/LarrowB.svg" style={{fontSize:"25px"}} arrowH={25} arrowW={15} />
                    </div>
                    <div className={styles.mobOnly2}>
                        <Button value="Meet Our Team" href="/ms" backgroundColor="#D4AE31" color="#192B3A" width="202px"
                             src="/images/LarrowB.svg" style={{padding:10}} />
                    </div>

                </div>
                <div className={styles.meet_right} data-aos="fade-left">
                    <div className={styles.meet_box}>
                        <ul>
                            <li>
                                <div className={styles.wArrow}>
                                    <Image src="/images/meet1W.png" alt="" width={30} height={30} />
                                </div>
                                <div className={styles.yIcon}>
                                    <Image src="/images/meet1.svg" alt="" width={30} height={30} />
                                </div>
                                <span style={{ marginLeft: 15 }} className={styles.key}>
                                    <Link href="/advisory" prefetch={false}>
                                        Advisory
                                    </Link>
                                </span>
                                <span className={styles.arrow}></span>
                                {/* <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={12} height={22} className={styles.yArrow} /></div> */}

                            </li>
                            <div className={styles.line}></div>
                            <li>
                                <div className={styles.wArrow}>
                                    <Image src="/images/TechnologyW1.png" alt="" width={30} height={30} />
                                </div>
                                <div className={styles.yIcon}>
                                    <Image src="/images/technologyY.png" alt="" width={30} height={30} />
                                </div>
                                <span style={{ marginLeft: 15 }} className={styles.key}>
                                    <Link href="/technology" prefetch={false}>
                                        Technology
                                    </Link>
                                </span>
                                <span className={styles.arrow}></span>
                                {/* <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={12} height={22} className={styles.yArrow} /></div> */}
                            </li>
                            <div className={styles.line}></div>
                            <li>
                                <div className={styles.wArrow}>
                                    <Image src="/images/meet3.svg" alt="" width={30} height={30} />
                                </div>
                                <div className={styles.yIcon}>
                                    <Image src="/images/meet3Y.png" alt="" width={30} height={30} />
                                </div>

                                <span style={{ marginLeft: 15 }} className={styles.key}>
                                    <Link href="/taxation" prefetch={false}>
                                        Taxation
                                    </Link>
                                </span>
                                <span className={styles.arrow}></span>
                                {/* <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={12} height={22} className={styles.yArrow} /></div> */}
                            </li>
                            <div className={styles.line}></div>
                            <li>
                                {/* <span className={styl'es.wArrow}><Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></span> */}
                                <div className={styles.wArrow}>
                                    <Image src="/images/AccountingWhite1.png" alt="" width={30} height={30} />
                                </div>
                                <div className={styles.yIcon}>
                                    <Image src="/images/AccountingY.png" alt="" width={30} height={30} />
                                </div>
                                <span style={{ marginLeft: 15 }} className={styles.key}>
                                    <Link href="/accounting-services" prefetch={false}>
                                        Accounting
                                    </Link>
                                </span>
                                <span className={styles.arrow}></span>
                                {/* <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={12} height={22} className={styles.yArrow} /></div> */}
                            {/* </li>
                            <div className={styles.line}></div>
                            <li> */}

                            {/* <div className={styles.wArrow}>
                                    <Image src="/images/ADGM_Wn.png" alt="" width={30} height={30} />
                                </div> */}
                                {/* <div className={styles.yIcon}>
                                    <Image src="/images/ADGM_Y.png" alt="" width={30} height={30} />
                                </div> */}
                                {/* <span style={{ marginLeft: 15 }} className={styles.key}>
                                    <Link href="/#abu-dhabi-global-market-uae" prefetch={false}>
                                        <a>Abu Dhabi Global<br />Market (ADGM)</a>
                                    </Link>
                                </span> */}
                                <span className={styles.arrow}></span>
                                {/* <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={12} height={22} className={styles.yArrow} /></div> */}
                            </li>
                            

                            <div className={styles.line}></div>
                            <li>
                                {/* <span className={styl'es.wArrow}><Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></span> */}
                                <div className={styles.wArrow}>
                                    <Image src="/images/dmcc_logoW.png" alt="" width={30} height={30} />
                                </div>
                                <div className={styles.yIcon}>
                                    <Image src="/images/dmcc-logo.png" alt="" width={30} height={27} />
                                </div>
                                <span style={{ marginLeft: 15 }} className={styles.key}>
                                    <Link href="/dubai-multi-commodities-centre" prefetch={false}>
                                      DMCC
                                    </Link>
                                </span>
                                <span className={styles.arrow}></span>
                                {/* <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={12} height={22} className={styles.yArrow} /></div> */}
                            </li>

                            <div className={styles.line}></div>
                            <li>
                                {/* <span className={styl'es.wArrow}><Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></span> */}
                                <div className={styles.wArrow}>
                                    <Image src="/images/masdar_logoW.png" alt="" width={30} height={30} />
                                </div>
                                <div className={styles.yIcon}>
                                    <Image src="/images/masdar_logoY.png" alt="" width={30} height={30} />
                                </div>
                                <span style={{ marginLeft: 15 }} className={styles.key}>
                                    <Link href="/masdar" prefetch={false}>
                                     MASDAR
                                    </Link>
                                </span>
                                <span className={styles.arrow}></span>
                                {/* <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={12} height={22} className={styles.yArrow} /></div> */}
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MeetYourTeam