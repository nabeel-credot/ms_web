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
        <div className={styles.white_heading + " " + styles.textCntr}>
          Accounting Services
        </div>
        <div style={{ marginTop: 20 }} className={styles.white_detail + " " + styles.textCntr}>
          Our range of Accounting services in Abu Dhabi includes Bookkeeping services, Financial Controller Services, Management Accounting, Payroll Services, Complex Transactions treatment and Inventory Valuations.
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
              <div className={styles.service_title}>
                Bookkeeping Services in Abu Dhabi
              </div>
              <div className={styles.service_detail}>Bookkeeping is the recording part of the entire accounting process, in which all of the financial transactions of the business (consisting of income and expenses) are entered into a database. Our bookkeeping services include designing chart of accounts, reconciliations, inventory management, month-end and year-end closure, financial statement analysis and management reports. We are also into online accounting services.</div>
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
              <div className={styles.service_title+" "+styles.paddingT7}>
                Financial Controller Services</div>
              <div className={styles.service_detail + " " + styles.service_detailW1}>Our Financial Controller services are catered to meet the growing needs of your business as we acknowledge that not all businesses warrant or can justify employing a full-time in house accountant. We provide the financial oversight and direction you need to drive your business forward as regular as your business requires.</div>
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
                Complex Transactions Treatment</div>
              <div className={styles.service_detail}>Complex transactions present a particularly serious challenge to companies, who can often face them only with a great deal of effort and at great expense. Organizations need advanced accounting capabilities that enable strong and effective reporting. This function can be assumed by our specialists for your company in all questions and complex accounting areas, including matters such as company mergers and acquisitions, divestitures, leasing or financing transactions and intercompany transactions.</div>
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
              <div className={styles.service_title+" "+styles.paddingT7}>

                Payroll Services</div>
              <div className={styles.service_detail}>A happy employee would go out of their way to help you achieve your business goals and objectives. To achieve such success with employees you need to ensure a healthy working environment, a worthy salary and on-time credit. </div>
              <div style={{ marginTop: 20 }} className={styles.service_detail}>We take care of the entire payroll cycle function so that our clients can divert their focus towards building business, delivering growth and for strategic growth. Our payroll solutions provide complete confidentiality, accuracy and detailed reporting. Be it – employee database management, leave management, payroll calculations and processing, salary disbursal through the WPS and other social insurance and security provided, leave them on us!</div>
            </div>
          </div>

          <div className={styles.services_box + " " + styles.newSrviceBox}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>05</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.serviceContent}>
              <div className={styles.service_title+" "+styles.paddingT7}>

                Inventory Valuations</div>
              <div className={styles.service_detail}>Inventory valuation is an accounting practice that is followed by companies to find out the value of unsold stock at the time they are preparing their financial statements. Inventory stock is an asset for an organization, and to record it in the balance sheet, it needs to have a financial value. This value can help you determine your inventory turnover ratio, which in turn will help you to plan your purchasing decisions.</div>
              <div style={{ marginTop: 20 }} className={styles.service_detail}>The different types of inventory valuation methods are specific identification. Our accounting consultants will guide you on choosing the right inventory valuation method as it is has a direct impact on the business’s profit margin.</div>
            </div>
          </div>

          <div className={styles.services_box + " " + styles.newSrviceBox}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>06</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.serviceContent}>
              <div className={styles.service_title+" "+styles.paddingT7}>
                Management Accounting</div>
              <div className={styles.service_detail}>Our accounting professionals analyze past and present accounting data to synthesize an effective and efficient business model for our clients. We aim to improve our client’s capabilities and resources to achieve the objectives of their organization. Our advisory services include budgeting, asset management, cost management and performance evaluation.</div>
            </div>
          </div>
        </div>
        <div className={styles.marginT60}>
          <div className={styles.service_title}>You can benefit from our outsourced accounting services with expert services that will save you cost and time, provide you with high level of accuracy and assured internal control.</div>
          <div className={styles.service_title}>Even though accounts have a lot more to do with business, we understand that the foundation of any high-performing partnership is a strong relationship. That is why Msians always take care of keeping a beautiful bond with all our clients. We not only help your business grow, but try to get to know you, as well as your firm.</div>
          <div className={styles.service_title}>
            One of our heartfelt missions is to provide all our clients with true visionary accounting and bookkeeping services that increase profits, save time, and ultimately stimulate growth.
            <span style={{ color: "#D4AE31", marginLeft: 10 }}>Growth is a complex process, but growth with MSians is different. And that is our word!
            </span>
          </div>
        </div>

      </div>
    </Container>
  )
}

export default Accounting_service