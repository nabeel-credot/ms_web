
import React, { useEffect } from 'react'
import styles from "./executive.module.css";
import cstyles from "../Accounting&Bookkeeping/Styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'


import Container from '../Common/Container';
function ExecutiveServices() {
    const mt_2 = {
        marginTop: '30px',
    };
    const mb_2 = {
        marginBottom: '50px',
    };
    const pt_2 = {
        paddingTop: '50px',
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    


    return (
        <div  className={styles.exe_services} style={mb_2}>
            <Container style={pt_2}>
                <h1 className={styles.pagetitle}>Our Expertise</h1>
            <div>
                <ul className={`${styles.grid_container} ${styles.desktop} `} >
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                                <img className={styles.white} src="./images/compliances_white.svg" alt="" />
                                <img className={styles.blue} src="./images/compliances_blue.svg" alt="" />
                            <h2>Compliance</h2>
                            <p>Uphold regulatory compliance in the Middle East by selecting the right talent to lead the team and mitigate associated risks</p>
                            <div className={styles.pabsolute}>
                                <a href="">Explore</a>
                                <hr />
                            </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                                <img className={styles.white} src="./images/math_white.svg" alt="" />
                                <img className={styles.blue} src="./images/math_blue.svg" alt="" />
                            <h2>Finance</h2>
                            <p>Consultive assistance in selecting top-notch leaders who can oversee the financial activities of the company in the ever-changing business environment.</p>
                            <div className={styles.pabsolute}>
                                <a href="">Explore</a>
                                <hr />
                            </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                                <img className={styles.white} src="./images/tax_white.svg" alt="" />
                                <img className={styles.blue} src="./images/tax_blue.svg" alt="" />
                            <h2>Tax</h2>
                            <p>Simplify the taxation process and plan tax strategies in the Middle East by the successful placement of the visionary leaders.</p>
                            <div className={styles.pabsolute}>
                                <a href="">Explore</a>
                                <hr />
                            </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                                <img className={styles.white} src="./images/compliances_white.svg" alt="" />
                                <img className={styles.blue} src="./images/compliances_blue.svg" alt="" />
                            <h2>Technology</h2>
                            <div className={styles.pabsolute}>
                                <a href="">Explore</a>
                                <hr />
                            </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div  className={`${styles.mob} `} >
                <ul className={`${styles.grid_container} `} >
            <Slider {...settings}>
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                                <img className={styles.white} src="./images/compliances_white.svg" alt="" />
                                <img className={styles.blue} src="./images/compliances_blue.svg" alt="" />
                            <h2>Compliance</h2>
                            <p>Uphold regulatory compliance in the Middle East by selecting the right talent to lead the team and mitigate associated risks</p>
                            <a href="">Explore</a>
                            <hr />
                            </div>
                        </div>
                    </li>
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                                <img className={styles.white} src="./images/math_white.svg" alt="" />
                                <img className={styles.blue} src="./images/math_blue.svg" alt="" />
                            <h2>Finance</h2>
                            <p>Consultive assistance in selecting top-notch leaders who can oversee the financial activities of the company in the ever-changing business environment.</p>
                            <a href="">Explore</a>
                            <hr />
                            </div>
                        </div>
                    </li>
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                                <img className={styles.white} src="./images/tax_white.svg" alt="" />
                                <img className={styles.blue} src="./images/tax_blue.svg" alt="" />
                            <h2>Tax</h2>
                            <p>Simplify the taxation process and plan tax strategies in the Middle East by the successful placement of the visionary leaders.</p>
                            <a href="">Explore</a>
                            <hr />
                            </div>
                        </div>
                    </li>
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                                <img className={styles.white} src="./images/compliances_white.svg" alt="" />
                                <img className={styles.blue} src="./images/compliances_blue.svg" alt="" />
                            <h2>Technology</h2>
                            <p>Strategic recruitment of top-tier technology executives to drive digital innovation, cybersecurity, and transformative IT solutions for businesses in the dynamic landscape of the Middle East.</p>
                            <a href="">Explore</a>
                            <hr />
                            </div>
                        </div>
                    </li>
                    </Slider>
                </ul>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default ExecutiveServices