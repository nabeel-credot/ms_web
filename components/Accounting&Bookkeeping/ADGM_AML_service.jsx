import React, { useEffect } from "react";
import styles from "./RA_Services.module.css";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import Container from "../Common/Container";
function RA_IA_service() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <Container>
      <div className={styles.container} data-aos="fade-up">
        <h3 className={styles.heading}>
          Our dedicated MLRO service can help you with
        </h3>
        <div className={styles.serviceWrap}>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>01</div>
            </div>
            <div className={styles.title}>Drafting AML policies</div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>02</div>
            </div>
            <div className={styles.title}>Risk Assessment frameworks</div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>03</div>
            </div>
            <div className={styles.title}>Risk Rating Matrix manuals</div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>04</div>
            </div>
            <div className={styles.title}>Client Due Diligence</div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>05</div>
            </div>
            <div className={styles.title}>
              <span style={{ fontWeight: 600 }}>MLRO</span> : Provide you with a
              designated person to act as your MLRO (Money <br />
              Laundering Reporting Officer)
              <br /> as required by ADGM
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.top} style={{ display: "none" }}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>04</div>
            </div>
            <div className={styles.title} style={{ color: "white" }}>
              Client Due Diligence
            </div>
          </div>

          {/* <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>06</div>
            </div>
            <div className={styles.title}>
            Financial Advisory assistance to the Board 
            </div>
          </div> */}
        </div>
      </div>
    </Container>
  );
}

export default RA_IA_service;
