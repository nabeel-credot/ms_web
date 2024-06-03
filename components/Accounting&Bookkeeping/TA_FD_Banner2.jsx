import React, { useEffect, useState } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Button from "../ButtonYellowForm"

import Container from '../Common/Container';
export default function BookkeepinServiceWork({ parentCallback }) {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    const [popup, setPopup] = useState(false)
    return (
        <Container style={{ position: "relative" }} >
            <div className={cstyles.RA_IA_container} >
                <div className={cstyles.subContainer2}>
                    <div className={cstyles.a_left2_IA} data-aos="fade-right">
                        <div className={cstyles.dedicated_heading}>
                            Financial Due Diligence: Why Does It Matter?
                        </div>
                        <div style={{ marginBottom: 20 }} className={cstyles.details18Open}>
                            Any business investment, whether it’s in a startup, a new product line, or a merger, should involve financial due diligence. It is the analysis of an organization’s financial information by an outside party to confirm its accuracy and provide investors with insight into the company’s current operations.
                        </div>
                        <div style={{ marginBottom: 20 }} className={cstyles.details18Open}>
                            Hereby an investor can ensure they have all the necessary information to make an informed decision. When buying or selling a company, it’s critical to understand the company’s financials—both good and bad. The “bad” things can often be harder to spot, especially if they’re the result of fraud or poor bookkeeping.
                        </div>
                        <div className={cstyles.details18Open+" "+cstyles.margin40}>
                            That’s why it’s so important to conduct financial due diligence before moving forward with your investment. This will help you identify overstatements in profit, fixed assets, receivables, inventory, and other areas that could cause you serious losses down the road.
                        </div>
                        <div className={styles.webOnly} onClick={() => parentCallback(true)}>
                            <Button value="Book a Free Consultation" backgroundColor="#D5AF32" color="#192B3A" width="357px"
                                height="70px" src="/images/LarrowB.svg" style={{ border: "2px solid #192B3A", fontSize: "20px" }} arrowH="20px" arrowW="12px" />
                        </div>

                        <div className={styles.mobOnly} onClick={() => parentCallback(true)}>
                            <Button value="Book a Free Consultation" backgroundColor="#D5AF32" color="#192B3A" width="277px"
                                height="50px" src="/images/LarrowB.svg" />
                        </div>

                    </div>
                    <div className={cstyles.a_right2_IA} data-aos="fade-left">
                        {/* <div className={cstyles.imgWrap}>
                            <Image src="/images/Rectangle.png" alt=""layout='fill'/>
                        </div> */}
                        <div className={cstyles.imgWrap}>
                            <Image src="/images/fddBanner.jpg" alt="" layout='fill' className={cstyles.borderR} objectPosition="center" objectFit='cover' />
                        </div>
                    </div>

                </div>
            </div>

        </Container>
    )
}
