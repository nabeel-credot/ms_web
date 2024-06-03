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
    <Container>
      <div className={styles.container} data-aos="fade-up">
        <h3 className={styles.heading}>
        How can MS add value?
        </h3>
        <div className={styles.serviceWrap2}>
          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>01</div>
            </div>
            <div className={styles.title}>
            Makes it easier to generate <br/>precise business predictions.
            </div>
          </div>

          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>02</div>
            </div>
            <div className={styles.title}>
            To comprehend the potential <br/>of your new project in terms of<br/>
             profitability, cash flow, and<br/> working capital requirements
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>03</div>
            </div>
            <div className={styles.title}>
            Helps in developing an <br/>effective financial statement<br/>
             that accurately depicts the<br/> company&apos;s finances and <br/>activities and to assist<br/>
              business assess the level of risk<br/> associated with decisions.
            </div>
          </div>

          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>04</div>
            </div>
            <div className={styles.title}>
            Periodic Performance <br/>Reviews.
            </div>
          </div>

          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>05</div>
            </div>
            <div className={styles.title}>
            Evaluate your funding needs<br/> and strategy.
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>06</div>
            </div>
            <div className={styles.title}>
            Facilitates Accurate <br/>Valuation.
            </div>
          </div>

          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>07</div>
            </div>
            <div className={styles.title}>
            Predicting finances, choosing<br/> a fund strategy and its needs.
            </div>
          </div>

          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>08</div>
            </div>
            <div className={styles.title}>
            Reducing hazards
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>09</div>
            </div>
            <div className={styles.title}>
            Capital allocation (choosing<br/> which projects to fund based<br/> on priority)
            </div>
          </div>

          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>10</div>
            </div>
            <div className={styles.title}>
            Examine potential mergers, <br/>acquisitions, and other<br/> prospects for corporate<br/> growth.
            </div>
          </div>

          <div className={styles.box+" "+styles.marginRight}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>11</div>
            </div>
            <div className={styles.title}>
            Recognize a company&apos;s<br/> motivating factors
            </div>
          </div>

        </div>
      </div>

    </Container>
  )
}

export default RA_IA_service