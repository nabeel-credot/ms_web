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
                "What are the Types of Licenses in the DIFC?"
              }
            >
              <div>
              The is a range of license types in Dubai International Financial Centre (DIFC) including financial, non-financial license, retail and tech licenses.
              </div>
            </Collapsible>

            <Collapsible open={false} arrow={true} title={"What are the DIFC courts?"}>
              <div>
              The DIFC courts are special courts in Dubai established to serve the international institutions operating in the city and the UAE. Created in 2004 by His Highness (Late) Sheikh Maktoum bin Rashid Al Maktoum, then Ruler of Dubai, these special courts follow the English common law system to deliver swift and independent justice for settling local and international civil and commercial disputes in Dubai.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What is the DIFC Innovation HUB?"}
            >
              <div>
              The DIFC Innovation Hub is a specialized ecosystem for tech startups in the DIFC Jurisdiction, offering attractive licensing, affordable real estate, accelerator programs, access to funding, corporate digital labs, and a vibrant community.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What is Common Reporting Standard (“CRS”)?"}
            >
              <div>
              CRS, is a global standard developed to address non-compliance by U.S. taxpayers using foreign accounts. It is distinct from the Foreign Account Tax Compliance Act (&quot;FATCA&quot;), which targets the same issue but is specific to the United States. FATCA requires Foreign Financial Institutions (&quot;FFIs&quot;) to report to the IRS regarding financial accounts held by U.S. taxpayers. In contrast, CRS is an international effort where financial and certain non-financial institutions in participating countries share information to combat tax evasion. Countries enacting CRS legislation can be found on the Organization for Economic Cooperation and Development&apos;s website.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What are the regulatory frameworks governing businesses in the DIFC?"}
            >
              <div>
              DIFC&apos;s unique legal and regulatory framework is based on international standards and principles of common law that is tailored to the region&apos;s unique needs, creating the optimal environment for financial services and related industries and services to grow.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"What benefits does the DIFC offer Innovation Licenses?"}
            >
              <div>
                Innovation Licenses in the DIFC come with a range of perks tailored to support innovative ventures. These include a highly subsidized license fee of just US$ 1,500 per year for up to 4 years*, waived incorporation and registration fees, flexible capital requirements, affordable co-working space options, visa allocation for up to 4 individuals, and reduced visa costs by up to 50%. These incentives create an attractive environment for startups, fostering growth and innovation within the DIFC ecosystem.
              </div>
            </Collapsible>

          </div>

          <div className={styles.columns} data-aos="fade-left">
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What is the difference  between DIFC & DFSA?"
              }
            >
              <div>
              The Dubai International Financial Centre (DIFC) is a special economic zone in Dubai, UAE, while the Dubai Financial Services Authority (DFSA) is the independent regulatory authority responsible for overseeing and regulating financial services conducted within the DIFC. In essence, the DIFC is the physical and legal infrastructure where businesses operate, while the DFSA is the regulatory body ensuring compliance and maintaining financial stability within this zone.

              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What are the annual DIFC Compliances?"}
            >
              <div>
              Annual compliance requirements for companies in the Dubai International Financial Centre (DIFC) typically include submitting audited financial statements and annual returns to the DIFC Authority. Companies must also comply with corporate governance standards, regulatory reporting, and renew licenses. Additional obligations may involve adhering to employment laws, tax compliance, anti-money laundering regulations, data protection laws, and maintaining appropriate insurance coverage. Staying updated on regulatory changes and seeking professional advice can help ensure businesses meet their annual compliance obligations effectively.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={
                "Is DIFC a free zone?"
              }
            >
              <div>
              Yes, the Dubai International Financial Centre (DIFC) is a free zone. It is a special economic zone in Dubai, United Arab Emirates, specifically designed to facilitate financial services and related activities. As a free zone, the DIFC offers businesses various benefits, including 100% foreign ownership, tax advantages, and streamlined regulations aimed at fostering economic growth and attracting international investment. Companies operating within the DIFC are subject to its regulatory framework overseen by the Dubai Financial Services Authority (DFSA).
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"What defines an Authorized Firm?"
                }
            >
              <div>
              An Authorized Firm is an entity granted Financial Service Permissions by the DFSA to conduct financial services within the DIFC.

               
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What are the benefits of setting up a business or operating within the DIFC?"}
            >
              <div>
              Setting up a business or operating within the Dubai International Financial Centre (DIFC) offers numerous advantages. These include a highly respected, independent regulator, an English-speaking common law judicial system separate from the UAE&apos;s legal framework, and a concentration of international firms, investment funds, banks, and financial institutions. The DIFC&apos;s status as the region&apos;s largest fund domicile further enhances its appeal, making it an ideal destination for businesses seeking a dynamic and globally connected financial ecosystem.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"Who falls under the scope of the DIFC DP Law 2020 in terms of entities subject to its regulations?"}
            >
              <div>
              The DIFC DP Law 2020 applies to the processing of personal data within the DIFC jurisdiction, covering both automated and non-automated processing forming part of a filing system. It is relevant to controllers or processors incorporated in the DIFC, irrespective of the processing location. Additionally, it extends to non-DIFC entities engaging in regular or contractual processing activities with a DIFC entity. The law does not pertain to personal data processing for purely personal or household activities. Specific details can be found in Article 6 of the DP Law 2020. 
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
