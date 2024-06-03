import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from '../Common/Container';
function ESR_section2() {

    useEffect(() => {
        AOS.init({
          duration: 1400,
          once: false,
        })
      }, []);

      
    return (
        <Container>
        <div className={styles.StartConversation_container} data-aos="fade-up">
            <div className={styles.black36_heading_audit+" "+styles.textCntr} style={{marginBottom:30}}>
                Impact of COVID-19 on Economic Substance Regulation
            </div>
            <div className={styles.details18OpenBlackPo300+" "+styles.textCntr} style={{marginBottom:30}}>
            The UAE Ministry of Finance (MoF) recognizes that with the outbreak of COVID-19, the mobility of individuals may be affected, either due to travel restrictions or due to individuals being subject to self-isolation or quarantine requirements. In this regard, the UAE MoF confirmed that the UAE would take into consideration the impact of COVID-19 on the usual operations of Licensees when deciding whether a Licensee has demonstrated sufficient economic substance in the UAE. These considerations would only apply to those substance requirements that are directly affected by COVID-19 measures (e.g. travel restrictions, self-isolation situations, or quarantine requirements).
            </div>
            <div className={styles.details18OpenBlackPo300+" "+styles.textCntr}>
            Businesses should, however, consider appointing alternate directors in the UAE who can attend meetings in the UAE and address any short-term practical difficulties arising from COVID-19 related measures. MoF also instructed that entities should note that this is only a temporary arrangement and therefore must make every effort to otherwise comply with their obligations under the ESR.
            </div>
        </div>
        </Container>
    )
}

export default ESR_section2