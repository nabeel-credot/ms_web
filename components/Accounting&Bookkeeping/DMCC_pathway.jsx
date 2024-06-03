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
        "It always matters where you are planning to trade. Dubai, a city which offers open access to major key markets including the Middle East, Africa, and South Asia should be your first choice and over that the proximity to major international airports and ports boost its global connectivity.",
      image: "/images/dmcc_dubai.svg",
    },
    {
      title: "Made for trade terrain",
      number: "02",
      content:
        "To make your business boom, you should have a suitable environment to trade. Dubai provides all the resources you need to set up and expand your business without any flaws. A business-friendly government is also an add-on.",
      image: "/images/dmcc_dubai.svg",
    },
    {
      title: "Top-notch amenities",
      number: "03",
      content:
        "The place you run your business should have a foremost quality of life to aid you. There is no place like Dubai that has high-quality infrastructure, healthcare, and public spaces which can make your life better in all aspects.",
      image: "/images/dmcc_dubai.svg",
    },
    {
      title: "Stable Economy",
      number: "04",
      content:
        "Your business always relied on the economic stability of the place. Dubai's economy, which is among the most diverse and rapidly expanding in the world, offers a stable corporate environment.",
      image: "/images/dmcc_dubai.svg",
    },
    {
      title: "Tax- efficiency ",
      number: "05",
      content:
        "When you start a business, you have an eye on the tax policies of the place. UAE boasts one of the most competitive tax systems globally with minimal income tax and VAT on residential property for business operating from a free zone. Besides, you don’t have to pay any corporate tax as the corporate tax rate of UAE is 0%.",
      image: "/images/dmcc_dubai.svg",
    },
    {
      title: "Safe to trade",
      number: "06",
      content:
        "The safer and secure environment of Dubai is apt for setting up a business and for the smooth running of the same. The city ranks as one of the safest places globally with low crime rates and strict law enforcement.",
      image: "/images/dmcc_dubai.svg",
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
      if(cardIndex<=0){
        setCardIndex(card.length-1)
      }
      else{
      setCardIndex((i) => i - 1);
    }}
  };

  return (
    
    <div className={styles.dmccdubaiContainer}>
        <div className={styles.web_dmcc}>
      <Container>
        <div className={styles.outerbenifitContainer} style={{paddingBottom:"70px"}}>
        <div className={styles.benifitright}>
            {cardIndex !== null ? (
              <Card
                image={card[cardIndex]?.image}
                title={card[cardIndex]?.title}
                content={card[cardIndex]?.content}
                number={card[cardIndex]?.number}
              />
            ) : null}
            <div
              onClick={() => handleChange(1)}
              className={styles.nextbtn_dmcc}
              // style={{ position: "absolute", right: 0, top: "50%" }}
            >
              <IoMdArrowDropright style={{ fontSize: "30px" }} />
            </div>
             {cardIndex !== null ? (
              <div
                onClick={() => handleChange(-1)}
                className={styles.prevbtn_dmcc}
                // style={{ position: "absolute", left: 0, top: "50%" }}
              >
                <IoMdArrowDropleft style={{ fontSize: "30px" }} />
              </div>
             ) : null}  
          </div>
          <div className={styles.benifitleft_dmcc}>
            <div className={styles.benfitTitle}>
            <div className={styles.dubai_dmcc}>DUBAI</div>
            <span style={{color:"white"}}>A Pathway to Success </span>
              {/* <br /> opportunities in Abu Dhabi */}
            </div>
            <p className={styles.benifitpara} style={{color:"white"}}>
            Dubai, a thriving hub in the Middle East, provides an ideal environment for businesses to thrive. The city&apos;s economy is characterised by innovation, diversity, and prosperity, making it a hotspot for business enthusiasts seeking countless opportunities.<br/>
Dubai&apos;s Economic Landscape: Dubai has transformed into a global hub with a dynamic economic environment, thanks to its strategic location, state-of-the-art infrastructure, and pro-business government policies.
            </p>
            {/* <div className={styles.Adgmbtndiv}> */}
              {" "}
              <button
                className={styles.settingbtn_dmcc_Pathway}
                onClick={() => setAppoint(true)}
              >
                <span> Setting up in Dubai</span>
              </button>
            {/* </div> */}
          </div>
         
        </div>
      </Container>
      {appoint && (
        <div className={styles.appointwrapper}>
          {" "}
          <Appointment appoint={appoint} setAppoint={setAppoint} />
        </div>
      )}
    </div>


    <div className={styles.mob_dmcc}>
      <Container>
        <div className={styles.outerbenifitContainer} style={{paddingBottom:"80px"}}>
          <div className={styles.benifitleft}>
            <div className={styles.benfitTitle_dmcc}>
            <div className={styles.dubai_dmcc}>DUBAI</div>
            <span style={{color:"white"}}>A Pathway to Success </span>
              {/* <br /> opportunities in Abu Dhabi */}
            </div>
            <p className={styles.benifitpara} style={{color:"white"}}>
            Dubai, a thriving hub in the Middle East, provides an ideal environment for businesses to thrive. The city&apos;s economy is characterised by innovation, diversity, and prosperity, making it a hotspot for business enthusiasts seeking countless opportunities.
Dubai&apos;s Economic Landscape: Dubai has transformed into a global hub with a dynamic economic environment, thanks to its strategic location, state-of-the-art infrastructure, and pro-business government policies.
            </p>
            {/* <div className={styles.Adgmbtndiv}> */}
              {" "}
              <button
                className={styles.settingbtn_dmcc_Pathway}
                onClick={() => setAppoint(true)}
              >
                <span> Setting up in Dubai</span>
              </button>
            {/* </div> */}
          </div>
          <div className={styles.benifitright_dmcc}>
            {cardIndex !== null ? (
              <Card
                image={card[cardIndex]?.image}
                title={card[cardIndex]?.title}
                content={card[cardIndex]?.content}
                number={card[cardIndex]?.number}
              />
            ) : null}
            <div
              onClick={() => handleChange(1)}
              className={styles.nextbtn_dmcc}
              // style={{ position: "absolute", right: 0, top: "50%" }}
            >
              <IoMdArrowDropright style={{ fontSize: "30px" }} />
            </div>
             {cardIndex !== null ? (
              <div
                onClick={() => handleChange(-1)}
                className={styles.prevbtn_dmcc}
                // style={{ position: "absolute", left: 0, top: "50%" }}
              >
                <IoMdArrowDropleft style={{ fontSize: "30px" }} />
              </div>
             ) : null}  
          </div>
        </div>
      </Container>
      {appoint && (
        <div className={styles.appointwrapper}>
          {" "}
          <Appointment appoint={appoint} setAppoint={setAppoint} />
        </div>
      )}
    </div>
    </div>
  );
}

function Card({ image, title, content,number }) {
  return (
    <div className={styles.slidercontainer_dmcc} >
      <div
      className={styles.sliderinnercontainer_dmcc}
        
      >
        <div
          className={styles.slideImagediv}
          // style={{ position: "absolute", inset: 0 }}
        >
          <div className={styles.titlewrapper_dmcc}>
          <span className={styles.slidertitle} style={{ paddingLeft: "20px" }}>
        Why Dubai
      </span>
      </div>
      <Image src={image} alt="why abu dhabi" width={512} height={540} />
        </div>
        <div className={styles.slidercontent_dmcc}>
            <span className={styles.slidernumber_dmcc}>{number}</span>
          <span className={styles.slidertitle_dmcc} style={{paddingLeft:"30px"}}>{title}</span>
          <p className={styles.y_abudhabi} style={{padding:"0 20px 0 20px"}}>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Opportunity_abudhabi;
