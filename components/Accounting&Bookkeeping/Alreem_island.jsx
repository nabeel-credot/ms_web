import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
function Alreem_island() {
  return (
    <Container>
      {" "}
      <div data-aos="fade-up">
        <div className={styles.island}>
        Two Islands, One Financial District
        </div>
        <p className={styles.islandpara}>
          In ADGM&apos;s expanded realms on Al Reem and Al Maryah Islands,
          professionals experience a harmonious work-life balance. Professionals
          enjoy thriving careers in dynamic business hubs amid vibrant
          communities and diverse recreation, enhancing overall well-being.
        </p>
        <div className={styles.islandWrapper}>
          <div className={styles.island_image1}>
            <div className={styles.island_head}>
              <span className={styles.island_title}>Work</span>
              <p className={styles.hovercontent}>
                Thrive professionally in ADGM&apos;s expanded landscape, offering
                diverse opportunities and a dynamic business environment on Al
                Reem and Al Maryah Islands.
              </p>
            </div>
          </div>

          <div className={styles.island_image2}>
            <div className={styles.island_head}>
              <span className={styles.island_title}>Learn</span>
              <p className={styles.hovercontent}>
                ADGM&apos;s growth provides an enriching environment for continuous
                learning and innovation, enhancing skills and knowledge in a
                dynamic ecosystem.
              </p>
            </div>
          </div>
          <div className={styles.island_image3}>
            <div className={styles.island_head}>
              <span className={styles.island_title}>Live</span>
              <p className={styles.hovercontent}>
                Embrace a vibrant lifestyle in ADGM&apos;s expanded districts on Al
                Reem and Al Maryah Islands, surrounded by lively communities and
                diverse recreation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Alreem_island;
