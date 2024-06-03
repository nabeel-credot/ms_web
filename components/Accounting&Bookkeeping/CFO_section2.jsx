import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

import Collapsible from "./Collapsible_CFO";
import Container from '../Common/Container';
function CFO_section2() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container>
            <div className={styles.accounting_service_container} data-aos="fade-up">
                <div className={styles.white_heading}>
                    How can a CFO be of benefit for you?
                </div>
                <div className={styles.CFO_section2_sub}>
                    <div className={styles.columns}>
                        <Collapsible open={false} title={<>You may think CFO offers just traditional <span style={{ color: "white" }}>finance services</span> like:</>}   >
                            <div style={{ padding: 20, fontSize: "14px", color: "white", fontWeight: 300 }} className={styles.cfo_sec2_list}>
                                <ul>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Accounting</span>
                                    </li>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Budgeting</span>
                                    </li>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Planning</span>
                                    </li>

                                </ul>
                            </div>
                        </Collapsible>
                    </div>
                    <div className={styles.columns}>
                        <Collapsible open={false} title={<>But that counts about 45% of what they work on. There is another 14% focus on <span style={{ color: "white" }}>specialty finance:</span></>}  >
                            <div style={{ padding: 20, fontSize: "14px", color: "white", fontWeight: 300 }} className={styles.cfo_sec2_list}>
                                <ul>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Treasury</span>
                                    </li>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Audit</span>
                                    </li>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Taxes</span>
                                    </li>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Investor relations</span>
                                    </li>
                                </ul>
                            </div>
                        </Collapsible>
                    </div>
                    <div className={styles.columns}>
                        <Collapsible open={false} title={<>And another 41% is spent on <span style={{ color: "white" }}>non-finance services</span>, which <span style={{ textDecoration: "line-through", textDecorationColor: "#D4AE31" }}>includes</span>:</>}  >
                            <div style={{ padding: "20px 20px 10px", fontSize: "14px", color: "white", fontWeight: 300 }} className={styles.cfo_sec2_list}>
                                <ul>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Strategic leadership</span>
                                    </li>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Finance capabilities</span>
                                    </li>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Organizational transformation</span>
                                    </li>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Fintech knowledge</span>
                                    </li>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Performance management</span>
                                    </li>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Risk management & procurement</span>
                                    </li>  <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Capital allocation</span>
                                    </li>  <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Negotiation</span>
                                    </li>  <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Conflict management</span>
                                    </li>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Experience in Data analytics</span>
                                    </li>
                                    <li>
                                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                        <span className={styles.key}>Market knowledge</span>
                                    </li>
                                </ul>
                            </div>
                        </Collapsible>
                    </div>
                </div>

                <div className={styles.CFO_section2_sub2}>
                    <div className={styles.CFO_section2_subLeft} data-aos="fade-right">
                        <Image src="/images/cfoBg2.png" alt="" width="416" height="264" />
                    </div>
                    <div className={styles.CFO_section2_subRight} data-aos="fade-left">
                        <div className={styles.white_heading}>
                            Will it challenge your expenses?
                        </div>
                        <div className={styles.details18OpenWhite} style={{ marginTop: 30 }}>
                            Probably, but expenses should be challenged, your money needs to be spent on those who will ensure you reach your goals. CFO services can foresee opportunities and anticipate pitfalls through data-driven analysis for growth and this will save you time to focus on other sectors of your start-up. But how much does a CFO service cost exactly? That depends on the outsourced CFO firm, also if it’s a virtual CFO service, or part-time CFO service.
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className={styles.CFO_section2_sub2} >
                        <div className={styles.CFO_section2_subRight2 + " " + styles.orderFirst} >
                            <div className={styles.white_heading}>
                                Virtual CFO / Outsourced CFO
                            </div>
                            <div className={styles.details18OpenWhite} style={{ marginTop: 10 }}>
                                But the good news is, outsourced services are mostly way cheaper to accommodate start-ups, it ranges in prices that differ from firm to firm. Virtual CFO services also exist, from country to country, so you can easily find different outsourced CFO services costs that would suit you.
                            </div>
                            <div className={styles.details18OpenWhite} style={{ marginTop: 10 }}>
                                VCFOs serve as a link between the client’s bookkeeper and their management team, offering them financial support when they need it. Sometimes the bookkeeper and the management team are the same people in micro-businesses. Larger businesses can often benefit from having the VCFO sit between the finance director (FD) and the bookkeeper, providing extra support the FD doesn’t have time for or the bookkeeper doesn’t have the training to provide.
                            </div>
                        </div>
                        <div className={styles.CFO_section2_subLeft + " " + styles.orderSecond}>
                            <Image src="/images/cfoBg3.png" alt="" width="416" height="233" />
                        </div>
                    </div>
                    <div className={styles.details18OpenWhite} style={{ marginTop: 10 }}>
                        Small businesses and medium-sized businesses benefit greatly from hiring a startup CFO service or a cost-effective VCFO. VCFO invests in developing their cloud technology and digital solutions and can offer their services to more clients at the same time, making their services more affordable to SMEs.
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default CFO_section2