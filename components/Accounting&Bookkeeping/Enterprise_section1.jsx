import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookCall from './BookConsultationCall';


import Sub from './Enterprise_sub1'

import MobSlider from '../Home/EnterpriseService'
import Container from '../Common/Container';
function Accounting_Banner2() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container>
        <div className={styles.Enterprise_Sec_container}>
            <div className={styles.payrollBanner_sub_container}>
                <div className={styles.enterpriceBanner_left} data-aos="fade-right">
                    <div className={styles.payrollBanner_heading}>
                        A good ambience and great people are essentials of a growing business. While on a horse-drive with your business on the saddle, it’s you who has to determine if you’re surrounded with the right people and the right atmosphere. If not, what have you gotta do?
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open600 + " " + styles.detailWidth2}>
                        You can have the right idea and the right plan. You can work harder than your competitors. But remember, if you don’t have the right people around you, it’s all going to be a waste. You’re gonna lose this game sooner or later. And success become just a dream!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.detailWidth2}>
                        How have you designed your neighbourhood? Do your people challenge you? Inspire you? Motivate you? If yes, you’re one of those lucky fellow human beings. Poeple around you should move you and impress you, one way or the other. And be there for you when you really need them. You’ll obviously know when you find these people. Because you’ll want to run ideas by them, brainstorm with them, and look forward to spending time with them. If, however, the people around you are pulling you down or impeding your progress, you need to seek out other people with whom to surround yourself. It’s that simple.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.mobOnly + " " + styles.details18Open + " " + styles.detailWidth}>
                        It’s all about hands-on, proactive support that turns businesses into success stories. It just takes one conversation to get the ball rolling in the right direction, so why not get in touch with us?
                    </div>
                </div>
                <div className={styles.acountingBanner2Book_right2} data-aos="fade-left">
                    <BookCall />
                </div>
            </div>
            <div style={{ marginTop: "20px" }} className={styles.webOnly + " " + styles.details18Open + " " + styles.detailWidth} data-aos="fade-right">
                It’s all about hands-on, proactive support that turns businesses into success stories. It just takes one conversation to get the ball rolling in the right direction, so why not get in touch with us?
            </div>
            <div className={styles.webOnly} >
                <Sub />
            </div>
            <div className={styles.mobOnly} style={{marginTop:40}}>
                <MobSlider />
            </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2