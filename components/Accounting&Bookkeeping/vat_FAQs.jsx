import React, { useEffect } from 'react'
import styles from "./RA_Services.module.css"

import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';
function RA_IA_service() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
            <div className={styles.containerCT} data-aos="fade-up">
                <h3 className={styles.heading} style={{ textAlign: "center" }}>
                    VAT Consultancy Services
                </h3>
                <div className={styles.serviceWrap}>
                    <div className={styles.box}>
                        <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
                            </div>
                            <div className={styles.num}>01</div>
                        </div>
                        <div className={styles.title}>
                            VAT Registration
                        </div>
                        <div className={styles.abDetails}>
                            <div>
                                VAT Registration in UAE is mandatory for all those businesses that meet the mandatory turnover threshold limit, i.e., AED 375,000/- per annum. This includes the sale of goods or services in the ordinary course of business by an entity. Voluntary registration can be done if the taxable supply exceeds AED 187,500/- per year..
                            </div>
                            <div>
                                We at MSATC are within your easy reach to get complete assistance with the registration requirements.
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
                            </div>
                            <div className={styles.num}>02</div>
                        </div>
                        <div className={styles.title}>
                            VAT Return Filing
                        </div>
                        <div className={styles.abDetails}>
                            <div>
                                After registering with FTA, businesses are required to file periodic statutory declarations. VAT Returns – summarizing all the taxable transactions that the business has made in that specific period, must be filed as per the tax periods stipulated by the FTA for each entity registered with the FTA. Any errors in filing statutory returns not only attracts fines and penalties but may also lead to loss of reputation.
                            </div>
                            <div>
                                At MSATC, with the procedures and systems to manage tax compliance effectively in place. Our team of Tax experts reviews the tax computations prior to the filing of VAT returns and ensure that an entity’s tax obligations comply with the relevant laws and regulations, and there are no omissions or errors.
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
                            </div>
                            <div className={styles.num}>03</div>
                        </div>
                        <div className={styles.title}>
                            VAT Advisory & Compliance  Support
                        </div>
                        <div className={styles.abDetails}>
                            <div>
                                Chris Rock, the American comedian, actor, writer, producer, and director – made a statement that goes – “You don’t pay taxes–they take taxes”.
                            </div>
                            <div>And we, MSians say, “Let them take taxes, but be a prudent payer”.</div>
                            <div>At MSATC, our technical experts apply their deep insights gained from managing VAT in various jurisdictions to ensure that our clients remain ahead of requirements within the UAE.</div>
                            <div>
                                The FTA carries out inspections or tax audits at varying intervals. A well-timed VAT Health-check can ensure that there are no compliance gaps and therefore avoid penalties of tax, interest, and fines.
                            </div>
                        </div>
                    </div>



                    <div className={styles.box}>
                        <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
                            </div>
                            <div className={styles.num}>04</div>
                        </div>
                        <div className={styles.title}>
                            VAT Training
                        </div>
                        <div className={styles.abDetails}>
                            Our VAT training provides a comprehensive understanding of the VAT system, covering the fundamental principles of VAT, regulation and administration and guidance on the interpretation and consistent application of the VAT legislation within UAE. Our training sessions are designed to equip you and your workforce with the knowledge, skill and confidence to work with VAT in UAE.
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
                            </div>
                            <div className={styles.num}>05</div>
                        </div>
                        <div className={styles.title}>
                            Tourist Refund Schemes
                        </div>
                        <div className={styles.abDetails}>
                            <div>
                                The FTA has introduced VAT Free shopping for Tourists visiting UAE. Certain VAT tax invoices issued to tourists for the purchase of goods by approved Retailers will be eligible for the refund.
                            </div>
                            <div>
                                Recovery of payment will be done through a fully integrated electronic system which connects retailers registered in the ‘Tax Refund for Tourists Scheme‘ with all ports of entry and exit from the UAE.
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
                            </div>
                            <div className={styles.num}>06</div>
                        </div>
                        <div className={styles.title}>
                            Tax De-registration
                        </div>
                        <div className={styles.abDetails}>
                            In the event a tax registrant applied for Voluntary registration and after 12 months if their turnover did not exceed AED 187,500, or if the business stops making taxable supplies then they must apply for VAT Deregistration. This process is a part of VAT Online Services. The Registrant must apply to the Authority for deregistration in accordance with the cases mentioned above, within (20) business days of the occurrence of any of them. If the registered person does not deregister within the prescribed period as per the law, it will attract penalty from the Authority.
                        </div>
                    </div>
                </div>

                <div className={styles.subContentsVAT} >
                    <div>
                        What are the intricacies you think you have to be concerned about when thinking of VAT? With MS you do not have to carry the burden of procedures – We Assure!
                    </div>
                    <div>
                        On receiving your requirements, our VAT experts analyze your business, scrutinize the application, and extend our advisory with regard to, that specific domain you have to be in compliance with. Our committed approach saves your time and your money.
                    </div>
                    <div >
                        Winston Churchill, once said “There is no such thing as a good tax”
                        But MSians does truly believe in good methodologies, right actions and most of all, timely updation!
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default RA_IA_service