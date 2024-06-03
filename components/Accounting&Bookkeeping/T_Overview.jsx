import React, { useEffect} from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Transaction.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from './TA_menu'
import LetsTalk from './TAS_Lets_talk'

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
            <div className={cstyles.overviewContainerRight}  data-aos="fade-left">

                <div className={styles.black_heading2}>
                    Overview
                </div>
                <div className={styles.details24400Open} style={{marginTop:20}}>
                    Evolution of a business is the only constant. Business strategies should adapt to the dynamic economic landscape. Companies diversify, divest, grow organically and inorganically or bring in additional investors etc. These are typically a long-drawn process which require substantial time from the senior management and finance team of the company.
                </div>
                <div  className={styles.details24400Open}  style={{marginTop:20}}>
                    Having an experienced transaction advisor by your side helps you to understand the challenges and risks associated with transactions and how to mitigate or overcome such risks
                </div>
                <div  className={styles.details24400Open}  style={{marginTop:20}}>
                    At KPI, we provide our clients with the information they require to make an informed decision. Our team of experienced professionals have executed multiple transactions over the years and thus bring invaluable experience to the table
                </div>
                <div className={styles.black36_heading2}  style={{marginTop:20}}>
                KPI can assist you with
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