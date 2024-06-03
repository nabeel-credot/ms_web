import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Smartup.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Button from '../ButtonYellowForm'

import Container from '../Common/Container';
function CBCR_section3({ resultRef }) {
  
    const onSubmit = (e) => {
        e.preventDefault();
        resultRef?.current?.scrollIntoView({ behavior: "smooth" });
      };
    
    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
        <div className={cstyles.CBCR_section3_container}>
            <div className={cstyles.CBCR_section_left} data-aos="fade-right">
                <Image src="/images/smartUpBg3.png" alt="" width={633} height={392} />
                {/* <Image src="/images/cbcrBg2.png" alt="" width="631" height="557"></Image> */}
            </div>
            <div className={cstyles.CBCR_section_right} data-aos="fade-left">
                <div className={cstyles.details24500 + " " + styles.ac2_detail1Width+" "+cstyles.marginT40} >
                    Taking up responsibilities on a single shoulder within the entrepreneurial journey makes things challenging.
                </div>
                <div className={styles.headingY24500+" "+cstyles.marginT50}>
                    How can I surpass the obstacles and pain points arising in between?
                </div>
                <div className={styles.webOnly4} style={{  marginTop: 60 }} onClick={onSubmit}>
                    <Button value="Help me to figure it out" backgroundColor="#D5AF32" color="#192B3A" width="382px"
                        height="75px" src="/images/LarrowB.svg" style={{fontSize:20}} arrowH={20} arrowW={12} />
                </div>
                <div className={styles.mobOnly4} style={{  marginTop: 30 }} onClick={onSubmit}>
                    <Button value="Help me to figure it out" backgroundColor="#D5AF32" color="#192B3A" width="265px"
                        height="50px" src="/images/LarrowB.svg"  />
                </div>
            </div>
        </div>
        </Container>
    )
}

export default CBCR_section3