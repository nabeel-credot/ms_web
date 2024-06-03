import React from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image";
import Link from "next/link";
function Ourgoal() {
  return (
    <div className={styles.goalContainer}>
      <Container>
        <div className={styles.goalWrapper}>
          <div className={styles.goalPara} data-aos="fade-right">
            <div className={styles.goaltitle}> Here&apos;s How You Can Be a Part</div>
            <p>
              We want to reach out to small businesses, understand the hurdles
              they face during the transition, evaluate their eligibility with
              the help of a dedicated review committee, and provide tailored
              support within our top-notch service framework, which will not be
              an added burden to your wallet.To join this initiative, your
              business needs to be:
            </p>
            <p className={styles.goalboldpara}>
              Don&apos;t miss out!
              <br />
              Convert your license for free before it&apos;s too late.
            </p>
            <a href="https://b32xcmv9byo.typeform.com/to/P1bIZyFG">
              <div className={styles.wingswebonly}>
                <button className={styles.settingbtn}>
                  <span>Start Your Assessment</span>
                </button>
              </div>
            </a>
          </div>
          <div className={styles.goalRight} data-aos="fade-left">
            <div className={styles.goalcirclediv}>
              <div className={styles.goalimagecontainer}>
                <div className={styles.goalimagewrap}>
                  <Image src="/images/goaltick.svg" layout="fill" />
                </div>
              </div>
              <p>Retail-Focused Business.</p>
            </div>
            <div className={styles.goalcirclediv}>
              <div className={styles.goalimagecontainer}>
                <div className={styles.goalimagewrap}>
                  <Image src="/images/goaltick.svg" layout="fill" />
                </div>
              </div>
              <p>Must be located on Al Reem Island.</p>
            </div>
            <div className={styles.goalcirclediv}>
              <div className={styles.goalimagecontainer}>
                <div className={styles.goalimagewrap}>
                  <Image src="/images/goaltick.svg" layout="fill" />
                </div>
              </div>
              <p>Annual turnover below AED 2,000,000 (Assessed via VAT returns/Financial Statements).</p>
            </div>
            <div className={styles.goalcirclediv}>
              <div className={styles.goalimagecontainer}>
                <div className={styles.goalimagewrap}>
                  <Image src="/images/goaltick.svg" layout="fill" />
                </div>
              </div>
              <p>Independent business, not affiliated with any chain or group.</p>
            </div>
          </div>
          <a href="https://b32xcmv9byo.typeform.com/to/P1bIZyFG">
            <div className={styles.mobwingsonly}>
              <button className={styles.settingbtn}>
                <span>Start Your Assessment</span>
              </button>
            </div>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Ourgoal;
