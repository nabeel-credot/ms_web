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

const Contents = [
  {
    num:"01",
    head: "Annual Accounts/Return",
    content:
      "Companies are required to keep records of any corporate changes and submit the annual return to the DIFC Registrar of Companies (ROC) within 7 months following the conclusion of the initial financial year.",
},

  {
   num:"02",
    head: "Annual Audit Accounts ",
    content:
      "This applies to companies with an annual turnover exceeding US$ 5 million or having more than 20 shareholders, with exemptions for certain corporate entities. ",
  },
  {
   num:"03",
    head: "Commercial License Renewal ",
    content:
      "Businesses within DIFC must undergo an annual renewal of their licenses. Staying vigilant about renewal dates and promptly initiating the renewal process is crucial to maintaining uninterrupted compliance with DIFC regulations.",
  },
  {
  num:"04",
  head: "Commercial License Renewal ",
  content:
    "To sustain their business licenses in DIFC, companies need to adhere to specific renewal prerequisites. Typically, valid for one year, DIFC business licenses necessitate annual renewal through the submission of an application, necessary documents, and payment of the renewal fee.",
},
{
    num:"05",
    head: "Data Protection Renewal",
    content:
      "Every DIFC company is required to register with the Commissioner of Data Protection during the licensing process and renew this registration annually thereafter.",
  },
];
export default function Ms_assist() {
  const [appoint, setAppoint] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const slider = React.useRef(null);
  const [sliderContent, setSliderContent] = useState(null);
  const [show,setShow]=useState(false)
  const [showParagraphs, setShowParagraphs] = useState(Array(Contents.length).fill(false));

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
        <div style={{paddingTop:"80px"}}>
          <div className={styles.assistTitle_corp}><span>Compliance Filings</span></div>
        </div>
      </div>
      <div className={styles.parentwrapper_corp} data-aos="fade-up">
       {Contents.map((item,index)=>{
        return( 
        <div className={styles.purpleContainer_compliance} key={index}  >
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
          <div className={styles.assistTitle_corp} data-aos="fade-up"><span>Compliance Filings</span></div>
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
       {Contents.map((item,index)=>{
        return( 
        <div className={styles.purpleContainer_compliance} key={index}  onClick={() => toggleParagraph(index)}>
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