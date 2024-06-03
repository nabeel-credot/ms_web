import React, { useEffect} from 'react'
import styles from "./Advisory.module.css"
import cstyles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import YellowBorderCard from "../YellowBorderCardBlueHover"
import Container from '../Common/Container';
function Advisory_services() {

  useEffect(()=>{
    AOS.init({
      duration: 1900,
      once: false,
    })},[]);

  return (
    <Container>
      <div className={styles.Advisory_services_container} data-aos="fade-up" >
        <div className={cstyles.black36_heading_audit + " " + cstyles.textCntr}>
          Other VAT Services
        </div>
        <div className={cstyles.OS_sub_box}>
          <div className={cstyles.OS_sub_boxH}>
            <YellowBorderCard src="/images/audit6.svg" title={<>VAT Return Filing</>} href="/vat-consultant">
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </YellowBorderCard>
          </div>

          <div className={cstyles.OS_sub_boxH}>
            <YellowBorderCard src="/images/vat1.svg" title={<>VAT Advisory</>} href="/vat-consultant">
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </YellowBorderCard>
          </div>

          <div className={cstyles.OS_sub_boxH}>
            <YellowBorderCard src="/images/vat2.svg" title={<>VAT Refund Assistance</>} href="/vat-consultant">
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </YellowBorderCard>
          </div>

          <div className={cstyles.OS_sub_boxH}>
            <YellowBorderCard src="/images/vat3.svg" title={<>VAT Training & Workshops</>} href="/vat-consultant" >
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
              <div>
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