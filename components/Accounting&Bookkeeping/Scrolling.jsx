import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './Styles.module.css';
import Image from "next/image";
import Container from '../Common/Container';

const activities = [
  "Streamlining pricing decisions to minimise the risk of over or under-pricing in intercompany transactions.",
  "Reducing the risk of tax audits and disputes with tax authorities through detailed analysis and documentation of Transfer Pricing policies.",
  "Establishing clear Transfer Pricing policies and procedures for enhanced transparency and consistency for taxpayers.",
];

const activities1 = [
  {
    head: "Related Party",
    content: "This refers to an individual or entity with an existing connection to a business, established through ownership, control, or kinship in the case of natural persons.",
  },
  {
    head: "Connected Person",
    content: "Refers to an individual with an ownership interest in the company or serving as a director/officer, along with relatives up to the fourth degree of kinship or affiliation, thereby being considered 'Connected' to the company's business.",
  }
];

const AboutPage = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); 
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseWheel = (event) => {
    const slider = sliderRef.current;
    if (slider) {
      if (event.deltaY > 0) {
        slider.slickNext(); 
      } else {
        slider.slickPrev(); 
      }
    }
  };

  const sliderSettings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, 
    speed: 1000, 
    fade: true,
    arrows: false,
    // adaptiveHeight: true,
    afterChange: (currentSlide) => console.log('Current slide:', currentSlide), // Optional: Callback after slide change
  };

  return (
    <div>
      {!isMobile && (
        <div style={{ background: "black" }} onWheel={handleMouseWheel}>
          <div className={styles.container_scroll}>
            <Container>
              <div className={styles['scroll_content']}>
                {/* <div className={styles.slider_container}> */}
                  <Slider ref={sliderRef} {...sliderSettings}>
                    {/* Slide 1 */}
                    <div className={styles.scroll_div}>
                      <div className={styles.Business_title}>
                        How does compliance with Transfer Pricing regulations provide benefits?
                      </div>
                      <div className={styles.bussiness_Wrapper}>
                        {activities.map((item, index) => (
                          <div className={styles.responsibility_single} key={index}>
                            <div className={styles.pointwidth}>
                              <div className={styles.Business_point}>
                                <Image src="/images/White_tick.svg" alt='yellowtick' layout="fill" />
                              </div>
                            </div>
                            <div className={styles.contentwidth}>{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Slide 2 */}
                    <div className={styles.scroll_div}>
                      <div className={styles.Business_title}>Who falls under the scope?</div>
                      <div className={styles.bussiness_Wrapper}>
                        {activities1.map((item, index) => (
                          <div className={styles.responsibility_single} key={index}>
                            <div className={styles.pointwidth}>
                              <div className={styles.Business_point}>
                                <Image src="/images/White_tick.svg" alt='yellowtick' layout="fill" />
                              </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                              <div className={styles.contentwidth} style={{fontSize:"20px",fontWeight:"500"}}>{item.head}</div>
                              <div style={{ paddingTop: "30px",fontSize:"16px",fontWeight:"500" }}>{item.content}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className={styles.scroll_div} style={{ paddingTop: "30px" }}>
                      <div className={styles.Business_title}>
                        What sets our Transfer Pricing services apart?
                      </div>
                      <div style={{paddingTop:"10px"}}>
                        <p style={{ fontSize: "16px", lineHeight: "23px", maxWidth: "550px" }}>Our team of seasoned professionals at MS possesses extensive knowledge in Global Transfer Pricing regulations and best practices. Collaborating closely with clients, we tailor solutions to their unique needs. Our services, supported by rigorous methodologies and advanced technology, prioritize high-quality, timely, and cost-effective deliverables.</p>
                      </div>
                    </div>
                  </Slider>
                </div>
              {/* </div> */}
            </Container>
            {/* Right side content */}
            <div className={styles['about_panel_wrapper']}>
              <div className={styles['about_panel']}>
                <div className={styles['hide_photo_filter']}></div>
                <div className={styles['about_info']}>
                  <div className={styles.photo_about}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Conditionally render mobile-specific content */}
      {isMobile && (
        <div className={styles.mobonly_scroll} onWheel={handleMouseWheel}>
          <div className={styles.photo_about} style={{height:"650px"}}>
            <Container>
            {/* <div className={styles.slider_container}> */}
              <Slider ref={sliderRef} {...sliderSettings}>
                {/* Slide 1 */}
                <div className={styles.scroll_div} style={{height:"600px"}}>
                  <div className={styles.Business_title}>
                    How does compliance with Transfer Pricing regulations provide benefits?
                  </div>
                  <div className={styles.bussiness_Wrapper}>
                    {activities.map((item, index) => (
                      <div className={styles.responsibility_single} key={index}>
                        <div className={styles.pointwidth}>
                          <div className={styles.Business_point}>
                            <Image src="/images/White_tick.svg" alt='yellowtick' layout="fill" />
                          </div>
                        </div>
                        <div className={styles.contentwidth} style={{ color: "white" }}>{item}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slide 2 */}
                <div className={styles.scroll_div}>
                  <div className={styles.Business_title}>Who falls under the scope?</div>
                  <div className={styles.bussiness_Wrapper}>
                    {activities1.map((item, index) => (
                      <div className={styles.responsibility_single} key={index}>
                        <div className={styles.pointwidth}>
                          <div className={styles.Business_point}>
                            <Image src="/images/White_tick.svg" alt='yellowtick' layout="fill" />
                          </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
                          <div className={styles.contentwidth}>{item.head}</div>
                          <div style={{ paddingTop: "30px" }}>{item.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slide 3 */}
                <div className={styles.scroll_div} style={{ paddingTop: "30px" }}>
                  <div className={styles.Business_title}>
                    What sets our Transfer Pricing services apart?
                  </div>
                  <div style={{paddingTop:"10px"}}>
                    <p style={{ fontSize: "16px", lineHeight: "23px", maxWidth: "550px", color: "white" }}>Our team of seasoned professionals at MS possesses extensive knowledge in Global Transfer Pricing regulations and best practices. Collaborating closely with clients, we tailor solutions to their unique needs. Our services, supported by rigorous methodologies and advanced technology, prioritize high-quality, timely, and cost-effective deliverables.</p>
                  </div>
                </div>
              </Slider>
              {/* </div> */}
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
