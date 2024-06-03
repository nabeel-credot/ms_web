import React, { useEffect, useState } from "react";
import styles from "./Footercopy.module.css";
import Collapsible from "./FooterCollapsible";
import Image from "next/image";
import Link from "next/link";

import Container from "./Common/Container";
import { useRouter } from "next/router";
function Footer() {
  const [state, setState] = useState("");
  const router = useRouter();
  const handleChange = (section) => {
    setState((prev) => (prev !== section ? section : ""));
  };
  return (
    // <Container>
    <div>
      <div className={styles.mobileborder}>
      <Container>
        <div className={styles.menuitems}>
          <p className={styles.quicklink}>Quick Links</p>
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/about-us" prefetch={false}>
            <p>About Us</p>
          </Link>
          <Link href={router.pathname}>
            <p>How we Help</p>
          </Link>
          <Link href="/e-commerce-startup" prefetch={false}>
            <p>SmartUp</p>
          </Link>
          <Link href="/news-and-blogs" prefetch={false}>
            <p>News & Blogs</p>
          </Link>
          <Link href="/privacy-and-policy" prefetch={false}>
            <p>Privacy Policy</p>
          </Link>
        </div>
        </Container>
        </div>
        <div className={styles.mobilesubscribe}>
          <Container>
        <div className={styles.subscribediv}>
                <div className={styles.titlemob}>
                  <input
                    type="text"
                    placeholder="Subscribe to newsletter"
                    className={styles.subscribebox}
                  />
                </div>
                <button>Subscribe</button>
                </div>
                </Container>
                </div>
      {/* </Container> */}
      <div className={styles.main}>
        <Container>
          <div className={styles.container}>
            
            <div className={styles.coloumn}>
              <div className={styles.box}>
                <div className={styles.titlehead}>Jurisdictions</div>
                {/* <Link1 href="/#abu-dhabi-global-market-uae" prefetch={false}> 
                <a> 
                <div
                  className={styles.title}
                  onClick={() => handleChange("abu")}
                >
                  <div className={styles.mobileicon}><Image src="/images/adgmfooter.svg" width={25} height={25} alt=""/></div>
                <span> Abu Dhabi Global Market (ADGM)</span>
                </div>
                   </a> 
                   </Link1>  */}
                {/* {state === "abu" ? (
                  <ul className={styles.commonList}>
                    <li>
                      <Link
                        href="/incorporation-advisory-and-assistance"
                        prefetch={false}
                      >
                        <a>
                          Incorporation Advisory & <br />
                          Assistance
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/adgm-compliance-filings" prefetch={false}>
                        ADGM Compliance Filings
                      </Link>
                    </li>
                    <li>
                      <Link href="/FO-service" prefetch={false}>
                        FO Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="AML-compliance-and-outsourced-MLRO-services"
                        prefetch={false}
                      >
                        <a>
                          AML Compliance &<br /> Outsourced MLRO Services
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/management-advisory-and-assistance"
                        prefetch={false}
                      >
                        <a>
                          Management Advisory
                          <br /> & Assistance
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/bank-opening-assistance" prefetch={false}>
                        <a>
                          {" "}
                          Bank account <br />
                          opening assistance{" "}
                        </a>
                      </Link>
                    </li>
                  </ul>
                ) : null} */}
              </div>
              <div className={styles.box}>
              <Link href="/dubai-multi-commodities-centre"><a>
                <div
                  className={styles.title + " " + styles.width}
                  onClick={() => handleChange("dubai")}
                >
                <div className={styles.mobileicon}>  <Image src="/images/dmccfooter.svg" width={25} height={25} alt=""/></div>
                <span>
                Dubai Multi Commodities Centre (DMCC)
                  </span> 
                </div>
                  </a>
                </Link>
                {/* {state === "dubai" ? (
                  <ul className={styles.commonList + " " + styles.width}>
                    <li>
                      <Link
                        href="/dmcc-freezone-setup-services"
                        prefetch={false}
                      >
                        <a>DMCC Freezone Setup Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dmcc-compliance-and-corporate-services"
                        prefetch={false}
                      >
                        DMCC Compliance & Corporate Services 
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/management-advisory-and-assistance-dmcc"
                        prefetch={false}
                      >
                        <a>
                          Management Advisory
                          <br /> & Assistance
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dmcc-business-bank-account-setup-assistance"
                        prefetch={false}
                      >
                        <a>
                          DMCC Business Bank <br />
                          Account Setup Assistance
                        </a>
                      </Link>
                    </li>
                  </ul>
                ) : null} */}
              </div>
              <div className={styles.box}>
                <Link href="/dubai-international-financial-centre" prefetch={false}>
                <a>
                <div
                  className={styles.title}
                  onClick={() => handleChange("mas")}
                >
                 <div className={styles.mobileicon}>  <Image src="/images/difcfooter.svg" width={25} height={25} alt=""/></div>
                 <span>
                  Dubai International Finance Centre (DIFC)
                  </span>
                </div>
                  </a>
                </Link>

                {/* {state === "mas" ? (
                  <ul className={styles.commonList}>
                    <li>
                      <Link
                        href="/masdar-incorporation-compliance-and-corporate-services"
                        prefetch={false}
                      >
                        <a>
                          MASDAR Incorporation <br />
                          Compliance and corporate
                          <br /> services
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/masdar-management-advisory" prefetch={false}>
                        Management Advisory
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/masdar-assistance-in-bank-account-opening"
                        prefetch={false}
                      >
                        Assistance in Bank Account opening
                      </Link>
                    </li>
                  </ul>
                ) : null} */}
              </div>{" "}
              {/* <div className={styles.box}>
            <Link href="/dubai-international-financial-centre">
                <div className={styles.title}>DIFC</div>
            </Link>
              </div> */}
            </div>

            <div className={styles.coloumn}>
            <div className={styles.box}>
            <div className={styles.titlehead}>Services</div>
                <Link href="/advisory" prefetch={false}>
                <a>
                <div
                  className={styles.title}
                  // onClick={() => handleChange("advisory")}
                >
                  Advisory
                </div>
                </a> 

               </Link>
                {/* {state === "advisory" ? (
                  <ul className={styles.commonList}>
                    <li>
                      <Link href="/transaction-advisory" prefetch={false}>
                        Transaction Advisory
                      </Link>
                    </li>
                    <li>
                      <Link href="/mergers-and-acquisitions" prefetch={false}>
                        Mergers & Acquistions
                      </Link>
                    </li>
                    <li>
                      <Link href="/risk-advisory" prefetch={false}>
                        Risk Advisory
                      </Link>
                    </li>
                    <li>
                      <Link href="/management-advisory" prefetch={false}>
                        Management Advisory
                      </Link>
                    </li>
                  </ul>
                ) : null} */}
              </div>

              <div className={styles.box}>
                <div
                  className={styles.title}
                  onClick={() => handleChange("taxation")}
                >
                  <div>
                    {" "}
                     <Link href="/taxation" prefetch={false}> 
                    Taxation
                     </Link> 
                  </div>
                </div>
                {/* {state === "taxation" ? (
                  <ul className={styles.commonList}>
                    <li>
                      <Link href="/vat-consultant" prefetch={false}>
                        VAT Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/corporate-tax" prefetch={false}>
                        Corporate Tax
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/economic-substance-regulations"
                        prefetch={false}
                      >
                        Economic Substance Regulation(ESR)
                      </Link>
                    </li>
                    <li>
                      <Link href="/cbc-reporting" prefetch={false}>
                        CBCR
                      </Link>
                    </li>
                    <li>
                      <Link href="/us-expat-tax-consultant" prefetch={false}>
                        US Expat
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ultimate-beneficial-ownership"
                        prefetch={false}
                      >
                        UBO
                      </Link>
                    </li>
                  </ul>
                ) : null} */}
              </div>

              <div className={styles.box}>
                 <Link href="/accounting-services" prefetch={false}>
                <a> 
                <div
                  className={styles.title}
                  onClick={() => handleChange("accounding")}
                >
                  Accounting
                </div>
               </a>
              </Link> 
                {/* {state === "accounding" ? (
                  <ul className={styles.commonList}>
                    <li>
                      <Link href="/accounting-bookkeeping" prefetch={false}>
                        <a>
                          Accounting & Bookkeeping
                          <br />
                          Services
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/payroll-services" prefetch={false}>
                        Payroll Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/audit" prefetch={false}>
                        Audit Services
                      </Link>
                    </li>
                  </ul>
                ) : null} */}
              </div>
              <div className={styles.box}>
                <div
                  className={styles.title}
                  onClick={() => handleChange("tech")}
                >
                 <Link href="/technology" prefetch={false}> 
                  Technology
                   </Link> 
                </div>
                {/* {state === "tech" ? (
                  <ul className={styles.commonList}>
                    <li>
                      <Link href="/digital-transformation" prefetch={false}>
                        Digital Transformation
                      </Link>
                    </li>
                    <li>
                      <Link href="/robotic-process-automation" prefetch={false}>
                        Robotic Process Automation
                      </Link>
                    </li>
                    <li>
                      <Link href="/erp-advisory" prefetch={false}>
                        ERP Advisory
                      </Link>
                    </li>
                    <li>
                      <Link href="/artificial-intelligence" prefetch={false}>
                        Artificial Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link href="/data-analysis" prefetch={false}>
                        Data Analysis
                      </Link>
                    </li>
                    <li>
                      <Link href="/blockchain" prefetch={false}>
                        Blockchain
                      </Link>
                    </li>
                  </ul>
                ) : null} */}
              </div>
            </div>

            {/* <div className={styles.coloumn}>
            <div className={styles.box}>
              <div className={styles.title}>Our Firm</div>
              <ul className={styles.commonList}>
                <li>
                  <Link href="/about-us" prefetch={false}>
                    Story
                  </Link>
                </li>
                <li>
                  <Link href="/ms" prefetch={false}>
                    Team Msian
                  </Link>
                </li>
                <li>
                  <Link href="/our-awards" prefetch={false}>
                    Our Awards
                  </Link>
                </li>
                <li>
                  <Link href="/careers" prefetch={false}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" prefetch={false}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
            <div className={styles.coloumn}>
              <div className={styles.box}>
              <div className={styles.websubscribe}>
                <div className={styles.subscribediv}>
                <div className={styles.title}>
                  <input
                    type="text"
                    placeholder="Subscribe to newsletter"
                    className={styles.subscribebox}
                  />
                </div>
                <button>Subscribe</button>
                </div>
                </div>
                <div style={{ fontSize: 22, fontWeight: 500 }}>
                  <Link href="/contact" prefetch={false}>
                    Contact Us
                  </Link>
                </div>
                <ul className={styles.contactList}>
                  <li>
                   
                    <div className={styles.add} style={{ flex: 1 }}>
                      {" "}
                      Level 14, Al Khatem Tower,
                      <br />
                      {/* Abu Dhabi Global Market (ADGM), */}
                      {/* <br /> */}
                      Al Maryah Island
                      <br />
                      Abu Dhabi, UAE
                    </div>
                  </li>
                  <li>
                   

                    <div className={styles.add} style={{ flex: 1 }}>
                      Level 5, Al Neyadi Tower,
                      <br />
                      Sheikh Rashid Bin Saeed Road
                      <br />
                      Abu Dhabi, UAE
                    </div>
                  </li>


                  <li className={styles.colorY}>
                    {/* <div className={styles.iconA}>
                      <Image
                        src="/images/Phone.svg"
                        alt=""
                        width="30"
                        height="30"
                      />
                    </div> */}
                    <div className={styles.add}>
                      <Link href="tel: +97123093344">+971 23093344</Link>
                    </div>
                  </li>
                  <li className={styles.colorY}>
                    {/* <div className={styles.iconA}>
                      <Image
                        src="/images/Email.svg"
                        alt=""
                        width="30"
                        height="30"
                      />
                    </div> */}
                    <div className={styles.add}>
                      {" "}
                      <Link href="mailto:info@ms-ca.com">info@ms-ca.com</Link>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.follow_wrapper} >
                <div className={styles.follow} style={{ marginBottom: 30 }}>
                  Follow Us On
                </div>
                <div className={styles.social}>
                <div className={styles.icon}>
                    <Link
                      href="https://www.linkedin.com/company/msgroupuae"
                      prefetch={false}
                    >
                      <a target="_blank" style={{ marginTop: "8px" }}>
                        <Image
                          src="/images/ln.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className={styles.icon}>
                    <Link
                      href="https://www.facebook.com/MSGroupUAE"
                      prefetch={false}
                    >
                      <a target="_blank" style={{ marginTop: "8px" }}>
                        <Image
                          src="/images/fbnew.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className={styles.icon}>
                    <Link
                      href="https://twitter.com/MSGroupUAE"
                      prefetch={false}
                    >
                      <a target="_blank" style={{ marginTop: "9px" }}>
                        <Image
                          src="/images/twitternew.svg"
                          alt=""
                          width={17}
                          height={17}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className={styles.icon}>
                    <Link
                      href="https://www.instagram.com/msgroupuae/"
                      prefetch={false}
                    >
                      <a target="_blank" style={{ marginTop: "8px" }}>
                        <Image
                          src="/images/instanew.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </a>
                    </Link>
                  </div>
                  
                 
                 
                  <div className={styles.icon}>
                    <Link
                      href="https://www.youtube.com/@MSGroupUAE"
                      prefetch={false}
                    >
                      <a target="_blank" style={{ marginTop: "8px" }}>
                        <Image
                          src="/images/utube.svg"
                          alt=""
                          width={19}
                          height={19}
                        />
                      </a>
                    </Link>
                  </div>
                 
                </div>
              </div>
            </div>
            {/* </Container> */}
          </div>
        </Container>
       
        {/* <div
          className={styles.box + " " + styles.mobOnly + " " + styles.addBox}
          style={{ border: "none", padding: "30px" }}
        > */}
          {/* <div className={styles.contact}>Contact us..</div>
          <ul className={styles.contactList}>
            <div className={styles.border}>
              <li>
                <div className={styles.iconA} style={{ width: 30 }}>
                  <Image
                    src="/images/Location.svg"
                    alt=""
                    width="30"
                    height="30"
                  />
                </div>

                <div className={styles.add} style={{ flex: 1 }}>
                  Levl 14, Al Khatem Tower,
                  <br />
                  Abu Dhabi Global Market (ADGM),
                  <br />
                  Al Maryah Island
                  <br />
                  Abu Dhabi, UAE
                </div>
              </li>

              <li>
                <div className={styles.iconA} style={{ width: 30 }}>
                  <Image
                    src="/images/Location.svg"
                    alt=""
                    width="30"
                    height="30"
                  />
                </div>

                <div className={styles.add} style={{ flex: 1 }}>
                  Al Neyadi Tower,
                  <br />
                  Sheikh Rashid Bin Saeed Road
                  <br />
                  Abu Dhabi, UAE
                </div>
              </li>

              {
              

                <li>
                  <div className={styles.iconA} style={{ width: 30 }}>
                    <Image
                      src="/images/Location.svg"
                      alt=""
                      width="30"
                      height="30"
                    />
                  </div>
                  <div className={styles.add} style={{ flex: 1 }}>
                   
                    Level 11,Fortune Tower, Cluster C <br />
                    Dubai Multi Commodities Center (DMCC)
                    <br />
                    Jumeirah Lake Towers
                    <br />
                    Dubai, UAE
                  </div>
                </li>
              }

              <li>
                <div className={styles.iconA}>
                  <Image
                    src="/images/Phone.svg"
                    alt=""
                    width="30"
                    height="30"
                  />
                </div>
                <div className={styles.add}>
                  <Link href="tel: +97123093344">+971 23093344</Link>
                </div>
              </li>

              <li className={styles.colorY}>
                <div className={styles.iconA}>
                  <Image
                    src="/images/Email.svg"
                    alt=""
                    width="30"
                    height="30"
                  />
                </div>
                <div className={styles.add}>
                  {" "}
                  <Link href="mailto:info@ms-ca.com">info@ms-ca.com</Link>
                </div>
              </li>
            </div>
          </ul> */}

          {/* <div style={{ marginTop: 60 }}>
            <div
              className={styles.follow}
              style={{ textAlign: "center", marginBottom: 30 }}
            >
              Follow Us
            </div>
            <div className={styles.social}>
              <div className={styles.icon}>
                <Link
                  href="https://www.facebook.com/MSGroupUAE"
                  prefetch={false}
                >
                  <a target="_blank" style={{ marginTop: "8px" }}>
                    <Image
                      src="/images/fbnew.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.icon}>
                <Link href="https://twitter.com/MSGroupUAE" prefetch={false}>
                  <a target="_blank" style={{ marginTop: "9px" }}>
                    <Image
                      src="/images/twitternew.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.icon}>
                <Link
                  href="https://www.linkedin.com/company/msgroupuae"
                  prefetch={false}
                >
                  <a target="_blank" style={{ marginTop: "8px" }}>
                    <Image src="/images/ln.svg" alt="" width={18} height={18} />
                  </a>
                </Link>
              </div>

              <div className={styles.icon}>
                <Link
                  href="https://www.youtube.com/@MSGroupUAE"
                  prefetch={false}
                >
                  <a target="_blank" style={{ marginTop: "8px" }}>
                    <Image
                      src="/images/utube.svg"
                      alt=""
                      width={19}
                      height={19}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.icon}>
                <Link
                  href="https://www.instagram.com/msgroupuae/"
                  prefetch={false}
                >
                  <a target="_blank" style={{ marginTop: "8px" }}>
                    <Image
                      src="/images/instanew.svg"
                      alt=""
                      width={19}
                      height={19}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div> */}
        {/* </div> */}
        <div className={styles.line}></div>
        <Container>

        <div className={styles.copy}>
          ©2020-24 MS Group. All rights reserved.
        </div>
        </Container>
      </div>
    </div>
    // {/* </Container> */}
  );
}

export default Footer;
