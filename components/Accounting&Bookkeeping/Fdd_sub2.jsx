import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
;
import styles from "./Styles.module.css"

import Container from '../Common/Container';
function Fdd_sub2() {

    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false,
        })},[]);
        

    return (
        <Container>
        <div className={styles.fdd_sub2} data-aos="fade-up">
            <div className={styles.black36_heading_audit+" "+styles.textCntrMob}>
                Financial Due Diligence: Why Does It Matter?
            </div>
            <div className={styles.details18Open} style={{marginTop:20}}>
                Any business investment, whether it’s in a startup, a new product line, or a merger, should involve financial due diligence. It is the analysis of an organization’s financial information by an outside party to confirm its accuracy and provide investors with insight into the company’s current operations.
            </div>
            <div className={styles.details18Open}>
                Hereby an investor can ensure they have all the necessary information to make an informed decision. When buying or selling a company, it’s critical to understand the company’s financials—both good and bad. The “bad” things can often be harder to spot, especially if they’re the result of fraud or poor bookkeeping.
            </div>
            <div className={styles.details18Open}>
                That’s why it’s so important to conduct financial due diligence before moving forward with your investment. This will help you identify overstatements in profit, fixed assets, receivables, inventory, and other areas that could cause you serious losses down the road.
            </div>
        </div>
        </Container>
    )
}

export default Fdd_sub2