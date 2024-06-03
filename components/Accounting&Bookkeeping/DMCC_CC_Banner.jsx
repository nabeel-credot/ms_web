import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./ADGM.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookCall from './BookConsultationCall';
import Image from 'next/image'
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
                        Implementing Effective Compliance and Corporate Services.
                    </div>

                    <h3 className={cstyles.heading}>
                        Why MS for DMCC Compliance and Corporate Services ?
                    </h3>
                    <div className={styles.details18Open}>
                        At MS, we provide comprehensive compliance and corporate services for companies registered in the Dubai Multi Commodities Centre (DMCC). We specialize in helping our clients understand the intricacies of the DMCC and its various regulations. Our services cover all aspects of compliance and corporate services, from the formation and registration of a new company to ongoing compliance and corporate services.
                        We provide ongoing compliance and corporate services to ensure that your company remains in good standing with the DMCC and other applicable laws and regulations. Our services include maintaining corporate records and accounts, filing annual returns and other required reports, and providing assistance with corporate governance and compliance. We also offer advice and guidance on matters such as company name changes, restructuring, and other corporate matters
                    </div>
                    <div className={styles.details18Open}>
                        <div className={cstyles.listBt}>
                            <div className={cstyles.wArrow}>
                                A.
                            </div>	<div>
                                Concordia Approval Assistance
                            </div>
                        </div>
                        <div className={cstyles.listBt}>
                            <div className={cstyles.wArrow}>
                                B.
                            </div>	 <div>License & Data Protection Renewal</div>
                        </div>
                        <div className={cstyles.listBt}>
                            <div className={cstyles.wArrow}>
                                C.
                            </div>	  <div>Visa/ Pro Services</div>
                        </div>
                        <div className={cstyles.listBt}>
                            <div className={cstyles.wArrow}>
                                D.
                            </div>	 <div>ESR Notification and Filing</div>
                        </div>
                        <div className={cstyles.listBt}>
                            <div className={cstyles.wArrow}>
                                E.
                            </div>	   <div>DMCC Annual Accounts Filing</div>
                        </div>

                    </div>

                </div>
                <div className={styles.RA_banner} data-aos="fade-left">
                    <BookCall path={"dmcc"} />
                </div>
            </div>


        </Container>
    )
}

export default Accounting_Banner2