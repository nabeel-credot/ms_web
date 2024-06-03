import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./MA.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

import Services from './FSA_services'
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
        <div className={styles.MA_section_container}>
            <div className={styles.MA_section} data-aos="fade-right">
                <div className={cstyles.black36_heading_audit}>
                Laying the Foundation for Your Company’s Future
                </div>

                <div className={cstyles.details18PoB500} style={{marginTop:20}}>
                We’re concerned about you! And your business!
                </div>
                
                <div className={cstyles.details18BlackPo400} style={{marginTop:20,marginBottom:20}}>
                Our dedicated MS professionals bring vast experience, specialized skills and deep industry knowledge in delivering the following services:
                </div>
                <ul>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={25} height={20} className={styles.wArrow} /></div>
                        <span className={styles.key+" "+styles.fsa_list_width }>
                        Business plans
                        </span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={25} height={20} className={styles.wArrow} /></div>
                        <span className={styles.key+" "+styles.fsa_list_width}>
                        Feasibility Studies
                        </span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={25} height={20} className={styles.wArrow} /></div>
                        <span className={styles.key+" "+styles.fsa_list_width2}>
                        Financial Projections
                            </span>
                    </li>

                </ul>
                
                <div className={cstyles.details18BlackPo400} style={{marginTop:20}}>
                With respect to the clients’ existing operations/ business, new projects, expansion plans, Mergers & Acquisitions, etc.
                </div>

            </div>
            <div  className={styles.MA_section2+" "+styles.marginT} data-aos="fade-left">
            <Image src="/images/npBg2.png" alt="" width="593" height="474" />
            </div>
            
        </div>
        </Container>
    )
}

export default Accounting_Banner2