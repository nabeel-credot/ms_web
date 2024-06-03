import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'
import BluePointBox from '../BluePointBox'
import Container from '../Common/Container';
function CFO_section3() {
    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
        <div className={styles.StartConversation_container}  data-aos="fade-up">
            <div className={styles.black36_heading + " " + styles.textCntr}>
                When is it time to hire a CFO?
            </div>
            <div className={styles.details18BlackPo400 + " " + styles.textCntr} style={{ marginTop: 30 }}>
                There is no one size fits all, hiring too soon may be costly – hiring too late and you may miss out on opportunities to move the business forward. But here are a few guiding questions you should ask yourself when hiring a CFO:
            </div>
            <div className={styles.cfo_sec3_list} style={{ marginTop: 40 }}>
                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.details18BlackPo400ForLi + " " + styles.keyWidth}>Can you get a Series A without a CFO?</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.details18BlackPo400ForLi + " " + styles.keyWidth2}>Is it possible to sustain revenues over $10 million per year without a CFO on staff?</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.details18BlackPo400ForLi + " " + styles.keyWidth2}>Would an accountant increase your bandwidth and streamline your workflow?</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.details18BlackPo400ForLi + " " + styles.keyWidth}>Are you capable of modeling future planning based on historical data?
                        </span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <span className={styles.key + " " + styles.details18BlackPo400ForLi + " " + styles.keyWidth}>Have you mastered cash flow, profit and loss, the bottom line, etc.?</span>
                    </li>


                </ul>
            </div>

            <div className={styles.cfo_points_container}>
                <div className={styles.accounting_services_points_box} data-aos="fade-right">
                    <BluePointBox style={{
                        paddingTop: 35, paddingRight: 55, paddingLeft: 30, width: "593px",
                        height: "202px"
                    }}>
                        <div className={styles.accounting_services_points_detail}>
                            You may have access to the same financial data, but you might not know how to utilize it for growth. It is completely reasonable for there to be a separation between a CEO and CFO because it is both healthy and normal.
                        </div>
                    </BluePointBox>
                </div>
                <div className={styles.accounting_services_points_box + " " + styles.services_box_mL3} data-aos="fade-left">
                    <BluePointBox style={{
                        paddingTop: 35, paddingRight: 55, paddingLeft: 30, width: "593px",
                        height: "202px"
                    }}>
                        <div className={styles.accounting_services_points_detail}>
                            Consequently, contracted CFO services will remain a cost-effective solution for most companies for years to come. The difference between making the playoffs and missing them can often be determined by partnering with an outsourced CFO.
                        </div>
                    </BluePointBox>
                </div>

                <div className={styles.mobOnly} data-aos="fade-up">
                    <BluePointBox style={{
                        padding: "45px 30px", width: "auto",
                        height: "auto"
                    }} >
                        <div className={styles.accounting_services_points_detail}>
                            You may have access to the same financial data, but you might not know how to utilize it for growth. It is completely reasonable for there to be a separation between a CEO and CFO because it is both healthy and normal.
                        </div>
                    </BluePointBox>

                    <BluePointBox style={{
                        padding: "45px 30px", width: "auto",
                        height: "auto", margin: "50px 0"
                    }}>
                        <div className={styles.accounting_services_points_detail}>
                            Consequently, contracted CFO services will remain a cost-effective solution for most companies for years to come. The difference between making the playoffs and missing them can often be determined by partnering with an outsourced CFO.
                        </div>
                    </BluePointBox>


                </div>
            </div>

            <div className={styles.CFO_section2_sub2}  >
                <div className={styles.CFO_section3_left} data-aos="fade-right">
                    <div className={styles.black36_heading}>
                        Why should you consult with outsourced CFO services?
                    </div>
                    <div className={styles.details18BlackPo400} style={{ marginTop: 20 }}>
                        A CFO can analyze every facet of your company and maximize the Return on Investment (ROI) of your marketing expenses so you can reach more potential leads. They deal with many hidden costs in the business. Many people don’t know how to run the numbers, so it’s difficult to see the picture without running them. A CFO growth advisor can identify when the team is underperforming, why the margins are failing, and what pitfalls could hinder the business’ success. After the analysis, CFO advises about the steps to be taken in the company. So, it could be wise to consult with a CFO early enough within your startup so you could have reliable company growth.
                    </div>
                    <div className={styles.details18BlackPo400} style={{ marginTop: 20 }}>
                        In modern days, CFO services have evolved to suit SMEs and are no longer an expensive proposition like in the past, where only big enterprises were able to afford a full-time CFO. Today with MS, you can outsource a CFO on a part-time basis in the UAE. We can identify if it’s the right time to bring on a CFO to your team and strategize a plan for your needs. Our team is experienced with multiple business industries and can understand your mission, grow your business, and secure your numbers. We are here to support start-ups and SMEs to grow and including our CFO service in your team will be an investment rather than a cost. So reach out to us today or book a free consultation call for your first session.
                    </div>
                </div>
                <div className={styles.CFO_section3_right} data-aos="fade-left">
                    <Image src="/images/cfoBg4.png" alt="" width="632px" height="427px" />
                </div>
            </div>
        </div>
        </Container>
    )
}

export default CFO_section3