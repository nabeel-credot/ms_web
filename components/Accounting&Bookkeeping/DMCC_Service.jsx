import React from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image";
import Link from "next/link"
import { HiMiniArrowLongRight } from "react-icons/hi2";
function ADGM_newservice() {
  return (
    <Container>
       <div className={styles.servicenewTitle}>  <div className={styles.servicelogodifc}> <Image src={"/images/logo3.svg"} alt="logo" layout="fill"/> </div><span style={{paddingTop:"40px"}}>Services in <span style={{fontWeight:"500"}}>DMCC</span></span> </div>
      <div className={styles.services_dmcc}>
        <div style={{ position: "relative" }}>
        <Link href="/corporate-services">
          <div className={styles.dmcc_sevicediv}>
            <div className={styles.dmcc_serviceimg}> 
            <Image src={"/images/dmcc_corp.svg"} alt="logo" width={50} height={50}/></div>
            <p>Corporate</p>
            <span className={styles.servicedescribe}>
            Egestas faucibus dui sit sagittis mi. Leo tempusinit
            </span>
            <div className={styles.readmore_dmcc}><p>Read more</p><HiMiniArrowLongRight/></div>
            </div>
</Link>          
        </div>

        <div style={{ position: "relative" }}>
        <Link href="adgm-compliance-filings-specialist-services-in-abu-dhabi-uae-ms">
          <div className={styles.dmcc_sevicediv}>
          <div className={styles.dmcc_serviceimg}> 
            <Image src={"/images/dmcc_complaince.svg"} alt="logo" width={50} height={50}/></div>
            <p>Compliance</p>
            <span className={styles.servicedescribe}>
            Egestas faucibus dui sit sagittis mi. Leo tempusinit
            </span>
            <div className={styles.readmore_dmcc}><p>Read more</p><HiMiniArrowLongRight/></div>
          </div>
</Link>     
        </div>

        <div style={{ position: "relative" }}>
        <Link href="/accounting-service">
          <div className={styles.dmcc_sevicediv}>
          <div className={styles.dmcc_serviceimg}> 
            <Image src={"/images/dmcc_accounting.svg"} alt="logo" width={50} height={50}/></div>
            <p>Accounting</p>
            <span className={styles.servicedescribe}>
            Egestas faucibus dui sit sagittis mi. Leo tempusinit
            </span> 
            <div className={styles.readmore_dmcc}><p>Read more</p><HiMiniArrowLongRight/></div>
          </div>
</Link>    

        </div>
        <div style={{ position: "relative" }}>
        <Link href="/tax-service">
          <div className={styles.dmcc_sevicediv}>
          <div className={styles.dmcc_serviceimg}> 
            <Image src={"/images/dmcc_tax.svg"} alt="logo" width={50} height={50}/></div>
            <p>Tax</p>
            <span className={styles.servicedescribe}>
            Egestas faucibus dui sit sagittis mi. Leo tempusinit
            </span>
            <div className={styles.readmore_dmcc}><p>Read more</p><HiMiniArrowLongRight/></div>
     </div>
</Link>    
        </div>
      </div>
    </Container>
  );
}

export default ADGM_newservice;