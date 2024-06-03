import React, { useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import styles from "../Home/Audit.module.css"
import YellowBorderCard from "../YellowBorderCardWithBorder"
import Link from 'next/link';


import Container from '../../components/Common/Container';
function AuditService() {

 
    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false,
        })},[]);
        
    return (

            <Container>
            <div className={styles.audit_container2}>
              <div className={styles.audit_left} data-aos="fade-right">
      
                <YellowBorderCard src="/images/audit1.svg" title={<>Accounting and  <br /> Bookkeeping</>} href="/accounting-bookkeeping" />
      
                <YellowBorderCard src="/images/audit2.svg" title={<>Help me on <br />Taxation</>} href="/taxation" />
                <YellowBorderCard src="/images/audit3.svg" title={<>Business Advisory</>} href="/advisory" />
                <YellowBorderCard src="/images/audit4.svg" title={<>Help my Company<br /> Grow</>} href="/business_scaleup
                      " />
      
              </div>
      
              <div className={styles.audit_right} data-aos="fade-left">
              <div className={styles.white_heading}>
                    <h3><Link href="/audit"  prefetch={false}>Audit Services</Link></h3>
                </div>
                <div className={styles.auditService_details}>
                We, MSians ensure that the financial systems that hold your business together are reliable, consistent and inherently robust.
                </div>
              </div>
            </div>
          </Container>
    )
}

export default AuditService