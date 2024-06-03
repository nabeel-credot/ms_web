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
        VAT Consultants in Abu Dhabi, UAE
      </div>
      <div className={cstyles.OS_sub_box}>
        <div  className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/os4.svg" href="/vat_advisory_and_compliance"
          title={<>Vat Advisory & Compliance <br />Support</>} imgWidth="110" imgHeight="110" fontSize="16px" padding="50px 22px">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div  className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/os5.svg" href="/vat_training"
           title={<>VAT Training</>} imgWidth="110" imgHeight="110" fontSize="16px" padding="50px 22px">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div  className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/os6.svg" href="/vat_training"
           title={<>VAT Registration & Deregistration <br />Services</>} imgWidth="110" imgHeight="110" fontSize="16px" padding="50px 22px">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div  className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/os7.svg" href="/vat_training"
          title={<>VAT Health check</>} imgWidth="110" imgHeight="110" fontSize="16px" padding="50px 22px">
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