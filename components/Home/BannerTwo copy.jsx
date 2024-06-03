import React, { useEffect } from 'react'

import styles from "./BannerTwoC.module.css"


import AOS from 'aos';
import 'aos/dist/aos.css';

function BannerTwo() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false
    })
  }, []);


  return (
      <div className={styles.container}>
      <div className={styles.right} data-aos="fade-right"></div>

        <div className={styles.left} data-aos="fade-left">
        <h2>Your Tax Consultant in Abu Dhabi & Dubai (UAE)</h2>
          <div className={styles.content}>
            <div>
            Everyone either wants to reduce the amount of tax they pay or maximize their tax refund. Everybody also wishes that someone could take care of all the paperwork. This is where our role as your tax consultant comes into picture!
              <div />
              <div>
              Many businesses in the UAE face several challenges while trying to understand the tax structure and implementing the same in their sector. Here comes our  role if you choose MS as your tax consultant UAE who can help and support your business.
                <div />     
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BannerTwo