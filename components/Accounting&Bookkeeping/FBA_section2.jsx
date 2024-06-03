import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./FBA.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


import Container from '../Common/Container';
function FBA_section2() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container>
        <div className={cstyles.FBA_section2_container} data-aos="fade-up">
            <div className={styles.white_heading}>
                What Are The Benefits Of Hiring An Outside Consultant For Business Advisory Services?
            </div>
            <div className={styles.details18OpenWhite} style={{marginTop:20}}>
                A family business can benefit greatly from an outsourced advisory service because they would provide fresh guidance on important business decisions to be taken for the long-term survival of the company. They may assist family business owners in acting or discussing matters that otherwise might not be considered. Without the help of an advisory service provider, it may be possible to overlook opportunities. An Advisory service may be an essential purpose that ultimately can create a more reliable and more profitable business.
            </div>
            <div className={styles.white_heading}  style={{marginTop:60}}>
                Family Governance
            </div>
            <div className={styles.details18OpenWhite}  style={{marginTop:20}}>
                Governance is an important aspect of managing a family business as it an ongoing commitment by the family members and its stakeholders. Without appropriate governance and financial framework implemented, the long term running of the business is under a threat.
            </div>
            <div className={styles.details18OpenWhite}  style={{marginTop:20}}>
                Proper internal controls within the business can improve profitable decision-making whilst reducing the risk of family conflict. It ensures appropriate liquidity and profitability through proper planning, control, and monitoring.
            </div>
            <div className={styles.white_heading}  style={{marginTop:60}}>
                Tax Advisory Services and Company Growth
            </div>
            <div className={styles.details18OpenWhite}  style={{marginTop:20}}>
                Tax Advisory Services and Company Growth
            </div>
        </div>
        </Container>
    )
}

export default FBA_section2