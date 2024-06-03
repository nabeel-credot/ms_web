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
        <div className={styles.payrollBanner_container}>
            <div className={styles.payrollBanner_sub_container}>
                <div className={styles.FAS_Banner_left} data-aos="fade-right">
                    <div className={styles.black36_heading_audit}>
                        Success is not final – Don’t relax; Failure is not fatal – Don’t Stress! : Some roads are to be deliberately chosen!
                    </div>

                    <div style={{ marginTop: "10px" }} className={styles.details20Open400FAS }>
                        Success is not a story that everyone can create. It’s all about making the right decisions, at the right time with the right people.
                    </div>


                    <div style={{ marginTop: "10px" }} className={styles.details20Open400FAS }>
                        All we’re talking is about intelligent, strategic, and jaw-droppingly shrewd moves, not just lucky breaks. We assure you that this is the stuff incredibly brilliant entrepreneurs are made of, and that of course includes you!
                    </div>

                    <div style={{ marginTop: "10px" }} className={styles.details18Open }>
                        An advisory team must be efficient enough to guide the clients in the right way with the right solutions. And that is what MSians do with our advisory board perfectly. Our financial advisory consulting service offers tailor-made financial solutions that help you make the right decisions to build, protect, and boost your business. Every successful business has its own journey. That is why our proactive approach means we are with you every step of the way to ensure your business’ journey is intelligently navigated. We tell you, a rightly navigated ship never loses its directions, nor does it collapse. Just trust your navigation and move ahead.
                    </div>

                    <div style={{ marginTop: "10px" }} className={styles.details18Open}>
                        For each new project, we set up a flexible and exclusive team that draws on the relevant expertise of our professionals, to provide our clients with the most appropriate solutions to the exigent and exciting need that comes with their business.
                    </div>
                    <div style={{ marginTop: "10px" }} className={styles.details18Open +" "+styles.mobOnly} >
            We are so happy to disclose our list of financial advisory services that include Tax Advisory, Corporate Finance, Strategic Review, Business Valuation, FD (Financial Director) on Demand and Feasibility Report & Business Plan.
            </div>
                </div>
                <div className={styles.acountingBanner2Book_right2} data-aos="fade-left">
                    <BookCall />
                </div>
            </div>
            <div style={{ marginTop: "10px" }} className={styles.details18Open +" "+styles.webOnly} data-aos="fade-right">
            We are so happy to disclose our list of financial advisory services that include Tax Advisory, Corporate Finance, Strategic Review, Business Valuation, FD (Financial Director) on Demand and Feasibility Report & Business Plan.
            </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2