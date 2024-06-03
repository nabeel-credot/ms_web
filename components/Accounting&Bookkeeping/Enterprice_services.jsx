import React, { useEffect, useState } from 'react'
import styles from "./Advisory.module.css"
import cstyles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import YellowBorderCard from "../YellowBorderCardBlueHover"
import Container from '../Common/Container';
function Advisory_services() {
  
  useEffect(()=>{
    AOS.init({
      duration: 1400,
            once: false
    });
  },[])

  return (
    <Container>
    <div className={styles.Advisory_services_container} data-aos="fade-up">
      <div className={cstyles.black36_heading_audit+" "+cstyles.textCntr}>
      Other Enterprise Services
      </div>
      <div className={cstyles.OS_sub_box}>
        <div className={cstyles.OS_sub_boxH}>
        <YellowBorderCard src="/images/enterprise1.svg" title={<>Business Startup</>} imgWidth="100" imgHeight="100" padding="70px 22px" href="/business_startup" >
        <div style={{ padding: "10px 10px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
        <YellowBorderCard src="/images/enterprise2.svg" title={<>Business Scale Up</>}imgWidth="100" imgHeight="100" padding="70px 22px"  href="/business_scaleup" >
        <div style={{ padding: "10px 10px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
        <YellowBorderCard src="/images/enterprise3.svg" title={<>Freelancers <br/>Influencers Support</>} imgWidth="100" imgHeight="100" padding="70px 22px"  href="/business_scaleup" >
        <div style={{ padding: "10px 10px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>  
        </div>

        <div className={cstyles.OS_sub_boxH}>
        <YellowBorderCard src="/images/enterprise4.svg" title={<>Family Business Advisory</>} imgWidth="100" imgHeight="100" padding="70px 22px"  href="/family_business_advisory"  >
         <div style={{ padding: "10px 10px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

      </div>
    </div>
    </Container>
  )
}

export default Advisory_services