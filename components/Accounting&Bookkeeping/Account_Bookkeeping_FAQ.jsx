import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Collapsible from "./Collapsiblenew";
import styles from "./Styles.module.css";

import Container from "../Common/Container";



function ADGM_FAQ_Service() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (

   
    <Container>
      <div className={styles.onlineBookingService_container}>
       
<div className={styles.faqtitle} data-aos="fade-right"> Frequently Asked Questions (FAQ)</div>
        <div className={`${styles.onlineBookingService_sub} ${styles.faqservice}`}>
          <div className={styles.columns} data-aos="fade-right">
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What accounting and bookkeeping services do you offer for ADGM companies?"
              }
            >
              <div>
              We offer a comprehensive range of services tailored to ADGM companies, including financial statement preparation, bookkeeping, payroll processing, VAT compliance, and advisory services.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"Why do ADGM companies need professional accounting and bookkeeping services?"}
            >
              <div>
              Professional accounting and bookkeeping services ensure accurate financial records, compliance with regulations, and provide valuable insights for strategic decision-making. It also helps businesses maintain transparency and credibility.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"How can your services benefit our ADGM company?"}
            >
              <div>
              Our services streamline your financial processes, reduce the risk of errors, ensure compliance with ADGM regulations, and provide you with timely and accurate financial information for informed decision-making.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"Are your services compliant with ADGM regulations?"
                
              }
            >
              <div>
              Yes, our services are designed to meet the specific regulatory requirements of ADGM. We stay updated with any changes in regulations to ensure full compliance.
               
              </div>
            </Collapsible>

             <Collapsible
              open={false}
              arrow={true}
              title={"Do you handle VAT compliance for ADGM businesses?"}
            >
              <div>
              Absolutely, we offer VAT compliance services, including registration, filing, and advisory, to ensure your ADGM company stays compliant with the VAT regulations.
              </div>
            </Collapsible>

        
          </div>

          <div className={styles.columns} data-aos="fade-left">
            <Collapsible
              open={false}
              arrow={true}
              title={
                "How do you ensure the security of our financial data?"
              }
            >
              <div>
              We take data security seriously. Our systems are encrypted, and we follow industry best practices to protect your financial information. Access is restricted only to authorized personnel.

              </div>
            </Collapsible>
            <Collapsible open={false} arrow={true} title={"Can you customize your services to fit the specific needs of our ADGM company?"}>
              <div>
              Yes, our services are flexible and can be tailored to meet the unique requirements of your ADGM business. We work closely with our clients to understand their specific needs.
              </div>
            </Collapsible>
           

           

            <Collapsible
              open={false}
              arrow={true}
              title={"What is the cost structure for your accounting and bookkeeping services?"}
            >
              <div>
              Our pricing is based on the scope and complexity of the services required. We offer transparent and competitive pricing, and we can provide a customized quote based on your specific needs.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={" Do you provide ongoing support and advice for ADGM businesses?"}
            >
              <div>
                <div >
                Yes, our services go beyond just recording transactions. We provide ongoing support, financial advice, and help you understand the implications of financial decisions on your ADGM business.
                </div>      
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={" How can we get started with your accounting and bookkeeping services for our ADGM company?"}
            >
              <div>
                <div style={{ marginBottom: 20 }}>
                Simply contact us through our website or give us a call. We&apos;ll schedule a consultation to discuss your needs, assess the scope of services required, and provide you with a tailored proposal.
                </div>
               
              </div>
            </Collapsible>
           
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
