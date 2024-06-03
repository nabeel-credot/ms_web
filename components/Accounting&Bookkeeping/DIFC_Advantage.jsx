import React from 'react'
import Container from '../Common/Container'
import styles from "./Styles.module.css"
import Image from "next/image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const adv=[{
    image:"/images/adv1.webp",
    content:"Subsidized commercial license",
    desc:"The DIFC offers Innovation licenses with a generous 90% subsidy, promoting innovation and accessibility for businesses seeking to thrive within the framework of the program."
},
{
    image:"/images/adv2.webp",
    content:"Regulatory Support",
    desc:"The Innovation License comes with a regulatory framework tailored for innovation-focused businesses, providing a conducive environment for growth without compromising compliance."
},
{
    image:"/images/adv3.webp",
    content:"Flexible Workspace Options",
    desc:"License holders gain access to co-working spaces within the DIFC, offering a dynamic and collaborative environment for work and networking."
},{
    image:"/images/adv4.webp",
    content:"Access to Funding",
    desc:"The DIFC ecosystem facilitates connections with venture capital firms, investors, and financial institutions, increasing the opportunities for securing funding and investment."
},{
    image:"/images/adv5.webp",
    content:"Access to technology",
    desc:"DIFC is home to several technology companies and research institutions. This gives startups access to the latest technologies and innovations."
},{
    image:"/images/adv6.webp",
    content:"Visa Perks on flexi desk ",
    desc:"Permission to obtain up to four  residency visas on a flexi desk, with a 40% subsidy on additional visas."
}
]
const advmob=[
    {
        image:"/images/Advmob1.webp",
        content:"Subsidized commercial license",
        desc:"The DIFC offers Innovation licenses with a generous 90% subsidy, promoting innovation and accessibility for businesses seeking to thrive within the framework of the program."
    },
    {
        image:"/images/Advmob2.webp",
        content:"Regulatory Support",
        desc:"The Innovation License comes with a regulatory framework tailored for innovation-focused businesses, providing a conducive environment for growth without compromising compliance."
    },
    {
        image:"/images/Advmob3.webp",
        content:"Flexible Workspace Options",
        desc:"License holders gain access to co-working spaces within the DIFC, offering a dynamic and collaborative environment for work and networking."
    },{
        image:"/images/Advmob4.webp",
        content:"Access to Funding",
        desc:"The DIFC ecosystem facilitates connections with venture capital firms, investors, and financial institutions, increasing the opportunities for securing funding and investment."
    },{
        image:"/images/Advmob5.webp",
        content:"Access to technology",
        desc:"DIFC is home to several technology companies and research institutions. This gives startups access to the latest technologies and innovations."
    },{
        image:"/images/Advmob6.webp",
        content:"Visa Perks on flexi desk ",
        desc:"Permission to obtain up to four  residency visas on a flexi desk, with a 40% subsidy on additional visas. "
    }  
]
export default function DIFC_Advantage() {
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

    // background: linear-gradient(0deg, #D9D9D9, #D9D9D9),
// linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(60, 22, 107, 0.8) 85.52%);

    <Container>
<div className={styles.Adv_webOnly}> 
       <div className={styles.techTitle} data-aos="fade-up">Advantages</div>
        <div className={styles.advContainer} data-aos="fade-up">
           { adv.map((item,index)=>{
            return(

                 <div className={styles.advsingle} key={index}>

                    <Image src={item?.image} alt={item?.content} layout="fill"/>
                    <p className={styles.advpara}>{item?.content}</p>
                    <div className={styles.advdetails}>
                    <p className={styles.advtitle}>{item?.content}</p>
                    <p className={styles.advdesc}>{item?.desc}</p>
                        </div>
                </div>
                
                )
           }
           )
          }
        </div>
        </div>

        {/* mobile */}
        <div className={styles.Adv_mobileOnly}>
        <div className={styles.techTitle} data-aos="fade-up">Advantages</div>
        <Slider ref={slider} {...settings} >
        { advmob.map((item,index)=>{
            return(

                <div className={styles.advboxMobile} key={index} data-aos="fade-up">

                  <div className={styles.mobAdv_image}>  <Image src={item?.image} alt={item?.content} layout="fill"/></div>
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
  )
}
