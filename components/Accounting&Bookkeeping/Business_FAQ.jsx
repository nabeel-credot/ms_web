import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Collapsible from "./Collapsible";
import styles from "./Styles.module.css"
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
        <div className={styles.onlineBookingService_container}>
            <div className={styles.black36_heading + " " + styles.textCntr} >
                Are you facing any of these challenges?
            </div>

            <div className={styles.onlineBookingService_sub} >
                <div className={styles.columns}  data-aos="fade-right">
                    <Collapsible open={false} arrow={true} title={"1. Stalled growth/difficulty scaling up"}  >
                        <div style={{ padding: 30 }}>
                            <div style={{ marginBottom: 10 }}>
                                Business conditions change continually, and if not keeping up with the market, you run the risk of making business decisions based on out-of-date information, which can lead to business failure.
                            </div>
                            <div>
                                With MSATC, you can benefit from our expertise as we invest time, money, and resources to keep our team up to date with current market trends, and in anticipating the future trends.
                            </div>
                        </div>
                    </Collapsible>

                    <div className={styles.mobOnly}>
                        <Collapsible open={false} arrow={true} title={"2. Cash flow & squeezed profit margins"} >
                            <div style={{ padding: 30 }}>
                            <div style={{ marginBottom: 10 }}>
                            Good cash flow control is vital for any business. For a growing business, it is crucial – cash constraints can be the most significant limiting factor to growth, and overtrading can prove fatal. With MSATC advisory services, you are assured of having control on every element of working capital, exercise reasonable stock control, and effective supplier management to maximize cash flow.
                            </div>
                            <div>
                            We identify that sometimes all you require is a dive into new value-creating opportunities within your business. The strategic review process is not just targeting your improved performance and new growth opportunities; improved alignment between employees, senior management teams, and other key stakeholders are few among many things you can look forward to, for driving a high-performance culture and grabbing an absolute clarity on the future direction of your business.
                            </div>
                            </div>
                        </Collapsible>
                    </div>

                    <Collapsible open={false} arrow={true} title={"3. Developing and executing a marketing plan"} >
                        <div style={{ padding: 30 }}>
                        A marketing plan is just as vital as a business plan. Our team will design a strategic marketing plan which includes number, facts, and objectives that will enable you to focus on winning and keeping customers.
                        </div>
                    </Collapsible>

                    <div className={styles.mobOnly}>
                        <Collapsible open={false} arrow={true} title={"4. Managers who do not work effectively together"} >
                            <div style={{ padding: 30 }}>
                            Teams that work well together can significantly increase workplace productivity and creates a more cohesive company culture. Our advisors will assist you in developing, organizing, problem-solving, and enlighten your human resource to their maximum potential.
                            </div>
                        </Collapsible>
                    </div>

                    <Collapsible open={false} arrow={true} title={"5. Financing growth"} >
                        <div style={{ padding: 30 }}>
                        Making the best use of your finances should be a key element in business planning and assessing new opportunities. Planning helps you anticipate your financing needs and arrange suitable funding. We will help you in identifying and developing an optimal financial solution for your company to achieve its business expansion, keeping cost-effectiveness a significant rule in the game.
                        </div>
                    </Collapsible>

                    <div className={styles.mobOnly}>
                    <Collapsible open={false} arrow={true} title={"6. Lack of technology to improve business"} >
                        <div style={{ padding: 30 }}>
                        As technologies change practically at the speed of light, companies are to choose between – the need to innovate or be left behind. Technological infrastructure affects the culture, efficiency, and relationships of a business. It also affects the security of confidential information and trade advantages. Our consultants will guide you to newer and better tech solutions aimed at increasing productivity, efficiency, and also new opportunities.
                        </div>
                    </Collapsible>
                    </div>

                    <Collapsible open={false} arrow={true} title={"7. Dealing with daily emergencies; spending all your time working “in” your business and not “on” your business"}  >
                        <div style={{ padding: 30 }}>
                        Our experts will help improve the day-to-day operations of the company so that you can focus on the big picture.
                        </div>
                    </Collapsible>

                    <div className={styles.mobOnly}>
                    <Collapsible open={false} arrow={true} title={"8. Succession planning and reaching long-term goals"} >
                        <div style={{ padding: 30 }}>
                        Succession planning is a strategy for identifying and developing future leaders at your company — not just at the top but for significant roles at all levels. Succession planning is a long process that demands extensive preparation. Discover your options and get critical advice on making the transition a success for everyone involved.
                        </div>
                    </Collapsible>
                    </div>

                </div>

                <div className={styles.columns}  data-aos="fade-left">
                    <div className={styles.webOnly}>
                        <Collapsible open={false} arrow={true} title={"2. Cash flow & squeezed profit margins"}  >
                            <div style={{ padding: 30 }}>
                            <div style={{ marginBottom: 10 }}>
                            Good cash flow control is vital for any business. For a growing business, it is crucial – cash constraints can be the most significant limiting factor to growth, and overtrading can prove fatal. With MSATC advisory services, you are assured of having control on every element of working capital, exercise reasonable stock control, and effective supplier management to maximize cash flow.
                            </div>
                            <div>
                            We identify that sometimes all you require is a dive into new value-creating opportunities within your business. The strategic review process is not just targeting your improved performance and new growth opportunities; improved alignment between employees, senior management teams, and other key stakeholders are few among many things you can look forward to, for driving a high-performance culture and grabbing an absolute clarity on the future direction of your business.
                            </div>
                            </div>
                        </Collapsible>
                    </div>
                    <div className={styles.webOnly}>
                        <Collapsible open={false} arrow={true} title={"4. Managers who do not work effectively together"} >
                            <div style={{ padding: 30 }}>
                            Teams that work well together can significantly increase workplace productivity and creates a more cohesive company culture. Our advisors will assist you in developing, organizing, problem-solving, and enlighten your human resource to their maximum potential.
                            </div>
                        </Collapsible>
                    </div>
                    <div className={styles.webOnly}>
                    <Collapsible open={false} arrow={true} title={"6. Lack of technology to improve business"} >
                        <div style={{ padding: 30 }}>
                        As technologies change practically at the speed of light, companies are to choose between – the need to innovate or be left behind. Technological infrastructure affects the culture, efficiency, and relationships of a business. It also affects the security of confidential information and trade advantages. Our consultants will guide you to newer and better tech solutions aimed at increasing productivity, efficiency, and also new opportunities.
                        </div>
                    </Collapsible>
                    </div>
                    <div className={styles.webOnly}>
                    <Collapsible open={false} arrow={true} title={"8. Succession planning and reaching long-term goals"} >
                        <div style={{ padding: 30 }}>
                        Succession planning is a strategy for identifying and developing future leaders at your company — not just at the top but for significant roles at all levels. Succession planning is a long process that demands extensive preparation. Discover your options and get critical advice on making the transition a success for everyone involved.
                        </div>
                    </Collapsible>
                    </div>
                 
                    <Collapsible open={false} arrow={true} title={"9. Preparing to sell your business for maximum value"}  >
                        <div style={{ padding: 30 }}>
                        <div style={{ marginBottom: 10 }}>
                        Selling a company can be a long and detailed process. Preparing a company for sale and the sale process can take a long time on an average up
                            </div>
                            <div>
                            to six months. It may be less, or it may be more. Our advisory team can help you through the steps necessary to sell your company – Defining the owner’s goals and potential exit strategies, determining a range of value, enhancing value before the sale, Gather Financial Information; present financials, compile Due Diligence Information, Target Buyers, Qualify potential buyers, negotiating the deal and transitioning the business.
                            </div>
                        </div>
                    </Collapsible>
                  



                </div>
            </div>
        </div>
        </Container>
    )
}

export default OnlineBookingService