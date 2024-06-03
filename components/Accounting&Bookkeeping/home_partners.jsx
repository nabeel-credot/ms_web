import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Link from "next/link"
import Image from "next/image";
import { MdArrowRight,MdArrowLeft } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from "react";
const advmob=[
    {
        image:"/images/partners_1.svg",
        content:"MS UAE Award 2024",
    },
    {
        image:"/images/partners_2.svg",
        content:"Financial Literacy Workshops",
    },
    {
        image:"/images/partners_3.svg",
        content:"Smart Up",
    },{
        image:"/images/partners_4.svg",
        content:"MS UAE Award 2024",
    },{
        image:"/images/partners_5.svg",
        content:"Global Alliance",
    }
]
function Company_Form_Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentSlide(current => (current + 1) % advmob.length);
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
  }, []);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        arrows: false,
        dots:true,
        appendDots: (dots) => (
          <div
            
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>{" "}
          </div>
        ),
        customPaging: (i) => <div style={{ width: "8px", height: "8px", backgroundColor: "white", borderRadius: "5px",marginTop:"20px" }} />,
        
       
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              centerPadding: '50px',
    
            }
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerPadding: '50px',
    
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '50px',
    
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "10px"
    
            }
          }
        ]
      }
  return (
    <div className={styles.partnerbg_hom}>
        <Container>
            <div className={styles.partnersContainer} data-aos="fade-up">
<div className={styles.partner_imgdiv}>
<Image src="/images/home_partners.svg" width={400} height={250} alt=""/>
            </div>
            <div className={styles.partners_div}>
      <div className={styles.company_form_title}>Proudly Partnered with <br/>Abu Dhabi SME Hub</div>
      <p className={styles.partners_para}>
      We are very honoured to partner with ADSME HUB, which is the flagship initiative of the Khalifa Fund For Enterprise Development (KFED-Government of Abu Dhabi). The collaboration aims to empower entrepreneurs in the UAE to help SMEs and startups scale their business by upskilling in Financial literacy and Tax knowledge. The time has come for us to continually prove to our clients and followers what we are capable of, not merely with our work but in making meaningful positive impacts on the lives of budding entrepreneurs and the changing ecosystem around us.
      </p>
</div>
</div>
<div className={styles.partners_slideContainer} data-aos="fade-up">
 <Slider {...settings}> 
        { advmob.map((item,index)=>{
            return(
                
                <div className={styles.partners_slide} key={index}>
                    <Image src={item?.image} alt={item?.content} width={100} height={100}/>
                    <p>{item?.content}</p>
                </div>
                 
                )
           }
           )
          } 
          
          
            </Slider>




            </div>
            <div className={styles.partners_slideContainermob}>
            { advmob.map((item,index)=>{
            return(
                
                <div className={styles.partners_slide} key={index}>
                    <Image src={item?.image} alt={item?.content} width={70} height={70}/>
                    <p>{item?.content}</p>
                </div>
                 
                )
           }
           )
          } 
          </div>
      </Container>
    </div>
  );
}

export default Company_Form_Banner;
