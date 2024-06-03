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
        <div className={styles.white_headingPay + " " + styles.textCntr}>
          Payroll Services
        </div>
        <div style={{ marginTop: 20 }} className={styles.white_detail + " " + styles.textCntr}>
          MS provides Payroll Services In Abu Dhabi, UAE and with our expertise, our invaluable clients have always enjoyed the following:
        </div>
        <div className={styles.servicerSubContainer}>
          <div className={styles.services_box + " " + styles.newSrviceBox}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>01</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.serviceContent}>
              <div className={styles.service_title+" "+styles.paddingT7}>
                Cost Saving
              </div>
              <div className={styles.service_detail}>Even though payroll management does not affect the sales of a business directly, it still has the potential to place a business in jeopardy if not carried properly. In UAE, it is mandatory for businesses to adhere to the rules and regulations of the laws with respect to labor and employment. If these laws aren’t being complied by the businesses, hefty penalties will be imposed. Moreover, it is important for an organization to understand the hour and wage laws including the technical aspects such as sick leave and overtime pay. Furthermore, unemployment compensation, as well as gratuity pay for every employee, are all our expertise.</div>
            </div>

          </div>

          <div className={styles.services_box + " " + styles.newSrviceBox}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>02</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.serviceContent}>
              <div className={styles.service_title}>
                Enhanced Security and Confidentiality
              </div>
              <div className={styles.service_detail + " " + styles.service_detailW1}>The problem of security or information theft can arise when in-house employees are employed for payroll. Outsourcing the payroll function will mitigate the risks of leakage of sensitive information and potential misuse of company funds. MS ensures that all the data remains secure. We keep an accurate record to ensure data protection and security. </div>
            </div>
          </div>

      
          <div className={styles.services_box + " " + styles.newSrviceBox}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>03</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.serviceContent}>
              <div className={styles.service_title}>
                Manage Employee Information<br/> Efficiently
              </div>
              <div className={styles.service_detail}>To have a place to accurately store and manage all the employee information in one place, without any more additional tool.</div>
            </div>
          </div>

          <div className={styles.services_box + " " + styles.newSrviceBox}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>04</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.serviceContent}>
              <div className={styles.service_title}>
                Generate Reports Related To Employees
              </div>
              <div className={styles.service_detail}>To have a place to accurately store and manage all the employee information in one place, without any more additional tool.</div>
            </div>
          </div>
       

  
        </div>

     
          <div className={styles.white_headingPay + " " + styles.detailWidthPay+" "+styles.marginT60}>
            Focused Attention On Core Activities Of The Business
          </div>
          <div className={styles.details18OpenWhite + " " + styles.payrollService_details} >
            All of these fundamental activities are extremely time-consuming and thus diverts the attention of the business from other more salient functions. It is also understandable that implementing and managing payrolls drain a company’s valuable resources. If a company is to implement such systems, it will require the purchasing of additional hardware and infrastructure inclusive of software and network capabilities that require consistent updates and maintenance. This can be a bit difficult for businesses as they would have to invest a considerable amount under budgetary conditions.
          </div>
          <div className={styles.details18OpenWhite + " " + styles.payrollService_details} >
            At MS, our payroll outsourcing services eliminates this difficulty. We provide our clients with a very dedicated and reliable payroll management team who can solve payroll related issues along with an assurance of full compliance with regulations of the UAE.
          </div>
    
      </div>
    </Container>
  )
}

export default Accounting_service