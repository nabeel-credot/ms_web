import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
function ADGM_Ms_Service() {
  return (
    <Container>
      <div className={styles.servicenewTitle}>Tax Services in ADGM by MS</div>
      <div className={styles.serviceImg}>
        <div>
         <div className={styles.imagediv}>
          <img src="/images/service1.jpg"/>
          <div className={styles.hoverEffect}/>
         </div>
          <p>VAT </p>
        </div>
        <div>
        <div className={styles.imagediv}>

          <img src="/images/service2.jpg" />
          <div className={styles.hoverEffect}/>
          </div>
          <p>Corporate Tax </p>
        </div>
        <div>
          
        <div className={styles.imagediv}>

<img src="/images/service3.jpg" />
<div className={styles.hoverEffect}/>
</div>
          <p>Economic Substance Regulation </p>
        </div>
       
      </div>
    </Container>
  );
}

export default ADGM_Ms_Service;
