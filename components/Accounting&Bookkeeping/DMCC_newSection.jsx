import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./ADGM.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

import Container from '../Common/Container';
function ADGM_newSection() {
    useEffect(() => {
        AOS.init({
            duration: 1900,
            once: false,
        })
    }, []);

    return (
        <Container>
    <div className={cstyles.ADGM_newSection} >
    
            <div className={cstyles.ADGM_newSectionFlex} >
                <div className={cstyles.ADGM_newSectionFlexR} data-aos="fade-right">
                <div className={cstyles.black_heading2 } >
                Benefits of
               <span style={{ color: "#D4AE31" ,marginLeft:10}}>DMCC</span>
            </div>
                    <ul>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>
                            0% personal income tax and low corporate tax rate
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>
                            100% capital repatriation and business ownership
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>
                            Enhanced networking opportunities by connecting 22000+businesses through various events and workshops to grow your business.
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>
                            Strategic location for connecting Abu Dhabi and Dubai and close to global markets, major transportation, and road networks.
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>
                            Offers unique services like flexible visas, medical services, flexi, and service desks, furnished and serviced offices and so much more.
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>
                            Full-fledged online portal for business set up in DMCC and customer services. 
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>
                            Best Security System to ensure secure environment.
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>
                            Reasonable License Cost at DMCC.
                            </span>
                        </li>
                    </ul>
                </div>

                <div className={cstyles.ADGM_newSectionFlexL} data-aos="fade-left">
                    <div className={cstyles.imgWrap}>
                    <Image src="/images/dmcc_2.jpg" alt="" layout='fill' className={cstyles.borderR} />
                    </div>

                </div>

            </div>
        </div>
        </Container>
    )
}

export default ADGM_newSection