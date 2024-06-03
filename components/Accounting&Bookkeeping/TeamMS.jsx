import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import YellowBorderCard from "../YellowBorderCardNotSlider"
import Container from '../../components/Common/Container';

function TeamMS() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
            <div className={styles.teamMs_container} data-aos="fade-up">
                <div className={styles.payrollBanner_heading + " " + styles.textCntr + " " + styles.teamMsHeadWidth}>
                    I want to become a part of team MS
                </div>
                <div className={styles.teamMs_sub}>
                    <div>
                        <YellowBorderCard src="/images/audit6.svg" title={<>What are the jobs<br /> Available</>} href="/careers" />
                    </div>
                    <div>
                        <YellowBorderCard src="/images/team.svg" title={<>How good is MS to<br /> work with ?</>} href="/ms" />
                    </div>
                    <div>
                        <YellowBorderCard src="/images/audit7.svg" title={<>Are there Training <br />Opportunities</>} href="/careers" />
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default TeamMS