import React from 'react'
import styles from "./Styles.module.css"
import Button from '../ButtonYellow'

import Container from '../Common/Container';
function Corporate_Section5() {
    return (
        <Container>
        <div className={styles.corporate5_container}>
            <div className={styles.corporate5_left}>
                <div className={styles.details24400}>
                    Tax rates is one of the most competitive and lowest rates in the world, with great flexibility built in. And as obscure as it may sound, this Is actually a good move that will benefit big companies, tax data will help them demonstrate their financial performance, and will get them to start financing. Full fine print details yet to be announced by the FTA.
                </div>
            </div>

            <div className={styles.clarificationBox}>
                <div className={styles.white_heading2} style={{marginBottom:30}}>For any Clarification</div>
                <div className={styles.webOnly}>
                <Button value="Contact Us" backgroundColor="#D5AF32" color="#192B3A" width="448px"
                    height="60px" src="/images/LarrowB.svg" href="/contact"/>
                </div>
                <div className={styles.mobOnly}>
                <Button value="Contact Us" backgroundColor="#D5AF32" color="#192B3A" width="182px"
                    height="40px" src="/images/LarrowB.svg" href="/contact"/>
                </div>
                
            </div>
        </div>
        </Container>
    )
}

export default Corporate_Section5