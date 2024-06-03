import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Link from "next/link"
import Image from "next/image";
import { MdArrowRight,MdArrowLeft } from "react-icons/md";
function Company_Form_Banner() {
  return (
    <div className={styles.adgmbg_hom}>
        <Container>
            <div className={styles.adgmContainer}>
          <div className={styles.comp_form}>
          <div className={styles.company_form_title}><span style={{fontWeight:"500"}}>MS</span> at <span style={{fontWeight:"500"}}>ADGM</span></div>
      <p className={styles.company_form_para}>
      MS can be your Setup-Specialist when you want to setup a new company in the Abu Dhabi Global Market (ADGM), UAE. With tailored focus on providing advisory and incorporation assistance for companies from all over the world, to set and expand one&apos;s roots in ADGM, we provide multifaceted services from incorporation assistance to helping the companies stay compliant when it comes to the ADGM annual filings, AML rules and reportings . Having a great team and solid expertise, we can ensure a fast, streamlined and hassle-free process in bringing your companies to the ADGM.
      </p>
      {/* <div>
      <Link href="/incorporation-advisory-and-assistance">
  <button className={styles.company_form_button_difc}>
    <span>Discover More</span>
  </button>
</Link>      </div> */}
</div>
<div className={styles.adgmcard_hom}>
<div className={styles.test_circle_left}>
                  <MdArrowLeft style={{ fontSize: '30px' }} />
                </div>
                <div className={styles.test_circle_right}>
                  <MdArrowRight style={{ fontSize: '30px' }} />
                </div>
            <div className={styles.dmcc_serviceimg}> 
            <Image src={"/images/incorp_icon.png"} alt="logo" width={50} height={50}/></div>
            <p>Incorporation</p>
            <span className={styles.servicedescribe}>
            Maximise the benefits of our expertise in ADGM incorporation making it a seamless process. We will handle all the administrative tasks and paperwork, ensuring a faster and hassle-free experience for you
            </span>
            </div>
</div>
      </Container>
    </div>
  );
}

export default Company_Form_Banner;
