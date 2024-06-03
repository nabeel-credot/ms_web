import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./CBCR.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

import Container from '../Common/Container';
function CBCR_section3() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
        <div className={cstyles.CBCR_section3_container}>
            <div className={cstyles.CBCR_section_left } data-aos="fade-right">
                <div className={cstyles.imgWrapper}>
                <Image src="/images/cbcrBg2.png" alt="" layout='fill' objectFit='cover' className={cstyles.border} />
                </div>
           
  
            </div>
            <div className={cstyles.CBCR_section_right} data-aos="fade-left">
                <div className={styles.black36_heading}>
                    What will you learn with our advisors?
                </div>
                <div className={styles.details18OpenBlackPo300+" "+cstyles.marginT}>
                    MS Tax Advisor will cover the latest international transfer pricing rules and its impact in the Middle East and North Africa.
                </div>
                <div className={styles.details18Open+" "+cstyles.marginT}>
                    You should know that the impact of transfer pricing in the MENA region until recently in the Middle East and North Africa region did not consider transfer pricing as a high priority on their government agendas.
                </div>
                <div className={styles.details18OpenBlackPo300+" "+cstyles.marginT}>
                However, the significant international emphasis on the BEPS project (Base Erosion Profit Shifting) has encouraged governments across the MENA region to consider updating their legislation.
                </div>
                <div className={styles.details18OpenBlackPo300+" "+cstyles.marginT}>
                BEPS project was commissioned by the G20 and coordinated by the OECD in 2008 which has highlighted transfer pricing issues and become top priority with fiscal authorities and politicians worldwide when dealing with international intercompany cross border commercial transactions between their countries and others.
                </div>
                <div className={styles.details18OpenBlackPo300+" "+cstyles.marginT}>
                Specifically, Saudi and Egypt have introduced revised legislation which presents several tax and legal challenges for multinational enterprises operating in this region. In view of the above, multinational enterprises and government organizations should proactively prepare to manage the challenges arising when aligning with revised transfer pricing rules.
                </div>
            </div>
        </div>
        </Container>
    )
}

export default CBCR_section3