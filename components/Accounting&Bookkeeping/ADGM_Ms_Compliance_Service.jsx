import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
function ADGM_Ms_Service() {
  return (
    <Container>
      <div className={styles.servicenewTitle}>Compliance Services in ADGM by MS</div>
      <div className={styles.serviceImg}>
        <div>
         <div className={styles.imagediv}>
          <img src="/images/service1.jpg"/>
          <div className={styles.hoverEffect}/>
         </div>
          <p>Outsourced Finance Officer </p>
        </div>
        <div>
        <div className={styles.imagediv}>

          <img src="/images/service2.jpg" />
          <div className={styles.hoverEffect}/>
          </div>
          <p>Outsourced MLRO</p>
        </div>
        <div>
          
        <div className={styles.imagediv}>

<img src="/images/service3.jpg" />
<div className={styles.hoverEffect}/>
</div>
          <p>Outsoruced Compliance Officer</p>
        </div>
        <div>
         
        <div className={styles.imagediv}>

<img src="/images/service4.jpg" />
<div className={styles.hoverEffect}/>
</div>
          <p>Compliance Filings</p>
        </div>
        <div>
         
         <div className={styles.imagediv}>
 
 <img src="/images/service4.jpg" />
 <div className={styles.hoverEffect}/>
 </div>
           <p>Residency Services </p>
         </div>
         <div>
         
         <div className={styles.imagediv}>
 
 <img src="/images/service4.jpg" />
 <div className={styles.hoverEffect}/>
 </div>
           <p>Bank Account Assistance </p>
         </div>
      </div>
    </Container>
  );
}

export default ADGM_Ms_Service;
