import React, { useEffect, useState } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


import YellowBorderCard from "../YellowBorderCard"
function FDD_sub5() {

  useEffect(() => {
    AOS.init({
        duration: 1400,
        once: false,
    })
}, []);


  return (
    <div className={styles.FDD_sub5} data-aos="fade-up">
      <div className={styles.enterpriceBanner_Title}>
        This is why MSians welcome Entrepreneurs.
        </div>
        <div className={styles.detail16Po} style={{marginTop:10}}>
        Our award winning team of advisers will get under the skin of your business and determine what success means to you.
        </div>
         <div className={styles.black36_heading+" "+styles.textCntr} style={{marginTop:30}}>
        Other Enterprise Services
        </div>
        
      <div className={styles.enterPrise_box}>
        
        <YellowBorderCard src="/images/enterprise1.svg" title={<>Business Startup</>} imgWidth="100" imgHeight="100" href="/business_startup"/>
        <YellowBorderCard src="/images/enterprise2.svg" title={<>Business Scale Up</>}imgWidth="100" imgHeight="100"  href="/business_scaleup"  />
        <YellowBorderCard src="/images/enterprise3.svg" title={<>Freelancers <br/>Influencers Support</>} imgWidth="100" imgHeight="100"  href="/business_scaleup"
         />  
         <YellowBorderCard src="/images/enterprise4.svg" title={<>Family Business Advisory</>} imgWidth="100" imgHeight="100" href="/family_business_advisory"/>
        </div>
    </div>
  )
}

export default FDD_sub5