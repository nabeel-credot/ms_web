import styles from "./Styles.module.css";
import React, { useState,useEffect } from "react";
import Container from "../Common/Container";
import Appointment from "./Appointment_schedule"
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image"
import Link from "next/link"
const items=["We review and optimize your finance and accounting processes and systems for increased efficiency.",
"Our experts assist in developing accounting and finance policies and procedures tailored to your business needs.",
"We ensure meticulous maintenance of books of accounts in compliance with ADGM requirements.","Prepare and deliver month-end financial reports, including Balance Sheet, Profit and Loss, and cash flow statements.",
"We handle the preparation and submission of monthly, quarterly, and yearly Prudential Returns.",
"Assistance in the preparation, maintenance, and monitoring of budgets and conduct scenario stress tests.",
"Assistance in preparation of IRAP and ICAAP reports.",
"Calculations and monitoring of capital and liquidity resources to ensure financial stability.",
"Thorough reviews of books of accounts and financial statements for accuracy and reliability.",
"Utilize our financial analytics and reconciliations to gain valuable insights for informed decision-making.",
"Benefit from our assistance in Risk Management reports.",
"Assistance in preparing monthly board presentations to showcase financial performance.","Liaising with external auditors, internal auditors, and regulators for smooth operations."]

function ADGM_servicenew({ heading, detail,showButton,showBorderBottom,heading1,detailsub1,heading2,detailsub2,points}) {
  const [appoint,setAppoint]=useState(false)
  const isConditionMet = true;
  return (
    <Container>
  <div className={styles.servicenewTitle} data-aos="fade-up">  <div className={styles.servicelogodifc}> <Image src={"/images/logo3.svg"} alt="logo" layout="fill"/> </div><span style={{paddingTop:"40px"}}>Services in <span style={{fontWeight:"500"}}>DIFC</span></span> </div>
      <div className={styles.serviceImgadgm} data-aos="fade-up">
        <div style={{ position: "relative" }}>
        <Link href="/difc-corporate-service">
          <div className={styles.imagedivADGM}>
            <div className={styles.servicecircledifc}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 38 39"
                fill="white"
                className={styles.iconhover}
              >
                <path d="M34.8333 30.875V35.75H3.16663V30.875C3.16663 29.9812 3.87913 29.25 4.74996 29.25H33.25C34.1208 29.25 34.8333 29.9812 34.8333 30.875Z"  fill="white"/>
                <path d="M11.0833 17.875H7.91663V29.25H11.0833V17.875Z" fill="white" />
                <path d="M17.4167 17.875H14.25V29.25H17.4167V17.875Z"  fill="white"/>
                <path d="M23.75 17.875H20.5834V29.25H23.75V17.875Z" fill="white" />
                <path d="M30.0833 17.875H26.9166V29.25H30.0833V17.875Z"  fill="white" />
                <path d="M36.4167 36.9688H1.58337C0.934207 36.9688 0.395874 36.4162 0.395874 35.75C0.395874 35.0838 0.934207 34.5312 1.58337 34.5312H36.4167C37.0659 34.5312 37.6042 35.0838 37.6042 35.75C37.6042 36.4162 37.0659 36.9688 36.4167 36.9688Z"  fill="white"/>
                <path d="M33.8358 9.34374L19.5858 3.49374C19.2691 3.36374 18.7308 3.36374 18.4141 3.49374L4.16413 9.34374C3.60996 9.57124 3.16663 10.2375 3.16663 10.855V16.25C3.16663 17.1437 3.87913 17.875 4.74996 17.875H33.25C34.1208 17.875 34.8333 17.1437 34.8333 16.25V10.855C34.8333 10.2375 34.39 9.57124 33.8358 9.34374ZM19 13.8125C17.6858 13.8125 16.625 12.7237 16.625 11.375C16.625 10.0262 17.6858 8.93749 19 8.93749C20.3141 8.93749 21.375 10.0262 21.375 11.375C21.375 12.7237 20.3141 13.8125 19 13.8125Z"  fill="white"/>
              </svg>
            </div>
            <p>Corporate</p>
            <span className={styles.servicedescribe}>
            Explore business solutions designed to enhance your company standing at DIFC in collaboration...
            </span>

            <div style={{ color: "#D4AE31", cursor: "pointer",paddingBottom: "8px",paddingTop:"25px" }}>Read More</div>
  
</div>
</Link>          
        </div>

        <div style={{ position: "relative" }}>
        <Link href="/difc-compliance-service">
          <div className={styles.imagedivADGM}>
            <div className={styles.servicecircledifc}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 42 42"
                fill="white"
                className={styles.iconhover}
              >
                <path d="M25.1126 3.5H16.8876C15.0676 3.5 13.5801 4.97 13.5801 6.79V8.435C13.5801 10.255 15.0501 11.725 16.8701 11.725H25.1126C26.9326 11.725 28.4026 10.255 28.4026 8.435V6.79C28.4201 4.97 26.9326 3.5 25.1126 3.5Z"  fill="white"/>
                <path d="M30.1701 8.43503C30.1701 11.2175 27.8951 13.4925 25.1126 13.4925H16.8876C14.1051 13.4925 11.8301 11.2175 11.8301 8.43503C11.8301 7.45503 10.7801 6.84253 9.90507 7.29753C7.43757 8.61003 5.75757 11.2175 5.75757 14.21V30.6775C5.75757 34.9825 9.27507 38.5 13.5801 38.5H28.4201C32.7251 38.5 36.2426 34.9825 36.2426 30.6775V14.21C36.2426 11.2175 34.5626 8.61003 32.0951 7.29753C31.2201 6.84253 30.1701 7.45503 30.1701 8.43503ZM21.6651 29.6625H14.0001C13.2826 29.6625 12.6876 29.0675 12.6876 28.35C12.6876 27.6325 13.2826 27.0375 14.0001 27.0375H21.6651C22.3826 27.0375 22.9776 27.6325 22.9776 28.35C22.9776 29.0675 22.3826 29.6625 21.6651 29.6625ZM26.2501 22.6625H14.0001C13.2826 22.6625 12.6876 22.0675 12.6876 21.35C12.6876 20.6325 13.2826 20.0375 14.0001 20.0375H26.2501C26.9676 20.0375 27.5626 20.6325 27.5626 21.35C27.5626 22.0675 26.9676 22.6625 26.2501 22.6625Z"  fill="white"/>
              </svg>
            </div>
            <p>Compliance</p>
            <span className={styles.servicedescribe}>
            In the ever-changing landscape of DIFC, our Compliance Solutions serve as essential support, providing...
            </span>
         
            <div style={{ color: "#D4AE31", cursor: "pointer",paddingBottom: "8px",paddingTop:"25px"  }}>Read More</div>
 
          
          </div>
</Link>     
        </div>

        <div style={{ position: "relative" }}>
        <Link href="/difc-accounting-service">
          <div className={styles.imagedivADGM}>
            <div className={styles.servicecircledifc}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 42 42"
                fill="white"
                className={styles.iconhover}
              >
                <path d="M28.3325 3.5H13.6675C7.2975 3.5 3.5 7.2975 3.5 13.6675V28.315C3.5 34.7025 7.2975 38.5 13.6675 38.5H28.315C34.685 38.5 38.4825 34.7025 38.4825 28.3325V13.6675C38.5 7.2975 34.7025 3.5 28.3325 3.5ZM19.3025 30.905C19.81 31.4125 19.81 32.2525 19.3025 32.76C19.04 33.0225 18.7075 33.145 18.375 33.145C18.0425 33.145 17.71 33.0225 17.4475 32.76L14.4375 29.75L11.4275 32.76C11.165 33.005 10.8325 33.145 10.5 33.145C10.1675 33.145 9.835 33.0225 9.5725 32.76C9.065 32.2525 9.065 31.4125 9.5725 30.905L12.5825 27.895L9.5725 24.885C9.065 24.3775 9.065 23.5375 9.5725 23.03C10.08 22.5225 10.92 22.5225 11.4275 23.03L14.4375 26.04L17.4475 23.03C17.955 22.5225 18.795 22.5225 19.3025 23.03C19.81 23.5375 19.81 24.3775 19.3025 24.885L16.2925 27.895L19.3025 30.905ZM18.375 15.4175H10.5C9.7825 15.4175 9.1875 14.8225 9.1875 14.105C9.1875 13.3875 9.7825 12.7925 10.5 12.7925H18.375C19.0925 12.7925 19.6875 13.3875 19.6875 14.105C19.6875 14.8225 19.0925 15.4175 18.375 15.4175ZM31.5 32.48H23.625C22.9075 32.48 22.3125 31.885 22.3125 31.1675C22.3125 30.45 22.9075 29.855 23.625 29.855H31.5C32.2175 29.855 32.8125 30.45 32.8125 31.1675C32.8125 31.885 32.2175 32.48 31.5 32.48ZM31.5 25.9175H23.625C22.9075 25.9175 22.3125 25.3225 22.3125 24.605C22.3125 23.8875 22.9075 23.2925 23.625 23.2925H31.5C32.2175 23.2925 32.8125 23.8875 32.8125 24.605C32.8125 25.3225 32.2175 25.9175 31.5 25.9175ZM31.5 15.4175H28.91V18.0425C28.91 18.76 28.315 19.355 27.5975 19.355C26.88 19.355 26.285 18.76 26.285 18.0425V15.4175H23.625C22.9075 15.4175 22.3125 14.8225 22.3125 14.105C22.3125 13.3875 22.9075 12.7925 23.625 12.7925H26.285V10.1675C26.285 9.45 26.88 8.855 27.5975 8.855C28.315 8.855 28.91 9.45 28.91 10.1675V12.7925H31.5C32.2175 12.7925 32.8125 13.3875 32.8125 14.105C32.8125 14.8225 32.2175 15.4175 31.5 15.4175Z" fill="white" />
              </svg>
             
            </div>
            <p>Accounting</p>
            <span className={styles.servicedescribe}>
            Within DIFC, precise financial management, regulatory compliance, and strategic decision-making...
            </span>
            
            <div style={{ color: "#D4AE31", cursor: "pointer",paddingBottom: "8px",paddingTop:"25px" }}>Read More</div>
           
          </div>
</Link>    

        </div>
        <div style={{ position: "relative" }}>
        <Link href="/difc-tax-service">
          <div className={styles.imagedivADGM}>
            <div className={styles.servicecircledifc}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 42 42"
                fill="white"
                className={styles.iconhover}
              >
                <path d="M33.5474 11.62C32.7949 7.82247 29.9774 6.15997 26.0574 6.15997H10.6924C6.07243 6.15997 2.99243 8.46997 2.99243 13.86V22.8725C2.99243 26.7575 4.58493 29.0325 7.20993 30.0125C7.59493 30.1525 8.01493 30.275 8.45243 30.345C9.15243 30.5025 9.90493 30.5725 10.6924 30.5725H26.0749C30.6949 30.5725 33.7749 28.2625 33.7749 22.8725V13.86C33.7749 13.0375 33.7049 12.3025 33.5474 11.62ZM9.67743 21C9.67743 21.7175 9.08243 22.3125 8.36493 22.3125C7.64743 22.3125 7.05243 21.7175 7.05243 21V15.75C7.05243 15.0325 7.64743 14.4375 8.36493 14.4375C9.08243 14.4375 9.67743 15.0325 9.67743 15.75V21ZM18.3749 22.995C15.8199 22.995 13.7549 20.93 13.7549 18.375C13.7549 15.82 15.8199 13.755 18.3749 13.755C20.9299 13.755 22.9949 15.82 22.9949 18.375C22.9949 20.93 20.9299 22.995 18.3749 22.995ZM29.6799 21C29.6799 21.7175 29.0849 22.3125 28.3674 22.3125C27.6499 22.3125 27.0549 21.7175 27.0549 21V15.75C27.0549 15.0325 27.6499 14.4375 28.3674 14.4375C29.0849 14.4375 29.6799 15.0325 29.6799 15.75V21Z"  fill="white"/>
                <path d="M39.0251 19.11V28.1225C39.0251 33.5125 35.9451 35.84 31.3076 35.84H15.9426C14.6301 35.84 13.4576 35.6475 12.4426 35.2625C11.6201 34.965 10.9026 34.5275 10.3251 33.9675C10.0101 33.67 10.2551 33.1975 10.6926 33.1975H26.0576C32.5326 33.1975 36.3826 29.3475 36.3826 22.89V13.86C36.3826 13.44 36.8551 13.1775 37.1526 13.4925C38.3426 14.7525 39.0251 16.59 39.0251 19.11Z" fill="white" />
              </svg>
             
            </div>
            <p>Tax</p>
            <span className={styles.servicedescribe}>
            In the ever-changing environment of DIFC, effective tax services play a vital role for businesses...
            </span>
           
   <div style={{ color: "#D4AE31", cursor: "pointer",paddingBottom: "8px",paddingTop:"25px" }}>Read More</div> 
  
             </div>
</Link>    
        </div>

       
       
      </div>
    </Container>
  );
}

export default ADGM_servicenew;
