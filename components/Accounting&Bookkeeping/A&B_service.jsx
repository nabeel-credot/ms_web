import React, { useEffect } from 'react'
import styles from "./RA_Services.module.css"

import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';
function RA_IA_service() {

  useEffect(() => {
    AOS.init({
        duration: 1400,
        once: false,
    })
}, []);

  return (
    <Container style={{padding:0}}>
      <div className={styles.container}  data-aos="fade-up">
        <h3 className={styles.heading}>
        How our bookkeeping service works
        </h3>
        <div className={styles.serviceWrap}>
          <div className={styles.box}>
            <div className={styles.top+" "+styles.heightAB}>
              <div className={styles.logoAB}>
                <Image src="/images/ab1.svg" alt="" layout='fill'/>
              </div>
              <div className={styles.numAB1}>01</div>
            </div>
            <div className={styles.title}>
            We get you set up
            </div>
            <div className={styles.abDetails}>
            First, we’ll introduce you to a dedicated Project Manager. They’ll get to know your business, show you how MS works, and gather everything they need from you.
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top+" "+styles.heightAB}>
              <div className={styles.logo}>
                <Image src="/images/ab2.svg" alt="" width={93} height={96}/>
              </div>
              <div className={styles.numAB1}>02</div>
            </div>
            <div className={styles.title}>
            We do your book keeping
            </div>
            <div className={styles.abDetails}>
            Each month, your bookkeeper imports your business transactions and gets to work on your books. Need historical bookkeeping? We’ll handle that too.
              </div>

          </div>

          <div className={styles.box}>
            <div className={styles.top+" "+styles.heightAB}>
              <div className={styles.logo}>
                <Image src="/images/ab3.svg" alt="" width={77} height={96} />
              </div>
              <div className={styles.numAB1}>03</div>
            </div>
            <div className={styles.title}>
            We deliver tax-ready financials 
            </div>
            <div className={styles.abDetails}>
            Each month, your bookkeeper imports your business transactions and gets to work on your books. Need historical bookkeeping? We’ll handle that too.
              </div>
          </div>

        </div>
      </div>

    </Container>
  )
}

export default RA_IA_service