import React, { useEffect } from "react";
import cstyles from "./Blue_Lets_talk.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../ButtonYellow";
import Image from "next/image";
import Link from "next/link";
import Download from "./Download";
// import Download from "./components/Accounting&Bookkeeping/Download"
import Container from "../Common/Container";
function TAS_Lets_talk({ service }) {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

 
  return (
    <Container>
      <div className={cstyles.TAS_Lets_talk_container2} data-aos="fade-up">
        <div className={cstyles.TAS_Lets_talk_container2L}>
        
          <div className={cstyles.details24500 + " " + cstyles.textCntrMob}>
            Explore more about DIFC.
          </div>
          <div className={cstyles.details20Open400TAS}>
            Access essential documents and insights about Dubai International
            Financial Centre (DIFC) to stay informed about its pivotal role
            in global finance
          </div>
         
            <div className={cstyles.webOnly} style={{ position: "relative",marginTop: 35,width:"278px" }}>
              <a href="/files/DIFC _ MS.pdf" download className={cstyles.downloadbtn}>
                  <>Download</>
                <div className={cstyles.arrow}>
                <Image src="/images/LarrowB.svg" alt="" width={20} height={20}/>
                </div>
              </a>
            </div>
          {/* </div> */}
          <div className={cstyles.mobOnly} style={{ marginTop: 24,position: "relative" }}>
          <a href="/files/DIFC _ MS.pdf" download style={{position:"absolute",inset:"0"}}></a>
                    <Button value="Download" backgroundColor="#D5AF32" color="#192B3A" width="180px"
                                height="40px" src="/images/LarrowB.svg" style={{ pointerEvents: "none" }} />                    </div>
        </div>
        <div className={cstyles.TAS_Lets_talk_container2RMain}>
          <div className={cstyles.detail16Po} style={{ marginBottom: 10 }}>
            Speak to Our Team
          </div>
          <div className={cstyles.TAS_Lets_talk_container2R}>
            <div className={cstyles.TAS_Lets_talk_container2R_img}>
              {/* <div className={cstyles.img}>  */}

              <Image src="/images/logo3.svg" alt="" layout="fill" />
              {/* </div> */}
            </div>

            <div className={cstyles.TAS_Lets_talk_container2R_content}>
              <div
                className={cstyles.details20500Y}
                style={{ marginBottom: 15 }}
              >
                Customer Support
              </div>
              {/* <div className={cstyles.detail16Po400} style={{ marginBottom: 10 }}>Founder & CEO, MS</div> */}
              <div className={cstyles.tasDF}>
                <div className={cstyles.icon}>
                  <Image src="/images/PhoneB1w.svg" alt="" layout="fill" />
                </div>

                <div className={cstyles.detailsTas}>
                  <Link href="tel:+97148357270">+97148357270</Link>
                </div>
              </div>
              <div className={cstyles.tasDF}>
                <div className={cstyles.icon}>
                  <Image src="/images/MailBw.svg" alt="" layout="fill" />
                </div>
                <div className={cstyles.detailsTas}>
                  {" "}
                  <Link href="mailto:info@ms-ca.com">info@ms-ca.com</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TAS_Lets_talk;
