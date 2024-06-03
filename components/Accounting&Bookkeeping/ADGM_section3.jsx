import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import cstyles from "./Styles.module.css"

import styles from "./ADGM.module.css"
import Image from 'next/image'



import Container from '../Common/Container';
function Corporate_section2() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
        <div className={styles.corporate3_container}  data-aos="fade-up">

            <div className={cstyles.details24400+" "+cstyles.spclPadding2}>
            Acquiring the license is not the only requirement for being registered under the ADGM Registration Authority. Office space is mandatory to get your entity functioning. 

            </div>
            <div style={{ marginTop: 30 }} className={cstyles.heading30B}>
            Documents Reqired for the Incorporation
            </div>
            <div className={styles.adgmSec3}>
                <ul>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} /></div>
                        <span className={styles.key + " " + cstyles.details15400B + " " + cstyles.keyWidth}>Copy of passport, visa page or immigration entry stamp and Emirates ID of the director(s), secretary, and shareholder(s)</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} /></div>
                        <span className={styles.key + " " + cstyles.details15400B+ " " + cstyles.keyWidth}>Application form for reservation of the proposed name of the company </span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15}  /></div>
                        <span className={styles.key + " " + cstyles.details15400B+ " " + cstyles.keyWidth}>Copy of business plan</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15}  /></div>
                        <span className={styles.key + " " + cstyles.details15400B+ " " + cstyles.keyWidth}>Statement of capital and initial shareholding, for companies limited by shares
                        </span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15}  /></div>
                        <span className={styles.key + " " + cstyles.details15400B+ " " + cstyles.keyWidth}> Statement of guarantee, for companies limited by guarantee</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15}  /></div>
                        <span className={styles.key + " " + cstyles.details15400B+ " " + cstyles.keyWidth}> Statement of proposed officers of the entity</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} /></div>
                        <span className={styles.key + " " + cstyles.details15400B+ " " + cstyles.keyWidth}> Trade name reservation document</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} /></div>
                        <span className={styles.key + " " + cstyles.details15400B+ " " + cstyles.keyWidth}>  A statement with the intended address of the proposed company</span>
                    </li> <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} /></div>
                        <span className={styles.key + " " + cstyles.details15400B+ " " + cstyles.keyWidth}>  Copy of Articles of Association (AOA) and resolution of the board of directors</span>
                    </li> <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15}  /></div>
                        <span className={styles.key + " " + cstyles.details15400B+ " " + cstyles.keyWidth}> A copy of the lease agreement for the office space</span>
                    </li> <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15}  /></div>
                        <span className={styles.key + " " + cstyles.details15400B+ " " + cstyles.keyWidth}>Confirmation of restricted scope of the company</span>
                    </li> <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} /></div>
                        <span className={styles.key + " " + cstyles.details15400B+ " " + cstyles.keyWidth}>Duly filled and signed data protection form</span>
                    </li> <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15}  /></div>
                        <span className={styles.key + " " + cstyles.details15400B+ " " + cstyles.keyWidth}> Duly filled and signed beneficiary or ultimate owner form</span>
                    </li> <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} /></div>
                        <span className={styles.key + " " + cstyles.details15400B+ " " + cstyles.keyWidth}> Any other documents that may be required by the authorities, based on the scope of activities that the company would be undertaking</span>
                    </li>
                </ul>
            </div>

           
        </div>
        </Container>
    )
}

export default Corporate_section2