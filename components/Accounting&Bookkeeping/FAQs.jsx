import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Collapsible from "./Collapsible";
import styles from "./Styles.module.css"
import Image from 'next/image'

import Container from '../Common/Container';
function OnlineBookingService() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
            <div >
                <div className={styles.black36_heading_audit + " " + styles.textCntr} >
                    FAQ’s
                </div>

                <div className={styles.onlineBookingService_sub} >
                    <div className={styles.columns} data-aos="fade-right">
                        <Collapsible open={false} arrow={true} title={"When will the Corporate Tax come into effect in UAE and what is the financial period for filing corporate tax? "}

                        >
                            <div>
                                <div style={{ marginBottom: 20 }}>
                                    The Corporate Tax will come into effect on or after 1st June 2023.
                                </div>
                                <div>
                                    For example, if a business has a financial year starting on 1st July 2023 and ending on 30th June 2024, they will be subject to corporate tax from 1st July 2023. Meanwhile if a business’s financial year starts from 1st January 2023 and ends on 31st December 2023, then the corporate tax will be effective from 1st January 2024.
                                </div>
                            </div>

                        </Collapsible>

                        <Collapsible open={false} arrow={true}
                            title={"What are the businesses that would have to pay corporate tax? What are the businesses that have exemptions if any?"}

                        >
                            <div>
                                Corporate Tax would apply to all “business and commercial activities” (defined as any activity that requires a license or permit to be carried out) carried out in UAE. Individuals performing business, commercial or professional activity under a license or permit are also subject to CT. The only business exempted are the ones involved in the extraction of natural resources which will remain subject to Emirate level corporate taxation.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"How to register and file Corporate Tax?"}>
                            <div>
                                All businesses of all tax slabs are required to register for Corporate Tax. More information on the process and requirements for registration is yet to be released and awaited. Businesses with income above Dhs. 375,000 will have to file CT once every financial year as per set compliance obligations that are yet to be specified. It is expected that it will be filed electronically similar to VAT and ESR. It is expected that tax would not have to be filed on emirate level for businesses with branches in different emirates, similar to VAT filing. No advance or provisional CT filing would be required.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true}
                            title={"Will corporate tax be applicable to non-resident entities as well?"}  >
                            <div>
                                Corporate tax or withholding tax will be applicable to a foreign or non-resident entity only if they are engaged in ongoing regular trade or business in the UAE. Such entities or individuals will not be subject to corporate tax if they only invest in or provide loans to businesses in UAE without being involved in conducting regular ongoing business.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Can a tax group be formed for CT?"}
                        >
                            <div>
                                Tax groups/fiscal units for CT can be formed by UAE group companies hence lowering administrative burden by allowing filing single CT return instead of returns for each entity. All entities in the group are considered as a single taxable person provided, they meet certain conditions that are yet to be specified. Further details on grouping conditions are expected and currently it is unclear if CT grouping has to be linked with VAT grouping.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true}
                            title={"If there are multiple companies under single ownership, can one company’s profit be used to set off loss of another?"}
                        >
                            <div>
                                Yes, a loss of one company in a group can be used to offset taxable income of another in a group given certain conditions that are yet to be specified are met.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Is the profit earned by subsidiary of an UAE owned company outside UAE taxable?"}
                        >
                            <div>
                                It is expected that the entity would be taxed based on its residency status as followed in international tax practice. Thus, if the company has permanent residency in UAE all income attributed to the permanent establishment irrespective of where it is earned would be subject to CT and tax credit would be available for taxes paid under another jurisdiction.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"What effect would corporate tax have on ESR?"}
                        >
                            <div>
                                It is expected that the entity would be taxed based on its residency status as followed in international tax practice. Thus, if the company has permanent residency in UAE all income attributed to the permanent establishment irrespective of where it is earned would be subject to CT and tax credit would be available for taxes paid under another jurisdiction.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"What are the CT implications of the Transfer Pricing Rules?"}
                        >
                            <div>
                                The transfer pricing rules and documentation requirements under CT regime will be aligned with OECD TP guidelines. The expected Transfer Pricing rules in the UAE will be applicable to intra-group transactions for entities subject to CT regime. It is advisable for MNCs with UAE entities to have updated Transfer Pricing policies before CT regime becomes effective.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"What would be the impact of corporate tax on the businesses in the UAE?"}
                        >
                            <div>
                                <div>
                                    The introduction of CT would involve implementation, training and compliance cost which would not be too high as the tax system is very simple in the UAE.  Since the rate announced by the government is highly competitive as compared to other countries, and double tax treaties are in place by the UAE government, the introduction of CT would not have any major impact on FDI.
                                </div>
                                <div>
                                    Moreover, Free Zones would keep providing invectives to businesses as per their respective laws, so businesses will keep enjoying the benefits of the tax. Dividend and capital gains are not subject to CT, so it would attract investors.
                                </div>
                                <div>
                                    CT would be another income source for the Government which can further help boost the economy. Moreover, it would reduce reliance on oil-generated money and lead to diversified sources of income which build a healthy and mature economy.
                                </div>
                                <div>
                                    CT would have a nominal impact on the corporate savings and FDI, which would create an adverse impact on the growth of the country in the short run, but in the long run, it would develop the confidence of the investors which would lead to growth. CT has been crafted to incentivize investment and keep transparency to meet global standards which would provide a stable society where businesses would contribute and add value for the growth of the economy.
                                </div>
                                <div>
                                    Practical Questions
                                </div>
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"What could be the penalties if not registered for Corporate Tax?"}
                        >
                            <div>
                                No compliance would result in penalties as in the case of all taxes, however specific penalty details are yet to be given.
                            </div>
                        </Collapsible>

                    </div>
                    <div className={styles.columns} data-aos="fade-left">
                        <Collapsible open={false} arrow={true}
                            title={"What is the rate of tax and the tax slabs?"} >
                            <div>
                                <div>
                                    The CT rates are:
                                </div>
                                <div className={styles.cigaList}>
                                    <ul>
                                        <li>
                                            <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                            <span className={styles.key}>0% for taxable income up to AED 375,000;</span>
                                        </li>
                                        <li>
                                            <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                                            <span className={styles.key}>9% for taxable income above AED 375,000; and</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    However, a different tax rate for large multinationals that meet specific criteria set with reference to ‘Pillar Two’ of the OECD Base Erosion and Profit Shifting project.  For example if a business’s taxable income is  Dhs. 500,000, the excess amount above Dhs.375,000 that is Dhs. 125,000 would be subject to corporate tax at 9%. Hence Dhs. 11,250 would be the corporate tax payable.
                                </div>
                            </div>

                        </Collapsible>
                        <Collapsible open={false} arrow={true}
                            title={"Does the corporate tax applicability differ for freezone entities and how?"}
                        >
                            <div>
                                Freezone entities are also subject to a corporate tax regime and are required to register and file Corporate Tax. Certain Freezone entities will continue to enjoy current tax incentives/tax- holidays as long as they comply with all regulatory requirements and do not conduct business with the mainland.
                            </div>
                        </Collapsible>
                        <Collapsible open={false} arrow={true} title={"How should taxable income be calculated and how to produce financial reports as proof of it being above or below taxable income? If the taxable income is below 375,000 is tax filing necessary?"}
                            style={{ height: "210px" }} >
                            <div>
                                <div>
                                    The taxable income will be calculated as the net profit after making certain changes as per the Corporate Tax Regulation. The net profit is the amount reported in the financial statements prepared according to international accounting standards.
                                </div>
                                <div style={{ marginTop: 10 }}>
                                    If a business has an income lower than Dhs. 375,000 an audited financial statement or VAT return submissions can be used to justifiy the revenue poistion of the business. However, this needs to be clarified in the legislation.   it is not clarified whether return is to be filed for the entities below taxable income of AED 375,000 but it is highly likely.
                                </div>
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true}
                            title={"What is the expected impact of Corporate Tax on businesses below the taxable income?"}
                        >
                            <div>
                                Though not a direct impact, these businesses would now have to maintain reliable and accurate financial records.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true}
                            title={"Can tax losses be used to offset taxable income? If so, what are the conditions?"}
                        >
                            <div>
                                Businesses can carry forward losses in a financial year from the time CT becomes effective to offset against taxable income in subsequent financial periods. Tax losses from one group company can be used to offset the taxable income of another group company given certain conditions which are yet to be specified are met.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Is there going to be any withholding tax?"}
                        >
                            <div>
                                From the information available so far, there will be no withholding tax on either domestic or cross border payments.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true}
                            title={"What is the expected tax rate for UAE entities that are part of large MNCs that are also subject to pillar two?"}
                        >
                            <div>
                                Pillar two rules are expected to apply to such entities in 2023 and it could be possible for them to be subject to both CT and Pillar two in 2024 and potentially be effectively taxed 15% together in line with Global Minimum Standard.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"What are the tax applicability conditions for individuals?"}
                        >
                            <div>
                                Individuals will only be subject to CT if they are conducting business using a commercial license or permit (Including licenses for providing professional services/freelance licenses). Employment incomes, personal real estate investments, returns on equity holdings and returns from bank deposits or saving schemes are not subject to Corporate Tax.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"How to prepare for corporate tax before it comes into effect? "}
                        >
                            <div>
                                Getting your financial records in good shape would be the top priority, especially to calculate and produce statements of taxable income. Businesses should assess the gap in the working capital and bridge the gap. While preparing the budget for the respective period, companies should consider the impact of CT on the business, and they can plan the actions accordingly on receiving further details.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Even if my business makes less than 375,000 how will Corporate Tax coming into effect affect my business?  "}
                        >
                            <div>
                                Even SME businesses with income lower than Dhs .375,000  will have to maintain proper financial records /audit financial statements to calculate taxable income and meet various conditions as per the CT regime, avoiding penalization.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"When can specific details on Corporate Tax be expected?"}
                        >
                            <div>
                                Federal corporate tax law is expected to be issued in due course along with executive regulations (CT Law). However a timeline has not been announced yet.
                            </div>
                        </Collapsible>
                    </div>
                </div>
                <div  data-aos="fade-up">
                    <div className={styles.heading30B} style={{ marginTop: 30 }}>
                        Final Note :
                    </div>
                    <div style={{ marginTop: 20 }} className={styles.details24400CT}>
                        Introducing corporate tax in the UAE will undoubtedly have an impact on business operations, structures, and future mergers and acquisitions activities in the UAE. We encourage businesses to assess their existing structures and operations in an effort to apply the most efficient business structures and models in light of the CT Law provisions once issued and in effect.
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default OnlineBookingService