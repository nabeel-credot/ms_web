import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Styles.module.css"
import Image from 'next/image'

import Container from '../Common/Container';
function Accounting_service() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    })
  }, []);

  return (
    <Container>
      <div className={styles.accounting_service_container} data-aos="fade-up">
        <div className={styles.white_heading2 + " " + styles.textCntr}>
          The key advantages of outsourcing<br />
          your Bookkeeping Services would be:
        </div>

        <div className={styles.servicerSubContainer}>
          <div className={styles.services_box}>
            <div className={styles.service_title}>Accuracy</div>
            <div className={styles.service_detail}>
              MS believes accuracy is a matter of proper bookkeeping practice. It is important to stay ahead of the game with the latest accounting technologies, as well as working as a team to validate and analyze your business position.
            </div>
            <div className={styles.service_detail2} style={{ marginTop: 20 }}>
              We do the following to ensure Accuracy:
            </div>
            <ul>
              <li>
                <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} className={styles.yArrow} /></div>
                <span className={styles.key + " " + styles.keyWidth}>Maintain records of accounting transactions and evaluate results efficiently.</span>
              </li>
              <li>
                <span className={styles.wArrow}><Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></span>
                <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></span>
                <span className={styles.key + " " + styles.keyWidth}>Perform reconciliation on a timely basis.</span></li>
              <li>
                <span className={styles.wArrow}><Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></span>
                <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></span>
                <span className={styles.key + " " + styles.keyWidth}>Perform regular analysis on accounting issues and resolve it efficiently.</span></li>
              <li>
                <span className={styles.wArrow}><Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></span>
                <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></span>
                <span className={styles.key + " " + styles.keyWidth} style={{ width: "100%" }}>Accurate bookkeeping records should be a top priority, and by working with a firm who has the expertise, you can avoid errors or failures such as:</span></li>
              <li>
                <span className={styles.wArrow}><Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></span>
                <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></span>
                <span className={styles.key + " " + styles.keyWidth}>Misclassifying expenses – Incorrect Chart of accounts.</span></li>
              <li>
                <span className={styles.wArrow}><Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></span>
                <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></span>
                <span className={styles.key + " " + styles.keyWidth}>Improper or poor record keeping.</span></li>
              <li>
                <span className={styles.wArrow}><Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></span>
                <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></span>
                <span className={styles.key + " " + styles.keyWidth}>Not reconciling bank accounts.</span></li>
              <li>
                <span className={styles.wArrow}><Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></span>
                <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></span>
                <span className={styles.key + " " + styles.keyWidth}>Failing to maintain backups.</span></li>
              <li>
                <span className={styles.wArrow}><Image src="/images/LarrowW.svg" alt="" width={9} height={15} /></span>
                <span className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15} /></span>
                <span className={styles.key + " " + styles.keyWidth}>Bad petty cash management.</span></li>


            </ul>

          </div>

          <div className={styles.services_box}>
            <div className={styles.service_title}>Cost - Effective</div>
            <div className={styles.service_detail}>
              Outsourced bookkeeping services proves to be cost-efficient as you do not have to add another employee to the payroll and bear the expenses of payroll taxes and other employee benefits.</div>
            <div style={{ marginTop: 20 }} className={styles.service_detail}>
              You will also save the time and cost that goes into managing the books, or the time required to hire and train a bookkeeper, and deal with employee turnover.
            </div>
            <div style={{ marginTop: 20 }} className={styles.service_detail}>
              As we ensure our clients will be benefited out of the cost savings, let us also highlight, the fact that, it is assured without reducing the quality.
            </div>
          </div>


          <div className={styles.services_box}>
            <div className={styles.service_title}>Saving your valuable time</div>
            <div className={styles.service_detail}>The less time you have to spend on accounting tasks, the more time you can spend growing your business. Outsourcing the accounting and bookkeeping services help you to focus your time and resources on developing business strategies. You can focus on boosting up revenue and profits, as well as networking and building relationships with your customers.</div>
          </div>
          <div className={styles.services_box}>
            <div className={styles.service_title}>Provides Expert Services</div>
            <div className={styles.service_detail}>MS comprises a team of proficient and skilled people who contribute to excellent services in accounting and bookkeeping. We deal with clients coming from various industries and we also understand that the client’s needs are always diverse and dynamic. MS is prepared at all times to meet the client’s requirements and keep them satisfied.</div>

          </div>
          <div className={styles.services_box}>
            <div className={styles.service_title}>Business Scaling</div>
            <div className={styles.service_detail}>One of the toughest challenges faced by business owners is figuring out the process of scaling a business. There are two important things to consider before scaling a business and that is understanding the current structure of the business and their future objectives for the business.</div>
            <div className={styles.service_detail}>MS understands the different scalable activities a business needs to achieve and ensure to put in place a systematic process in order to help clients achieve these activities. Our team has the required skills and expertise suited for each role.</div>
          </div>
          <div className={styles.services_box}>
            <div className={styles.service_title}>Compliance</div>
            <div className={styles.service_detail}>MS looks upon all such statutory and legal requirements. We assist compliance check in tax preparation and bookkeeping for our clients.</div>
            <div style={{ marginTop: 20 }} className={styles.service_detail}>We would ensure your business is compliant with emerging regulations such as Economic Substance and VAT reporting using experts that are fully in tune with your growth path.</div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Accounting_service