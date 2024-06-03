import React from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image";
import Link from "next/link";
export default function DIFC_Business() {
  return (
    <div className={styles.connect_container}>
      <Container>
        <div className={styles.connect_sub}>
          <div className={styles.connect_subdiv} data-aos="fade-right">
            <p className={styles.connect_Title}>
            Be Part of our Community 
            </p>
            <p>Subscribe for updates from MS—latest insight delivered to your inbox as you like.</p>
            <div className={styles.connectdiv}>
                <div className={styles.connecttitle}>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className={styles.connectbox}
                  />
                </div>
                <button>Subscribe</button>
                </div>
          </div>
          <div className={styles.connect_vertical_line}></div>
          <div className={styles.connect_subdiv} data-aos="fade-left">
              <p className={styles.connect_Title}>
              Let’s Connect
              </p>
              <p>Reach out to us for all your queries. Assuring you a best solution from the most energetic team at MS.</p>
             <div style={{paddingTop:"30px"}}>
             <Link href="/contact" >
              <button className={styles.contactbtn_hom}>Contact us</button></Link></div>
            </div>
            </div>
      </Container>
    </div>
  );
}
