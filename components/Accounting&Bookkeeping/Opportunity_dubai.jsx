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
        number: "01",
        content:
          "Dubai stands out as a prime location for trade, offering exceptional access to key markets spanning the Middle East, Africa, and South Asia. With major international airports and ports nearby, Dubai's global connectivity is unmatched, revolutionizing trade operations and expanding market reach.",
        image: "/images/y_dubai1.webp",
      },
      {
        title: "Made for trade terrain",
        number: "02",
        content:
          "To make your business boom, you should have a suitable environment to trade. Dubai provides all the resources you need to set up and expand your business without any flaws. A business-friendly government is also an add-on.",
        image: "/images/y_dubai2.webp",
      },
      {
        title: "Top-notch amenities",
        number: "03",
        content:
          "The place you run your business should have a foremost quality of life to aid you. There is no place like Dubai that has high-quality infrastructure, healthcare, and public spaces which can make your life better in all aspects.",
        image: "/images/y_dubai3.webp",
      },
      {
        title: "Stable Economy",
        number: "04",
        content:
          "Your business always relied on the economic stability of the place. Dubai's economy, which is among the most diverse and rapidly expanding in the world, offers a stable corporate environment.",
        image: "/images/y_dubai4.webp",
      },
      {
        title: "Tax- efficiency ",
        number: "05",
        content:
          "When diving into business, tax policies of the region are a crucial consideration. UAE boasts one of the most competitive tax systems globally with minimal income tax and VAT on residential property for business operating from a free zone. On top of that the corporate tax is a non-issue —it's a solid 0%.",
        image: "/images/y_dubai5.webp",
      },
      {
        title: "Safe to trade",
        number: "06",
        content:
          "The safer and secure environment of Dubai is apt for setting up a business and for the smooth running of the same. The city ranks as one of the safest places globally with low crime rates and strict law enforcement.",
        image: "/images/y_dubai6.webp",
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
    <div className={styles.difcdubaiContainer}>
      <Container>
        <div className={styles.outerbenifitContainer}>
          <div className={styles.benifitleft_difc}data-aos="fade-right">
            <div className={styles.benfitTitle_difc} >
              <span style={{ fontWeight: "500" }}>DUBAI </span>
              <br /> A Pathway to Success
              {/* <br /> opportunities in Abu Dhabi */}
            </div>
            <p className={styles.benifitpara}>
            Dubai, a thriving hub in the Middle East, provides an ideal environment for businesses to thrive. The city&apos;s economy is characterised by innovation, diversity, and prosperity, making it a hotspot for business enthusiasts seeking countless opportunities.<br/>
Dubai&apos;s Economic Landscape: Dubai has transformed into a global hub with a dynamic economic environment, thanks to its strategic location, state-of-the-art infrastructure, and pro-business government policies.
            </p>
            {/* <div className={styles.Adgmbtndiv}> */}
              {" "}
              <button
                className={styles.settingdifcbtn}
                onClick={() => setAppoint(true)}
              >
                <span> Setting up in DIFC</span>
              </button>
            {/* </div> */}
          </div>
          <div className={styles.benifitright_difc} data-aos="fade-left">
            {cardIndex !== null ? (
              <Card
                image={card[cardIndex]?.image}
                title={card[cardIndex]?.title}
                content={card[cardIndex]?.content}
              />
            ) : null}
            <div
              onClick={() => handleChange(1)}
              className={styles.nextbtn_difc} 
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
        <Image src="/images/y_dubaimob.webp" width={500} height={300} alt=""/>
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
        Why Dubai?
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