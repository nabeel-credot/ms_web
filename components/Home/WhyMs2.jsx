import React, { useEffect, useState } from 'react'
import styles from "./WhyMs2.module.css"
import Bstyles from "./Awards.module.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import Container from '../Common/Container';


function WhyMs2() {
  const [box, setBox] = useState(0)
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    dotsClass: Bstyles.button__bar,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px"
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0

        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false
    })
  }, []);

  return (
    <Container>
      <div className={styles.container} data-aos="fade-up">
        <h3 className={styles.heading}>
          Why MS?
        </h3>
        <div className={styles.sub_container} >
          <div className={styles.box} onMouseEnter={() => setBox(1)}>
            01
          </div>
          <div className={styles.box} onMouseEnter={() => setBox(2)}>
            02
          </div>
          <div className={styles.box} onMouseEnter={() => setBox(3)}>
            03
          </div>

          <div className={styles.box} onMouseEnter={() => setBox(4)}>
            04
          </div>
          <div className={styles.box} onMouseEnter={() => setBox(5)}>
            05
          </div>

        </div>
        <div className={styles.contentWrapper}>
          {
            box == 1 ?
              <div className={styles.content}>
                We are an Energetic, Passionate and curious mix of
                <span style={{fontWeight:700,marginLeft:5,marginRight:5}}>
                 Technologists, Lawyers, Problem Solvers and Business Builders</span>
                  with diverse expertise and background.
              </div> :
              box == 2 ?
                <div className={styles.content}>
                We believe our success comes from giving our clients the   <span style={{fontWeight:700,marginLeft:5,marginRight:5}}>support to become the best</span> they can be.
                </div> :
                box == 3 ?
                  <div className={styles.content}>
                   We value our clients and are  <span style={{fontWeight:700,marginLeft:5,marginRight:5}}>committed to adding value </span> to all our engagements without compromise.
                  </div> :
                  box == 4 ?
                    <div className={styles.content}>
                     We strive to find solutions to the challenges as we are known to have mastered the 
                     <span style={{fontWeight:700,marginLeft:5,marginRight:5}}>
                     “magic of getting things done.”</span>
                    </div> :
                    box == 5 ?
                      <div className={styles.content}>
                       We are   <span style={{fontWeight:700,marginLeft:5,marginRight:5}}>responsive and believe</span> in maintaining an open line of communication with our clients.
                      </div> : ""
          }

        </div>

        <div className={styles.mob_container}>
          <Slider {...settings} style={{ marginTop: 30 }}>
            <div className={styles.mobBox}>
              <div className={styles.box}>
                01
              </div>
              <div className={styles.content}>
              We are an Energetic, Passionate and curious mix of
                <span style={{fontWeight:700,marginLeft:5,marginRight:5}}>
                 Technologists, Lawyers, Problem Solvers and Business Builders</span>
                  with diverse expertise and background.
              </div>

            </div>

            <div className={styles.mobBox}>
              <div className={styles.box}>
                02
              </div>
              <div className={styles.content}>
              We believe our success comes from giving our clients the   <span style={{fontWeight:700,marginLeft:5,marginRight:5}}>support to become the best</span> they can be.
              </div>
            </div>

            <div className={styles.mobBox}>
              <div className={styles.box}>
                03
              </div>
              <div className={styles.content}>
              We value our clients and are  <span style={{fontWeight:700,marginLeft:5,marginRight:5}}>committed to adding value </span> to all our engagements without compromise.
              </div>
            </div>

            <div className={styles.mobBox}>
              <div className={styles.box}>
                04
              </div>
              <div className={styles.content}>
              We strive to find solutions to the challenges as we are known to have mastered the 
                     <span style={{fontWeight:700,marginLeft:5,marginRight:5}}>
                     “magic of getting things done.”</span>
              </div>
            </div>

            <div className={styles.mobBox}>
              <div className={styles.box}>
                05
              </div>
              <div className={styles.content}>
              We are <span style={{fontWeight:700,marginLeft:5,marginRight:5}}>responsive and believe</span> in maintaining an open line of communication with our clients.
              </div>
            </div>
          </Slider>
        </div>

      </div>
    </Container>
  )
}

export default WhyMs2