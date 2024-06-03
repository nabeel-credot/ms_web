import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookCall from './BookConsultationCall';

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
            <div className={styles.acountingBanner_container}>
                <div className={styles.FAS_Banner_left} data-aos="fade-right">
                    <div className={styles.black36_heading_audit}>
                    We are a specialist team of consultants to assist you recognize and assess new strategic and financial opportunities considering the constantly shifting needs of Businesses!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    There are turning times in a company&apos;s lifecycle as it moves through several stages that can dramatically boost or lower its value. It is difficult to manage transactions like mergers and acquisitions, sizable financings, equity investments, reorganizations, divestitures, and liquidity events. Significant value can be lost in the absence of competent representation, knowledge, and a defined plan.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Transactions are by nature a risky growth strategy. Our experts have extensive experience in identifying transaction risks as well as verifying your investment strategy through financial performance analysis, the discovery of synergy opportunities, and due diligence regarding the reliability of reported earnings. Every transaction has its own chances and challenges. Your specific demands have similar objectives, such as reducing risk, improving transaction proficiency, and boosting transaction value. The skilled Transaction Advisory Services team at MS makes use of tried-and-true procedures and instruments to assess and enhance firms from a financial accounting, tax, and information technology standpoint through the integration of three forms of expertise—financial, technical, and legal. Transaction Advisory Service team assist client and the investor in reaching a properly informed, unbiased decision regarding risk and return. 
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Regardless of the nature of your company&apos;s operations, MS will help and direct you through the various stages of comprehensive corporate finance, business restructuring, business valuations, and investment management services. By working with us, you will have a fully qualified financial team that will promptly handle all statutory compliances and take care of your system. Our transaction advising services assist you in completing commercial transactions without difficulty. The advancements in auditing and accounting over time have made handling money simple and efficient. Our staff can play a big and vital part in maintaining your monetary affairs trouble free
                    </div>
                </div>
                <div className={styles.RA_banner} data-aos="fade-left">
                    <BookCall />
                </div>
            </div>
        </Container>
    )
}

export default Accounting_Banner2