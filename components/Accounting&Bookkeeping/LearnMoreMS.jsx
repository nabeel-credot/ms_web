import React  ,{useEffect}from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import YellowBorderCard from "../YellowBorderCardLearnMs"
import Container from '../Common/Container';
function TeamMS() {

    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false,
        })},[]);

    return (
        <Container style={{padding:0}}>
        <div className={styles.learnMs_container} data-aos="fade-up">
            <div className={styles.black36_heading_audit+" "+styles.textCntr}>
            Learn more about MS
            </div>
            <div className={styles.teamMs_sub1}>
                <div className={styles.Box}>
                <YellowBorderCard src="/images/learnMore1.svg"  title={<>How can MS help<br/> my Business</>} href="/accounting-bookkeeping" />
                </div>
                <div  className={styles.Box}>
                <YellowBorderCard src="/images/learnMore2.svg"  title={<>What Awards have we <br/>Won</>}  href="/our-awards" />
                </div>
                <div className={styles.Box}>
                <YellowBorderCard src="/images/learnMore3.svg" title={<>Help me start my<br/>Business</>}  href="/incorporation-advisory-and-assistance"  />
                </div>
          
            </div>
        </div>
        </Container>
    )
}

export default TeamMS