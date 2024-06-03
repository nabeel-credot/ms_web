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
                {/* <div className={styles.heading}>Key requirements for setting up in MASDAR</div>
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

                </div> */}


                <div data-aos="fade-up">

                    <div className={cstyles.details24400 + " " + cstyles.spclPadding2} style={{ color: "#FFFFFF" }}>
                        &quot;Acquiring the license is not the only requirement for being registered under the MASDAR Registration Authority. Office space is mandatory to get your entity functioning. &quot;

                    </div>
                    <div style={{ marginTop: 30 }} className={cstyles.heading30White}>
                        Documents Required for the Incorporation
                    </div>
                    <div className={cstyles.details18OpenWhitePo}>
                        The Masdar Free Zone requires detailed documentation for company formation. We have compiled a list of all necessary documents for application below:
                    </div>
                    <div className={astyles.adgmSec3}>
                        <ul>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>The business plan (Details of Share Holder(s) or Parent Company)</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Original Certificate of Registration of the Corporate Person (a copy will be accepted if notarized).</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Original Certificate of Good Standing (issued by the Registrar of Companies in which jurisdiction the Corporate Person is incorporated to ensure existence and continuity of the Corporate Person) if the Corporate Person is more than two years old [copy will be accepted if notarized].</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Copy of a valid Trade License issued by the Department of Economy & Development for the Corporate Person.
                                </span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Copy of the Commercial Registration issued by the Department of Planning & Economy for the Corporate Person.</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>A document setting out the personal details (CV) of the individual shareholder(s).
                                    Valid passport copy of the individual shareholder(s).</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Original Reference letter provided by the Bank for individual shareholder(s).</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Specimen signature of the individual shareholder(s) [Template provided].</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Passport-size photograph (with white background) of the individual shareholder(s).</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Original Memorandum and Articles of Association of the parent company along with a list of the current Directors.</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Shareholder (s) / Board Resolution of the parent company / Corporate Shareholder (s) (Notarized and Legalized) calling for the establishment of a Branch / LLC in Masdar City and guaranteeing full financial commitment.</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Appointment of the Negotiator / Legal Representative (optional).
                                    Power of Attorney for the Manager (if not part of the Resolution) – Notarized and Legalized.
                                    Details of Directors</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Valid Passport copy of the Director (s)</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Specimen signature of the Director (s)</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Passport-size photograph (with white background) of the Director (s).</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Details of Managers</span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Valid Passport copy of the Manager.
                                </span>
                            </li>
                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>NOC from the current Residency visa Sponsor of the Manager in the U.A.E. (if applicable).
                                </span>
                            </li>

                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Specimen signature of the Manager
                                </span>
                            </li>

                            <li>
                                <div className={cstyles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></div>
                                <span className={astyles.key + " " + cstyles.keyWidth}>Passport-size photograph (with white background) of the Manager.
                                </span>
                            </li>

                        </ul>
                    </div>


                </div>
            </div>
        </Container>

    )
}

export default Approach