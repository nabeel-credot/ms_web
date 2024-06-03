import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./CBCR.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Container from '../Common/Container';
function CBCR_section() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
        <div className={cstyles.CBCR_sectioncontainer}>
            <div className={cstyles.CBCR_section_left} data-aos="fade-right">
                <div className={styles.black36_heading_audit}>
                    Transfer Pricing Solutions
                </div>
                <div className={styles.detail24CBCR}  style={{marginTop:20}}>
                    What our Transfer Pricing does.
                </div>
                <div className={styles.details18Open+" "+styles.detailWidth}  style={{marginTop:20}}>
                    MS Transfer Pricing helps companies <span className={styles.details18OpenY}>implement economically supportable transfer prices, document policies & respond to challenges.
                    </span>
                </div>
                <div className={styles.details18Open} style={{marginTop:20}}>
                Transfer Pricing is arguably the most important tax issues faced by international companies and tax administrations.
                </div>
                <div className={styles.details18OpenY}  style={{marginTop:20}}>
                This MS Tax Advisor will examine the principles of transfer pricing and its practical application by companies based in the MENA Region.
                </div>
            </div>
            <div className={cstyles.CBCR_section_right} data-aos="fade-left">
                <div  className={styles.black36_heading_audit}>
                Specific transfer pricing areas that will include:
                </div>
                <ul>
                    <li>
                    <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                    <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                    <span className={cstyles.key  + " " + styles.keyWidth}>Introduction and importance to multinational groups and tax administrations</span>
                    </li>

                    <li>
                    <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                    <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                    
                    <span className={cstyles.key  + " " + styles.keyWidth}>OECD guidelines, the BEPS project and approach in the MENA region</span>
                    </li>

                    <li>
                    <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                    <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                    <span className={cstyles.key  + " " + styles.keyWidth}>Legislative framework in the MENA region.</span>
                    </li>

                    <li>
                    <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                    <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                    <span className={cstyles.key  + " " + styles.keyWidth}>Arm’s length principle: Concept of comparability and the transfer pricing methods.</span>
                    </li>

                    <li>
                    <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                    <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                    <span className={cstyles.key  + " " + styles.keyWidth}>Transfer pricing documentation: Content, purpose, guidelines, master and local file, country by country reporting.</span>
                    </li>

                    <li>
                    <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
                    <div className={cstyles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={9} height={15}/></div>
                    <span className={cstyles.key  + " " + styles.keyWidth}> Transfer pricing dispute avoidance and resolution.</span>
                    </li>
                </ul>
            </div>
        </div>
        </Container>
    )
}

export default CBCR_section