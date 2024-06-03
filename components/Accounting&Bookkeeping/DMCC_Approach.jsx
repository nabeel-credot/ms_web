import React, { useEffect } from 'react'
import styles from "./Approach.module.css"

import cstyles from "./Styles.module.css"

import astyles from "./ADGM.module.css"
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
                <div className={styles.heading}>Key requirements for setting up in DMCC</div>
                <div className={styles.contentWrap}>
                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.num}>01</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepADGM}>
                            Name
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.num}>02</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepADGM}>
                            Director
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.num}>03</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepADGM}>
                            Resolution
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.num}>04</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepADGM}>
                            Articles of Association
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.num}>05</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepADGM}>
                            Authorized signatory
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.num}>06</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepADGM}>
                            MLRO<br /> (in case of DNFBPs)
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.num}>07</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepADGM}>
                            Shareholders & shareholding details
                        </div>
                    </div>

                    <div className={styles.contentBase}>
                        <div className={styles.no_and_line}>
                            <div className={styles.num}>08</div>
                            <div className={styles.line}>
                                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
                            </div>
                        </div>
                        <div className={styles.stepADGM}>
                            Ultimate Beneficial owner details
                        </div>
                    </div>

                </div>


                <div className={astyles.corporate3_container} data-aos="fade-up">

                    <div className={cstyles.details24400 + " " + cstyles.spclPadding2} style={{color:"#FFFFFF"}}>
                    &quot;Acquiring the license is not the only requirement for being registered under the DMCC Registration Authority. Office space is mandatory to get your entity functioning. &quot;

                    </div>
                    <div style={{ marginTop: 30 }} className={cstyles.heading30White}>
                        Documents Required for the Incorporation
                    </div>
                    <div className={astyles.adgmSec3}>
                        <ul>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Passport Copy/Emirates ID & Visa Page (if applicable)</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Address Proof (Utility Bill/Tenancy Contract) </span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Business Profile</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Business Plan (Depends on Activities)
                                </span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}> Share holder education and experience certificates (Depends on activities)</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}> Third party No objection certificate (For certain activities)</span>
                            </li>
                          
                        </ul>
                    </div>


                </div>      
            </div>
        </Container>

    )
}

export default Approach