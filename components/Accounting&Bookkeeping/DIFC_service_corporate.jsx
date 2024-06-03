import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Company_form_difc from "./Company_form_difc";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
function ADGM_Ms_Service({showherobanner,contents,servicetitle,title}) {
  return (
    <>
    <Container>
      <div className={styles.servicenewTitle} data-aos="fade-right">
        {servicetitle}
      </div>
    </Container>

   {showherobanner && (<div className={styles.companyFormationBanner}>
      <Company_form_difc /> 
    </div>)}
    {/* <Container>
    <div className={styles.servicenewTitle_difc}>
        {title}
      </div>
    </Container> */}

    {/* <Container>
      <div className={styles.servicesWrapper_difc}>
        {contents.map((item, index) => (
           <a href={item.link} key={index}>
          <div className={styles.serviceCard_difc} >
            <div className={styles.serviceCardContent_difc}>
              <p className={styles.serviceCardtitle_difc}>{item?.title}</p> */}
              {/* <p className={styles.serviceCardpara}>{item?.content}</p> */}
              {/* <div className={styles.arrowhover}><HiMiniArrowLongRight /></div> */}

            {/* </div>
            <div className={styles.serviceCardimage_difc}>
              <img src={item?.image} alt={item?.title} />
            </div>
            <div className={styles.serviceCardimagemobile}>
              <img src={item?.image1} alt={item?.title} />
            </div>
          </div>
          </a>
        ))}
      </div>
    </Container> */}
  </>
    )}
    export default ADGM_Ms_Service