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
                    <div className={styles.scroll_div} >
                      <div className={styles.Business_title}style={{ paddingTop: "90px" }}>
                      Is outsourcing Finance Officer permitted by DFSA?
                      </div>
                      <div style={{paddingTop:"10px"}}>
                        <p style={{ fontSize: "16px", lineHeight: "23px", maxWidth: "550px" }}>Yes, the DFSA allows outsourcing of a Finance Officer. However, approval depends on factors such as the type of financial service, projected business volume, additional endorsements, and overall team composition. The entities need to ensure that the outsourcing arrangement does not compromise the integrity, security, or compliance of financial operations. This process is generally straightforward for Category 4 firms and Restricted Fund Managers.</p>
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className={styles.scroll_div} style={{ paddingTop: "30px" }}>
                      <div className={styles.Business_title}>
                      Should I identify a Finance Officer before or after obtaining authorization?
                      </div>
                      <div style={{paddingTop:"10px"}}>
                        <p style={{ fontSize: "16px", lineHeight: "23px", maxWidth: "550px" }}>It&apos;s advisable to secure authorization from the Dubai Financial Services Authority (DFSA) before hiring a finance officer. This approach streamlines the hiring process, reduces compliance risks, and allows the finance officer to begin their role promptly without delays. Outsourcing a finance officer can be particularly advantageous in this scenario. By engaging an outsourced finance officer, you can access specialized expertise in DFSA compliance without the need for immediate in-house hiring. These outsourced professionals are often well-versed in DFSA regulations and can help ensure that your financial operations comply from the outset. It’s advisable that all the key controlled personnel should have enough expertise to ensure regulatory compliance.  </p>
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
                  <div className={styles.finance_scroll}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Conditionally render mobile-specific content */}
      {isMobile && (
        <div className={styles.mobonly_scroll} onWheel={handleMouseWheel}>
          <div className={styles.finance_scroll} style={{height:"650px"}}>
            <Container>
            {/* <div className={styles.slider_container}> */}
              <Slider ref={sliderRef} {...sliderSettings}>
                {/* Slide 1 */}
                <div className={styles.scroll_div} style={{ paddingTop: "30px" }}>
                <div className={styles.Business_title}>
                      Is compliance outsourcing permitted by the DFSA?
                      </div>
                      <div style={{paddingTop:"10px"}} >
                        <p style={{ fontSize: "16px", lineHeight: "23px", maxWidth: "550px",color:"white" }}>Yes, the DFSA allows outsourcing of core functions like Compliance, MLRO, and Finance. However, approval depends on factors such as the type of financial service, projected business volume, additional endorsements, and overall team composition. This process is generally straightforward for Category 4 firms and Restricted Fund Manager.</p>
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className={styles.scroll_div} style={{ paddingTop: "30px" }}>
                      <div className={styles.Business_title}>
                      Should I hire a Finance Officer before or after obtaining authorisations?
                      </div>
                      <div style={{paddingTop:"10px"}}>
                        <p style={{ fontSize: "16px", lineHeight: "23px", maxWidth: "550px",color:"white" }}>When applying for DFSA authorisation, firms must identify individuals for Authorised Functions, like Compliance, Finance and Money-Laundering Reporting. While these individuals need not be employed yet, a compliance officer typically resigns from their current role before joining the new firm upon authorisation. To expedite the process, firms can request to conditionally identify the compliance officer. Alternatively, outsourcing the compliance function is a common and efficient approach, allowing an already authorised professional to act as the Compliance and Money Laundering Reporting Officer during the application, expediting the overall timeline. </p>
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
