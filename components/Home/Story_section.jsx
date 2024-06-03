import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Button from "../ButtonYellow"
import styles from "./Services.module.css"
import Container from '../Common/Container';
function Story_section() {

  useEffect(() => {
    AOS.init({
        duration: 1400,
        once: false
    })
}, []);

  return (
    <Container>
    <div className={styles.Story_section_container} data-aos="fade-up">
      <div className={styles.Story_section_Head}>
        Our mission
      </div>
      <div className={styles.Story_section_details}>
        “<span style={{ color: "#D4AE31" }}>Our mission</span> is clear –to not only stimulate business creation and sustainable economic development by providing advisory services to entrepreneurs and business, but also to incite an open dialogue between local communities and foreign companies with the ultimate goal of improving both. With your support, our mission will be possible”

      </div>
      <div className={styles.Story_section_MS}>-MS</div>
      <div className={styles.webOnlyStory} style={{ marginTop: 40 }}>
        <Button value="Start the Conversation" backgroundColor="#D4AE31" color="#192B3A" width="420px"
          height="79px" src="/images/LarrowB.svg" href="tel: +97123093344"  call={true}/>
      </div>
      <div className={styles.mobOnlyStory} style={{ marginTop: 30 }}>
        <Button value="Start the Conversation" backgroundColor="#D4AE31" color="#192B3A" width="273px"
       src="/images/LarrowB.svg" href="tel: +97123093344" call={true} style={{padding:10}} />
      </div>
    </div>
    </Container>
  )
}

export default Story_section