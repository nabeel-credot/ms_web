import React, { useEffect } from 'react'
import styles from "./Business.module.css"
import cstyles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'

import BlueBox from "../BlueBox2_audit"
import Container from '../Common/Container';
function Business_Advisory_process() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
            <div className={styles.Business_Advisory_process_container} >
                <div className={cstyles.black36_heading_audit}>Our Business Advisory Process</div>
                <div className={styles.steps_Content} data-aos="fade-right">
                    <div className={styles.step}>
                        <div className={styles.stepBox}>
                            STEP 1
                        </div>
                        <div className={styles.triangle1}>
                            <Image src="/images/ba1.png" alt="" width={51} height={30} />
                        </div>
                        <div className={styles.grayLine}>
                        </div>
                        <div className={styles.triangle2}>
                            <Image src="/images/ba2.png" alt="" width={51} height={30} />
                        </div>
                    </div>
                    <div className={styles.stepDetails}>
                        <div className={cstyles.details24400W}>An Onsite Business Assessment To Identify Your Company’s Challenges.</div>
                        <div className={cstyles.detail12Open} style={{ color: "#FFFFFF", marginTop: 20 }}>
                            This is the discovery phase, where our goal is to learn your business as much as possible. This can include touring the facility, meeting with the board of directors and employees, analyzing the finances, and reading all company materials. During this process, we will uncover the details of your company’s mission, the operations in place, and develop an in-depth understanding of your company. We would then enter the evaluation phase to identify the company’s strengths and weaknesses and where change is needed, as well as current and foreseeable problems. We will also identify opportunities to grow the business, increase profits, and boost efficiency.
                        </div>
                    </div>
                </div>
                <div className={styles.steps_Content} data-aos="fade-left">
                    <div className={styles.step}>
                        <div className={styles.stepBox}>
                            STEP 2
                        </div>
                        <div className={styles.triangle1}>
                            <Image src="/images/ba1.png" alt="" width={51} height={30} />
                        </div>
                        <div className={styles.grayLine}>
                        </div>
                        <div className={styles.triangle2}>
                            <Image src="/images/ba2.png" alt="" width={51} height={30} />
                        </div>
                    </div>
                    <div className={styles.stepDetails}>
                        <div className={cstyles.details24400W}>Develop A Strategic And Integrated Action Plan To Address Your Challenges.</div>
                        <div className={cstyles.detail12Open} style={{ color: "#FFFFFF", marginTop: 20 }}>
                            We then develop solutions to problems identified and plans for capitalizing on opportunities. The owner should have feedback and provide opinions to us, which the business owner should consider and revise policies, as necessary. Once a plan is agreed upon, we enter the third phase of advisory.
                        </div>
                    </div>
                </div>
                <div className={styles.steps_Content} data-aos="fade-right">
                    <div className={styles.step}>
                        <div className={styles.stepBox}>
                            STEP 3
                        </div>
                        <div className={styles.triangle1}>
                            <Image src="/images/ba1.png" alt="" width={51} height={30} />
                        </div>
                        <div className={styles.grayLine}>
                        </div>
                        <div className={styles.triangle2}>
                            <Image src="/images/ba2.png" alt="" width={51} height={30} />
                        </div>
                    </div>
                    <div className={styles.stepDetails}>
                        <div className={cstyles.details24400W}>Partner With You To Implement These Plans In A Timely Manner To Ensure Success.</div>
                        <div className={cstyles.detail12Open} style={{ color: "#FFFFFF", marginTop: 20 }}>
                            This is the restructuring phase or the implementation of the plan. In this phase, we build on assets and eliminate liabilities. We also monitor the plan’s progress and adjust it as needed.
                        </div>
                        <div className={cstyles.detail12Open} style={{ color: "#FFFFFF", marginTop: 20 }}>
                            A business can always benefit from expert advice. An objective point of view can make all the difference. Taking up challenges and overcoming them without fear is an act of bravery.
                        </div>
                    </div>
                </div>

                <div className={styles.subContainer} >
                    <div  data-aos="fade-right">
                        <BlueBox num="01" style={{ height: "400px" }} title={<>An Onsite Business Assessment To Identify Your Company’s Challenges.</>}
                            detail="This is the discovery phase, where our goal is to learn your business as much as possible. This can include touring the facility, meeting with the board of directors and employees, analyzing the finances, and reading all company materials. During this process, we will uncover the details of your company’s mission, the operations in place, and develop an in-depth understanding of your company. We would then enter the evaluation phase to identify the company’s strengths and weaknesses and where change is needed, as well as current and foreseeable problems. We will also identify opportunities to grow the business, increase profits, and boost efficiency." />
                    </div>
                    <div  data-aos="fade-left">
                        <BlueBox num="02" style={{ height: "321px" }} title={<>Develop A Strategic And Integrated Action Plan To Address Your Challenges.</>}
                            detail="We then develop solutions to problems identified and plans for capitalizing on opportunities. The owner should have feedback and provide opinions to us, which the business owner should consider and revise policies, as necessary. Once a plan is agreed upon, we enter the third phase of advisory." />
                    </div>
                    <div  data-aos="fade-right">
                        <BlueBox num="03" style={{ height: "355px" }} title={<>Partner With You To Implement These Plans In A Timely Manner To Ensure Success.</>}
                            detail={<>
                                <div>This is the restructuring phase or the implementation of the plan. In this phase, we build on assets and eliminate liabilities. We also monitor the plan’s progress and adjust it as needed.</div>
                                <div>A business can always benefit from expert advice. An objective point of view can make all the difference. Taking up challenges and overcoming them without fear is an act of bravery.</div>
                            </>} />
                    </div>
                </div>

                <div className={styles.margin100} data-aos="fade-up" >
                    <div className={styles.stepYdetails}>
                        Call us – Business Consulting Firm, Financial Consulting Firm, or Business Tax Advisory. Just know that we are there.
                    </div>
                    <div className={styles.stepYdetails} style={{ marginTop: 20 }}>
                        With all the certainty, we are there – Steady and at a high pace.
                    </div>
                    <div className={styles.stepYdetails} style={{ marginTop: 20 }}>
                        With all the uncertainty, we are there – Forward, aggressive, and in for the long haul!
                    </div>
                    <div className={styles.stepYdetails} style={{ color: "#D4AE31", marginTop: 20, cursor: "pointer" }}>Call:  (+971) 23093344</div>
                </div>
            </div>
        </Container>
    )
}

export default Business_Advisory_process