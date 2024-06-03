
import React, { useEffect } from 'react'
import styles from "./executivenew.module.css";
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
        arrows:false,
        
        
      };

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <div  className={styles.exe_services} style={mb_2}>
            <Container  className={styles.serviceContainer}>
                <h1 className={styles.pagetitle}>Services</h1>
            <div>
                <ul className={`${styles.grid_container} ${styles.desktop} `} >
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                            <div style={{minHeight:"250px",marginBottom:"40px"}}>
                                <img className={styles.white} src="./images/compliances_white.svg" alt="" />
                                <img className={styles.blue} src="./images/compliances_blue.svg" alt="" />
                            <h2>Compliance</h2>
                            <p>Adhere to regulations and mitigate risks in UAE market by picking the right talent to lead.</p></div>
                            <div>
                            <div><a href="">Explore</a></div>
                                <hr />
                            </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                            <div style={{minHeight:"250px",marginBottom:"40px"}}>
                                <img className={styles.white} src="./images/math_white.svg" alt="" />
                                <img className={styles.blue} src="./images/math_blue.svg" alt="" />
                            <h2>Accounting</h2>
                            <p>Recruit leaders who can oversee the financial activities of the company in the ever-changing UAE market.</p></div>
                            <div>
                            <div><a href="">Explore</a></div>
                                <hr />
                            </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                            <div style={{minHeight:"250px",marginBottom:"40px"}}>
                                <img className={styles.white} src="./images/tax_white.svg" alt="" />
                                <img className={styles.blue} src="./images/tax_blue.svg" alt="" />
                            <h2>Tax</h2>
                            <p>Simplify the taxation process and plan tax strategies in the Middle East by the successful placement of the visionary leaders.</p></div>
                            <div>
                            <div><a href="">Explore</a></div>
                                <hr />
                            </div>
                            </div>
                        </div>
                    </li>
                </ul>



                <div  className={`${styles.mob} `} >
                <ul className={`${styles.grid_container} `}>
            <Slider {...settings}>
                <div style={{minHeight:"200px"}}>
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                                <img className={styles.blue} src="./images/compliances_blue.svg" alt="" />
                            <h2>Compliance</h2>
                            <p>Adhere to regulations and mitigate risks in UAE market by picking the right talent to lead.</p>
                            <div><a href="">Explore</a></div>
                            <hr />
                            </div>
                        </div>
                    </li>
                    </div>
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                                <img className={styles.blue} src="./images/math_blue.svg" alt="" />
                            <h2>Accounting</h2>
                            <p>Consultive assistance in selecting top-notch leaders who can oversee the financial activities of the company in the ever-changing business environment.</p>
                            <div><a href="">Explore</a></div>
                            <hr />
                            </div>
                        </div>
                    </li>
                    <li className={styles.border}>
                        <div className={styles.servicebox}>
                            <div className={styles.servicecontent}>
                                <img className={styles.blue} src="./images/tax_blue.svg" alt="" />
                            <h2>Tax</h2>
                            <p>Simplify the taxation process and plan tax strategies in the Middle East by the successful placement of the visionary leaders.</p>
                            <div><a href="">Explore</a></div>
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