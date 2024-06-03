import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Collapsible from "./Collapsible";
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
            <div className={styles.accounting_service_container}>
                <div className={styles.white_heading + " " + styles.textCntr} >
                    List of Financial Advisory Services
                </div>
                <div className={styles.details18WhitePo300 + " " + styles.textCntr}>
                    We are so happy to disclose our list of financial advisory services that includes Tax Advisory, Corporate Finance, Strategic Review, Business Valuation, FD (Financial Director) on Demand and Feasibility Report & Business Plan.
                </div>


                <div className={styles.onlineBookingService_sub} >
                    <div className={styles.columns} data-aos="fade-right">
                        <Collapsible open={false} arrow={true} title={"1. Tax Advisory"} style={{ height: "100px" }} >
                            <div style={{ padding: "20px 30px", fontSize: "16px", color: "white", fontWeight: 300 }}>
                                <div style={{ marginBottom: 20 }}>
                                    Surprises in taxes and losses therefrom, are the least welcomed in any business!
                                    </div>
                                    <div style={{ marginBottom: 20 }}>
                                        Taxes comes into play in almost every facet of the business. Tax structuring is hence a key element of corporate business strategy when trying to achieve full tax compliance and reduce risks.
                                    </div>
                                    <div >
                                        By understanding your business from discussing with us your envisaged and undertaken transactions or deals, we can help you identify the relevant tax implications from the UAE VAT law perspective and recommend ways to mitigate the relevant and prospective tax risks.
                                        Our areas of expertise include VAT registration, VAT advisory & Compliance Support, VAT return filing & Submission, VAT health check, VAT training and Tourist Refund Scheme.
                                    </div>
                                </div>
                        </Collapsible>
                        <div className={styles.mobOnly}>
                            <Collapsible open={false} arrow={true} title={"2. Strategic Review"} style={{ height: "100px" }}  >
                                <div style={{ padding: 20, fontSize: "16px", color: "white", fontWeight: 300 }}>
                                    We identify that, sometimes all you require is a dive into a new value-creating opportunities within your business. The strategic review process is not just targeting your improved performance and new growth opportunities; improved alignment between employees, senior management teams and other key stakeholders are few among many things you can look forward to, for driving a high performance culture and grabbing an absolute clarity on the future direction of your business.
                                </div>
                            </Collapsible>
                        </div>

                        <div className={styles.mobOnly}>
                            <Collapsible open={false} arrow={true} title={"3. Business Valuation"} style={{ height: "100px" }}  >
                                <div style={{ padding: 20, fontSize: "16px", color: "white", fontWeight: 300 }}>
                                    Our financial analysts will walk you through the valuation process to identify the fair market value of your business in situations including business reorganizations, shareholder disputes, employee stock or share option plans, mergers and acquisitions, and expropriations. We believe, Valuations are a central basis of proper decision-making for organizations, both in the present and in the future. Even though it is not possible to predict the future, for businesses to survive, they need to prepare for uncertainty.
                                </div>
                            </Collapsible>
                        </div>

                        <Collapsible open={false} arrow={true} title={<>4. FD (Financial Director) on Demand</>} style={{ height: "100px" }} >
                            <div style={{ padding: 20, fontSize: "16px", color: "white", fontWeight: 300 }}>
                                <div style={{marginBottom:10}}>
                                    Our FD on Demand service offers you all the experience and expertise of a full-time FD, but at a fraction of the cost. Good decisions require timely, relevant, and accurate information. We will provide your routine reports to your timetable which not only focus on the standard business drivers and KPIs but are adapted to reflect the uniqueness of your business. As a part of your senior management team, essential ad hoc projects bring on board a professional who hits the ground running.
                                </div>
                                <div>
                                    Business Planning, Hiring, Training & Supervision, UAE Company Formations, Statutory Reporting & Compliance many more; on your demand.
                                </div>
                            </div>
                        </Collapsible>

                    </div>
                    <div className={styles.columns} data-aos="fade-left">
                        <div className={styles.webOnly}>
                            <Collapsible open={false} arrow={true} title={"2. Strategic Review"} style={{ height: "100px" }}  >
                                <div style={{ padding: 20, fontSize: "16px", color: "white", fontWeight: 300 }}>
                                    We identify that, sometimes all you require is a dive into a new value-creating opportunities within your business. The strategic review process is not just targeting your improved performance and new growth opportunities; improved alignment between employees, senior management teams and other key stakeholders are few among many things you can look forward to, for driving a high performance culture and grabbing an absolute clarity on the future direction of your business.
                                </div>
                            </Collapsible>
                        </div>
                        <div className={styles.webOnly}>
                            <Collapsible open={false} arrow={true} title={"3. Business Valuation"} style={{ height: "100px" }}  >
                                <div style={{ padding: 20, fontSize: "16px", color: "white", fontWeight: 300 }}>
                                    Our financial analysts will walk you through the valuation process to identify the fair market value of your business in situations including business reorganizations, shareholder disputes, employee stock or share option plans, mergers and acquisitions, and expropriations. We believe, Valuations are a central basis of proper decision-making for organizations, both in the present and in the future. Even though it is not possible to predict the future, for businesses to survive, they need to prepare for uncertainty.
                                </div>
                            </Collapsible>
                        </div>
                        <Collapsible open={false} arrow={true} title={"5. Feasibility Report & Business Plan"} style={{ height: "100px" }}  >
                            <div style={{ padding: 20, fontSize: "16px", color: "white", fontWeight: 300 }}>
                                <div style={{marginBottom:10}}>
                                    A new venture in mind but, is not sure of the outcome?
                                </div>
                                <div>
                                    Workability and profitability of a business venture through a feasibility study – Leave that on us! Before investing your hard-earned money in a new business venture, a feasibility study which is filled with calculations, analysis and estimated projections is essential to know if the business venture is worth the time, effort, and resources. Once the feasibility report is finalized, a business plan shall be ready that is made up of mostly tactics and strategies to be implemented in order to grow the business.
                                </div>
                            </div>
                        </Collapsible>

                    </div>
                </div>

                <div className={styles.details24W300 + " " + styles.textCntrMob} style={{ marginBottom: 30, marginTop: 30 }}>
                    Combined, these services will bring you strategic guidance, management information, tax planning, , acquisitions, cash flow forecasts and so much more.
                </div>
                <div className={styles.details24W300 + " " + styles.textCntrMob} style={{ marginBottom: 30 }}>
                    As a financial advisory consulting firm, we can take care of your concerns, ensuring that all possible tax implications have been considered before going ahead with an investment and advising you of the latest relevant changes to legislation or the launches of new investments that offer long-term gains, as well as tax efficiency.
                </div>
                <div className={styles.details24W300 + " " + styles.textCntrMob} style={{ marginBottom: 30 }}>
                    One benefit, more so than any other, that we can provide you: the time for relaxation. Having found the right financial advisor, you can probably relax, safe in the knowledge that a team of professionals are taking care of a wide range of challenges and questions that you would otherwise have to deal with and be answerable to.
                </div>
                <div className={styles.details24W300 + " " + styles.textCntrMob} style={{ marginBottom: 30 }}>
                    You think of the next big leap in your business, and let us keep that close watch on the market.
                </div>
                <div className={styles.headingW24500 + " " + styles.textCntrMob} >
                    Now, it is on you to decide your advisory partner!
                </div>

            </div>
        </Container>
    )
}

export default OnlineBookingService