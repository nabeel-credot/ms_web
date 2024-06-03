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
              The fair purchase price is determined, considering various factors such as the 
              target company&apos;s financial performance, growth prospects, competitive position, 
              synergies, market conditions, and strategic fit with the buyer&apos;s existing operations. 
              It&apos;s essential for both parties to conduct thorough due diligence and seek professional 
              advice from financial advisors, accountants, and legal experts to ensure a fair and 
              mutually beneficial deal.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What are the potential risks and challenges in Buy side M&A? "}
            >
              <div>
              Potential risks and challenges in Buy side M&A include overpaying for the target 
              company, integration challenges, cultural differences, regulatory hurdles, financing 
              issues, Tax Compliances, and failure to achieve anticipated synergies or growth 
              objectives.

              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What will be the fees for a buy side advisory?"}
            >
              <div>
              Generally, buy side advisories charges fee based on any of the following basis namely
               success fee, retainer fee, hourly or daily rates and includes out of pocket expenses, 
               if any.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What are the activities a buy side advisor can do for me?"}
            >
              <div>
                <div style={{marginBottom:20}}>
              The role of a buy side advisory includes the following:
              </div>
              <div style={{marginBottom:20}}>
                Deal Sourcing,
                Due Diligence,
                Valuation Analysis,
                Deal Structuring,
                Negotiation,
                Transaction Management etc.
                </div>
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"How should I select a target business for acquisition?"}
            >
              <div>
              Selecting a target company includes evaluation of several factors such as strategic 
              fit, financial aspects including ratios and performances, market potential, 
              operational capabilities, valuation, risk, and challenges and exit strategy etc. 
              By evaluating these criteria, buyers can select the target business for acquisition.
                </div>
            </Collapsible>
          </div>

          <div className={styles.columns} data-aos="fade-left">
          <Collapsible open={false} arrow={true} title={"Why should I hire an advisor on the buy side?"}>
              <div>
              Getting a buyside advisory firm to help you buy business can be a game-changer. 
              Buy side advisor knows all the insider tricks, from finding deals and figuring out 
              what they&apos;re worth, to talking terms. Also, having got the right contacts, knowing 
              the market, and are ace at making sure you get the most, do the heavy lifting so you
               can relax
              </div>
            </Collapsible>
          <Collapsible
              open={false}
              arrow={true}
              title={" How do you value a target company in Buy-Side M&A? "}
            >
              <div>
              Several methods are used, including comparable company analysis, discounted cash 
              flow, and transaction multiples.

                </div>
            </Collapsible>
          <Collapsible
              open={false}
              arrow={true}
              title={
                "How does due diligence work in Buy side M&A? "
              }
            >
              <div>
                Due diligence involves a comprehensive review of the target company&apos;s financial, 
                operational, legal, and regulatory aspects. It aims to identify potential risks, 
                liabilities, and opportunities associated with the acquisition.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What role do investment banks and advisors play in Buy side M&A? "
              }
            >
              <div>
              Investment banks and advisors provide valuable guidance and support throughout the 
              Buy side M&A process. They assist in target identification, valuation, negotiations, 
              due diligence, financing, and deal structuring.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"Why should I buy a business which is being exited by an owner? "}
            >
              <div>
              The decision to buy a business being exited by an owner should be based on a 
              thorough assessment of its strategic fit, financial performance, growth potential, 
              and risk factors, as well as your own business objectives and capabilities. There 
              could be good business being exited by owners due to no succession for them.

                </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
