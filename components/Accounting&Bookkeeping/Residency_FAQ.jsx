import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Collapsible from "./Collapsiblenew";
import styles from "./Styles.module.css";

import Container from "../Common/Container";

function ADGM_FAQ_Service({ faqData }) {
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
        <div
          className={`${styles.onlineBookingService_sub} ${styles.faqservice}`}
        >
          <div className={styles.columns} data-aos="fade-right">
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What is the requirement on residency visa for company incorporation?"
              }
            >
              <div>
                The requirement on Residency Visa for company incorporation are
                as follows:
                <p>
                  At least one authorized signatory must have valid residency
                  visa - Companies are required to at all times maintain at
                  least one (1) authorized signatory who holds a residency visa
                  issued by a competent authority in the United Arab Emirates.
                  Each authorized signatory will have had to enter the UAE in
                  the past - Entry stamp will be required as proof
                </p>
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What is the process of employee visa transfer within ADGM registered entities?"
              }
            >
              <div>
                Visa transfers are exclusively applicable in specific scenarios
                within the Abu Dhabi Global Market (ADGM). These scenarios
                encompass the transfer of visas from the Abu Dhabi Government
                sector to the ADGM, facilitating mobility between these sectors.
                Additionally, visa transfers are permitted between entities
                within the ADGM, ensuring a smooth transition for individuals
                moving from one ADGM entity to another. Furthermore, the
                provision extends to individuals transitioning from an Abu Dhabi
                Free Zone Entity to the ADGM, facilitating seamless visa
                transfers in alignment with the specified parameters. This
                targeted approach ensures that visa transfers within the ADGM
                are regulated and permissible under these specified
                circumstances.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What's the required documents for processing a new employment visa?"
              }
            >
              <div>
                To initiate the processing of a new Employment visa, a
                comprehensive set of documents is required for submission. This
                includes a copy of the applicant&apos;s passport, with a minimum
                validity of 6 months. The Employment Contract or Offer Letter
                for the applicant must also be provided, outlining the terms and
                conditions of employment. Additionally, a copy of the Cancelled
                Visa, if applicable, and the previous Emirates ID, if previously
                issued, are necessary components of the documentation. A recent
                photo of the applicant is mandated, adhering to specific
                specifications such as a white background, minimum dimensions of
                600 x 600 pixels, a maximum of 1200 x 1200 pixels, and a square
                aspect ratio with a minimum resolution of 96 dpi. This
                compilation of documents ensures a thorough and accurate
                submission for the processing of the new Employment visa.
              </div>
            </Collapsible>
          </div>

          <div className={styles.columns} data-aos="fade-left">
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What are the photo requirements for residency visa application?"
              }
            >
              <div>
                In accordance with the requirements set by the Identity and
                Citizenship Authority (ICA), specific photo specifications must
                be adhered to for official documentation. The photo submitted
                should have a minimum dimension of 600 x 600 pixels and a
                maximum of 1200 x 1200 pixels, maintaining a square aspect ratio
                where the height equals the width, and a minimum resolution of
                96 dpi. The photo should capture a close-up of the full head and
                upper shoulders, ensuring the individual is facing forward and
                looking directly at the camera. The background must be entirely
                white, devoid of any objects or people, and the photo should be
                free from any skewing. These detailed specifications are
                mandated to ensure the accuracy and clarity of the photograph
                for official identification purposes.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={
                "How long before visa expiry can a person apply to renew the visa?"
              }
            >
              <div>
                You can apply for renewal 6 Months prior to the current visa
                expiry, The new visa expiry date will be based on the new visa
                issuing date.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What's the visa quota/space allocation for my ADGM license?"
              }
            >
              <div>
                For category A&B type entities with a business centre address,
                the visa eligibility per desk is 2 if a standard business type
                and 3 if an innovation business type. For Category A, B & C with
                physical office space or leased premises, Category A&B standard
                business type require 8SQM area for 1 visa. For retail unit or
                restaurants require 6 SQM for one visa. Hoteliers in Category B
                business type with 20 SQM can have one visa and kiosks with
                Category C retail can have 3 Visas per unit.
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
