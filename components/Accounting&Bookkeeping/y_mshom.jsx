import React from 'react'
import Container from '../Common/Container'
import styles from "./Styles.module.css"
import Image from "next/image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const adv=[
{
    num:'01',
    desc:"We are an Energetic, Passionate and Curious Tax practitioners, Compliance experts, Accountants, Lawyers, Technologists & Problem solvers with diverse expertise and background."
},
{
    num:'02',
    desc:"We believe our success comes from giving our clients the support to become the best they can be."
},{
    num:'03',
    desc:"We value our clients and are committed to adding value to all our engagements without compromise."
},{
    num:'04',
    desc:"We strive to find solutions to the challenges as we are known to have mastered the “magic of getting things done.”"
},{
    num:'05',
    desc:"We are responsive and believe in maintaining an open line of communication with our clients."
}
]
const advmob=[
    {
        image:"/images/Advmob1.svg",
        content:"Subsidized commercial license",
        desc:"The DIFC offers Innovation licenses with a generous 90% subsidy, promoting innovation and accessibility for businesses seeking to thrive within the framework of the program."
    },
    {
        image:"/images/Advmob2.svg",
        content:"Regulatory Support",
        desc:"The Innovation License comes with a regulatory framework tailored for innovation-focused businesses, providing a conducive environment for growth without compromising compliance."
    },
    {
        image:"/images/Advmob3.svg",
        content:"Flexible Workspace Options",
        desc:"License holders gain access to co-working spaces within the DIFC, offering a dynamic and collaborative environment for work and networking."
    },{
        image:"/images/Advmob4.svg",
        content:"Access to Funding",
        desc:"The DIFC ecosystem facilitates connections with venture capital firms, investors, and financial institutions, increasing the opportunities for securing funding and investment."
    },{
        image:"/images/Advmob5.svg",
        content:"Access to technology",
        desc:"DIFC is home to several technology companies and research institutions. This gives startups access to the latest technologies and innovations."
    },{
        image:"/images/Advmob6.svg",
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
        
      };
  return (


    <Container>
<div className={styles.Adv_webOnly}> 
        <div className={styles.advContainer}>
        <div className={styles.y_ms_homyms} data-aos="fade-up">
            <div className={styles.y_ms_title}>Why <span style={{fontWeight:"500"}}>MS</span></div>
            <p>We Handle the Details, you focus on progress.
With our dedicated sector services, we free up your time to pursue the next significant milestone.</p>
        </div>
           { adv.map((item,index)=>{
            return(

                 <div className={styles.y_ms_homcard} key={index} data-aos="fade-up">
                    <div className={styles.numberwrapper_yms}>
                        <span className={styles.slidernumber_home}>{item?.num}</span>
                        </div>
                    <p className={styles.y_ms_homcontent}>{item?.desc}</p>
                        </div>
                
                )
           }
           )
          }
        </div>
        </div>

        {/* mobile */}
        <div className={styles.Adv_mobileOnly}>
        <div className={styles.ymsmobContainer}>
        <div className={styles.y_ms_homyms}>
        <div className={styles.y_ms_title}>Why <span style={{fontWeight:"500"}}>MS</span></div>
            <p>We Handle the Details, you focus on progress.
With our dedicated sector services, we free up your time to pursue the next significant milestone.</p>
        </div>
        <Slider ref={slider} {...settings} >
        { adv.map((item,index)=>{
            return(

                 <div className={styles.y_ms_homcard} key={index}>
                    <div className={styles.numberwrapper_yms}>
                        <span className={styles.slidernumber_home}>{item?.num}</span>
                        </div>
                    <p className={styles.y_ms_homcontent}>{item?.desc}</p>
                        </div>
                
                )
           }
           )
          } 
            </Slider>
            </div>
            </div>
    </Container>
  )
}
