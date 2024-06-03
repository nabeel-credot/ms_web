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
     head: "World-Class Financial Ecosystem",
     content:
       " DIFC is recognized as a world-class financial centre, attracting multinational corporations, banks, asset management firms, law firms, and more, providing unparalleled opportunities for growth and success.",
   },
  {
    num:"02",
    head: "Independent Courts System",
    content:
      "The Dubai International Financial Centre (DIFC) boasts an autonomous judicial system through its independent court and arbitration center (DCC). The DCC resolves disputes by adhering to its distinct set of laws and regulations, diverging from those of the UAE. By upholding the highest international standards of legal proceedings, DCC provides the flexibility and efficiency demanded by leading global financial institutions.",

    
    },

  {
   num:"03",
    head: "Cutting-Edge Infrastructure",
    content:
      "Modern office spaces and state-of-the-art infrastructure make DIFC an ideal environment for businesses to thrive.",
  },
  {
   num:"04",
    head: "Global Connectivity",
    content:
      "DIFC offers seamless access to international financial markets and services, making it a strategic gateway for businesses seeking to expand their global reach.",
  },
  {
    num:"05",
    head: "Asset Protection",
    content:
      "The DIFC provides a secure environment for assets and investments, with robust legal mechanisms for the protection of intellectual property and other assets.",
  },
  {
   num:"06",
    head: "100% Foreign Ownership and Freehold Property",
    content:
      "DIFC offers companies the opportunity to benefit from full ownership rights, including 100% foreign ownership of both companies and properties situated within designated zones.",
  },
  {
   num:"07",
    head: "International Recognition",
    content:
      "Establishing a presence in DIFC not only enhances the international standing of businesses but also solidifies their reputation, given DIFC's esteemed status as a premier global financial hub.",
  },
   {
    num:"08",
    head:"Global Talent Pool",
    content:"DIFC's stature as a financial and business hub attracts a diverse array of top-tier international talent, enriching its global talent pool."
   },{
    num:"09",
    head:"Innovation and Technology",
    content:"DIFC actively encourages innovation and technology-driven enterprises by offering initiatives and support for fintech and related sectors."
   }
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
        <div>
          <div className={styles.assistTitle}><span>Benefits of <span style={{fontWeight:"500"}}>DIFC</span></span></div>
          <p>
          DIFC, the Dubai International Financial Centre, is celebrated globally for its esteemed reputation as a premier financial hub. Renowned for its exceptional standards, it&apos;s recognized as a top hub, representing the highest level of financial skill and innovation.
          </p>
          <button className={styles.settingdifcbtn}  onClick={() => setAppoint(true)}>Setting up in DIFC</button>
        </div>
        {/* <div className={styles.purpleContainer}>
            <div className={styles.difcnum}>
               01
            </div>
           <p className={styles.assistheaddifc} style={{fontWeight:"600"}}>World-Class Financial Ecosystem</p>
          <p>
          DIFC is recognized as a world-class financial centre, attracting multinational corporations, banks, asset management firms, law firms, and more, providing unparalleled opportunities for growth and success.
          </p>
        </div> */}
      </div>
      <div className={styles.parentwrapper_benifit} data-aos="fade-up">
       {assistContents.map((item,index)=>{
        return( 
        <div className={styles.purpleContainer} key={index}  >
         <div className={styles.purple_divnum}>
          <div className={styles.difcnum}>
              {item?.num}
            </div>
            
            </div>
           
            <div>
            <p className={styles.assistheaddifc} style={{fontWeight:"600"}}>{item?.head}</p>
            <p className={styles.assistcontent}>{item?.content}</p></div>
                     </div>)
        
       })
        }
      </div>
      <div className={styles.mobile_slide_banner}>
        <Image src="/images/responsive2.webp"  width={400} height={300} />
      </div>
      {appoint && (
        <div className={styles.appointwrapper}>
          {" "}
          <Appointment appoint={appoint} setAppoint={setAppoint} />
        </div>
      )}
    </div>

    {/* mobile */}
   <div className={styles.mobileOnlybenifit}>
   <div className={styles.ms_assist_wrapper} data-aos="fade-up">
        <div>
          <div className={styles.assistTitle}><span>Benefits of <span style={{fontWeight:"500"}}>DIFC</span></span></div>
          <p>
          DIFC, the Dubai International Financial Centre, stands as a beacon of 
excellence in the world of finance. Renowned as a world-class financial centre
          </p>
          <button className={styles.settingdifcbtn}  onClick={() => setAppoint(true)}>Setting up in DIFC</button>
          {appoint && (
        <div className={styles.appointwrapper}>
          {" "}
          <Appointment appoint={appoint} setAppoint={setAppoint} />
        </div>
      )}
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
      <div className={styles.parentwrapper_benifit} data-aos="fade-up">
      {/* <div className={styles.purpleContainer} onClick={() => handleClick()}>
         <div className={styles.purple_divnum}>
          <div className={styles.difcnum}>
              01
            </div>
  
            {!show && <p className={styles.mob_difchead} >World-Class Financial Ecosystem</p>}
            <IoMdArrowDropdown/>
            </div>
            {show && 
            <div>
            <p className={styles.assistheaddifc} style={{fontWeight:"600"}} >World-Class Financial Ecosystem</p>
            <p className={styles.assistcontent}> DIFC is recognized as a world-class financial centre, attracting multinational corporations, banks, asset management firms, law firms, and more, providing unparalleled opportunities for growth and success.</p></div>}
                     </div> */}

       {assistContents.map((item,index)=>{
        return( 
        <div className={styles.purpleContainer} key={index}  onClick={() => toggleParagraph(index)}>
         <div className={styles.purple_divnum} >
          <div className={styles.difcnum}>
              {item?.num}
            </div>
            {!showParagraphs[index] && <p className={styles.mob_difchead}>{item?.head}</p>}
            {!showParagraphs[index]?<IoMdArrowDropdown style={{fontSize:"30px"}} />:<IoMdArrowDropup style={{fontSize:"30px"}} onClick={handleClick} />}
            </div>
            {showParagraphs[index] && 
            <div>
            <p className={styles.assistheaddifc} style={{fontWeight:"600"}}>{item?.head}</p>
            <p className={styles.assistcontent}>{item?.content}</p></div>}
                     </div>)
        
       })
        }
      </div>
   </div>
    </Container>
  );
}
