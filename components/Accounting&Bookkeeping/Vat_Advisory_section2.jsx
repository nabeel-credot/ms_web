import React,{useEffect} from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Advisory.module.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';
function Advisory_section() {
    useEffect(()=>{
        AOS.init({
          duration: 1900,
          once: false,
        })},[]);

    return (
        <Container>
        <div className={styles.Advisory_section_container} data-aos="fade-up">
            <div className={cstyles.white_heading + " " + cstyles.textCntr}>Benefits That Our Clients Get</div>
            <div className={styles.Advisory_section_sub}>
                <div className={styles.Advisory_section2_sub_L}>
                    <div className={cstyles.headingW24500} >Mitigation Of Risks</div>
                    <div className={cstyles.detail16 + " " + styles.vatDetails2_width} style={{ color: "#ffffff", marginTop: 20 }}>Businesses have to go through a lot to keep offering their business lawfully. Often it could be complicated for businesses to obey or follow the UAE VAT rules and regulations. This happens due to lack of knowledge or expertise in VAT that leads to a lot of confusions or mistakes, making way to a potential risk of penalties.</div>
                    <div className={cstyles.white_detail + " " + styles.vatDetails_width} style={{ color: "#D4AE31", marginTop: 20 }}>Our team is here to guide you through the VAT procedures and will keep your business compliant with the VAT rules and regulations of UAE.</div>
                </div>
                <div className={styles.Advisory_section2_sub_R}>
                    <div className={cstyles.headingW24500} >Time-Saving</div>
                    <div className={cstyles.detail16 + " " + styles.vatDetails2_width} style={{ color: "#ffffff", marginTop: 20 }}>
                        Hiring our VAT advisory service experts in the UAE helps to reduce the time needed to evaluate, analyze, and measure the risks associated with the revenues and taxes of an organization. Our VAT specialists are equipped with the necessary expertise to assist on time.
                    </div>
                </div>
            </div>
            <div className={styles.vatAdvisory_section_sub}>
                <div className={cstyles.white_heading}>
                    Have a Look At Our Extended Services
                </div>

                <div className={styles.Vat_Advisory_section2_List}>
                    <ul>
                        <li>
                            1.
                            <span className={styles.key}>Identifying areas of risk through compliance health checks.</span>
                        </li>
                        <li>2.
                            <span className={styles.key}>Negotiating with FTA in disputes to reduce liabilities and agree on payment terms.</span>
                        </li>
                        <li>
                            3.
                            <span className={styles.key}>Assisting with inspections, registrations & address reporting requirements.</span>
                        </li>
                        <li>
                            4.
                            <span className={styles.key}>Review of internal controls and procedures, including review of documentation.</span>
                        </li>
                        <li>
                            5.
                            <span className={styles.key}>Clarification drafting (for FTA) – Seeking the correct VAT impact for the proposed transactions.</span>
                        </li>
                        <li>
                            6.
                            <span className={styles.key}>Retainership Services – On-going advisory, updates, assistance in compliance etc.</span>
                        </li>
                        <li>
                            7.
                            <span className={styles.key}>Conducting training for in-house personnel to be abreast with the VAT updates.</span>
                        </li>

                    </ul>
                </div>
            </div>

            <div className={cstyles.details18OpenWhite+" "+styles.margin60} >
                MS has got an amazingly incredible team of experts who work on VAT at MS. We are very sure that our expert VAT team will help you to consider the full impact of VAT through all stages of your business. From considering a new activity, through to acquisitions, to overseas expansion and disposal of part of the business, we will guide you through planning robustly, minimize your exposure and optimize your cash flow position. Be it anything; our specialists are here to help you to understand and manage your entire VAT obligations for each type of deal.
            </div>
            <div className={cstyles.details18OpenY}>
                If you are in search of Solid understanding of VAT Laws, Reliable experience in financial consultations and Industry-specific approach – You are at the right place!
            </div>
        </div>
        </Container>
    )
}

export default Advisory_section