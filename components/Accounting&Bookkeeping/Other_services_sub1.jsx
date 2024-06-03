import React, { useEffect} from 'react'
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
        Solutions To Fit For Your Business And Time
      </div>
      <div className={cstyles.OS_sub_box}>
        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/risk.png"  href="/financial_controller_services"
           title={<>Financial Controller<br /> Services</>} imgWidth="110" imgHeight="110">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div  className={cstyles.OS_sub_boxH} >
          <YellowBorderCard src="/images/os1.svg"  href="/management_accounting"
          title={<>Management<br /> Accounting</>} imgWidth="110" imgHeight="110">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div> 
        <div  className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/os2.svg"   href="/complex_transaction_treatment"
           title={<>Complex Transaction Treatment</>} imgWidth="110" imgHeight="110">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div  className={cstyles.OS_sub_boxH}>

          <YellowBorderCard src="/images/os3.svg"  href="/inventory_valuations"
          title={<>Inventory Valuation</>} imgWidth="110" imgHeight="110">
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