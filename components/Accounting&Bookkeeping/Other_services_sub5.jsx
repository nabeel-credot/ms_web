import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./OtherService.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import YellowBorderCard from "../YellowBorderCardBlueHoverServices"
function FDD_sub5() {
  useEffect(() => {
    AOS.init({
        duration: 1400,
        once: false,
    })
}, []);

  return (
    <div className={cstyles.otherServices_sub} data-aos="fade-up">
      <div className={styles.details24500}>
      Enterprise
      </div>
      <div className={cstyles.OS_sub_box}>
        <div className={cstyles.OS_sub_boxH}>
        <YellowBorderCard src="/images/os17.svg" href="/business_advisory"
           title={<>Business Advisory <br/>Services – UAE</>} imgWidth="110" imgHeight="110" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div  className={cstyles.OS_sub_boxH} >
       
        <YellowBorderCard src="/images/os18.svg" href="/business_startup"
          title={<>Business Startup</>} imgWidth="110" imgHeight="110" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div> 
        <div  className={cstyles.OS_sub_boxH}>
        <YellowBorderCard src="/images/os19.svg" href="/business_scaleup"
          title={<>Business Scale Up</>} imgWidth="110" imgHeight="110" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div  className={cstyles.OS_sub_boxH}>
        <YellowBorderCard src="/images/os20.svg" href="/business_transition"
           title={<>Business Transition</>} imgWidth="110" imgHeight="110" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div  className={cstyles.OS_sub_boxH}>
        <YellowBorderCard src="/images/os21.svg"  href="/family_business_advisory"
          title={<>Family Business<br/> Advisory</>} imgWidth="110" imgHeight="110" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div  className={cstyles.OS_sub_boxH}>
        <YellowBorderCard src="/images/os22.svg" 
          title={<>Freelancers & <br/>Influencers Business Support</>} imgWidth="110" imgHeight="110" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>

      </div>
    </div>
  )
}

export default FDD_sub5