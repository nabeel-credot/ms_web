import React from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image";

export default function DIFC_Business() {
    return (
<Container>
<div className={styles.wingswebonly} data-aos="fade-up"><div className={styles.cost_head }>Cost & Details</div></div>
        <div className={styles.cost_head && styles.mobctax} data-aos="fade-up">Cost & Details</div>
        <div className={styles.cost_sub} data-aos="fade-up">
            <div className={styles.cost_para}>   
            <Image src='/images/cost-1.svg' width={45} height={45} alt="" />
              <p className={styles.cost_Title}>
              Registration fee
              </p>
               <p style={{ fontWeight: "600", fontSize: "20px"}}>USD 100</p>
            </div>
          <div className={styles.cost_para}>
          <Image src='/images/cost-2.svg' width={45} height={45} alt=""/>
            <p className={styles.cost_Title}>
            Annual license fee
            </p>
            <p style={{ fontWeight: "600", fontSize: "20px"}}>USD 1,500</p>
          </div>
          <div className={styles.cost_para}>
          <Image src='/images/cost-3.svg' width={45} height={45} alt="" />
              <p className={styles.cost_Title} >
              Co-working space
              </p>
              <p style={{ fontWeight: "600", fontSize: "20px" }}>USD 500 <span>&nbsp;</span>
    <span style={{fontSize:"14px",paddingTop:"5px",fontWeight:"normal"}}>Per<br/> month/Per desk</span></p>
            </div>
            </div>
            </Container>
    )
}