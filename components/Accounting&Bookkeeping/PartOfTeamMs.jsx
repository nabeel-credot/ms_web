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
        <Container>
        <div className={styles.learnMs_container} data-aos="fade-up">
            <div className={styles.black36_heading_audit+" "+styles.textCntr}>
            I want to become a part of team MS
            </div>
            <div className={styles.teamMs_sub1}>
                <div className={styles.Box}>
                <YellowBorderCard src="/images/jobsAvailable.svg"  title={<>What Are the<br/> Jobs Available?</>} href="/careers" />
                </div>
                <div  className={styles.Box}>
                <YellowBorderCard src="/images/GoodMs.svg"  title={<>How Good Is MS<br/> to Work With?</>}  href="/our-awards" />
                </div>
                <div className={styles.Box}>
                <YellowBorderCard src="/images/Search.svg" title={<>Are There Training<br/>Opportunities?</>}  href="/enterprise"  />
                </div>
          
            </div>
        </div>
        </Container>
    )
}

export default TeamMS