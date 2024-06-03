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
          <div className={styles.columns} data-aos="fade-right" >
            <Collapsible
              open={false}
              arrow={true}
              title={
                "Can I choose any company name for the ADGM proposed company?"
              }
            >
              <div>
                The company name must be compliant with the ADGM Business and
                Company Name Rules. Name must not be identical or almost
                identical to any entity currently registered in the ADGM or any
                other relevant jurisdiction.
              </div>
            </Collapsible>

            <Collapsible open={false} arrow={true} title={"Is the appointment of a Data Protection Officer applicable to all entities in ADGM?"}>
              <div>
              Regardless of the company&apos;s size, a Data Protection Officer
                (DPO) must be appointed if: The company is a public authority
                processing personal data. The company processes personal data on
                a large scale. The company regularly and systematically monitors
                individuals. The company processes special category data (e.g.,
                medical data, biometrics, data revealing racial or ethnic
                origin, political beliefs/opinions, religious or philosophical
                beliefs) or criminal conviction data.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"What types of office spaces are available for an ADGM company on Al Reem Island?"}
            >
              <div>
              ADGM provides a range of office space options, including serviced offices, co-working spaces, and dedicated office suites, catering to the diverse needs of businesses. These spaces vary in size, layout, and amenities to accommodate different company sizes and requirements.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"Are AML rules applicable to all entities in ADGM?"}
            >
              <div>
                All ADGM entities are subject to AML supervision. DNFBPs
                Designated Non-Financial Professions and FSRA regulated firms
                are obliged to comply with the provisions under the AML
                Rulebook.
              </div>
            </Collapsible>

           

            <Collapsible
              open={false}
              arrow={true}
              title={"Can a filing time extension be requested?"}
            >
              <div>
                <div style={{ marginBottom: 20 }}>
                  Companies should take appropriate measures to ensure that the
                  filing date is identified, and the filing is prepared and
                  submitted within the prescribed period.
                </div>
                <div style={{ marginBottom: 20 }}>
                  However, if due to unforeseen circumstances or an exceptional
                  reason the filing is delayed, a company may request the
                  Registration Authority for the extension period.
                </div>
                <div style={{ marginBottom: 20 }}>
                  The extension request should include all relevant information
                  including an explanation of why the company cannot comply with
                  the prescribed period for filing and the length of the
                  extension being requested. Depending on the reasons and
                  circumstances, the Registration Authority may require
                  documentary evidence supporting the claims to be provided.
                </div>
                <div style={{ marginBottom: 20 }}>
                  Requests for extensions should be made in writing as a letter,
                  stamped and signed by an authorised signatory or a director of
                  the company, and emailed to the Monitoring & Enforcement
                  Department at monitoring@adgm.com
                </div>
                <div style={{ marginBottom: 20 }}>
                  If the Registration Authority is satisfied with the
                  information given is sufficient for extension of time, a
                  confirmation will be provided with the new deadline for
                  filing.
                </div>
                <div>
                  If the request for an extension is not granted and a company
                  fails to submit the filing on time, the company will be liable
                  to the relevant late filing penalty. Time taken by the
                  Registration Authority to consider an extension request that
                  is not granted shall not be a valid reason for failing to meet
                  the original deadline for filing.
                </div>
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={" What ensues when a fine is levied?"}
            >
              <div>
                <div style={{ marginBottom: 20 }}>
                  When a company fails to deliver the accounts to the
                  Registration Authority on time, a late filing penalty is
                  imposed automatically.
                </div>
                <div style={{ marginBottom: 20 }}>
                  The penalty imposed will generally be determined as per the
                  Guide.
                </div>
                <div style={{ marginBottom: 20 }}>
                  In case of online submission of filing via Registration
                  Authority’s online portal, the penalty notice will be issued
                  electronically by the portal.
                </div>
                <div>
                  In case of hard copy submission, the Registration Authority
                  will issue a penalty notice to the company’s registered office
                  address.
                </div>
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"Can the fine levied be appealed?"}
            >
              <div>
                <div style={{ marginBottom: 20 }}>
                  An appeal can be made against a late filing penalty only if
                  the company demonstrates that the circumstances are
                  exceptional or that the fine imposed was incorrect.
                </div>
                <div style={{ marginBottom: 20 }}>
                  The Registration Authority has very limited discretion not to
                  collect a fine. Exceptional circumstances include unforeseen
                  and catastrophic events that render a company unable to submit
                  a filing.
                </div>
                <div>
                  A company should take appropriate measures to ensure that its
                  accounts are ordinarily prepared (and audited, if required)
                  and submitted to the Registration Authority within the
                  prescribed period.
                </div>
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={
                "How to hand over annual accounts to the Registration Authority?"
              }
            >
              <div>
                The easiest way to hand over the filing to the Registration
                Authority is through uploading the file in their online portal,
                available at www.registration.adgm.com
              </div>
            </Collapsible>
          </div>

          <div className={styles.columns} data-aos="fade-left" >
            <Collapsible
              open={false}
              arrow={true}
              title={
                "Is the appointment of a Director mandatory in ADGM? What are the requirements ?"
              }
            >
              <div>
                A private company must have at least one director who is a
                natural person. A minimum of 2 directors are required in the
                case of a public company. Directors must be 18 years of age,
                must not be disqualified from acting as a director and must not
                be an undischarged bankrupt.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"Is the appointment of an authorized signatory mandatory?"}
            >
              <div>
                Yes, this is mandatory. At least one of the authorized
                signatories must be a UAE resident /GCC national. Emirates ID,
                Passport and Visa copy must be provided to ADGM during
                Incorporation Application. The appointment must be passed by a
                resolution of the incorporating shareholder/s.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"Who is UBO?"
                
              }
            >
              <div>
              Any ultimate person who holds more than 25% of ownership or
                control in ADGM legal entity is considered as Ultimate
                Beneficial Owner.
               
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"How to prevent paying a fine?"}
            >
              <div>
                Penalties for delayed filing can be avoided by ensuring that
                when a filing obligation is due, all the process must be in
                place and filing is prepared and submitted to the relevant
                Registrar within the specified filing period.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={" What if a filing is returned?"}
            >
              <div>
                <div style={{ marginBottom: 20 }}>
                  The filings which do not meet the requirements of the
                  Companies Regulations of the Registration Authority will be
                  returned back for correction. For example, if the accounts are
                  not signed by a director, or accompanied by a director’s
                  report (if applicable).
                </div>
                <div>
                  A late filing penalty will be imposed if the filing is
                  resubmitted after the impending date of the original filing.
                </div>
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What if the fine goes unsettled?"}
            >
              <div>
                <div style={{ marginBottom: 20 }}>
                  The Registration Authority treats the fine as a debt due to
                  it, if all or any of the amount of a fine is outstanding at
                  the end of the deadline for payment as specified in the
                  notice.{" "}
                </div>
                <div>
                  The Registration Authority may apply to the ADGM Courts for
                  recovery of the debt.
                </div>
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"How to make an appeal?"}
            >
              <div>
                <div style={{ marginBottom: 20 }}>
                  An appeal must be made in writing and the letter should be
                  addressed to the Monitoring & Enforcement Department.
                </div>
                <div>
                  The letter should include all the details of the exceptional
                  circumstances and reasons as to why the Registration Authority
                  should consider the appeal. The letter must be duly stamped
                  and signed by a director or authorized signatory of the
                  company and should be submitted by email to{" "}
                  <span style={{ color: "#212120", marginLeft: 3 }}>
                    monitoring@adgm.com
                  </span>
                  .
                </div>
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What are the lease terms and costs associated with office spaces in ADGM?"}
            >
              <div>
                Lease terms and costs vary depending on factors such as the size of the office space, location within ADGM, amenities provided, and market conditions. Whether seeking a premium location with extensive amenities or a more cost-effective solution without compromising on quality, ADGM offers a spectrum of options to suit diverse business requirements. Businesses can negotiate lease terms tailored to their budget and long-term objectives, empowering them to secure spaces that not only meet their immediate needs but also facilitate future growth and success. 
                </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
