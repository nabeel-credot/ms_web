import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./Styles.module.css";
import Image from "next/image";
import Link from "next/link";

import Container from "../Common/Container";
function Team_msian_Sub1() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);
  return (
    <Container>
      <div className={styles.Team_msian_Sub1} data-aos="fade-up">
        <div className={styles.Team_msian_Sub1L}>
          <div className={styles.founder + " " + styles.textCntrMob}>
            About Founder
          </div>
          <div
            className={styles.black36_heading + " " + styles.textCntrMob}
            style={{ marginTop: 10 }}
          >
            MOHAMMED SHAFEEK ACA,CIFE
          </div>
          <div
            className={styles.details20Open400 + " " + styles.textCntrMob}
            style={{ marginTop: 10 }}
          >
            Founder & CEO
          </div>
          {/* <div className={styles.details24400Open+" "+styles.textCntrMob} style={{ marginTop: 30 }}>
          Mohammed Shafeek is the Founder and CEO of MS. Mohammed Shafeek is a Chartered Accountant from India and holds BA (Hons) in sustainable performance management from Manchester Metropolitan University, UK. He also holds diploma and advance diploma in management accounting from CIMA, UK.Shafeek founded MS in 2017 and it is his vision,spirit and strong hunger for success that are pillars to this popular approach of MS and its outstanding client delivery.
        </div> */}
          <div
            className={styles.details24400Open + " " + styles.textCntrMob}
            style={{ marginTop: 30 }}
          >
            Founder and CEO of MS, Mohammed Shafeek is a Professional Chartered
            Accountant from India. He holds a BA in Sustainable Performance
            Management from Manchester Metropolitan University, UK, along with
            accreditation of Advanced Diploma in Management Accounting from
            CIMA, UK. In his role as the pioneer head of MS since 2017, Shafeek
            exemplifies his vision, spirit, and passion in his approach to
            clients.
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div className={styles.linkedinWrap}>
              <Link
                href="https://www.linkedin.com/in/shafeekmohammed/"
                prefetch={false}
              >
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/linkedin.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.linkedinWrap}>
              <Link
                href="https://twitter.com/Iam_MSian?t=sXyf4xMfK2Ev_m6CnSlZIg&s=09"
                prefetch={false}
              >
                <a target="_blank">
                  <Image
                    src="/images/layer1.svg"
                    alt=""
                    width={30}
                    height={24.7}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.linkedinWrap}>
              <Link
                href="https://instagram.com/iam_msian?igshid=MzRlODBiNWFlZA=="
                prefetch={false}
              >
                <a target="_blank">
                  <Image
                    src="/images/insta.svg"
                    alt=""
                    width={30}
                    height={24.7}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.Team_msian_Sub1R}>
          <div className={styles.webOnly}>
            <Image
            src="/images/ceo-newimage.png"
              // src="/images/founderImg.png"
              width={518}
              height={597.5}
              alt=""
              objectFit="cover"
            />
          </div>
          <div className={styles.mobOnly}>
            <Image
              src="/images/photo-ceo.png"
              // src="/images/founderImgMob.png"
              width={145}
              height={166}
              alt=""
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Team_msian_Sub1;
