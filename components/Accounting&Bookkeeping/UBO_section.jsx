import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'
import Container from '../Common/Container';
function UBO_section() {
    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
        <div className={styles.accounting_service_container} data-aos="fade-up">
            <div className={styles.white_heading}>
                The Beneficial Owner of a company shall be
            </div>

            <div className={styles.uboSection_sub}>
                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key + " " + styles.keyWidth}>Any natural person who ultimately owns or controls or has the right to vote over at least 25% of the company’s share capital, whether through a direct or indirect chain of ownership or control, or any natural person who has the right to appoint or dismiss most of the directors of the company. </span>
                    </li>

                    <li style={{ marginTop: 20 }}>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key + " " + styles.keyWidth1}>If no natural person meets the criteria under point (a) above or if there are doubts as to the identity of the beneficial owner, the beneficial owner shall be any natural person who manages or administers the company; or</span>
                    </li>
                </ul>
                </div>

                <div className={styles.details18Open300} style={{color:"#FFFFFF",opacity:.8, marginBottom: 30, marginTop: 30 }}>
                    If no natural person satisfies both conditions above, then a natural person who is responsible for the senior management of the company will be deemed as the UBO. Entities will need to assess who constitutes a UBO and consider whether anyone is a nominee Director / Manager. The Register of Shareholders / Partners is not a new concept as this is a requirement outlined in the UAE Commercial Companies Law, as well as in respective Free Zone Companies Regulations. Although the Resolution requires additional information to be detailed (for example, voting rights).
                </div>

                <div className={styles.white_heading}>
                    Key Takeaways
                </div>

                <div className={styles.details18Open300} style={{color:"#FFFFFF",opacity:.8, marginBottom: 30, marginTop: 30 }}>
                All companies in the UAE, both mainland and free zone companies (with the exception of companies incorporated in the free zones (financial) and companies owned by the Federal Government and their subsidiaries), must now maintain at their office premises:
                </div>

               
                <div className={styles.uboSection_sub}>
                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key}>A shareholder register;</span>
                    </li>

                    <li style={{ marginTop: 20 }}>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key }>A register of beneficial owners; and</span>
                    </li>

                    <li style={{ marginTop: 20 }}>
                        <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                        <span className={styles.key }>A register of nominee directors.</span>
                    </li>
                </ul>
                </div>
        </div>
        </Container>
    )
}

export default UBO_section