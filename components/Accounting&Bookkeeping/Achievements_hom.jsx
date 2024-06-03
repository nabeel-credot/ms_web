import React from 'react'
import Container from '../Common/Container'
import styles from "./Styles.module.css"
import Image from "next/image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowLeft,MdArrowRight } from 'react-icons/md';
import Slider from "react-slick";
const adv=[{
    image:"/images/achieve_1.webp",
    content:"ISO",
    desc:"MS went through evaluation process that included management system documentation review, quality management system development, audit, and initial assessment in order to become an ISO 9001 Compliant."
},
{
     image:"/images/achieve_2.webp",
    content:"GAE",
    desc:"MS named as Tax and Accounting Consultancy Firm of the Year in the UAE award for 2020.Thank you for believing in us and keeping us informed about how best to serve your needs. Our ongoing success relies on the loyalty and support from you."
},
{
    image:"/images/achieve_3.webp",
    content:"Tax Advisory",
    desc:"Today our clients can start a business in UAE and MS are able to offer a high level of international knowledge and expertise to businesses to help them make the right decisions, supported with accountancy and tax services wherever they may engage in ......."
},
{
  image:"/images/achieve_4.webp",
  content:"Best Business Advisor UAE-2018",
  desc:"Corporate Magazine has named Mohammed Shafeek one of the top business advisor for 2018 for his excellence in corporate finance & tax advisory."
},
{
  image:"/images/achieve_5.webp",
  content:"Best Full Service Tax Consultant UAE- 2018",
  desc:"MS is delighted to be named as Best Full-Service Tax Consultant in UAE for 2018 in the MEA Excellence Awards.We are extremely honored to be recognized among this group of international experts."
},
{
  image:"/images/achieve_4.webp",
  content:"Best for affordable accountancy service 2018 – UAE",
  desc:"Thank you for voting us. We are Multi Award-Winning Chartered Certified Accountants in UAE.The client experience is one of the most powerful ways that we set ourselves apart from the competition, we have ...     "
},
{
  image:"/images/achieve_6.webp",
  content:"Best Tax Consultancy Of the Year 2019",
  desc:"We’re honored to have received the Award for “Best Tax Consultancy Firm 2019 – UAE” by MEA Business Awards. Achieving this distinction reinforce our commitment and outstanding performance to resolving tax issues across the region.     "
},
{
  image:"/images/achieve_7.webp",
  content:"ACCA Approved Employer",
  desc:"When you are at your best, we are the best at serving our clients. The award recognizes the investment in our talented and dedicated team as paramount to ensure our client service delivery remains world class and our team stay engaged.    "
},
{
  image:"/images/achieve_8.webp",
  content:"Leading Business Taxation And Financial Management Consultancy Of The Year, UAE.",
  desc:"Every day, MS provides financial and business management solutions to businesses on a flexible and scalable basis,whether that be on a regular part-time basis or for a specific period or...    "
},

]
  
export default function DIFC_Advantage() {
    const slider = React.useRef(null);

    const settings = {
      infinite: true,
      speed: 200,
      slidesToShow: 3, 
      centerPadding: "50px",
      slidesToScroll: 1,
      dots: false,
      loop: true,
      cssEase: 'linear',
      arrows: false
  };
    const mobsettings = {
        infinite: true,
        speed: 200,
        // slidesToShow: 3,
         centerPadding: "50px",
       
        slidesToScroll: 1,
        // autoplay: true,
        dots:true,
        loop: true,
        cssEase: 'linear', 
        arrows:false,

        
      };
      const next = () => {
        slider.current.slickNext();
      };
      
      const previous = () => {
        slider.current.slickPrev();
      };
      
  return (
    

<div className={styles.achievebg}>
    <Container> 
      <div className={styles.achievementwrapper}>
<div className={styles.servicenewTitle} data-aos="fade-up">  <div className={styles.servicelogodifc}> <Image src={"/images/logo3.svg"} alt="logo" layout="fill"/> </div><span style={{paddingTop:"40px",fontWeight:"500",color:"white"}}>Achievements</span></div>
<div className={styles.sliderbtn_wrapper1}style={{paddingTop:"50px"}}><button onClick={previous} className={styles.test_circle}><MdArrowLeft style={{fontSize:"30px"}}/></button>
          <button onClick={next} className={styles.test_circle}> <MdArrowRight style={{fontSize:"30px"}}/></button></div>
          </div>
         <div>
          <div className={styles.web_hometax}>
        <div className={styles.achieveContainer}>
        <Slider ref={slider} {...settings} >
           { adv.map((item,index)=>{
            return(

                 <div className={styles.achieve_servicediv} key={index} data-aos="fade-up">
                    <div className={styles.achieve_imgdiv}>
                    <Image src={item?.image} alt={item?.content} width={420} height={250}/>
                    </div>
                    <div className={styles.achieve_serviceContainer}>
                    <p className={styles.home_servicetitle} style={{color:"black"}}>{item?.content}</p>
                    <p className={styles.home_servicedesc }style={{color:"black"}}>{item?.desc}</p>

                      
                    </div>
                </div>
                
                )
           }
           )
          }
          
        
        </Slider>
        </div>
        </div>
        </div> 

        {/* mobile */}
         <div className={styles.Adv_mobileOnly}>
        <Slider {...mobsettings} >
        { adv.map((item,index)=>{
            return(

                <div className={styles.achieve_servicediv} key={index}>

                  <div className={styles.mobAdv_image}>  <Image src={item?.image} alt={item?.content} width={250} height={150}/></div>
                  <div style={{padding:"20px 13px"}}>
                    <p className={styles.advmob_content}>{item?.content}</p>
                    <p>{item?.desc}</p>
                  </div>
                </div>
                )
           }
           )
          } 
            </Slider>
            </div> 
    </Container>
    </div>
  )
}
