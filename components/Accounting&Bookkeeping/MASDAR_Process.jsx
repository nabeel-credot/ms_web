import React, { useEffect } from 'react'
import styles from "./RA_Services.module.css"

import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';
function RA_IA_service() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    })
  }, []);

  return (
    <Container>
      <div className={styles.container} data-aos="fade-up">
        <h3 className={styles.heading}>
          Business Setup Process in MASDAR
        </h3>
        <div className={styles.detailsP}>
          Setting up a business in Masdar City free zone is a streamlined and effortless process. The company formation process consists of three stages:
        </div>
        <div className={styles.serviceWrap}>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>01</div>
            </div>
            <div className={styles.title}>
              Register Your Business Name
            </div>
            <div className={styles.details}>
              Fill out the name registration form and pay the AED 2,000 name reservation fee to the Free Zone Authority. Submit the paperwork to the Department of Economic Development (DED) of Abu Dhabi.
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>02</div>
            </div>
            <div className={styles.title}>
              Submit the License Form
            </div>
            <div className={styles.details}>
              Complete and submit the licensing form along with your business plan and other essential documents. Once the Free Zone Authority reviews your documents, you will receive an Acceptance Letter in approximately 3 days.
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>03</div>
            </div>
            <div className={styles.title}>
              Open a Corporate Bank Account
            </div>
            <div className={styles.details}>
              Get a bank introduction letter from the Masdar City free zone authority to open a corporate bank account. Obtain a Capital Confirmation Letter from the bank after opening the account.
            </div>
          </div>


          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>04</div>
            </div>
            <div className={styles.title}>
              Acquire Your License and Sign the Lease
            </div>
            <div className={styles.details}>
              Give the Free Zone Authority the letter of Capital Confirmation, sign the Memorandum and Articles of Association (MAA), and receive the license agreement. Sign the lease agreement to obtain the trade license.
            </div>
          </div>

        </div>

        <div className={styles.detailsP}>
          It is important to note that the process of company formation may vary depending on the type of company and business activity. Seeking guidance from a local business consultant or law firm is highly recommended to ensure a smooth process.
        </div>

        <div className={styles.detailsP}>
          For reliable and expert advice on financial, investment, tax, and corporate finance matters, Masdar Free Zone Business Consulting offers a comprehensive range of services, including Financial Advisory Services, Investment Consulting, Corporate Finance Solutions, Accounting Services, Tax Planning, Risk Management, Business Growth Strategies, Mergers & Acquisitions, and Market Research. Contact us today to begin your business journey in Masdar City free zone.
        </div>

      </div>

    </Container>
  )
}

export default RA_IA_service