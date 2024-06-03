import React, { useState } from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Appointment from "./Appointment_schedule";
import Link from "next/link";
function Al_reemBanner() {
  const [appoint, setAppoint] = useState(false);
  return (
    <>
      <div className={styles.alreemBanner}>
        <div className={styles.contentdiv} data-aos="fade-left">
          <div className={styles.headalreem}>Al Reem Island Expansion</div>
          <p>
            Marking a significant milestone in its growth trajectory, Abu Dhabi
            Global Market (ADGM) has expanded its jurisdiction to encompass Al
            Reem Island, creating one of the world&apos;s most concentrated financial
            districts. This strategic move aligns seamlessly with ADGM&apos;s Growth
            Strategy, which envisions Abu Dhabi as a leading global financial
            hub, with its financial sector playing a pivotal role in driving
            economic diversification and growth. The expansion of ADGM&apos;s
            geographic footprint by tenfold through the inclusion of Al Reem
            Island presents a wealth of opportunities for international
            companies seeking to establish a presence in this dynamic and
            rapidly evolving financial centre.
          </p>
          <div className={styles.alreembtn}>
            <button
              className={styles.settingbtn}
              onClick={() => setAppoint(true)}
            >
              <span>Setting up in Al Reem Island</span>
            </button>
            <Link href="/al-reem">
              <button className={styles.discoverbtn}>
                <span>Discover Al Reem Island</span>
              </button>
            </Link>
          </div>
        </div>
        {appoint && (
          <div className={styles.appointwrapper}>
            {" "}
            <Appointment appoint={appoint} setAppoint={setAppoint} />
          </div>
        )}
      </div>
    </>
  );
}

export default Al_reemBanner;
