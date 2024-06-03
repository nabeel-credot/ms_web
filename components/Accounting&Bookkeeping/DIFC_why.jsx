import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import Image from 'next/image'
import cstyles from "./ADGM.module.css"
import Container from '../Common/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
function Corporate_section2() {
    
  useEffect(() => {
    AOS.init({
        duration: 1400,
        once: false,
    })
}, []);

    return (
        <Container>
        <div className={styles.corporate2_container} data-aos="fade-up"> 
        <div className={styles.whyms}>
            <div className={styles.msSection}>
            <div className={styles.black36_heading + " " + styles.spclWidth2} style={{marginBottom:20,fontSize:"46px",fontWeight:"600"}}>
            Why <Link href="/"><span style={{color:"rgb(212, 174, 49)",cursor:"pointer"}}> MS</span></Link> ?
            </div>
            <div className={styles.details18Open+" "+styles.spclPadding2}>
            Choose MS as your premier Corporate Service provider for expert Company formation in DIFC. With a demonstrated history of excellence and a dedicated team of specialists, we empower your business to excel in the dynamic DIFC environment. From initial setup to year-round financial services, we are your trusted choice for a seamless, hassle-free business journey in the DIFC. Our commitment to excellence, tailored solutions, and unwavering support makes us the top choice for your corporate needs. Experience the MS advantage and elevate your business to new heights in the Dubai International Financial Centre (DIFC).
            </div>
            </div>
            <div className={cstyles.imgWrap}>
                    <Image src="/images/difcimage.jpg" alt="" layout='fill' className={cstyles.borderR} />
                    </div>
            </div>
        </div>
        </Container>
    )
}

export default Corporate_section2