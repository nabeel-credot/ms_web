import React, { useEffect } from 'react'
import styles from "./RA_Services.module.css"

import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';
function RA_IA_service() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
            <div className={styles.container} data-aos="fade-up">
                <h3 className={styles.heading} style={{ textAlign: "center" }}>
                    Familiarise the core income generating activities (CIGA)
                </h3>
                <div className={styles.subdetail + " " + styles.marginTop} style={{ textAlign: "center" }}>
                    Familiarise the core income generating activities (CIGA)
                </div>
                <div className={styles.serviceWrap}>
                    <div className={styles.box}>
                        {/* <div className={styles.topESR}>
                            <div className={styles.numAB}>01</div>
                        </div> */}
                        <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
                            </div>
                            <div className={styles.numAB}>01</div>
                        </div>
                        <div className={styles.titleESR}>
                            Banking business
                        </div>
                       
                        <div className={styles.listESR}>
                            <ul>

                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>Raising funds, managing risk including credit, currency, and interest risk.</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>Taking hedging positions.</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>Providing loans, credit, or other financial services to customers.</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth} >Managing capital and preparing reports to investors or any government authority with functions relating to the supervision or regulation of such business.</span>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className={styles.box}>
                    <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
                            </div>
                            <div className={styles.numAB}>02</div>
                        </div>
                        <div className={styles.titleESR}>
                            Insurance business
                        </div>
                       
                        <div className={styles.listESR}>
                            <ul>

                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Predicting and calculating risk.</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Insuring or re-insuring against risk and providing Insurance Business services to clients.</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Underwriting insurance and reinsurance.</span>
                                </li>


                            </ul>
                        </div>

                    </div>

                    <div className={styles.box}>
                    <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
                            </div>
                            <div className={styles.numAB}>03</div>
                        </div>
                        <div className={styles.titleESR}>
                            Investment fund management business
                        </div>
                       
                        <div className={styles.listESR}>
                            <ul>

                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Taking decisions on the holding and selling of investments.</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Calculating risk and reserves.
                                    </span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Taking decisions on currency or interest fluctuations and hedging positions.</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Preparing reports to investors or any government authority with functions relating to the supervision or regulation of such business.</span>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <div className={styles.box}>
                    <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
                            </div>
                            <div className={styles.numAB}>04</div>
                        </div>
                        <div className={styles.titleESR}>
                            Lease – finance business
                        </div>
                       
                        <div className={styles.listESR}>
                            <ul>

                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Agreeing on funding terms.</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Identifying and acquiring assets to be leased (in the case of leasing)
                                    </span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Setting the terms and duration of any financing or leasing</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Monitoring and revising any agreements</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Managing any risks</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                           <div className={styles.box}>
                    <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
                            </div>
                            <div className={styles.numAB}>05</div>
                        </div>
                        <div className={styles.titleESR}>
                            Holding company business
                        </div>
                       
                        <div className={styles.listESR}>
                            <ul>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Activities related to a Holding Company Business.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.box}>
                    <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
                            </div>
                            <div className={styles.numAB}>06</div>
                        </div>
                        <div className={styles.titleESR}>
                            Headquarters business
                        </div>
                       
                        <div className={styles.listESR}>
                            <ul>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        The provision of senior management</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        The assumption or control of material risk for activities carried out by foreign group companies
                                    </span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Substantive advice in relation to the assumption or control of such risks.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
            

                    <div className={styles.box}>
                    <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
                            </div>
                            <div className={styles.numAB}>07</div>
                        </div>
                        <div className={styles.titleESR}>
                            Shipping business
                        </div>
                       
                        <div className={styles.listESR}>
                            <ul>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Managing crew (including hiring, paying, and overseeing crew members).</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Overhauling and maintaining ships.
                                    </span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Overseeing and tracking shipping.</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Overseeing and tracking shipping.Determining what goods to order and when to deliver them, organizing, and overseeing voyages.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

               

                    <div className={styles.box}>
                    <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
                            </div>
                            <div className={styles.numAB}>08</div>
                        </div>
                        <div className={styles.titleESR}>
                            Intellectual property business (IP)
                        </div>
                       
                        <div className={styles.listESR}>
                            <ul>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Taking Strategic decisions and managing (as well as bearing) the principal risks related to the development and subsequent exploitation of intangible asset generating income.</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Taking Strategic decisions and managing (as well as bearing) the principal risks related to the acquisition by third parties and subsequent exploitation and protection of the intangible asset.</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Carrying on the ancillary trading activities through which the intangible assets are exploited leading to the generation of income from third parties.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.box}>
                    <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
                            </div>
                            <div className={styles.numAB}>09</div>
                        </div>
                        <div className={styles.titleESR}>
                            Distribution and service centre business
                        </div>
                       
                        <div className={styles.listESR}>
                            <div className={styles.listESRhead}>Distribution Business CIGAs:</div>
                            <ul>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Transporting and storing component parts, materials, or goods ready for sale.</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Managing inventories.
                                    </span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Taking orders.</span>
                                </li>

                            </ul>
                            <div className={styles.listESRhead}>Service Center CIGAs:</div>

                            <ul>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Providing consulting or other administrative services.</span>
                                </li>
                                <li>
                                    <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                    <span className={styles.key + " " + styles.keyWidth}>
                                        Carrying on the ancillary trading activities through which the intangible assets are exploited leading to the generation of income from third parties.</span>
                                </li>
                            </ul>


                        </div>
                    </div>





                </div>
            </div>

        </Container >
    )
}

export default RA_IA_service