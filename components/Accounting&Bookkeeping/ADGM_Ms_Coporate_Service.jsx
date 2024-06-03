import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Company_Form_Banner from "./Company_Form_Banner";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
function ADGM_Ms_Service({showherobanner,contents,servicetitle}) {
  return (
    <>
    <Container>
      <div className={styles.servicenewTitle}>
        {servicetitle}
      </div>
    </Container>

   {showherobanner && (<div className={styles.companyFormationBanner}>
      <Company_Form_Banner />
    </div>)}

    <Container>
      <div className={styles.servicesWrapper}>
        {contents.map((item, index) => (
           <a href={item.link} key={index}>
          <div className={styles.serviceCard} data-aos="fade-up">
            <div className={styles.serviceCardContent}>
              <p className={styles.serviceCardtitle}>{item?.title}</p>
              <p className={styles.serviceCardpara}>{item?.content}</p>
              <div className={styles.arrowhover}><HiMiniArrowLongRight /></div>

            </div>
            <div className={styles.serviceCardimage}>
              <img src={item?.image} alt={item?.title} />
            </div>
            <div className={styles.serviceCardimagemobile}>
              <img src={item?.image1} alt={item?.title} />
            </div>
          </div>
          </a>
        ))}
      </div>
    </Container>
  </>
    )}
    export default ADGM_Ms_Service