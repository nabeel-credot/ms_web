import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Styles.module.css"
import BluePointBox from '../BluePointBox'
import Container from '../Common/Container';
function Accounting_services_points() {
    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false,
        })},[]);
    
    return (
        <Container>
        <div className={styles.accounting_services_points_container}>
            <div className={styles.accounting_services_points_box} data-aos="fade-right">
                <BluePointBox style={{paddingTop:70,paddingRight:55,paddingLeft:30, width: "610px",
            height: "243px"}}>
                    <div className={styles.accounting_services_points_detail}>
                    We use the Wage Protection System (WPS) to generate the employee file as well as the payslip. The employees will be paid on your behalf automatically through the WPS
                    <span style={{color:"#D4AE31",marginLeft:5}}> on time!
                    </span>
                    </div>
                </BluePointBox>
            </div>
            <div className={styles.accounting_services_points_box + " " + styles.services_box_mL} data-aos="fade-left">
            <BluePointBox style={{paddingTop:70,paddingRight:55,paddingLeft:30, width: "610px",
            height: "243px"}}>
                    <div className={styles.accounting_services_points_detail}>
                    If you knew, that hiring a great team – is a strong pillar for your organization, then know that having a great system in place to manage the team efficiently is the next.
                    </div>
                </BluePointBox>
            </div>
            <div className={styles.accounting_services_points_box + " " + styles.cntr} data-aos="fade-up">
                <BluePointBox style={{paddingTop:70,paddingRight:65,paddingLeft:35, width: "610px",
            height: "243px"}}>
                    <div className={styles.accounting_services_points_detail}>
                    To the business owners, we say – the dream of ease, performance, management, accuracy, and optimization. And know that, you are a business owner, so let us be the 
                    <span style={{color:"#D4AE31",marginLeft:5}}>payroll expert!
                    </span>
                    </div>
                </BluePointBox>
            </div>

            <div className={styles.mobOnly}>
                <BluePointBox style={{
                    padding: "45px 30px", width: "auto",
                    height: "auto"
                }}>
                    <div className={styles.accounting_services_points_detail}>
                    We use the Wage Protection System (WPS) to generate the employee file as well as the payslip. The employees will be paid on your behalf automatically through the WPS
                    <span style={{color:"#D4AE31",marginLeft:5}}> on time!
                    </span>
                    </div>
                </BluePointBox>

                <BluePointBox style={{
                    padding: "45px 30px", width: "auto",
                    height: "auto",margin:"50px 0"
                }}>
                       <div className={styles.accounting_services_points_detail}>
                    If you knew, that hiring a great team – is a strong pillar for your organization, then know that having a great system in place to manage the team efficiently is the next.
                    </div>
                </BluePointBox>

                <BluePointBox style={{
                    padding: "45px 30px", width: "auto",
                    height: "auto"
                }}>
                        <div className={styles.accounting_services_points_detail}>
                    To the business owners, we say – the dream of ease, performance, management, accuracy, and optimization. And know that, you are a business owner, so let us be the 
                    <span style={{color:"#D4AE31",marginLeft:5}}>payroll expert!
                    </span>
                    </div>
                </BluePointBox>
            </div>

        </div>
        </Container>
    )
}

export default Accounting_services_points