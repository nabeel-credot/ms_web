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
                "What are the primary valuation methods used measure the value of an organization?"
              }
            >
               <div>
                <div style={{ marginBottom: 20 }}>
                There are three fundamental ways to measure the value of a business or professional practice which are: Income approach, Asset- based approach and Market approach. Each business valuation method uses a specific procedure to calculate the business value.
                </div>
                <div style={{ marginBottom: 20 }}>
                As a matter of principle all the valuation methods make use of comparative data. The Asset based methods use the comparative business transactions to determine the earnings multiplier used in this industry. The market-based methods use various multipliers from comparative businesses to establish the business value. The earningsbased methods use the data to determine the average capitalization rate used for similar businesses.
                </div>
                </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"How do cost differ from valuation?"}
            >
              <div>
               Cost represents the actual expenses incurred, such as purchase price or production costs, at a specific point in time, while valuation is the process of determining the current worth of an asset or business based on market conditions, future earning potential, and comparable transactions. Cost reflects historical expenditure, whereas valuation provides an estimate of the asset&apos;s present value considering various factors, aiming to determine its fair market worth.
              </div>
            </Collapsible>
          </div>

          <div className={styles.columns} data-aos="fade-left">
          <Collapsible
              open={false}
              arrow={true}
              title={"What is the importance of valuation in Transactions?"}
            >
              <div>
              Valuation is vital in transactions as it ensures fairness, facilitates informed decision-making, aids negotiation, mitigates risks, boosts investor confidence, and ensures legal compliance. By determining the true worth of assets or businesses, valuation sets a fair benchmark for negotiations, providing transparency and clarity for both buyers and sellers. Additionally, it helps identify potential risks and opportunities, enabling parties to make informed decisions and mitigate risks effectively. Ultimately, valuation serves as a crucial tool in achieving successful outcomes and maintaining trust in transactions.
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
