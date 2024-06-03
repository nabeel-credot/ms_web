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
            <div  className={styles.payrollBanner_sub_container}>
            <div className={styles.FAS_Banner_left} data-aos="fade-right">
                <div className={styles.black36_heading_audit}>
                    Success is not final – Don’t relax; Failure is not fatal – Don’t Stress! : Some roads are to be deliberately chosen!
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details20Open400NP + " " + styles.ac2_detail1Width}>
                    What do you think that makes a business advisory firm the best? MS has considerable experience in undertaking feasibility studies for various industries that enables clients to make informed decision about the projected success of a project from the financial and non financial perspectives of a proposed concept, project or business plan. We aim to objectively and rationally uncover the strengths, weakness, opportunities and threats. A given project may present with regards to the available resources in a given environment ultimately determining the success or failure of the potential project.
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details18Open + " " + styles.ac2_detail1Width}>
                    Our feasibility studies are objectively analyzed based on both quantitative and qualitative data, enabling client project managers and senior management to investigate the measured potential outcomes of a project before investing too much time and money, hence reducing risk significantly.
                </div>

                <div style={{ marginTop: "10px" }} className={styles.details18Open + " " + styles.ac2_detail1Width}>
                    At MS, our strategic consulting team undertake in-depth market research to achieve optimal results and identifying most appropriate market opportunity, as we address market demand and growth trends, supply and pricing trends, economic and sector overview, competitive analysis and market share and potential. Standing different from other conventional consultancies, we perform both closed and open research methods. Our in house research team and consultants works via multiple streams such as one on one meeting, telephone interviews; expert focus groups and online surveys.
                </div>
                <div style={{ marginTop: "10px" }} className={styles.details18Open+" "+styles.mobOnly}>
                Our financial feasibility study involves preparing comprehensive and flexible financial models to deliver medium to long term financial projections that are largely influenced by the assumptions obtained from the market research and deep understanding of the industry dynamics. Our financial experts and strategic consultants in the Advisory Division are very adept in complex financial modelling across a wide range of industry sectors with proven skills of analysis and knowledge that is of significant benefit to our clients.
                </div>

            </div>
            <div className={styles.acountingBanner2Book_right2} data-aos="fade-left">
                <BookCall />
            </div>
            </div>
            <div style={{ marginTop: "10px" }} className={styles.details18Open+" "+styles.webOnly}>
                Our financial feasibility study involves preparing comprehensive and flexible financial models to deliver medium to long term financial projections that are largely influenced by the assumptions obtained from the market research and deep understanding of the industry dynamics. Our financial experts and strategic consultants in the Advisory Division are very adept in complex financial modelling across a wide range of industry sectors with proven skills of analysis and knowledge that is of significant benefit to our clients.
                </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2