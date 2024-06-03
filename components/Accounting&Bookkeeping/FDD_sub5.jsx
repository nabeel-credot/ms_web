import React, { useEffect, useState } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


import Container from '../Common/Container';

import YellowBorderCard from "../YellowBorderCardWithBorderFDD"
function FDD_sub5() {

  useEffect(()=>{
    AOS.init({
      duration: 1400,
      once: false,
    })},[]);
    
  return (
    <Container>
    <div className={styles.FDD_sub5} data-aos="fade-up">
        <div className={styles.black36_heading_audit+" "+styles.fdd5_head_Width}>
        In what ways will our Financial Due Diligence services directly benefit you and your company?
        </div>
        <div className={styles.FDD_sub5_box}>
        
        <YellowBorderCard src="/images/fdd5.svg" title={<>Negotiate based on facts</>} width="416px" height="443px" fontSize="24px" imgWidth="100" imgHeight="100" >
        We help you determine what the company is actually worth, which will enable you to negotiate the best deal based on facts. You can also steer clear of deceptive accounting statements that may cost you major losses. you can rest assured that we will spot and report any errors or misleading statements on any risks, so you can be confident in your decision to acquire or invest in a company.
        </YellowBorderCard>
        <YellowBorderCard src="/images/fdd6.svg" title={<>Quicker Deal Closures</>} width="416px" height="443px" fontSize="24px"  imgWidth="100" imgHeight="100"  >
        Our Due Diligence services are designed to help you navigate the complex waters of deal negotiations and close deals faster. It can also enable you to distinguish genuine risks from mere negotiation opportunities.
        </YellowBorderCard>

        <YellowBorderCard src="/images/fdd7.svg" title={<>Investor Assurance and confidence</>} width="416px" height="443px" fontSize="24px"  imgWidth="100" imgHeight="100" >
        While many parts of the due diligence process can be handled by you, the buyer, there are times when it makes sense to hire a professional. An unbiased third-party professional can give investors reassurance about the health of the organization’s finances and how reliable the financials are. It gives ample amount of confidence to your investors.
        </YellowBorderCard>
        </div>
    </div>
    </Container>
  )
}

export default FDD_sub5