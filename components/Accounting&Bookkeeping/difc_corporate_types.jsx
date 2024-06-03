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
    head: "Financial",
    content:
      "Establishing a regulated firm in the Dubai International Financial Centre (DIFC) involves, engaging in a thorough application process overseen by the Dubai Financial Services Authority. Firms must undergo the DFSA's comprehensive authorization and supervision procedures, which includes various financial activities such as investment advisory, asset management, brokerage, and wholesale banking.",
},

  {
   num:"02",
    head: "Non-Financial",
    content:
      "Establishing a Non – Financial company within the Dubai International Financial Centre (DIFC) follows a simplified process without certain financial regulations. These businesses operate without direct oversight in sectors that don't require it, leading to an easier application process and fostering a business-friendly atmosphere in the DIFC.",
  },
  {
   num:"03",
    head: "Fintech and Innovation",
    content:
      "The DIFC Innovation License serves as a platform for forward-thinking technology companies across different sectors, granting them access to technological advancements throughout the MEASA region. Designed as a Commercial License with a subsidized fee structure, the DIFC Innovation License is accessible to all technology and innovation firms, supporting growth at every phase.",
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
        <div style={{paddingTop:"80px"}}>
          <div className={styles.assistTitle_corp}><span>Types of Business under <span style={{fontWeight:"500"}}>DIFC</span></span></div>
        </div>
      </div>
      <div className={styles.parentwrapper_corp} data-aos="fade-up">
       {assistContents.map((item,index)=>{
        return( 
        <div className={styles.purpleContainer} key={index}  >
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
          <div className={styles.assistTitle_corp} data-aos="fade-up"><span>Types of Business under <br/><span style={{fontWeight:"500"}}>DIFC</span></span></div>
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
        <div className={styles.purpleContainer} key={index}  onClick={() => toggleParagraph(index)}>
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