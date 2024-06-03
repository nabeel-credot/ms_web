import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Lets_talk.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Button from '../ButtonYellow'

import Container from '../Common/Container';
function Lets_talk() {

  useEffect(()=>{
    AOS.init({
      duration: 1400,
            once: false
    });
  },[])

  return (
    <Container>
    <div className={cstyles.letsTalk_container} data-aos="fade-up">
      <div className={cstyles.letsTalk_container_L + " " + styles.webOnly}>
        <Image src="/images/logo3.svg" alt="" width={182} height={181} />
      </div>
      <div className={cstyles.letsTalk_container_L + " " + styles.mobOnly}>
        <Image src="/images/logo3.svg" alt="" width={92} height={91} />
      </div>
      <div className={cstyles.letsTalk_container_R}>
        <div className={styles.details24400W+" "+cstyles.spclWidth}>We can help you to kick start your Business Idea!</div>
        <div className={cstyles.webOnly} style={{ marginTop: 20 }}>
          <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="244px"
            height="73px" src="/images/LarrowB.svg" href="/contact" />
        </div>
        <div className={cstyles.mobOnly} style={{ marginTop: 20 }}>
          <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="211px"
            height="50px" src="/images/LarrowB.svg" href="/contact" />
        </div>
      </div>
    </div>
    </Container>
  )
}

export default Lets_talk