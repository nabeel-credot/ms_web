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
      Financial Advisory Service in UAE
      </div>
      <div className={cstyles.OS_sub_box}>
        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/os11.svg" href="/corporate_finance"
            title={<>Corporate Finance</>} imgWidth="110" imgHeight="110" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div className={cstyles.OS_sub_boxH} >
          <YellowBorderCard src="/images/os12.svg" href="/strategic_review"
            title={<>Strategic Review</>} imgWidth="110" imgHeight="110" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/os13.svg" href="/business-valuation"
            title={<>Business Valuation</>} imgWidth="110" imgHeight="110" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div className={cstyles.OS_sub_boxH}>

          <YellowBorderCard src="/images/os14.svg" href="/fd_on_demand"
            title={<>FD On Demand</>} imgWidth="110" imgHeight="110" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div className={cstyles.OS_sub_boxH}>
        <YellowBorderCard src="/images/os15.svg" 
          title={<>Feasibility Report & <br/>Business Plan</>} imgWidth="110" imgHeight="110" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
          </div>
        <div className={cstyles.OS_sub_boxH}>

        <YellowBorderCard src="/images/os16.svg" href="/advisory"
          title={<>Advisory Board</>} imgWidth="110" imgHeight="110" >
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