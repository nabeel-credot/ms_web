import React,{useState}from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Appointment from "./Appointment_schedule"
function AdgmWings() {
  const [appoint,setAppoint]=useState(false)
  return (
    <Container>
      <div className={styles.servicenewTitle} data-aos="fade-right">
      ADGM - Al Reem Island Expansion
        <br />Empowering Businesses for Sustainable Growth and Global Success{" "}
      </div>
      <div className={styles.wingContainer} >
        <div className={styles.alreempara} data-aos="fade-right">
         <p> 
         Whether you are a startup looking to flourish in Al Reem Island or an established corporation seeking new opportunities, Abu Dhabi Global Market (ADGM) offers you the ideal environment to unlock your full potential and achieve sustainable growth. On the 24th of April 2023, ADGM, the International Financial Centre of Abu Dhabi, marked a significant milestone by expanding its jurisdiction to include Al Reem Island. With tax-friendly policies and alignment with UAE Cabinet Resolution No. 41 of 2023, it invites international firms with eligible income, enriching Abu Dhabi&apos;s financial landscape. This expansion solidifies ADGM&apos;s role as a global financial hub, in line with the emirate&apos;s economic vision. Access to the ADGM ecosystem provides better networking opportunities and synergies, improving growth and sustainability.
          </p>
        <div style={{marginTop:"33px"}} className={styles.wingswebonly}>
        {/* <a href="#" className={styles.settingbtn}><span>Setting up in Al Reem</span></a> */}
          <button className={styles.settingbtn} onClick={()=>setAppoint(true)}><span>Setting up in Al Reem</span></button>
          </div>
        </div>
        <div className={styles.wingRight} data-aos="fade-left">
          <div className={styles.wingsrightOuter}>
            <div className={styles.wingsrightInner}>
              <p className={styles.wingRightTitle}>
                For new business applications
              </p>
              <p className={styles.wingsrightpara}>
              New businesses planning to establish their presence on Al Reem Island are required to apply for a commercial licence from ADGM Free Zone rather than the Abu Dhabi Department of Economic Development (ADDED).
              </p>
            </div>
          </div>
          <div className={styles.wingsrightInner}>
            <p className={styles.wingRightTitle}>
            For existing business applications
            </p>
            <p className={styles.wingsrightpara}>
            Existing businesses in Al Reem Island can continue operations without ADGM requirements until December 31, 2024. Non-financial and retail businesses can benefit from a fee waiver by completing their transition before October 31, 2024
            </p>
          </div>
        </div>
        <div className={styles.mobwingsonly}> 
        <button className={styles.settingbtn} onClick={()=>setAppoint(true)}><span>Setting up in Al Reem</span></button>
</div>
        {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}

      </div>
    </Container>
  );
}

export default AdgmWings;
