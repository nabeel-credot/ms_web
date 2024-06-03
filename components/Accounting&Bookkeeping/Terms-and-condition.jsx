import React, { useEffect } from "react";
import styles from "./Styles.module.css";
import cstyles from "./ADGM.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BookCall from "./BookConsultationCall";

import Container from "../Common/Container";
import Image from "next/image";

function Accounting_Banner2() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <Container>
      <div>
        <div
          className={styles.acountingBanner_container}
          style={{ paddingBottom: "20px" }}
        >
          <div className={styles.FAS_Banner_left} data-aos="fade-right">
            <div className={styles.black36_heading_audit}>Binding Effect</div>
            <div
              style={{ marginTop: "15px", marginBottom: "30px" }}
              className={styles.details18Open}
            >
              Upon submission of your completed online registration form, you
              are considered ‘registered’. Please note that by submitting your
              registration, you agree to these Terms without modification, and
              you enter a binding contract with us when you register for the
              Event (including if the Event is free of charge).
            </div>
            <div className={styles.black36_heading_audit}>
              Programmes Changes
            </div>
            <div
              style={{ marginTop: "15px", marginBottom: "30px" }}
              className={styles.details18Open}
            >
              It may be necessary to change the activities, content and timing
              of the programme, the date or the time at any time prior to the
              Event. In that case, we will notify you and you will be given the
              opportunity to cancel your registration. Should you decide to
              cancel your registration for these grounds, we are not responsible
              nor liable for any costs and/or expenses you may incur due to the
              cancellation of your registration.
            </div>
            <div className={styles.black36_heading_audit}>
              Registration Confirmation
            </div>
            <div
              style={{ marginTop: "15px", marginBottom: "30px" }}
              className={styles.details18Open}
            >
              You agree and understand that your registration for the Event is
              subject to our confirmation that will be sent to you via email. We
              are entitled to deny your registration without cause.
            </div>

            <div className={styles.black36_heading_audit}>Data Protection</div>
            <div
              style={{ marginTop: "15px", marginBottom: "30px" }}
              className={styles.details18Open}
            >
              By registering and/or by participating to the Event wherever
              physically or virtually via video conferencing or web conferencing
              platforms/tools, you acknowledge that your personal data will be
              collected and processed by us in order to organize such Event and
              manage your participation, as further detailed in our Privacy
              Notice for Events, which you acknowledge having read.
            </div>
          </div>
        </div>
        <div className={styles.black36_heading_audit}>
          Photography And Filming
        </div>
        <div style={{ marginTop: "15px" }} className={styles.details18Open}>
          By registering and/or by participating to the Event wherever
          physically or virtually via video conferencing or web conferencing
          platforms/tools, you acknowledge that certain sessions and/or social
          functions may be, photographed and/or filmed and/or web streamed and
          that some of these photos and video recordings can be used for the
          minutes of Event/meeting, news, promotional purposes, future marketing
          materials, illustration, information and dissemination activities.
        </div>

        <div className={styles.black36_heading_audit}>Conduct At The Event</div>
        <div style={{ marginTop: "15px" }} className={styles.details18Open}>
          We are dedicated to making the Event a safe place for all.
        </div>
        <div style={{ marginTop: "15px" }} className={styles.details18Open}>
          You shall not display any content, adopt a conduct, or incite any
          person to commit an act, which:
        </div>

        <div className={cstyles.ADGM_newSectionFlexR}>
          <ul>
            <li>
              <div className={cstyles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={9}
                  height={15}
                  className={styles.wArrow}
                />
              </div>
              <div className={cstyles.yArrow}>
                {" "}
                <Image src="/images/LarrowY.svg" alt="" width={9} height={15} />
              </div>
              <span className={cstyles.key + " " + styles.keyWidth}>
                Is threatening, libellous, defamatory, or obscene.
              </span>
            </li>
            <li>
              <div className={cstyles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={9}
                  height={15}
                  className={styles.wArrow}
                />
              </div>
              <div className={cstyles.yArrow}>
                {" "}
                <Image src="/images/LarrowY.svg" alt="" width={9} height={15} />
              </div>
              <span className={cstyles.key + " " + styles.keyWidth}>
                Would constitute a criminal offense, give rise to civil
                liability, or otherwise violate law in any manner.
              </span>
            </li>
            <li>
              <div className={cstyles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={9}
                  height={15}
                  className={styles.wArrow}
                />
              </div>
              <div className={cstyles.yArrow}>
                {" "}
                <Image src="/images/LarrowY.svg" alt="" width={9} height={15} />
              </div>
              <span className={cstyles.key + " " + styles.keyWidth}>
                Infringes the intellectual property, privacy, or other rights of
                any third parties; or
              </span>
            </li>
            <li>
              <div className={cstyles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={9}
                  height={15}
                  className={styles.wArrow}
                />
              </div>
              <div className={cstyles.yArrow}>
                {" "}
                <Image src="/images/LarrowY.svg" alt="" width={9} height={15} />
              </div>
              <span className={cstyles.key + " " + styles.keyWidth}>
                constitutes or contains false or misleading statements.
              </span>
            </li>
          </ul>
        </div>
        <div
          style={{ marginTop: "10px", marginBottom: "30px" }}
          className={styles.details18Open}
        >
          You consent also not to hack or use our infrastructure for unethical,
          illegal or malicious activities. We may at any time, with or without
          giving notice, in our absolute discretion, rescind your registration
          or attendance at the Event in case of violation of these Terms without
          incurring any liabilities to you and/or any third party. In such
          event, all paid Event fees will not be reimbursed, and all Event fees
          shall remain due.
        </div>
      </div>

      <div className={styles.black36_heading_audit}>Liability</div>
      <div
        style={{ marginTop: "15px", marginBottom: "30px" }}
        className={styles.details18Open}
      >
        You are required to keep your personal belongings (including your
        computer and/or other devices) with you and we accept no liability for
        damage to, or loss of, personal belongings. We do not accept any
        liability for any loss (including, without limitation, theft) occasioned
        on our premises and/or on any premises of any Event being staged at
        external venues save for any damages caused directly by our negligence
        in which circumstances.
      </div>

      <div className={styles.black36_heading_audit}>Contact Us</div>
      <div style={{ marginTop: "15px" }} className={styles.details18Open}>
        For further clarification regarding the events and activities or its
        rules and regulations or receive information concerning that, please
        contact us at info@ms-ca.com.
      </div>
    </Container>
  );
}

export default Accounting_Banner2;
