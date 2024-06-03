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
                "What is a fair purchase price?"
              }
            >
              <div>
              The fair purchase price is determined, considering various factors such as the target
               company&apos;s financial performance, growth prospects, competitive position, synergies, 
               market conditions, and strategic fit with the seller&apos;s evaluation of their business 
               and their requirement. It&apos;s essential for both parties to conduct thorough due 
               diligence and seek professional advice from financial advisors, accountants, and 
               legal experts to ensure a fair and mutually beneficial deal.

              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What will be the fees for a sell side advisory?"}
            >
              <div>
                Generally, sell side advisories charges fee based on any of the following basis 
                namely success fee, retainer fee, hourly or daily rates and also includes the 
                out-of-pocket expenses, if any.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"Why should I thoroughly check a company coming forward for acquiring my business?"}
            >
              <div>
              Thoroughly checking a company coming forward to acquire your business is a critical 
              step in the M&A process to ensure a successful and mutually beneficial transaction 
              for all stakeholders involved.

                </div>
            </Collapsible>
          </div>

          <div className={styles.columns} data-aos="fade-left">
          <Collapsible 
          open={false} 
          arrow={true} 
          title={"When will I be required to sell my business?"}>
              <div>
              The decision to sell a business is a complex and personal one. Most common reasons 
              are exit, lack of succession, financial reasons etc. Business owners should carefully 
              assess their own circumstances, market conditions, and long-term objectives before 
              deciding to sell. Seeking advice from financial, legal, and business professionals can 
              help inform this decision and ensure a successful transition.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"Why should I hire an advisor on the sell side?"}
            >
              <div>
              Hiring a sell-side advisor offers numerous benefits for selling your business. 
              With expertise in M&A, they navigate complexities and leverage their network to 
              find suitable buyers. Their understanding of valuation ensures fair pricing, while 
              managing the entire process saves you time and allows focus on running your business. Their involvement adds credibility, boosts confidence, and speeds to the potential transaction. Overall, engaging a sell-side advisor enhances the likelihood of a successful sale and optimizes the value of your business.

              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What are the activities of a sell side advisory?"}
            >
              <div>
              <div style={{marginBottom:20}}>
              The sell-side advisory firm acts as a trusted advisor to the seller, guiding them 
              through every step of the sale process and helping them achieve the best possible 
              outcome for their business. Their major activities include:
              </div>
              <div style={{marginBottom:20}}>
                Business Valuation,
                Due Diligence preparation,
                Negotiation Support,
                Transaction Management,
                Deal closing,
                Strategic Advisory etc.
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
