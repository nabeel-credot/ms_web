import React ,{ useState} from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Image from "next/image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link"
const assistContents = [
  {
    icon: "/images/transaction-fill.svg",
    hoverIcon: "/images/transaction-stroke.svg",
    head: "Transaction Advisory",
    content:
      "We are a leading transaction advisory service provider in Dubai, Abu Dhabi, and across the UAE. Our team of experts offers comprehensive solutions to help clients navigate complex transactions, minimize risks, and maximize value.",
      link:"/transaction-advisory"
  },
  {
    icon: "/images/m&a-fill.svg",
    hoverIcon:"/images/m&a-stroke.svg",
    head: "Mergers and Acquisitions",
    content:
      "Get rid of the complexities of mergers and acquisitions effortlessly with MS’s strategic expertise. From due diligence to integration, trust us to sculpt a future where your business thrives through smart M&A solutions. Elevate your business strategy for a future of unparalleled success.",
      link:"/mergers-and-acquisitions"
    },
    {
      icon: "/images/buy-side-fill.svg",
      hoverIcon:"/images/buy-side-stroke.svg",
      head: "Buy Side Advisory",
      content:
        "Our Buy Side Advisory services provide clients with expert guidance in making strategic investment decisions. Our experienced team offers tailored solutions to meet your unique financial objectives, providing you with the insights needed to make informed investment decisions.",
        link:"/buy-side-advisory"
      },
    {
      icon: "/images/sell-side-fill.svg",
      hoverIcon:"/images/sell-side-stroke.svg",
      head: "Sell Side Advisory",
      content:
        "Looking for expert guidance on your company's sell side strategy? Our Sell Side Advisory team in the UAE can help. With years of experience, we offer comprehensive support to help you achieve optimal results for your business.",
        link:"/sell-side-advisory"
      },
  {
    icon: "/images/valuation-fill.svg",
    hoverIcon: "/images/valuation-stroke.svg",
    head: "Valuation",
    content:
      "Our financial experts provide accurate and reliable business valuation services to help you make informed decisions. Trust us to deliver customized solutions tailored to your specific needs in UAE.",
      link:"/business-valuation"
  },
  
];
const assistContentsmobile = [
  {
    icon: "/images/transaction-fill.svg",
    hoverIcon: "/images/transaction-stroke.svg",
    head: "Transaction Advisory",
    content:
      "We are a leading transaction advisory service provider in Dubai, Abu Dhabi, and across the UAE. Our team of experts offers comprehensive solutions to help clients navigate complex transactions, minimize risks, and maximize value",
      link:"/transaction-advisory"
  },
  {
    icon: "/images/m&a-fill.svg",
    hoverIcon:"/images/m&a-stroke.svg",
    head: "Mergers and Acquisitions",
    content:
      "Get rid of the complexities of mergers and acquisitions effortlessly with MS’s strategic expertise. From due diligence to integration, trust us to sculpt a future where your business thrives through smart M&A solutions. Elevate your business strategy for a future of unparalleled success.",
      link:"/mergers-and-acquisitions"
    },
    {
      icon: "/images/buy-side-fill.svg",
      hoverIcon:"/images/buy-side-stroke.svg",
      head: "Buy Side Advisory",
      content:
        "Our Buy Side Advisory services provide clients with expert guidance in making strategic investment decisions. Our experienced team offers tailored solutions to meet your unique financial objectives, providing you with the insights needed to make informed investment decisions.",
        link:"/buy-side-advisory"
      },
      {
        icon: "/images/sell-side-fill.svg",
        hoverIcon:"/images/sell-side-stroke.svg",
        head: "Sell Side Advisory",
        content:
          "Looking for expert guidance on your company's sell side strategy? Our Sell Side Advisory team in the UAE can help. With years of experience, we offer comprehensive support to help you achieve optimal results for your business.",
          link:"/sell-side-advisory"
        },
  {
    icon: "/images/valuation-fill.svg",
    hoverIcon: "/images/valuation-stroke.svg",
    head: "Valuation",
    content:
      "Our financial experts provide accurate and reliable business valuation services to help you make informed decisions. Trust us to deliver customized solutions tailored to your specific needs in UAE.",
      link:"/business-valuation"
  },
 
];
export default function Ms_assist() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const slider = React.useRef(null);
  
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
        <div className={styles.ms_assisttitlewrapper}>
          <div className={styles.assistTitle} data-aos="fade-up">How can <span style={{fontWeight:"500"}}>MS</span> assist you?</div>
          {/* <p className={styles.ms_assist_para}>
            Lorem ipsum dolor sit amet consectetur. Quam mollis commodo velit
            purus laoreet id ut eu volutpat. Odio euismod sollicitudin id
            ullamcorper urna accumsan. Dui augue amet quis ut lobortis id rutrum
            turpis cras.
          </p> */}
  
        </div>
        {/* <Link href="/">
        <div className={styles.blueContainer}>
            <div  className={styles.assistimg1}>
                <Image src="/images/valuation icon.svg" layout="fill"/>
            </div>
            <p className={styles.assisthead} style={{fontWeight:"500"}}>Valuation</p>
          <p>
            Lorem ipsum dolor sit amet consect Tincidunt purus tellus auctor
            turpis molestie venenatis nec. Purus in nec egestas vitae enenatis
            nec estas vgsdu....{" "}
          </p>
          <p style={{marginTop:"100px"}}>Read more</p>
        </div>
        </Link> */}
      </div>
      <div className={styles.parentwrapper} data-aos="fade-up">
       {assistContents.map((item,index)=>{
        return( 
<Link href={item?.link} key={index}>
        <div className={styles.blueContainer} key={index}  onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}>
          <div className={styles.assistimg}>  
          <Image 
          src={hoveredIndex === index ? item.hoverIcon : item.icon}
          width={45} height={45} alt={item?.head}/>
          </div>
            <p className={styles.assisthead} style={{fontWeight:"500"}}>{item?.head}</p>
            <p className={styles.assistcontent}>{item?.content}</p>
          <p className={styles.readmore_msassist}>Read more</p>
                     </div>
                     </Link>
                     )
        
       })
        }
      </div>
    </div>

    {/* mobile */}
    <div className={styles.assistmobil}>
  <div className={styles.assistTitle} data-aos="fade-right" >How can <span style={{ fontWeight: "500" }}>MS</span> assist you?</div>
  <Slider ref={slider} {...settings} style={{ height: "500px",paddingTop:"30px" }}>
    {assistContentsmobile.map((item, index) => (
      <Link href={item?.link} key={index}>
        <div className={styles.blueContainer} onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)} data-aos="fade-up" >
          <div className={styles.assistimg}>
            <Image
              src={item.hoverIcon}
              width={45} height={45} alt={item?.head} />
          </div>
          <p className={styles.assisthead} style={{ fontWeight: "500" }}>{item?.head}</p>
          <p className={styles.assistcontent}>{item?.content}</p>
          <p className={styles.readMoreButton}>Read More</p>
        </div>
      </Link>
    ))}
  </Slider>
</div>

    </Container>
  );
}
