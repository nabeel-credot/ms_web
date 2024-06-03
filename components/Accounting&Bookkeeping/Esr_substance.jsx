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
    num:"01",
    head: "Reporting Economic Substance for DIFC Entities",
    content:
      "DIFC companies engaged in relevant activities within the UAE must annually submit an Economic Substance Report to the DIFC Registrar of Companies. This report is due within 12 months of the financial year-end and should encompass comprehensive information on economic activity, income, expenses, and assets. Additionally, companies are required to declare the fulfilment of the economic substance test in the report.",
},

  {
   num:"02",
    head: "Consequences of Non-Submission of Notification to DIFC Registrar",
    content:
      "Failure of UAE companies to submit the Economic Substance Regulations (ESR) notification may result in fines starting from AED 20,000. Furthermore, DIFC entities are subject to penalties up to USD 25,000, in accordance with Article 31(2) of the Operating Law, DIFC Law No. 7 of 2018, for non-compliance with Registrar requirements.",
  },
  {
   num:"03",
    head: "Consequences of Submitting Incomplete or Inaccurate Information",
    content:
      "Under the UAE Economic Substance Regulations, mainland, free zone, offshore, and DIFC entities may face fines of up to AED 50,000 for furnishing false or incomplete details in the Economic Substance Regulations (ESR) notification.",
  },
];
export default function Ms_assist() {
  const [appoint, setAppoint] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const slider = React.useRef(null);
  const [sliderContent, setSliderContent] = useState(null);
  const [show,setShow]=useState(false)
  const [showParagraphs, setShowParagraphs] = useState(Array(assistContents.length).fill(false));

  const toggleParagraph = (index) => {
    const newShowParagraphs = [...showParagraphs];
    newShowParagraphs[index] = !newShowParagraphs[index];
    setShowParagraphs(newShowParagraphs);
  };
  const handleClick=()=>{
    console.log("click");
    setShow(!show)
}

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
      <div className={styles.ms_assist_wrapper} data-aos="fade-up">
      </div>
      <div className={styles.parentwrapper_corp} data-aos="fade-up">
       {assistContents.map((item,index)=>{
        return( 
        <div className={styles.grayContainer} key={index}  >
         <div className={styles.purple_divnum}>
          <div className={styles.difcnum}>
              {item?.num}
            </div>
            
            </div>
           
            <div>
            <p className={styles.assistheaddifc} style={{fontWeight:"500"}}>{item?.head}</p>
            <p className={styles.assistcontent}>{item?.content}</p></div>
                     </div>)
        
       })
        }
      </div>
   
    </div>

    {/* mobile */}
   <div className={styles.mobileOnlybenifit}>
   <div className={styles.ms_assist_wrapper}>
        <div style={{paddingTop:"40px"}}>
        </div>
        {/* <div className={styles.purpleContainer}>
            <div className={styles.difcnum}>
               01
            </div>
           <p className={styles.assistheaddifc} style={{fontWeight:"500"}}>World-Class Financial Ecosystem</p>
          <p>
          DIFC is recognized as a world-class financial centre, attracting multinational corporations, banks, asset management firms, law firms, and more, providing unparalleled opportunities for growth and success.
          </p>
        </div> */}
      </div>
      <div className={styles.parentwrapper_corp} data-aos="fade-up">
       {assistContents.map((item,index)=>{
        return( 
        <div className={styles.grayContainer} key={index}  onClick={() => toggleParagraph(index)}>
         <div className={styles.purple_divnum} >
          <div className={styles.difcnum}>
              {item?.num}
            </div>
            {!showParagraphs[index] && <p className={styles.mob_difchead}>{item?.head}</p>}
            {!showParagraphs[index]?<IoMdArrowDropdown style={{fontSize:"30px"}} />:<IoMdArrowDropup style={{fontSize:"30px"}} onClick={handleClick}/>}
            </div>
            {showParagraphs[index] && 
            <div>
            <p className={styles.assistheaddifc} style={{fontWeight:"500"}}>{item?.head}</p>
            <p className={styles.assistcontent}>{item?.content}</p></div>}
                     </div>)
        
       })
        }
      </div>
   </div>
    </Container>
  );
}