import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './Styles.module.css';
import Image from "next/image";
import Container from '../Common/Container';


const AboutPage = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); // Adjust the threshold as needed
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
        slider.slickNext(); // Scroll down, go to the next slide
      } else {
        slider.slickPrev(); // Scroll up, go to the previous slide
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
                    {/* Slide 2 */}
                    {/* <div className={styles.scroll_div} >
                      <div className={styles.Business_title}style={{ paddingTop: "90px" }}>
                      Is compliance outsourcing permitted by the DFSA?
                      </div>
                      <div style={{paddingTop:"10px"}}>
                        <p style={{ fontSize: "16px", lineHeight: "23px", maxWidth: "550px" }}>Yes, the DFSA allows outsourcing of core functions like Compliance, MLRO, and Finance. However, approval depends on factors such as the type of financial service, projected business volume, additional endorsements, and overall team composition. This process is generally straightforward for Category 4 firms and Restricted Fund Manager.</p>
                      </div>
                    </div> */}

                    {/* Slide 3 */}
                    <div className={styles.scroll_div} style={{ paddingTop: "30px" }}>
                      <div className={styles.Business_title}>
                      Should I identify a Compliance officer before or after obtaining a DFSA authorization?
                      </div>
                      <div style={{paddingTop:"10px"}}>
                        <p style={{ fontSize: "16px", lineHeight: "23px", maxWidth: "550px" }}>Identifying the compliance officer before obtaining DFSA authorization is essential, as it ensures a commitment to regulatory compliance. The DFSA requires the controlled people like the Compliance officer and MLRO to be identified and proven experts in their field before hiring. By proactively confirming these roles early on, organizations showcase their commitment to compliance and ensure that the selected individuals meet the DFSA&apos;s stringent criteria. It should be noted that the identified Compliance officer must be a resident of UAE. By demonstrating that key personnel are recognized experts prior to hiring, organizations establish trust with regulators, investors, and stakeholders, laying a robust groundwork for navigating the financial landscape successfully. </p>
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
                  <div className={styles.compliance_scroll}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Conditionally render mobile-specific content */}
      {isMobile && (
        <div className={styles.mobonly_scroll} onWheel={handleMouseWheel}>
          <div className={styles.compliance_scroll} style={{height:"650px"}}>
            <Container>
            {/* <div className={styles.slider_container}> */}
              <Slider ref={sliderRef} {...sliderSettings}>
                {/* Slide 1 */}
                <div className={styles.scroll_div} style={{ paddingTop: "30px" }}>
                <div className={styles.Business_title}>
                Is compliance outsourcing permitted by the DFSA?
                      </div>
                      <div style={{paddingTop:"10px"}}>
                        <p style={{ fontSize: "16px", lineHeight: "23px", maxWidth: "550px",color:"white" }}>Yes, the DFSA does endorse the outsourcing of core functions like Compliance, MLRO, and Finance. Nevertheless, approvals hinge on factors such as the specific financial service, projected business volume, additional endorsements (such as those facilitating dealings with Retail Clients), and the overall composition of the team before granting outsourcing approval.</p>
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className={styles.scroll_div} style={{ paddingTop: "30px" }}>
                      <div className={styles.Business_title}>
                      Should I appoint a compliance officer before or after obtaining authorisations?
                      </div>
                      <div style={{paddingTop:"10px"}}>
                        <p style={{ fontSize: "16px", lineHeight: "23px", maxWidth: "550px",color:"white" }}>Firms seeking DFSA authorisation must identify individuals for Authorised Functions, including Compliance and Money-Laundering Reporting, during the application. While these individuals need not be employed by the firm yet, it&apos;s uncommon for a compliance officer to commit while still employed elsewhere. Often, the officer resigns and joins after authorisation.The authorisation process can last 4-6 months or more. Firms can request to conditionally identify the compliance officer In-Principle. Alternatively, many opt to outsource the compliance function, allowing an already authorized individual to expedite the application process. </p>
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
