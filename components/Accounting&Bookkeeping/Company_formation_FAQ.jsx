import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Collapsible from "./Collapsiblenew";
import styles from "./Styles.module.css";

import Container from "../Common/Container";




function ADGM_FAQ_Service({faqData}) {
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
                title={"What is the primary purpose of an Operational Holding Company in ADGM?"}
              >
                <div>
                An Operational Holding Company in ADGM primarily holds the assets and equity of a group of subsidiary corporations, engaging in operational activities and providing services to the businesses within the group.

                </div>
              </Collapsible> 
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "Can a Special Purpose Vehicle (SPV) conduct operational activities in ADGM?"
                }
              >
                <div>
                No, SPVs in ADGM are not allowed to have employees or engage in operational activities. Their sole purpose is to hold ownership of equity and non-equity assets, such as shares, debentures, bonds, real property, and intellectual property.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "Are there visa eligibility differences between Operational Holding Companies and SPVs in ADGM?"
                }
              >
                <div>
                Yes, Operational Holding Companies are eligible for visas based on office space, while SPVs are not eligible for visas.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "What are the nexus requirements for incorporating an SPV in ADGM?"
                }
              >
                <div>
                A connection or &apos;nexus&apos; can be demonstrated by either the SPV being owned or controlled by a UAE or GCC based entity, holding assets in the UAE or GCC region, or facilitating transactions connected to or providing economic benefit to the UAE.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={"  Is there a minimum requirement for office space when incorporating an Operational Holding Company in ADGM?"}
              >
                <div>
                Yes, a minimum of one dedicated desk space is mandatory for incorporating an Operational Holding Company in ADGM. In contrast, SPVs cannot take office space of their own but can use the registered address of a Company service provider or their parent/subsidiary company in ADGM.
                </div>
              </Collapsible> 
            </div>
  
            <div className={styles.columns} data-aos="fade-left">
            <Collapsible
                open={false}
                arrow={true}
                title={
                  "Can an Operational Holding Company conduct additional operating activities, such as trading or services?"
                }
              >
                <div>
                Yes, Operational Holding Companies in ADGM have the flexibility to conduct additional operating activities beyond holding assets, including trading and providing services, but the final approval of combing operational holding activity with operational activities is subject to ADGM approval. 
                </div>
              </Collapsible>
           
              <Collapsible
                open={false}
                arrow={true}
                title={" What is the minimum timeline for the incorporation process of both Operational Holding Companies and SPVs in ADGM?"}
              >
                <div>
                The entire process, including onboarding, application preparation, lease agreements, and ADGM review, takes approximately 2-3 weeks for both Operational Holding Companies and SPVs.
                </div>
              </Collapsible> 
              <Collapsible
                open={false}
                arrow={true}
                title={"Are there differences in ADGM fees between Operational Holding Companies and SPVs?"}
              >
                <div>
                Yes, Operational Holding Companies are subject to a fee of 10,000 USD for up to 6 activities, while SPVs incur a fee of 1,900 USD.
                </div>
              </Collapsible> 
              <Collapsible
                open={false}
                arrow={true}
                title={"Can foreign individuals or corporate entities serve as shareholders, directors, and authorized signatories for both types of companies in ADGM?"}
              >
                <div>
                Yes, both Operational Holding Companies and SPVs in ADGM allow for foreign individuals or corporate entities to serve as shareholders, directors while at least one of the authorised signatories must be a UAE resident. 

                </div>
              </Collapsible> 
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "Is the appointment of a Corporate Service Provider (CSP) mandatory for SPVs in ADGM?"
                }
              >
                <div>
                Yes, it is mandatory for SPVs in ADGM to appoint a registered Company Service Provider (CSP) for their operations if it’s a non-exempt SPV.

                </div>
              </Collapsible>
            </div>
          </div>
        </div>
      </Container>
    );
  }
  
  export default ADGM_FAQ_Service;