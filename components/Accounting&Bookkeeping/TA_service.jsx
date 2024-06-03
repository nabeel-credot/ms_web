import React ,{ useState} from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Image from "next/image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const assistContents = [
  {
    icon: "/images/deal-transaction.svg",
    hoverIcon: "/images/deal-transaction.svg",
    head: "Deal Advisory",
    content:
      "We work closely with you to navigate the complexities of the M&A landscape and enhance the likelihood of a successful and value-creating transaction.",
  },
  {
    icon: "/images/due-transaction.svg",
    hoverIcon:"/images/due-transaction.svg",
    head: "Due Diligence",
    content:
      "Due diligence is crucial in shaping the negotiation process, determining the purchase price, and mitigating potential risks associated with the transaction. We conduct Financial, Operational and Legal due Diligence for you.",
  },
  {
    icon: "/images/financial-transaction.svg",
    hoverIcon:"/images/financial-transaction.svg",
    head: "Financial Modelling",
    content:
      "Financial modelling plays a crucial role in supporting negotiations, determining the value of the deal, and providing a basis for decision-making in M&A transactions enabling to assess the financial implications of the deal and make informed choices about whether to proceed with the transaction.",
  },
  {
    icon: "/images/valuation-transaction.svg",
    hoverIcon:"/images/valuation-transaction.svg",
    head: "Valuation",
    content:
      "Valuation is a critical aspect in Mergers & Acquisitions, as it helps both buyers and sellers assess the fair market value of the respective companies, facilitating negotiations and decision-making.",
  },
  // {
  //   icon: "/images/assist5.svg",
  //   hoverIcon:"/images/assistwhite5.svg",
  //   head: "Risk Advisory",
  //   content:
  //     "Our Risk Advisory services provide expert analysis and insights to help financial service providers in the UAE manage risks and comply with regulatory requirements. Trust our experienced team to help safeguard your business and enhance your risk management strategies.",
  // },
  // {
  //   icon: "/images/assist6.svg",
  //   hoverIcon:"/images/assistwhite6.svg",
  //   head: "Management Advisory",
  //   content:
  //     "We offer comprehensive Management Advisory services to help businesses in the UAE optimize their operations, reduce costs, and achieve their strategic goals. Our team of experts provides customized solutions to meet the unique needs of each client, ensuring long-term success and growth.",
  // },
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
        <div>
          <div className={styles.assistTitle} data-aos="fade-up">Our Services</div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur. Quam mollis commodo velit
            purus<br/> laoreet id ut eu volutpat. Odio euismod sollicitudin id
            ullamcorper urna accumsan.<br/> Dui augue amet quis ut lobortis id rutrum
            turpis cras.
            </p> */}
        </div>
        {/* <div className={styles.blueContainer}>
            <div  className={styles.assistimg1}>
                <Image src="/images/valuation icon.svg" layout="fill"/>
            </div>
          <h5>Valuation</h5>
          <p>
            Lorem ipsum dolor sit amet consect Tincidunt purus tellus auctor
            turpis molestie venenatis nec. Purus in nec egestas vitae enenatis
            nec estas vgsdu....{" "}
          </p>
        </div> */}
      </div>
      <div className={styles.parentwrapper_difc} data-aos="fade-up">
       {assistContents.map((item,index)=>{
        return( 
        <div className={styles.blueContainers} key={index}  onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}>
          <div className={styles.assistimgs}>  
          <Image 
          src={item.icon}
          layout="fill" alt={item?.head}/>
          </div>
            <p className={styles.assisthead} style={{fontWeight:"500"}}>{item?.head}</p>
            <p className={styles.assistcontent}>{item?.content}</p>
                     </div>)
        
       })
        }
      </div>
    </div>

    {/* mobile */}
    <div className={styles.assistmobil}>
    <div className={styles.assistTitle} data-aos="fade-right" >Our Services</div>
    <Slider ref={slider} {...settings} style={{height:"500px",paddingTop:"30px"}}>
    {assistContents.map((item,index)=>{
        return( 
        <div className={styles.blueContainers} key={index}  onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)} data-aos="fade-up" >
          <div className={styles.assistimgs}>  
          <Image 
          src={item.icon}
          layout="fill" alt={item?.head}/>
          </div>
            <p className={styles.assisthead} style={{fontWeight:"500"}}>{item?.head}</p>
            <p className={styles.assistcontent}>{item?.content}</p>
                     </div>)
        
       })
        }
      </Slider>
      </div>
    </Container>
  );
}
