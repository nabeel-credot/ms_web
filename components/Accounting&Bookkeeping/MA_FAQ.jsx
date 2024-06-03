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
                "What are strategies in M&A?"
              }
            >
              <div>
              Mergers and Acquisitions strategies involve the planning and execution of activities 
              to achieve specific objectives when combining or acquiring companies. Setting 
              effective M&A strategies is crucial for the success of the transaction and the 
              realization of desired benefits.
              </div>
            </Collapsible>

            <Collapsible open={false} arrow={true} title={"How do I formulate an M&A strategy?"}>
              <div>
              Formulating an M&A strategy is a dynamic process that requires collaboration, 
              careful planning, and continuous evaluation. It&apos;s essential to involve key 
              stakeholders, including senior management, legal and financial advisors, and 
              other relevant experts, to ensure a comprehensive and well-informed approach.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"Why do M&A's fail?"}
            >
              <div>
              Overpayment of consideration, expecting more the worth synergy benefits, cultural 
              barriers in integration, inaccurate valuation, relying on inadequate due diligence 
              conducted etc. are the major reasons for failure of an M&A transaction.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"What is synergy from M&A?"}
            >
              <div>
              In simple mathematical terms, synergies make 2 + 2 = &gt;4. Synergies refer to the 
              additional value created when two companies combine forces through a merger or 
              acquisition.
              </div>
            </Collapsible>

           

            <Collapsible
              open={false}
              arrow={true}
              title={"What is the difference between mergers and acquisitions?"}
            >
              <div>
                A merger is the combination of two or more firms, to form a new company, 
                either by way of amalgamation or absorption. Acquisition is a business strategy 
                in which one company takes the control of another company.
                </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"How can I ensure confidentiality during the M&A process?"}
            >
              <div>
                Maintaining confidentiality is a complex process that requires diligence and 
                coordination among all parties involved. Engaging legal, financial, and 
                communication experts can help navigate potential challenges and ensure a smooth 
                and confidential M&A process.

                </div>
            </Collapsible>
          </div>

          <div className={styles.columns} data-aos="fade-left">
          <Collapsible
              open={false}
              arrow={true}
              title={" What is exit strategy in M&A?"}
            >
              <div>
                An exit strategy is a plan that allows a business owner, investor, or trader 
                to sell their ownership in a company.
                </div>
            </Collapsible>
          <Collapsible
              open={false}
              arrow={true}
              title={
                "What are ‘considerations’ in M&A?"
              }
            >
              <div>
                <div style={{marginBottom:20}}>
              When companies merge or one buys another, &quot consideration &quot is basically what the 
              buyer gives to the seller for their company. It can be:
              </div>
              <div style={{marginBottom:20}}>
              1. Cash: Good old money—sellers love it because it&apos;s quick and sure.
              </div>
              <div style={{marginBottom:20}}>
              2. Stock: The buyer might pay with shares of its own company, tying both parties 
              together going forward.
              </div>
              <div style={{marginBottom:20}}>
              3. Debt: Sometimes, the deal is done by giving out loans or bonds.
              </div>
              <div style={{marginBottom:20}}>
              4. Hybrid: A mix of cash, stocks, and maybe some debt too.
              </div>
              <div style={{marginBottom:20}}>
              5. Earnouts: Think of this as a bonus—if the sold company does well later, they get extra cash.
              </div>
              <div style={{marginBottom:20}}>
              6. Assets: Instead of cash, physical things like property or equipment might be traded.
              </div>
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What is goodwill arising from M&A?"
              }
            >
              <div>
              Goodwill in M&A is kind of like the extra price a company pays for another company 
              above its book value because of intangible stuff like brand reputation, customer 
              relations, and employee morale. It&apos;s the premium for buying a business that&apos;s 
              expected to perform better or has a stronger position in the market than just the 
              sum of its physical assets.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"What is a bargain purchase in M&A?"}
            >
              <div>
              A bargain purchase happens in mergers and acquisitions when a company is bought 
              for less than its fair market value. Think of it as getting a great deal on something 
              that&apos;s usually pricey. Reasons for a bargain could be urgent sales, financial troubles, 
              or even just poor valuation knowledge.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"What are the benefits of M&A?"
                
              }
            >
              <div>

              Mergers and acquisitions can be like a power-up for companies. They offer growth 
              shortcuts, access to new markets, and a chance to diversify products or services. 
              Firms can also have some cost savings by sharing resources or cutting down on 
              duplicate roles.  Buying up or merging with others might give a company more muscle 
              to set prices or negotiate better deals. It&apos;s not just about getting bigger; it&apos;s 
              about getting stronger and smarter in the business playground.

               
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"What is the idle time for completion of an M&A process?"}
            >
              <div>
              On average, M&A process takes 6 months on a minimum up to 1 year for completion. 
              As we consider speed as the key, we will promise you the shortest time to wind up 
              everything.
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
