import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import styles from "./Tax.module.css"
import Image from 'next/image'

import Container from '../Common/Container';
function TaxConsultant() {

    useEffect(()=>{
        AOS.init({
          duration: 1900,
          once: false
        })},[]);
        
    return (
        <Container>
        <div className={styles.consultant_container}>
            <div className={styles.c_left} data-aos="fade-right">
                <div className={styles.c_heading}>
                    <h3>How can we as your TAX<br/>
                        Consultant in UAE support you?</h3>
                </div>
                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={15} height={25} className={styles.yArrow} /></div>
                        <span className={styles.key+" "+styles.keyWidth}>Accounting and Bookkeeping Services.</span>
                    </li>
                    
                    <li>
                        <span className={styles.wArrow}><Image src="/images/LarrowB.svg" alt="" width={15} height={25} /></span>
                        <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={15} height={25} /></span>
                        <span className={styles.key+" "+styles.keyWidth}>VAT Advisory & Compliance Support.</span></li>
                    <li>
                        <span className={styles.wArrow}><Image src="/images/LarrowB.svg" alt="" width={15} height={25} /></span>
                        <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={15} height={25} /></span>
                        <span className={styles.key+" "+styles.keyWidth}>Assurance & Internal Audit.</span></li>
                    <li>
                        <span className={styles.wArrow}><Image src="/images/LarrowB.svg" alt="" width={15} height={25} /></span>
                        <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={15} height={25} /></span>
                        <span className={styles.key+" "+styles.keyWidth}>Corporate Finance Advisory Service.</span></li>
                    <li>
                        <span className={styles.wArrow}><Image src="/images/LarrowB.svg" alt="" width={15} height={25} /></span>
                        <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={15} height={25} /></span>
                        <span className={styles.key+" "+styles.keyWidth}>CBCR reporting / Economic substance Regulations.</span></li>
                    <li>
                        <span className={styles.wArrow}><Image src="/images/LarrowB.svg" alt="" width={15} height={25} /></span>
                        <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={15} height={25} /></span>
                        <span className={styles.key+" "+styles.keyWidth}>Business Plan / Feasibility Study / Projections.</span></li>
                    <li>
                        <span className={styles.wArrow}><Image src="/images/LarrowB.svg" alt="" width={15} height={25} /></span>
                        <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={15} height={25} /></span>
                        <span className={styles.key+" "+styles.keyWidth}>Business Valuation Services.</span></li>
                </ul>
            </div>

            <div className={styles.c_right} data-aos="fade-left">
            <div className={styles.borderBottom}></div>
                <div className={styles.borderLeft}></div>
                <div className={styles.borderTop}></div>
                <div className={styles.borderRight}></div>

            </div>
        </div>
        </Container>
    )
}

export default TaxConsultant