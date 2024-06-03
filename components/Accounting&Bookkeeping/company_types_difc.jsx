import React ,{ useState} from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Image from "next/image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import Appointment from "./Appointment_schedule";

const assistContents = [
  {
    icon:"/images/authorised_difc.svg",
    head: "Authorised Firms",
    content:
      "To operate in Dubai's financial hub, the DIFC, individuals or entities must obtain a license from the DFSA as an Authorized Firm. These firms offer services like banking, asset management, and Islamic finance, depending on their category.",
},

  {
   icon:"/images/authorised_market_difc.svg",
    head: "Authorised Market Institution",
    content:
      "Authorised Firms in the Dubai International Financial Centre (DIFC) cannot operate exchanges or clearing houses. ",
  },
  {
   icon:"/images/designated_NF_difc.svg",
    head: "Designated Non-Financial Business  or Profession",
    content:
      "DNFBP in Dubai's DIFC are exclusively allowed for DFSA-registered entities. These can be formed as corporate bodies or partnerships, either within DIFC or as branch offices for external entities.",
  },
  {
    icon:"/images/registered_auditord_difc.svg",
     head: "Registered Auditors",
     content:
       "Registered Auditors in the Dubai International Financial Centre (DIFC) assure compliance with financial reporting standards, maintaining transparency for investor confidence.",
   },
   {
    icon:"/images/Non_regulated_difc.svg",
     head: "Non-Regulated Entities",
     content:
       "Non-regulated entities in Dubai, exempt from financial services regulation by the Dubai Financial Services Authority (DFSA), cover businesses involved in outsourcing or processing within the Dubai International Financial Centre (DIFC). ",
   },
   {
    icon:"/images/Exempt_company.svg",
     head: "Exempt Companies (SPC’s)",
     content:
       "Special Purpose Companies (SPCs) in the Dubai International Financial Centre (DIFC) are unregulated entities functioning exclusively as Special Purpose Vehicles (SPVs) for specific activities.",
   },
];
export default function Ms_assist() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const slider = React.useRef(null);
  const [sliderContent, setSliderContent] = useState(null);
    const settings = {
      infinite: true,
      speed: 200,
      slidesToShow: 1,
       centerPadding: "50px",
     
      slidesToScroll: 1,
      // autoplay: true,
      dots:true,
      // arrows: false,
      loop: true,
      cssEase: 'linear', 
      // prevArrow: <NextArrow />,
      // nextArrow: <PrevArrow />,
      
    };
  return (
    <Container>
    <div className={styles.assistweb}>
      <div className={styles.ms_assist_wrapper}>
      <div style={{paddingTop:"80px"}}>
        <div className={styles.assistTitle_corp} data-aos="fade-up"><span>Types of Companies in <br/><span style={{fontWeight:"500"}}>DIFC</span></span></div>
        </div>
      </div>
      <div className={styles.parentwrapper_corp} data-aos="fade-up">
       {assistContents.map((item,index)=>{
        return( 
        <div className={styles.purpleContainer_difcservice} key={index}>
          <div className={styles.assistimgs}>  
          <Image 
          src={item.icon}
          layout="fill" alt={item?.head}/>
          </div>
            <p className={styles.assistheaddifc} style={{fontWeight:"600"}}>{item?.head}</p>
            <p className={styles.assistcontent}>{item?.content}</p>
                     </div>)
        
       })
        }
      </div>
    </div>

    {/* mobile */}
    <div className={styles.assistmobil}>
        <div style={{paddingTop:"40px"}}>
    <div className={styles.assistTitle_corp} data-aos="fade-up"><span>Types of Companies in <br/><span style={{fontWeight:"500"}}>DIFC</span></span></div>
    <div className={styles.parentwrapper_corp} data-aos="fade-up">
    <Slider ref={slider} {...settings}>
    {assistContents.map((item,index)=>{
        return( 
        <div className={styles.purpleContainer_difcservice} key={index}>
          <div className={styles.assistimgs}>  
          <Image 
          src={item.icon}
          layout="fill" alt={item?.head}/>
          </div>
            <p className={styles.assistheaddifc} style={{fontWeight:"600"}}>{item?.head}</p>
            <p className={styles.assistcontent}>{item?.content}</p>
                     </div>)
        
       })
        }
      </Slider>
      </div>
      </div>
      </div>
    </Container>
  );
}
