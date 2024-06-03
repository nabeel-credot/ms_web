import React, { useEffect} from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Transaction.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from './TA_menu'
import LetsTalk from './TAS_Lets_talk2'

import Container from '../Common/SliderContainer';
function Overview() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);
    return (
        <Container>
        <div className={cstyles.overviewContainer}>
            <div data-aos="fade-right">
                <Menu />
            </div>
            <div className={cstyles.overviewContainerRight} data-aos="fade-left">

                <div className={styles.black_heading2}>
                Merger & Acquisition Advisory
                </div>
                <div className={styles.details24400Open} style={{marginTop:20}}>
                A company can attain faster growth inorganically. But it may not always be the case. Each deal or transaction has its own inherent complexities and risks, be it domestic or cross-border. One could possibly face cash flow issues, valuation challenges, tax issues, litigations.
                </div>
                <div  className={styles.details32500}  style={{marginTop:20}}>
                How is the management sure that it will deliver value to its shareholders? 
                </div>
                <div  className={styles.details24400Open}  style={{marginTop:20}}>
                It is important to understand and take into consideration the market dynamics, and conduct a thorough due diligence across finance, commercial, tax, human resources, systems, legal and compliance. This will provide a wholistic view of the challenges and risks associated with the transaction. The next critical stage is the structuring of the transaction.
                </div>
                <div className={styles.details24400Open}  style={{marginTop:20}}>
                KPI’s knowledgeable team can provide you with end-to-end advisory and possible solutions. Our team of experts will work together with your team and help deliver the desired results.
                </div>
                <div style={{marginTop:40}}>
                <LetsTalk/>
                </div>
              

            </div>

        </div>
        </Container>
    )
}

export default Overview