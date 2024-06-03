import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'
import Container from '../Common/Container';
function ESR_section() {

    useEffect(() => {
        AOS.init({
          duration: 1400,
          once: false,
        })
      }, []);

      
    return (
        <Container>
        <div className={styles.accounting_service_container} data-aos="fade-up">
            <div className={styles.white_heading + " " + styles.textCntr}>
                What should you be doing now?
            </div>

            <div className={styles.esrSection_sub} style={{marginTop:20}}>

                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key+" "+styles.keyWidth }> Assess what Relevant Activities it has performed during the financial period (applying a “substance over form” approach).</span>
                    </li>

                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key+" "+styles.keyWidth }>Assess the amount and type of income earned (if any) from the Relevant Activity during the financial period.</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key+" "+styles.keyWidth }>Hold board meetings with a quorum of directors physically present in the UAE.</span>
                    </li>

                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key+" "+styles.keyWidth }>Ensure board meeting minutes are signed and maintained in the UAE.</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key+ " " + styles.keyWidth}>Identify the amount and type of expenses and UAE based assets (incl. premises) in respect of the Relevant Activity, and ensure access to assets (incl. premises) can be demonstrated (through agreements and financial records).</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key+" "+styles.keyWidth }>Identify the number of UAE based full-time employees or other personnel (and their qualifications) responsible for carrying on the Licensee’s Relevant Activity; and</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key+" "+styles.keyWidth }> Ensure control and supervision over any outsourcing arrangements can be demonstrated, e.g. through contractual agreements</span>
                    </li>
                </ul>
            </div>

            <div className={styles.marginT60}>
          <div className={styles.service_title}>
          To ensure the Economic Substance Test is conducted accurately, an entity can look for qualified professional help to assess the impact of economic substance that entity has on UAE. Before the end of the financial period, an entity must make sure to consider the list of matters (mentioned above) and report to its relevant regulatory authority in accordance with its requirements.
          </div>
          <div className={styles.service_title}>
          UAE businesses are expected to use a “substance over form” approach, based on the economic substance doctrine to determine whether they undertake a Relevant Activity and, as a result, fall within the scope of the Economic Substance Regulations. To make this determination, Licensees should not only consider the activities stated in their commercial license or registration certificates but also assess the activities carried out during a financial period.
          </div>
         
        </div>



        </div>
        </Container>
    )
}

export default ESR_section