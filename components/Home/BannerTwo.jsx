import React, { useEffect } from 'react'

import styles from "./BannerTwo.module.css"


import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';
function BannerTwo() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false
    })
  }, []);


  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.left} data-aos="fade-right">
          <h2 className={styles.heading}>
            Enhancing your ambition,<br />
            Defining your success
          </h2>
          <div className={styles.content}>
            <div>
              If you’re a business with vision and ambition, we are here to help you add perfection to your dream investment. Nested in the capital city of United Arab Emirates, our award winning team of advisers will get in to the skin of your business and determine what success means to you.
              <div />
              <div>
                It’s all about hands-on, proactive support that turns businesses into success stories. It just takes one great conversation to get the ball rolling in the right direction, so why not get in touch with us?
                <div />
                {/* <div>
                  Let’s create your stories together, vibrant and dynamic, just like us.
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right} data-aos="fade-left"></div>
      </div>
    </Container>

  )
}

export default BannerTwo