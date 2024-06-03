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
               <span style={{ color: "#D4AE31" ,marginLeft:10}}>MASDAR</span>

               {/* Benefits of Setting up a Business in Masdar City Free Zone  */}
            </div>
                    <ul>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>
                            Proximity to ports, airports, and commercial centers
                            </span>*
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>
                            Favorable regulations and cost-effective license packages
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>
                            Unique sustainable living environment
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>
                            Strategic location for reaching a massive geographical reach
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth}>
                            Offers unique services like flexible visas, medical services, flexi, and service desks, furnished and serviced offices and so much more.
                            </span>
                        </li>
                    </ul>
                </div>

                <div className={cstyles.ADGM_newSectionFlexL} data-aos="fade-left">
                    <div className={cstyles.imgWrap}>
                    <Image src="/images/masdar_bg2.jpg" alt="" layout='fill' className={cstyles.borderR} />
                    </div>

                </div>

            </div>
        </div>
        </Container>
    )
}

export default ADGM_newSection