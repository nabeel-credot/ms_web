import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';
function CFO_section1() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

  return (
    <Container>
    <div className={styles.StartConversation_container} data-aos="fade-up">
        <div className={styles.details24400+" "+styles.textCntr}>
        It is no longer possible for the world’s most successful companies to live long. The average tenure of an S&P 500 company was 33 years in 1965. Then it was 20 years in 1990. The average company lifespan in the S&P is 50. This is estimated to drop to 14 years by 2026. That’s simply because there are more companies today, and for start-ups to thrive, company leaders must create real value for customers.
        </div>
        <div  className={styles.details24400+" "+styles.textCntr} style={{marginTop:30}}>
        If you have a start-up, you must be asking yourself, “How can I grow in a competitive business market”? You must be thinking you’re too small to focus on anything else than selling your product and services and creating value for your clients. As a CEO, you should focus mainly on your sales and satisfying the market, apart from the other million things to get done while running a start-up. Hence you need a clear head and save time from handling other HR, admin, legal, and accounting obligations. Although you may have little experience in these sectors, your first thought might be wanting to hire someone to fill these roles. And if you are thinking of someone to handle the profitability and scaling of your start-up, then you must consider the role of CFO services for startups and SMEs.
        </div>

        <div className={styles.blueContainerWithBg} data-aos="fade-up">
            <div className={styles.white_heading+" "+styles.textCntr}>
                What is a CFO
            </div>
            <div className={styles.details18OpenWhite} style={{marginTop:20}}>
                What is the meaning of a CFO service / fractional CFO? CFO stands for Chief Financial Officer.  A Chief Financial Officer is an experienced financial professional, that can offer high-level financial expertise for your goals in a fixed time period. Such expertise can come in advisory or taking actions to achieve broader business objectives. You can hire a CFO or consult with an outsourced CFO service. Which is better? Both deliver the same objective; however, an outsourced CFO service is way more cost-effective for start-ups and mid-sized businesses, as the cost for hiring a CFO is quite high. Also, outsourced CFO firms offer a broad scope of their services to meet specific business needs.
            </div>
        </div>
    </div>
    </Container>
  )
}

export default CFO_section1