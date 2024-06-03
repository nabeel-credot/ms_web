import React, { useEffect} from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Transaction.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from './TA_menu'
import LetsTalk from './TAS_Lets_talk2'
import Image from 'next/image'

import Container from '../Common/SliderContainer';
function Overview() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
        <div className={cstyles.overviewContainer}>
            <div data-aos="fade-right">
                <Menu />
            </div>
            <div className={cstyles.overviewContainerRight} data-aos="fade-left">

                <div className={styles.black_heading2}>
                    Due Diligence
                </div>
                <div className={styles.details24400Open} style={{ marginTop: 20 }}>
                    Financial due diligence is a process of verification and investigation of financial records for a potential deal to confirm all relevant facts and financial information, and to verify anything else that was brought up during an M&A transaction. Financial due diligence is completed before a transaction closes to provide the buyer with an assurance of what they’re getting. Issues and concerns identified during the financial due diligence exercise has varying impact on the valuation of the transaction.
                </div>
                <div className={styles.details32500} style={{ marginTop: 20 }}>
                    Buy-side Due Diligence
                </div>
                <div className={styles.details24400Open} style={{ marginTop: 20 }}>
                    We assist and advise the buyer in the transaction by undertaking and identifying key value drivers, risks and opportunities associated with the transaction. We identify and report any potential issues that the target business might be facing.
                </div>
                <div className={styles.details24600} style={{ marginTop: 20 }}>
                    To help you achieve the transaction objective, KPI can help you with
                </div>
                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                        <span className={cstyles.key+" "+styles.keyWidth}>Enhancing your understanding of the targets business</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                        <span className={cstyles.key+" "+styles.keyWidth}>Identify and understand critical success factors</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                        <span className={cstyles.key+" "+styles.keyWidth}>Identify potential synergies going forward and weaknesses/ threats that should be resolved
                        </span>
                    </li>
                </ul>

                <div className={styles.details32500} style={{ marginTop: 20 }}>
                Sell-side Due Diligence
                </div>

                <div className={styles.details24400Open} style={{ marginTop: 20 }}>
                Also known as Vendor due diligence, it is usually undertaken by the seller highlighting the financial strength of the business or division put up for sale. A third-party vendor due diligence report detailing in-depth financial health of the seller provides a greater degree of assurance to the buyer.
                </div>

                <div className={styles.details24600} style={{ marginTop: 20 }}>
                    To help you achieve the transaction objective, KPI can help you with
                </div>
                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                        <span className={cstyles.key+" "+styles.keyWidth}>Providing greater control over the entire sale process thereby helping obtain deserving value for the business</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                        <span className={cstyles.key+" "+styles.keyWidth}>Providing the buyer with higher level of comfort over the nature of business and the characteristics of its cash flow.</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                        <span className={cstyles.key+" "+styles.keyWidth}>Vendor due diligence report aids buyer and thereby reducing the buyers time on significant access to due diligence
                        </span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={13} height={23} className={styles.wArrow} /></div>
                        <span className={cstyles.key+" "+styles.keyWidth}>Identification of potential critical areas that could be fixed before the potential sale
                        </span>
                    </li>

                </ul>

                <div style={{ marginTop: 40 }}>
                    <LetsTalk />
                </div>


            </div>

        </div>
        </Container>
    )
}

export default Overview