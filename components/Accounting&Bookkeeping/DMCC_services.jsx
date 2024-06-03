import React from 'react'
import Container from '../Common/Container'
import styles from "./Styles.module.css";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Image from "next/image"
export default function DMCC_services({servicetitle,contents}) {
  return (
    <Container>

    <div className={styles.servicenewTitle}>
    {servicetitle}
  </div>
  <div className={styles.dmccservicesWrapper}>
  {contents.map((item, index) => (
           <a href={item.link} key={index}>
          <div className={styles.dmccserviceCard} >
            <div className={styles.dmccserviceCardContent}>
              <div className={styles.dmccservicetitle}>{item?.title}</div>
              <p className={styles.dmccserviceCardpara}>{item?.content}</p>
              <div className={styles.dmccarrowhover}><HiMiniArrowLongRight /></div>

            </div>
            <div className={styles.serviceCardimage}>
              <img src={item?.image} alt={item?.title}  />
            </div>
            <div className={styles.serviceCardimagemobile}>
              <img src={item?.image1} alt={item?.title} />
            </div>
          </div>
          </a>
        ))}
  </div>
    </Container>
  )
}
