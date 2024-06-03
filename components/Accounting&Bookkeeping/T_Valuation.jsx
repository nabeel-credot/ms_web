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
                Valuation is an art of putting the science to use.
                </div>
                <div className={styles.details24400Open} style={{marginTop:20}}>
                Business valuation is a process of determining the economic value of a whole business or a division of the company. Valuation of business is typically undertaken to understand the economic value of the business, for selling or buying stake in the company, taxation purpose and at times even for divorce proceedings. There are various methods being adopted by the valuators, commonly among them are the Discounted Cash Flow and Price Earnings multiples and Net Asset Value. The method of valuation adopted largely depends on the purpose of valuation is conducted for.
                </div>
                
                <div  className={styles.details24400Open}  style={{marginTop:20}}>
                Valuation is not only about the company data, the future of the business or industry it deals in, it also considers the market dynamics, government policies with respect to the business and industry. In a transaction, valuation is the basis for negotiations.
                </div>
                <div className={styles.details24400Open}  style={{marginTop:20}}>
                At KPI, we provide our clients with an independent advice on valuation concerning the transaction. Our valuation team, having extensive experience across industries, brings technical expertise with a pragmatic outlook to deliver the desired output.
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