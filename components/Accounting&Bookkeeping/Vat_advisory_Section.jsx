import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Advisory.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'
import Button from '../ButtonYellow'
import Container from '../Common/Container';
function Vat_advisory_Section() {

    useEffect(()=>{
        AOS.init({
          duration: 1900,
          once: false,
        })},[]);

    return (
        <Container>
        <div className={styles.Vat_advisory_Section_container} data-aos="fade-up">
            <div className={styles.Vat_advisory_Section_L}>
                <div className={cstyles.black36_heading}>However, wherever you lack, We got you!</div>
                <div className={cstyles.details18Open + " " + styles.vatDetails_width} style={{ marginTop: 20 }}>Managing VAT laws and regulations would pose an ongoing challenge for businesses. Additional VAT factors can come into the picture with changes in business scenarios such as the introduction of new services, the addition of new transactions to your business, or improvements to your supply chain structure. Both situations will require guidance and support from a business perspective, considering the VAT impact as well.</div>
                <div className={cstyles.details18Open + " " + styles.vatDetails_width} style={{ marginTop: 20 }}>MS provides client-focused advisory services on matters related to VAT. Our dedicated team of VAT experts will provide a variety of services like health check review, relevant VAT advice and will assist you on a variety of issues, including all aspects of VAT compliance.</div>
                <div className={cstyles.details18Open + " " + styles.vatDetails_width} style={{ marginTop: 20 }}>Furthermore, the new changes in the tax systems have increased the need to maintain a proper record of financial matters to pay tax on time. Yet it is not unusual for companies to be unfamiliar with VAT laws and regulations. It is also necessary to keep updated with the UAE VAT regulations to ensure the success of the businesses. Hence, hiring a meticulous VAT advisory service is essential to take care of these responsibilities.</div>
            </div>
            <div className={styles.Vat_advisory_Section_R}>
            <div className={styles.logoWrap}><Image src="/images/logo3.svg" alt=""layout='fill'/></div>
                <div className={styles.details24400W + " " + cstyles.textCntr} style={{ marginTop: 25 }}>Experience the visionary financial<br /> solutions by MSian’s</div>
                <div className={styles.webOnly} style={{ marginTop: 25 }}>
                        <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="244px"
                            height="73px" src="/images/LarrowB.svg" href="/contact" />
                    </div>
                    <div className={styles.mobOnly} style={{ marginTop: 25 }}>
                        <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="196px"
                            height="50px" src="/images/LarrowB.svg" href="/contact" />
                    </div>
            </div>
        </div>
        </Container>
    )
}

export default Vat_advisory_Section