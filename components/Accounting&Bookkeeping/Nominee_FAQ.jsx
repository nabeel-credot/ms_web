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
       
<div className={styles.faqtitle}data-aos="fade-right"> Frequently Asked Questions (FAQ)</div>
        <div className={`${styles.onlineBookingService_sub} ${styles.faqservice}`}>
          <div className={styles.columns} data-aos="fade-right">
            <Collapsible
              open={false}
              arrow={true}
              title={
                "How to change signing capacity (singly / jointly) for entity authorized signatories?"
              }
            >
              <div>
              To change signing capacity from singly to jointly or vice versa you need to file a notice of error on registration portal with an explanatory note and copy of the resolution showing the signatory capacity.
              </div>
            </Collapsible>

            <Collapsible open={false} arrow={true} title={"what is an adgm authorised signatory?"}>
              <div>
              ADGM entities must appoint at least one ADGM Authorised Signatory, who must be a UAE Resident or GCC National and undergo security clearance. The ADGM Authorised Signatory, listed on the Commercial Licence, lacks inherent authority to sign contracts or make changes without specific delegation through a Power of Attorney.
              </div>
            </Collapsible>

           
           

            
          </div>

          <div className={styles.columns}data-aos="fade-left">
           
          <Collapsible
              open={false}
              arrow={true}
              title={"How many authorised signatories is required for incorporation of a company in adgm?"}
            >
              <div>
              All ADGM entities must appoint at least one Authorised Signatory who is a UAE Resident or GCC National.
              </div>
            </Collapsible>


            <Collapsible
              open={false}
              arrow={true}
              title={"Can I use a nominee to be my ADGM Authorised Signatory?"}
            >
              <div>
              Certainly! In the Abu Dhabi Global Market (ADGM), all registered companies are required to have at least one authorised signatory. This individual is authorized to represent the license holder as a permanent representative within the ADGM. The authorised signatory can act either severally or jointly with another authorised signatory.
              </div>
            </Collapsible>
           
           

            
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
