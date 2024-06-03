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
                Types Of
               <span style={{ color: "#D4AE31" ,marginLeft:10}}>Companies</span>
            </div>
                    <ul>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth} style={{cursor:"auto"}}>
                            Authorized Firms
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth} style={{cursor:"auto"}}>
                            Authorized Market Institution
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth} style={{cursor:"auto"}}>
                            Designated Non-Financial Business or Profession
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth} style={{cursor:"auto"}}>
                            Registered Auditors
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth} style={{cursor:"auto"}}>
                            Non-Regulated Entities                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                            <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                            <span className={cstyles.key + " " + styles.keyWidth} style={{cursor:"auto"}}>
                            Exempt Companies 
                            </span>
                        </li>
                       
                    </ul>
                </div>

                <div className={cstyles.ADGM_newSectionFlexL} data-aos="fade-left">
                    <div className={cstyles.imgWrap}>
                    <Image src="/images/122.jpg" alt="" layout='fill' className={cstyles.borderR} />
                    </div>

                </div>

            </div>
        </div>
        </Container>
    )
}

export default ADGM_newSection