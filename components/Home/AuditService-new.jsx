import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Audit.module.css";

import Bstyles from "./Awards.module.css";

import YellowBorderCard from "../YellowBorderCard";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Container from "../Common/Container";
import Image from "next/image";
function AuditService() {
  const [box, setBox] = useState(0);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    dotsClass: Bstyles.button__bar,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
          initialSlide: 0,
          infinite: true,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.main_boxes}>
          {/* <d1iv className={styles.main_box} onMouseEnter={() => setBox(1)}>
            <div className={styles.img1}>
              <Image
                src="/images/adgm_logoB.png"
                alt=""
                width={42}
                height={38}
              />
            </div>
            <div className={styles.img2}>
              <Image
                src="/images/adgm_logo.svg"
                alt=""
                width={42}
                height={38}
              />
            </div>
            MS at ADGM
          </d1iv> */}
          <div className={styles.main_box} onMouseEnter={() => setBox(2)}>
            <div className={styles.img1}>
              <Image
                src="/images/dmcc_logo.svg"
                alt=""
                width={32}
                height={30}
              />
            </div>
            <div className={styles.img2}>
              <Image
                src="/images/dmcc_logoW.png"
                alt=""
                width={32}
                height={30}
              />
            </div>
            MS at DMCC
          </div>
          <div className={styles.main_box} onMouseEnter={() => setBox(3)}>
            <div className={styles.img1}>
              <Image
                src="/images/masdar_logo.svg"
                alt=""
                width={32}
                height={30}
              />
            </div>
            <div className={styles.img2}>
              <Image
                src="/images/masdar_logoW.png"
                alt=""
                width={32}
                height={30}
              />
            </div>
            MS at Masdar
          </div>
        </div>
        {box == 2 ? (
          <div className={styles.audit_container}>
            <div className={styles.audit_right} data-aos="fade-right">
              <div className={styles.audit_heading}>
                <h3>MS at DMCC</h3>
              </div>
              <div className={styles.audit_detail}>
                Looking to set up your business in Dubai? Look no further than
                DMCC Freezone! With world-class infrastructure, a thriving
                business community, and strategic location, DMCC Freezone is the
                perfect place to grow your business in Dubai. Our
                state-of-the-art facilities, exceptional services, and
                supportive environment make us the ideal choice for
                entrepreneurs and businesses of all sizes. Start your journey
                with DMCC Freezone today and unlock your business potential in
                the heart of Dubai!
              </div>
              {/* <div className={styles.exploreLink}>
            <Link href="/other_services">Explore</Link>
          </div> */}
            </div>

            <div className={styles.audit_left} data-aos="fade-left">
              <div className={styles.box}>
                <YellowBorderCard
                  src="/images/icons 5-09.png"
                  title={
                    <>
                      DMCC Freezone
                      <br /> Setup Services
                    </>
                  }
                  href="/dmcc-freezone-setup-services"
                />
              </div>
              <div className={styles.box}>
                <YellowBorderCard
                  src="/images/ADGM_Compliance_Filings.png"
                  title={
                    <>
                      DMCC Compliance &<br /> Corporate Services
                    </>
                  }
                  href="/dmcc-compliance-and-corporate-services"
                />
              </div>
              <div className={styles.box}>
                <YellowBorderCard
                  src="/images/Management_Advisory_Assistance.png"
                  title={
                    <>
                      Management Advisory <br />& Assistance
                    </>
                  }
                  href="/management-advisory-and-assistance-dmcc"
                />
              </div>
              <div className={styles.box}>
                <YellowBorderCard
                  src="/images/Bank_account_opening.png"
                  title={
                    <>
                      DMCC Business
                      <br /> Bank Account Setup Assistance
                    </>
                  }
                  href="/dmcc-business-bank-account-setup-assistance"
                />
              </div>
            </div>
          </div>
        ) : box == 3 ? (
          <div className={styles.audit_container}>
            <div className={styles.audit_right} data-aos="fade-right">
              <div className={styles.audit_heading}>
                <h3>MS at MASDAR</h3>
              </div>
              <div className={styles.audit_detail}>
                Looking to set up your business in the UAE? Masdar City Free
                Zone offers a strategic location, favorable regulations, and a
                unique sustainable living environment for start-ups and
                established companies alike.
              </div>
              {/* <div className={styles.exploreLink}>
           <Link href="/other_services">Explore</Link>
         </div> */}
            </div>

            <div className={styles.audit_left} data-aos="fade-left">
              <div className={styles.box}>
                <YellowBorderCard
                  src="/images/icons 5-09.png"
                  title={
                    <>
                      {" "}
                      MASDAR Incorporation Compliance
                      <br /> and corporate services
                    </>
                  }
                  href="/masdar-incorporation-compliance-and-corporate-services"
                />
              </div>
              <div className={styles.box}>
                <YellowBorderCard
                  src="/images/Management_Advisory_Assistance.png"
                  title={<>Management Advisory</>}
                  href="/masdar-management-advisory"
                />
              </div>
              <div className={styles.box}>
                <YellowBorderCard
                  src="/images/Bank_account_opening.png"
                  title={<>Bank Account Opening Assistance</>}
                  href="/masdar-assistance-in-bank-account-opening"
                />
              </div>
            </div>
          </div>
        ) : (<></>
          // <div1 className={styles.audit_container}>
          //   <div className={styles.audit_right} data-aos="fade-right">
          //     <div className={styles.audit_heading}>
          //       <h3>MS at ADGM</h3>
          //     </div>
          //     <div className={styles.audit_detail}>
          //       MS can be your Setup-Specialist when you want to setup a new
          //       company in the Abu Dhabi Global Market (ADGM), UAE. With
          //       tailored focus on providing advisory and incorporation
          //       assistance for companies from all over the world, to set and
          //       expand one&apos;s roots in ADGM, we provide multifaceted
          //       services from incorporation assistance to helping the companies
          //       stay compliant when it comes to the ADGM annual filings, AML
          //       rules and reportings. Having a great team and solid expertise,
          //       we can ensure a fast, streamlined and hassle-free process in
          //       bringing your companies to the ADGM.
          //     </div>
          //     {/* <div className={styles.exploreLink}>
          //   <Link href="/other_services">Explore</Link>
          // </div> */}
          //   </div>

          //   <div className={styles.audit_left} data-aos="fade-left">
          //     <div className={styles.box}>
          //       <YellowBorderCard
          //         src="/images/Setup.png"
          //         title={<>Setup in ADGM </>}
          //         href="/#abu-dhabi-global-market-uae"
          //       />
          //     </div>
          //     <div className={styles.box}>
          //       <YellowBorderCard
          //         src="/images/ADGM_compliance.png"
          //         title={
          //           <>
          //             Help me with
          //             <br /> ADGM compliances
          //           </>
          //         }
          //         href="/adgm-compliance-filings"
          //       />
          //     </div>
          //     <div className={styles.box}>
          //       <YellowBorderCard
          //         src="/images/audit3.svg"
          //         title={
          //           <>
          //             ADGM process
          //             <br /> advisory
          //           </>
          //         }
          //         href="/incorporation-advisory-and-assistance"
          //       />
          //     </div>
          //     <div className={styles.box}>
          //       <YellowBorderCard
          //         src="/images/audit4.svg"
          //         title={
          //           <>
          //             Help my Company
          //             <br /> Grow
          //           </>
          //         }
          //         href="/e-commerce-startup"
          //       />
          //     </div>
          //   </div>
          // </div1>
        )}
      </div>

      <div className={styles.mobOnly}>
        {box == 2 ? (
          <Slider
            {...settings}
            className={styles.mobOnly}
            style={{ marginTop: 30 }}
          >
            <div>
              <YellowBorderCard
                src="/images/icons 5-09.png"
                title={
                  <>
                    DMCC Freezone <br />
                    Setup Services
                  </>
                }
                href="/dmcc-freezone-setup-services"
              />
            </div>
            <div>
              <YellowBorderCard
                src="/images/ADGM_Compliance_Filings.png"
                title={
                  <>
                    DMCC Compliance &<br /> Corporate Services
                  </>
                }
                href="/dmcc-compliance-and-corporate-services"
              />
            </div>
            <div>
              <YellowBorderCard
                src="/images/Management_Advisory_Assistance.png"
                title={
                  <>
                    Management Advisory <br />& Assistance
                  </>
                }
                href="/management-advisory-and-assistance-dmcc"
              />
            </div>
            <div>
              <YellowBorderCard
                src="/images/Bank_account_opening.png"
                title={
                  <>
                    DMCC Business
                    <br /> Bank Account Setup Assistance
                  </>
                }
                href="/dmcc-business-bank-account-setup-assistance"
              />
            </div>
          </Slider>
        ) : box == 3 ? (
          <Slider
            {...settings}
            className={styles.mobOnly}
            style={{ marginTop: 30 }}
          >
            <div>
              <YellowBorderCard
                src="/images/icons 5-09.png"
                title={
                  <>
                    MASDAR Incorporation Compliance
                    <br /> And Corporate Services{" "}
                  </>
                }
                href="/masdar-incorporation-compliance-and-corporate-services"
              />
            </div>
            <div>
              <YellowBorderCard
                src="/images/Management_Advisory_Assistance.png"
                title={<>Management Advisory</>}
                href="/masdar-management-advisory"
              />
            </div>
            <div>
              <YellowBorderCard
                src="/images/Bank_account_opening.png"
                title={<>Bank Account Opening Assistance</>}
                href="/masdar-assistance-in-bank-account-opening"
              />
            </div>
          </Slider>
        ) : (
          <Slider
            {...settings}
            className={styles.mobOnly}
            style={{ marginTop: 30 }}
          >
            <div>
              <YellowBorderCard
                src="/images/audit1.svg"
                title={<>Setup in ADGM </>}
                href="/#abu-dhabi-global-market-uae"
              />
            </div>
            <div>
              <YellowBorderCard
                src="/images/audit2.svg"
                title={
                  <>
                    Help me with
                    <br /> ADGM compliances
                  </>
                }
                href="/adgm-compliance-filings"
              />
            </div>
            <div>
              <YellowBorderCard
                src="/images/audit3.svg"
                title={
                  <>
                    ADGM process
                    <br /> advisory
                  </>
                }
                href="/incorporation-advisory-and-assistance"
              />
            </div>
            <div>
              <YellowBorderCard
                src="/images/audit4.svg"
                title={
                  <>
                    Help my Company
                    <br /> Grow
                  </>
                }
                href="/e-commerce-startup"
              />
            </div>
          </Slider>
        )}
      </div>
    </Container>
  );
}

export default AuditService;
