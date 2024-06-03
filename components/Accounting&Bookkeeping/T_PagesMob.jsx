import React from 'react'
import styles from "./Transaction.module.css"
import cstyles from "./Styles.module.css"
import Collapsible from "./T_Collapsible";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/router";

import LetsTalk from './TAS_Lets_talk'
import LetsTalk2 from './TAS_Lets_talk2'
function T_PagesMob() {
    const router = useRouter();
    return (
        <div className={styles.mobContainer}>
            <h2>Transaction Advisory Services</h2>
            <Collapsible open={false} arrow={true} title={
                <div className={styles.TA_menuList}>
                    {router.pathname == "/transaction_advisory_services_overview" ?
                        <div className={styles.TA_IconY}>
                            <Image src="/images/Overview.svg" alt="" width={30} height={30} />
                        </div> :
                        <div className={styles.TA_IconW}>
                            <Image src="/images/OverviewW.svg" alt="" width={30} height={30} />
                        </div>
                    }
                    <div style={{ marginLeft: 15 }} className={router.pathname == "/transaction_advisory_services_overview" ? styles.TListY : styles.TList}>
                        Overview</div>
                </div>
            } width="14%" marginTop={35} style={{
                backgroundColor: "#192B3A", padding: 15, borderTopRightRadius: "15px",
                borderBottomLeftRadius: "15px"
            }}>
                <div className={styles.overviewContainerRight}>

                    <div className={cstyles.black_heading2}>
                        Overview
                    </div>
                    <div className={cstyles.details24400Open} style={{ marginTop: 20 }}>
                        Evolution of a business is the only constant. Business strategies should adapt to the dynamic economic landscape. Companies diversify, divest, grow organically and inorganically or bring in additional investors etc. These are typically a long-drawn process which require substantial time from the senior management and finance team of the company.
                    </div>
                    <div className={cstyles.details24400Open} style={{ marginTop: 20 }}>
                        Having an experienced transaction advisor by your side helps you to understand the challenges and risks associated with transactions and how to mitigate or overcome such risks
                    </div>
                    <div className={cstyles.details24400Open} style={{ marginTop: 20 }}>
                        At KPI, we provide our clients with the information they require to make an informed decision. Our team of experienced professionals have executed multiple transactions over the years and thus bring invaluable experience to the table
                    </div>
                    <div className={cstyles.black36_heading2} style={{ marginTop: 20 }}>
                        KPI can assist you with
                    </div>
                    <div style={{ marginTop: 40 }}>
                        <LetsTalk />
                    </div>


                </div>
            </Collapsible>

            <Collapsible open={false} arrow={true} title={
                <div className={styles.TA_menuList}>
                    {router.pathname == "/transaction_advisory_services_m_and_a_advisory" ?
                        <div className={styles.TA_IconY}>
                            <Image src="/images/AdministratorY.svg" alt="" width={30} height={30} />
                        </div> :
                        <div className={styles.TA_Icon}>
                            <Image src="/images/Administrator.svg" alt="" width={30} height={30} />
                        </div>
                    }
                    <div style={{ marginLeft: 15 }} className={router.pathname == "/transaction_advisory_services_m_and_a_advisory" ? styles.TListY : styles.TList}>M & A Advisory</div>
                </div>
            } width="14%" marginTop={35} style={{
                backgroundColor: "#192B3A", padding: 15, borderTopRightRadius: "15px",
                borderBottomLeftRadius: "15px"
            }}>
                <div className={styles.overviewContainerRight}>

                    <div className={cstyles.black_heading2}>
                        Merger & Acquisition Advisory
                    </div>
                    <div className={cstyles.details24400Open} style={{ marginTop: 20 }}>
                        A company can attain faster growth inorganically. But it may not always be the case. Each deal or transaction has its own inherent complexities and risks, be it domestic or cross-border. One could possibly face cash flow issues, valuation challenges, tax issues, litigations.
                    </div>
                    <div className={cstyles.details32500} style={{ marginTop: 20 }}>
                        How is the management sure that it will deliver value to its shareholders?
                    </div>
                    <div className={cstyles.details24400Open} style={{ marginTop: 20 }}>
                        It is important to understand and take into consideration the market dynamics, and conduct a thorough due diligence across finance, commercial, tax, human resources, systems, legal and compliance. This will provide a wholistic view of the challenges and risks associated with the transaction. The next critical stage is the structuring of the transaction.
                    </div>
                    <div className={cstyles.details24400Open} style={{ marginTop: 20 }}>
                        KPI’s knowledgeable team can provide you with end-to-end advisory and possible solutions. Our team of experts will work together with your team and help deliver the desired results.
                    </div>
                    <div style={{ marginTop: 40 }}>
                        <LetsTalk />
                    </div>


                </div>

            </Collapsible>

            <Collapsible open={false} arrow={true} title={
                <div className={styles.TA_menuList}>
                    {router.pathname == "/transaction_advisory_services_financial_Due_Diligence" ?
                        <div className={styles.TA_IconY}>
                            <Image src="/images/DocumentY.svg" alt="" width={30} height={30} />
                        </div>
                        :
                        <div className={styles.TA_IconW}>
                            <Image src="/images/Document.svg" alt="" width={30} height={30} />
                        </div>
                    }
                    <div style={{ marginLeft: 15 }} className={router.pathname == "/transaction_advisory_services_financial_Due_Diligence" ? styles.TListY : styles.TList}>Financial Due Diligence</div>
                </div>
            } width="14%" marginTop={35} style={{
                backgroundColor: "#192B3A", padding: 15, borderTopRightRadius: "15px",
                borderBottomLeftRadius: "15px"
            }}>
                <div className={styles.overviewContainerRight}>

                    <div className={cstyles.black_heading2}>
                        Due Diligence
                    </div>
                    <div className={cstyles.details24400Open} style={{ marginTop: 20 }}>
                        Financial due diligence is a process of verification and investigation of financial records for a potential deal to confirm all relevant facts and financial information, and to verify anything else that was brought up during an M&A transaction. Financial due diligence is completed before a transaction closes to provide the buyer with an assurance of what they’re getting. Issues and concerns identified during the financial due diligence exercise has varying impact on the valuation of the transaction.
                    </div>
                    <div className={cstyles.details32500} style={{ marginTop: 20 }}>
                        Buy-side Due Diligence
                    </div>
                    <div className={cstyles.details24400Open} style={{ marginTop: 20 }}>
                        We assist and advise the buyer in the transaction by undertaking and identifying key value drivers, risks and opportunities associated with the transaction. We identify and report any potential issues that the target business might be facing.
                    </div>
                    <div className={cstyles.details24600} style={{ marginTop: 20 }}>
                        To help you achieve the transaction objective, KPI can help you with
                    </div>
                    <ul>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>Enhancing your understanding of the targets business</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>Identify and understand critical success factors</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>Identify potential synergies going forward and weaknesses/ threats that should be resolved
                            </span>
                        </li>
                    </ul>

                    <div className={cstyles.details32500} style={{ marginTop: 20 }}>
                        Sell-side Due Diligence
                    </div>

                    <div className={cstyles.details24400Open} style={{ marginTop: 20 }}>
                        Also known as Vendor due diligence, it is usually undertaken by the seller highlighting the financial strength of the business or division put up for sale. A third-party vendor due diligence report detailing in-depth financial health of the seller provides a greater degree of assurance to the buyer.
                    </div>

                    <div className={styles.details24600} style={{ marginTop: 20 }}>
                        To help you achieve the transaction objective, KPI can help you with
                    </div>
                    <ul>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>Providing greater control over the entire sale process thereby helping obtain deserving value for the business</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>Providing the buyer with higher level of comfort over the nature of business and the characteristics of its cash flow.</span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>Vendor due diligence report aids buyer and thereby reducing the buyers time on significant access to due diligence
                            </span>
                        </li>
                        <li>
                            <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                            <span className={styles.key + " " + cstyles.keyWidth}>Identification of potential critical areas that could be fixed before the potential sale
                            </span>
                        </li>

                    </ul>

                    <div style={{ marginTop: 40 }}>
                        <LetsTalk2 />
                    </div>


                </div>
            </Collapsible>

            <Collapsible open={false} arrow={true} title={
                <div className={styles.TA_menuList}>
                    {router.pathname == "/transaction_advisory_services_valuation" ?
                        <div className={styles.TA_IconY}>
                            <Image src="/images/ValidationY.svg" alt="" width="40" height="40" />
                        </div>
                        :
                        <div className={styles.TA_IconW}>
                            <Image src="/images/Validation.svg" alt="" width="40" height="40" />
                        </div>
                    }
                    <div style={{ marginLeft: 15 }} className={router.pathname == "/transaction_advisory_services_valuation" ? styles.TListY : styles.TList}>Valuation</div>
                </div>
            } width="14%" marginTop={35} style={{
                backgroundColor: "#192B3A", padding: 15, borderTopRightRadius: "15px",
                borderBottomLeftRadius: "15px"
            }}>
                <div className={styles.overviewContainerRight}>

                    <div className={cstyles.black_heading2}>
                        Valuation is an art of putting the science to use.
                    </div>
                    <div className={cstyles.details24400Open} style={{ marginTop: 20 }}>
                        Business valuation is a process of determining the economic value of a whole business or a division of the company. Valuation of business is typically undertaken to understand the economic value of the business, for selling or buying stake in the company, taxation purpose and at times even for divorce proceedings. There are various methods being adopted by the valuators, commonly among them are the Discounted Cash Flow and Price Earnings multiples and Net Asset Value. The method of valuation adopted largely depends on the purpose of valuation is conducted for.
                    </div>

                    <div className={cstyles.details24400Open} style={{ marginTop: 20 }}>
                        Valuation is not only about the company data, the future of the business or industry it deals in, it also considers the market dynamics, government policies with respect to the business and industry. In a transaction, valuation is the basis for negotiations.
                    </div>
                    <div className={cstyles.details24400Open} style={{ marginTop: 20 }}>
                        At KPI, we provide our clients with an independent advice on valuation concerning the transaction. Our valuation team, having extensive experience across industries, brings technical expertise with a pragmatic outlook to deliver the desired output.
                    </div>
                    <div style={{ marginTop: 40 }}>
                        <LetsTalk2 />
                    </div>


                </div>

            </Collapsible>
        </div>
    )
}

export default T_PagesMob