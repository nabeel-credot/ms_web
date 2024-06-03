import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Business.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'
import Container from '../Common/Container';
function Business_advisory_section() {
    
    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);
    return (
        <Container>
        <div className={styles.Business_advisory_section2}>
            <div className={styles.Business_advisory_section2_L}  data-aos="fade-right">
                <Image src="/images/corporateBg2.png" alt="" width={524} height={360} className={styles.br}  />
            </div>
            {/* <div className={styles.Business_advisory_section2_L+" "+styles.mobOnly}>
                <Image src="/images/corporateBg2.png" alt="" width={403} height={270} style={{borderTopRightRadius:50,borderBottomLeftRadius:50}} />
            </div> */}
            <div className={styles.Business_advisory_section2_R}  data-aos="fade-left">
                <div  className={cstyles.black36_heading_audit+" "+cstyles.textCntrMob}>
                    Why do you need Business Advisory?
                </div>
                <div  className={cstyles.details18Open} style={{marginTop:20}}>
                    No matter how experienced your team is, you cannot expect them to have all the skills and knowledge you need to equip your business, by keeping pace with the rapid change in the business environment. For growing businesses, exposed to new problems and opportunities, the need for timely and substantiated advice can be even greater.
                </div>
                <div className={cstyles.details18Open} style={{marginTop:20}}>
                Every business is different. It takes a lot to start a business and even more to grow it to profitability. It must be adaptive to changes to sustain today’s ever-changing business environment and strive to be smart, creative, and forward-thinking in both challenging and favorable economic conditions. This is where we come in as Business Advisors.
                </div>
            </div>
        </div>
        </Container>
    )
}

export default Business_advisory_section