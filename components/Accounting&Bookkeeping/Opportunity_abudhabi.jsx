import React, { useState } from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import Appointment from "./Appointment_schedule";
function Opportunity_abudhabi() {
  const [appoint, setAppoint] = useState(false);

  const card = [
    {
      title: "Strategic Location",
      content:
        "Situated at the crossroads of Asia, Europe, and Africa with 33% of the world just a 4-hour flight away and 80% of the world reachable with an 8-hour flight, the emirate offers world-class infrastructure and connectivity across four time zones.",
      image: "/images/Strategic Location.webp",
    },
    {
      title: "Access To Capital",
      content:
        "Abu Dhabi, the UAE's capital and largest emirate, offers easy access to government services and major corporations. As home to ADIA, one of the world's largest sovereign wealth funds like ADIA, MUBADLA and ADQ, it provides investment opportunities for strategic partnerships and co-investments. ",
      image: "/images/Access to capital.webp",
    },
    {
      title: "Quality Of Life",
      content:
        "Abu Dhabi is renowned as the safest city in the world and the happiest in the Middle East. Culturally, it boasts the world's most diverse population, with over 200 different nationalities calling Abu Dhabi home. Additionally, Abu Dhabi hosts top academic institutions and advanced healthcare facilities.",
      image: "/images/Quality of Life.webp",
    },
    {
      title: "Ease Of Doing Business",
      content:
        "Abu Dhabi is dedicated to supporting the success of private-sector enterprises. Beyond offering long-term residency visas, full foreign ownership, and favourable tax rates, Abu Dhabi actively implements policy and regulatory reforms to align with the pace of innovation, facilitating your ongoing growth.",
      image: "/images/Ease of Dong Business.webp",
    },
    {
      title: "Infrastructure",
      content:
        "Abu Dhabi boasts state-of-the-art transport systems that easily connects you across the Emirate, the region, and the world. Its high-quality, efficient domestic infrastructure empowers you to operate your business at its full potential.",
      image: "/images/infrastructure.webp",
    },
    {
      title: "Innovation",
      content:
        "In Abu Dhabi, it is believed that innovation is critical for sustainable success. The city supports big thinkers, innovators, and forward-thinking companies. Ranked as the smartest city in the Middle East, Abu Dhabi is home to various entities supporting innovation such as Hub71, ADRDA, MBZUAI, and more.",
      image: "/images/Innovation .webp",
    },
    {
      title: "Free Zones",
      content:
        "Abu Dhabi is ranked first for the ease of doing business in the MENA region. Free zones like the Abu Dhabi Global Market, Masdar, KEZAD, and TwoFour54 provide a regulatory environment tailored for specific industries, encouraging innovation and fostering growth in targeted sectors.",
      image: "/images/freezone1.webp",
    },
  ];

  const [cardIndex, setCardIndex] = useState(card ? 0 : null);

  const handleChange = (type) => {
    if (type === 1) {
      if (cardIndex >= card.length - 1) {
        setCardIndex(0);
      } else {
        setCardIndex((i) => i + 1);
      }
    } else if (type === -1) {
      if (cardIndex <= 0) {
        setCardIndex(card.length - 1);
      } else {
        setCardIndex((i) => i - 1);
      }
    }
  };

  return (
    <div className={styles.adgmabudhabiContainer}>
      <Container>
        <div className={styles.outerbenifitContainer_adgm}>
          <div className={styles.benifitleft}data-aos="fade-right">
            <div className={styles.benfitTitle} >
              <span style={{ fontWeight: "500" }}>Abu Dhabi </span>
              <br /> Gateway to Success
              {/* <br /> opportunities in Abu Dhabi */}
            </div>
            <p className={styles.benifitpara}>
            Located in the heart of Arabia, Abu Dhabi is home to more than 200 nationalities. It aspires to be a global financial hub, a growing innovation hub, a leading energy producer, and a world-class tourist destination and cultural center. Beyond financial gains, the Emirate&apos;s commitment to sustainability enhances its appeal, ensuring long-term environmental and economic benefits. Accounting for 60% of the UAE&apos;s total economy, Abu Dhabi boasts world-class human capital across various levels and specialties, supported by a best-in-class regulatory environment. With one of the world&apos;s most diverse populations, the Emirate offers an excellent quality of life. Ranked 2nd in the MENA region and 12th in the world for ease of doing business, Abu Dhabi is an ideal location for companies and businesses to invest, innovate, and prosper.
            </p>
            <div className={styles.iconContainer}>
              <div className={styles.singleIconsection}>
                <div>
                  {" "}
                  <Image src="/images/Group (3).svg" width={80} height={60} alt=""/>
                </div>
                {/* <div> <Image src="/images/icon1.svg" width={90} height={80} /></div> */}
                <p
                  style={{ color: "rgba(167, 124, 60, 1)", paddingTop: "15px" }}
                >
                  for ease of <br /> doing business
                </p>
                <p>in the MENA region</p>
              </div>

              <div className={styles.singleIconsection}>
                <div style={{ minHeight: "50px", minWidth: "55px" }}>
                  <Image src="/images/Group (2).svg" width={80} height={60} alt=""/>
                </div>
                <p
                  style={{ color: "rgba(167, 124, 60, 1)", paddingTop: "15px"}}
                >
                  in WEF&apos;s Global
                  <br /> Competitiveness Index
                </p>
                <p>in the Middle East</p>
              </div>

              <div className={styles.singleIconsection}>
                <div style={{ minHeight: "50px", minWidth: "55px" }}>
                  <Image src="/images/Group (1).svg" width={80} height={60} alt=""/>
                </div>
                <p
                  style={{ color: "rgba(167, 124, 60, 1)", paddingTop: "15px" }}
                >
                  The safest city
                  <br />
                  <br />
                </p>
                <p>in the World</p>
              </div>

              <div className={styles.singleIconsection}>
                <div style={{ minHeight: "50px", minWidth: "55px" }}>
                  <Image
                    src="/images/image 275 (1).svg"
                    width={80}
                    height={60}
                    alt=""
                  />
                </div>
                <p
                  style={{ color: "rgba(167, 124, 60, 1)", paddingTop: "15px" }}
                >
                  The smartest city
                  <br />
                  <br />
                </p>
                <p>in the Middle East</p>
              </div>
            </div>
            {/* <div className={styles.Adgmbtndiv}>
              {" "}
               <button
                className={styles.settingbtn_opp}
                onClick={() => setAppoint(true)}
              >
                <span> Setting up in ADGM</span>
              </button> 
            </div> */}
          </div>
          <div className={styles.benifitright} data-aos="fade-left">
            {cardIndex !== null ? (
              <Card
                image={card[cardIndex]?.image}
                title={card[cardIndex]?.title}
                content={card[cardIndex]?.content}
              />
            ) : null}
            <div
              onClick={() => handleChange(1)}
              className={styles.nextbtn} 
              // style={{ position: "absolute", right: 0, top: "50%" }}
            >
              <IoMdArrowDropright style={{ fontSize: "30px" }} />
            </div>
            {cardIndex !== null ? (
              <div
                onClick={() => handleChange(-1)}
                className={styles.prevbtn}
                // style={{ position: "absolute", left: 0, top: "50%" }}
              >
                <IoMdArrowDropleft style={{ fontSize: "30px" }} />
              </div>
            ) : null}
          </div>
        </div>
      </Container>
      <div className={styles.mobile_slide_banner}>
        <Image src="/images/responsive2.webp" width={400} height={300} alt=""/>
      </div>
      {appoint && (
        <div className={styles.appointwrapper}>
          {" "}
          <Appointment appoint={appoint} setAppoint={setAppoint} />
        </div>
      )}
    </div>
  );
}

function Card({ image, title, content }) {
  return (
    <div className={styles.slidercontainer} style={{ position: "relative" }}>
      <span className={styles.slidertitle} style={{ paddingLeft: "20px" }}>
        Why Abu Dhabi?
      </span>
      <div 
      // className={styles.sliderinnercontainer}
      >
        <div
        // className={styles.slideImagediv}
        >
          <Image
            src={image}
            width={512}
            height={447}
            style={{ maxHeight: "400px",objectFit:"contain",borderTopLeftRadius:"14px",borderTopRightRadius:"14px" }}
            alt=""
          />
        </div>

        <div className={styles.adgm_slidercontents} >
          <h3 className={styles.slidertitle}>{title}</h3>
          <p className={styles.y_abudhabi}>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Opportunity_abudhabi;