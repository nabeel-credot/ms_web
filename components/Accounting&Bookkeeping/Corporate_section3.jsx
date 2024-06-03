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
      <div className={styles.containerCT+" "+styles.CTPadding}  data-aos="fade-up">
        <div className={styles.subContentsCT+" "+styles.marginBt}>
        The objective for this resolution is to cement UAE’s Position as a world-leading hub for businesses & investment. Meeting international standards for tax transparency and preventing harmful tax practices. And accelerating the UAE’s development & transformation to achieve strategic objectives.
        </div>
        <h3 className={styles.heading}>
        Key features that the FTA indicated:
        </h3>
        <div className={styles.serviceWrap}>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>01</div>
            </div>
            <div className={styles.title}>
            CT is not applicable to an individual’s income from employment, real estate, investment in shares, or other personal income not related to UAE trade or business.
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>02</div>
            </div>
            <div className={styles.title}>
            No withholding tax will be applied on domestic and cross-border payments.
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
            No CT will be applied for foreign investors that do not carry out any form of business in the UAE.
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>04</div>
            </div>
            <div className={styles.title}>
            No CT will apply on capital gains and dividends received by a UAE business from its qualifying shareholdings.

            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>05</div>
            </div>
            <div className={styles.title}>
            No CT will apply on qualifying intragroup transactions & restructurings.
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
            Foreign tax will be allowed to be credited against UAE corporate tax payable.
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>07</div>
            </div>
            <div className={styles.title}>
            Generous loss transfer and utilization rules will be available to business.
            </div>
          </div>

        </div>
        <div className={styles.subContentsCT+" "+styles.marginBt0+" "+styles.mobMar}  data-aos="fade-up">
        The United Arab Emirates (UAE) Ministry of Finance (Ministry) announced on 31 January 2022 that it will introduce a federal corporate tax regime for the first time in the UAE. Federal corporate tax law is expected to be issued by mid of the year along with executive regulations (CT Law).
        </div>
      </div>

    </Container>
  )
}

export default RA_IA_service