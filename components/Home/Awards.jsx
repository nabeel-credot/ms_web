import React, { useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import styles from "./Awards.module.css"
import Award from "../AwardCard"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Container from '../Common/Container';
function Awards() {
 
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay:true,
        infinite:true,
        arrows:false,
        initialSlide: 0,
        dotsClass: styles.button__bar,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:3 ,
              slidesToScroll: 1,
              centerMode:true,
              centerPadding:"50px"
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
         
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
            arrows:false,
            }
          }
        ]
      };

    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false
        })},[]);

    return (
      <Container>
        <div className={styles.award_container} data-aos="fade-up">
           
            <div className={styles.award_container_sub}>
            <h4 className={styles.award_heading}>Awards</h4>
            <Slider {...settings} >
                
          <div className={styles.awardss}>

          <Award src="/images/award1.svg" width="252px" height="144px" title="Best Business Advisor UAE-2018" detail="Corporate Magazine has named Mohammed Shafeek one of the top business advisor for 2018 for his excellence in corporate finance & tax advisory." />
          </div>
          <div  className={styles.awardss}>
          <Award src="/images/award2.svg" width="253px" height="146px"   title="ISO" detail="MS went through evaluation process that included management system documentation review, quality management system development, audit, and initial assessment in order to become an ISO 9001 Compliant. Our choice to progress in the direction of ISO 9001 accreditation exhibits the promise to giving a high-calibre and consistent services to our customers and our continuous interest in innovation and improvement." />
          </div>
          <div  className={styles.awardss}> 
          <Award src="/images/award3.svg"  width="250px" height="146px"  title="Tax Advisory" detail="Today our clients can start a business in UAE and MS are able to offer a high level of international knowledge and expertise to businesses to help them make the right decisions, supported with accountancy and tax services wherever they may engage in business." />
          </div>
          <div  className={styles.awardss}>
          <Award src="/images/award4.svg" width="250px" height="144px"  title="Best Tax Consultancy" detail="We’re honored to have received the Award for “Best Tax Consultancy Firm 2019 – UAE” by MEA Business Awards. Achieving this distinction reinforce our commitment and outstanding performance to resolving tax issues across the region." />
          </div>
          <div>
          <Award src="/images/awards4.svg" width="250px" height="144px"  title="Best Service Tax Consultant" detail="MS is delighted to be named as Best Full-Service Tax Consultant in UAE for 2018 in the MEA Excellence Awards.We are extremely honored to be recognized among this group of international experts." />
          </div>
          <div>
          <Award src="/images/awards5.svg" width="250px" height="144px"  title="Leading Advisor Awards Winner." detail="Every day, MS provides financial and business management solutions to businesses on a flexible and scalable basis, whether that be on a regular part-time basis or for a specific period or project." />
          </div>
          <div>
          <Award src="/images/awards3.svg" width="250px" height="144px"  title="ACCA Approved Employer" detail="When you are at your best, we are the best at serving our clients." />
          </div>
          <div>
          <Award src="/images/awards6.svg" width="250px" height="144px"  title="GAE" detail="MS named as Tax and Accounting Consultancy Firm of the Year in the UAE award for 2020.Thank you for believing in us and keeping us informed about how best to serve your needs. Our ongoing success relies on the loyalty and support from you !" />
          </div>
         
        </Slider>
        </div>


            {/* <div className={styles.award_container_sub}>
                <div >
                <Award src="/images/award1.svg" width="252px" height="144px" title="Title" detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" /></div>
                <div>  
                 <Award src="/images/award2.svg" width="253px" height="146px"   title="Title" detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" />
                 </div>
                <div>   
                <Award src="/images/award3.svg"  width="250px" height="146px"  title="Title" detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" />
                </div>
                <div>  
                 <Award src="/images/award4.svg" width="250px" height="144px"  title="Title" detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" /></div>

            </div> */}

        </div>
        </Container>
    )
}

export default Awards