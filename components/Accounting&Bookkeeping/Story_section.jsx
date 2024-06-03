import React, { useEffect } from "react";
import styles from "./Styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BookCall from "./BookConsultationCall";

import Sub from "./Enterprise_sub1";

import Container from "../Common/Container";
function Accounting_Banner2(props) {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <Container>
      <div className={styles.acountingBanner_container}>
        <div className={styles.payrollBanner_sub_container}>
          <div className={styles.FAS_Banner_left} data-aos="fade-right">
            {/* <div className={styles.payrollBanner_heading+" "+styles.webOnly} >
              A life dedicated to helping
              <br />
              <span style={{ color: "#D4AE31" }}>
                entrepreneurs & businesses
                <br /> succeed
              </span>
            </div>
             <div className={styles.payrollBanner_heading+" "+styles.mobOnly} >
              A life dedicated to helping
             
              <span style={{ color: "#D4AE31" ,marginLeft:5}}>
                entrepreneurs & businesses
               succeed
              </span>
            </div> */}

            <div className={styles.payrollBanner_heading}>
            Unleash the power within, entrepreneur & business.
              </div>
            {/* <div
              style={{ marginTop: "20px" }}
              className={styles.details18Open600 }
            >
              Unleash the power within, entrepreneur & business.
            </div> */}

            <div
              style={{ marginTop: "20px" }}
              className={styles.details18Open }
            >
              Let’s get real. Before we start, let’s make it real and take it
              real. This is going to be a success story, that we together
              threaded with trust and dignity. So, it’s all about you, what you
              do and where you want to be. Located both in the sacred lands of
              the UAE and INDIA, our out-standing team of advisors share one
              fierce objective: to enable ambitious and driven individuals like
              you to succeed.
            </div>

            <div
              style={{ marginTop: "20px" }}
              className={styles.details18Open }
            >
              This is about unlocking and unleashing the business force that can
              help you to break through any limit and create the quality of
              business that you desire and deserve. There’s always a gap between
              where you are and where you want to be. Success is in where you
              fill this gap and let us hold your hand in walking down this lane.
              We are truly excited and privileged to have this opportunity to
              share with you the best of what we have learned about business.
              What you have and what we have might be different, but together,
              we shall make a perfect team, so that success walk to us without
              invitation.
            </div>

            <div
              style={{ marginTop: "20px" }}
              className={styles.details18Open }
            >
              Planning and rendering financial guidance can be an easy job. But
              planning it unique, and executing it innovative takes some good
              effort. Not everyone makes a perfect team, but we know, you and
              we, will definitely create a team that the world would get jealous
              upon.
            </div>

            <div
              style={{ marginTop: "20px" }}
              className={styles.details18Open }
            >
              We strongly believe that our success with so many entrepreneurs’
              rests upon our unique ability to empathize and understand them.
            </div>
            <div
              style={{ marginTop: "20px" }}
              className={styles.details18Open }
            >
              In 2015, our founder, C A Mohammed Shafeek, left his tax and
              advisory-focused position at a UAE based conglomerate to pursue
              his dream of creating a tax and business advisory firm focused on
              entrepreneurs & businesses to succeed. Since then he’s built a
              loyal team of directors and employees who support the clients
              throughout the various stages of their business’ journey.
              Presenting our humble and loyal team to the world gives us
              goosebumps because, all the stories we created was of success and
              nothing less than applaudable.
            </div>
            <div
              style={{ marginTop: "20px" }}
              className={styles.details18Open }
            >
              We’ve won multiple industry awards and have doubled in size
              expanding our client base within the United Arab Emirates.
            </div>
          </div>
          <div
            className={styles.acountingBanner2Book_right2}
            data-aos="fade-left"
          >
            <BookCall templateTitle={props.templateTitle} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Accounting_Banner2;
