import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link'
import styles from "./Services.module.css"
import Image from 'next/image'
// import TaxBanner from "./TaxBanner"
import TaxBanner from "./BannerTwo copy"
import Container from '../Common/Container';
function Services() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false
    })
  }, []);

  return (
    <Container>
      <div className={styles.container} data-aos="fade-up">
        <div className={styles.heading}>
          <h3>Our Services</h3>
          <p className={styles.detail}>Solutions To Fit For Your Business And Time</p>
        </div>

        <div className={styles.content}>

          <div className={styles.box}>
            <div className={styles.title} style={{ cursor: "pointer" }}>
              <Link href="/advisory" prefetch={false}>
                <a>
                  Advisory
                </a>
              </Link>
            </div>
            <div className={styles.detail} >
            Worry not in the time of a challenge. Taking the challenges like a goodness and overcoming them without fear is a solid act of bravery. Our advisors could bring diverse expertise dependent on your business needs

            </div>
            <ul>
              <li>
                <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/transaction-advisory" prefetch={false}>
                    Transaction Advisory
                  </Link>
                </span>

              </li>

              <li>
                <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}><Link href="/mergers-and-acquisitions" prefetch={false}>Mergers & Acquistions</Link></span>
              </li>

              <li>
                <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}><Link href="/risk-advisory" prefetch={false}>Risk Advisory</Link></span>

              </li>

              <li>
                <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}><Link href="/management-advisory" prefetch={false}>Management Advisory</Link></span>
              </li>
            </ul>

            

          </div>

          <div className={styles.box}>
            <div className={styles.title}>
              <Link href="/technology" prefetch={false}>
                Technology
              </Link>
            </div>
            <div className={styles.detail} >
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. */}
              Technology developing quickly, giving businesses a steady stream of chances to get better, more effective, leaner, innovative, and successful.
            </div>
            <ul>
              <li>
                <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/digital-transformation" prefetch={false}>
                    Digital Transformation
                  </Link>
                </span>
              </li>
              <li>
                <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/robotic-process-automation" prefetch={false}>
                    Robotic Process Automation
                  </Link>
                </span></li>

              <li>
                <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key + " " + styles.esrWidth}>
                  <Link href="/erp-advisory" prefetch={false}>
                    <a>
                      ERP Advisory
                    </a>
                  </Link>
                </span>
              </li>

              <li>
                <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key} style={{ width: "90%" }}>
                  <Link href="/artificial-intelligence" prefetch={false}>
                    Artificial Intelligence
                  </Link>
                </span>
              </li>

              <li>
                <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/data-analysis" prefetch={false}>
                    Data Analysis
                  </Link>
                </span>
              </li>

              <li>
                <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/blockchain" prefetch={false}>
                    Blockchain
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.box}>
            <div className={styles.title}>
              <Link href="/taxation" prefetch={false}>
                Taxation
              </Link>
            </div>
            <div className={styles.detail} >
            An MS’ian Approach to TAX; unique and unfindable elsewhere. We love minimizing our clients’ tax liabilities. 
            </div>
            <ul>
              <li>
                <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/vat-consultant">
                    VAT Services
                  </Link>
                </span>
              </li>
              <li>
                <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/corporate-tax">
                    Corporate Tax
                  </Link>
                </span></li>
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key + " " + styles.esrWidth}>
                  <Link href="/economic-substance-regulations">
                    <a>
                    Economic Substance<br/>
                    Regulations (ESR)
                    </a>
                  </Link>
                </span>
              </li>
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth} >
                  <Link href="/cbc-reporting">
                    CBCR
                  </Link>
                </span>
             
              </li>
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/us-expat-tax-consultant">
                    US Expat
                  </Link>
                </span>
              </li>
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="ultimate-beneficial-ownership">
                    UBO
                  </Link>
                </span>
               
              </li>
            </ul>
          </div>

          <div className={styles.box}>
            <div className={styles.title}>
            <Link href="/accounting_services">
                  Accounting
                </Link>
            </div>
            <div className={styles.detail} >
            You’re a business owner with lots of to do. We’re professional accountants with experience serving entrepreneurs. You run your business. We’ll do your bookkeeping.
            </div>
            <ul> 
                <li>
                  <div className={styles.wArrow}>
                    <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                  <div className={styles.yArrow}>
                    <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                  </div>
                  <span className={styles.key+" "+styles.keyWidth}><Link href="/payroll-services">Payroll Services</Link></span>

                </li>
                <li>
                  <div className={styles.wArrow}>
                    <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                  <div className={styles.yArrow}>
                    <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                  </div>
                  <span className={styles.key+" "+styles.keyWidth}><Link href="/audit">Audit Services</Link></span></li>
                  <li>
                  <div className={styles.wArrow}>
                    <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                  <div className={styles.yArrow}>
                    <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                  </div>
                  <span className={styles.key+" "+styles.keyWidth}><Link href="/accounting-bookkeeping">Accounting & Bookkeeping Services</Link></span>
                </li>
              </ul>
          </div>
          
          {/* <div1 className={styles.box}>
            <div className={styles.title}>
              <Link href="/#abu-dhabi-global-market-uae" prefetch={false}>
                Abu Dhabi Global Market
                (ADGM)
              </Link>
            </div>
            <div className={styles.detail} >
            ADGM offers a secure and efficient platform for companies & financial institutions to establish operations & fulfill their expansion ambitions.
            </div>
            <ul>
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/incorporation-advisory-and-assistance">
                    Incorporation Advisory & Assistance
                  </Link>
                </span>
              </li>
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/adgm-compliance-filings">
                    ADGM Compliance Filings
                  </Link>
                </span></li>
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key + " " + styles.esrWidth}>
                  <Link href="/FO-service">
                    FO Service
                  </Link>
                </span>
                
              </li>
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key} style={{ width: "90%" }}>
                  <Link href="/AML-compliance-and-outsourced-MLRO-services">
                    AML Compliance & Outsourced MLRO Services
                  </Link>
                </span>
              
              </li>
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/management-advisory-and-assistance">
                    Management Advisory & Assistance
                  </Link>
                </span>
             
              </li>
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/bank-opening-assistance">
                    <a>
                    Bank Account Opening Assistance
                    </a>
                   
                  </Link>
                </span>
              </li>
            </ul>

          </div1> */}

          <div className={styles.box}>
            <div className={styles.title}>
              <Link href="/dubai-multi-commodities-centre" prefetch={false}>
              Dubai Multi Commodities Centre (DMCC)
              </Link>
            </div>
            <div className={styles.detail} >
            MS group offers you an opportunity to access one of the most sought after freezone in the world where your business can thrive.
            </div>
            <ul>
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/dmcc-freezone-setup-services">
                  <a>DMCC <br/>Freezone Setup Services</a>
                  </Link>
                </span>
              </li>
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/dmcc-compliance-and-corporate-services">
                  DMCC Compliance & Corporate Services
                  </Link>
                </span></li>
       
         
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/management-advisory-and-assistance-dmcc">
                    Management Advisory & Assistance
                  </Link>
                </span>
             
              </li>
              <li>
              <div className={styles.wArrow}>
                  <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                <div className={styles.yArrow}>
                  <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                </div>
                <span className={styles.key+" "+styles.keyWidth}>
                  <Link href="/dmcc-business-bank-account-setup-assistance">
                    <a>
                    DMCC Business Bank Account Setup Assistance
                    </a>
                   
                  </Link>
                </span>
              </li>
            </ul>

          </div>

          <div className={styles.box}>
            <div className={styles.title}>
            <Link href="/masdar">
                  MASDAR
                </Link>
            </div>
            <div className={styles.detail}>
              Set up your business in Masdar City Free Zone, UAE. strategic location, favorable regulations, and a sustainable living environment for start-ups and companies.
            </div>
            <ul> 
                <li>
                  <div className={styles.wArrow}>
                    <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                  <div className={styles.yArrow}>
                    <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                  </div>
                  <span className={styles.key+" "+styles.keyWidth}><Link href="/masdar-incorporation-compliance-and-corporate-services">
                    <a>
                  MASDAR Incorporation Compliance<br/> and corporate services
                  </a></Link></span>

                </li>
                <li>
                  <div className={styles.wArrow}>
                    <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                  <div className={styles.yArrow}>
                    <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                  </div>
                  <span className={styles.key+" "+styles.keyWidth}>
                    <Link href="/masdar-management-advisory">Management Advisory </Link></span></li>
                  <li>
                  <div className={styles.wArrow}>
                    <Image src="/images/LarrowW.svg" alt="" width={12} height={22} /></div>
                  <div className={styles.yArrow}>
                    <Image src="/images/LarrowY.svg" alt="" width={12} height={22} />
                  </div>
                  <span className={styles.key+" "+styles.keyWidth}>
                    <Link href="/masdar-assistance-in-bank-account-opening">Assistance in Bank Account opening</Link></span>
                </li>
              </ul>
          </div>

          
        </div>

        <TaxBanner />

      </div>
    </Container>
  )
}

export default Services