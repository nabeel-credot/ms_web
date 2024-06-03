
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
import { Slide } from 'react-toastify';
function ExeBenefits() {
    const mt_4 = {
        marginTop: '90px'
    }
    const mt_2 = {
        marginTop: '30px',
    };
    const mb_2 = {
        marginBottom: '80px',
    };
    const bg1 = {
      backgroundImage: 'url("./images/m1.webp")',
    };
    const bg2 = {
      backgroundImage: 'url("./images/m2.webp")',
    };
    const bg3 = {
      backgroundImage: 'url("./images/m3.webp")',
    };
    const bg4 = {
      backgroundImage: 'url("./images/m4.webp")',
    };
    const mb = {
        marginTop: '50px',
        marginBottom: '80px',
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    
    // Combine styles
    const combinedStyles = {
        ...mb_2,
        ...mt_4,
      };
    
    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container style={combinedStyles}>
        <div className={`${styles.row} ${styles.desktop} `}>
            <div className={styles.exe9}>
                <h1 className={styles.pagetitle}><span>What</span> we offer</h1>
            </div>
        </div>
        <div className={`${styles.row} ${styles.desktop} `}>
            <div className={styles.exe6}>
                <div className={`${styles.exe12} ${styles.card} ${styles.height1}`}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} ${styles.front} `} style={bg1}>
                            <div className={styles.exebox_content}>
                                <h1>Exclusive senior level retained search. </h1>
                                <p>Retained executive search where you get a game-changing head to your team.</p>
                            </div>
                        </div>
                        <div className={`${styles.exebox} ${styles.back} `}  style={bg2}>
                            <div className={styles.exebox_content}>
                                <h1>Exclusive senior level retained search. </h1>
                                <p>Retained executive search where you get a game-changing head to your team.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.exe12} ${styles.card} ${styles.height2}`}  style={mt_2}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} ${styles.front} `} style={bg3}>
                            <div className={styles.exebox_content}>
                                <h1>Shape you to fit in.</h1>
                                <p>Customize your fit effortlessly. Rest assured as we provide essential insights into candidates and clients, ensuring a seamless integration into your team.</p>
                            </div>
                        </div>
                        <div className={`${styles.exebox} ${styles.back} `}  style={bg3}>
                            <div className={styles.exebox_content}>
                                <h1>Shape you to fit in.</h1>
                                <p>Customize your fit effortlessly. Rest assured as we provide essential insights into candidates and clients, ensuring a seamless integration into your team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.exe6}>
                <div className={`${styles.exe12} ${styles.card} ${styles.height2}`}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} ${styles.front} `} style={bg2}>
                            <div className={styles.exebox_content}>
                                <h1>Bridging both companies and C-level talent</h1>
                                <p>Forge connections between companies and C-level talent. We prioritize the linking of organizations with top-tier professionals, helping both find their ideal collaborations.</p>
                            </div>
                        </div>
                        <div className={`${styles.exebox} ${styles.back} `}  style={bg4}>
                            <div className={styles.exebox_content}>
                                <h1>Bridging both companies and C-level talent</h1>
                                <p>Forge connections between companies and C-level talent. We prioritize the linking of organizations with top-tier professionals, helping both find their ideal collaborations.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.exe12} ${styles.card} ${styles.height1}`}  style={mt_2}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} ${styles.front} `} style={bg4}>
                            <div className={styles.exebox_content}>
                                <h1>Simplified process</h1>
                                <p>Streamlining the entire process, we ensure a hassle-free experience inside and out.</p>
                            </div>
                        </div>
                        <div className={`${styles.exebox} ${styles.back} `}  style={bg1}>
                            <div className={styles.exebox_content}>
                                <h1>Simplified process </h1>
                                <p>Streamlining the entire process, we ensure a hassle-free experience inside and out.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.row} ${styles.mob} `}>
        <div className={styles.row}>
            <div className={styles.exe9}>
                <h1 className={styles.pagetitle}><span>Benefits</span> of Finding <br/> your C – Level <br/><br/> candidates with US</h1>
            </div>
        </div>
            <Slider {...settings}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} `} style={bg1}>
                            <div className={styles.exebox_content}>
                                <h1>Exclusive senior level retained search. </h1>
                                <p>Retained executive search where you get a game-changing head to your team.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} `} style={bg3}>
                            <div className={styles.exebox_content}>
                                <h1>Shape you to fit in.</h1>
                                <p>Customize your fit effortlessly. Rest assured as we provide essential insights into candidates and clients, ensuring a seamless integration into your team.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} `} style={bg2}>
                            <div className={styles.exebox_content}>
                                <h1>Bridging both companies and C-level talent</h1>
                                <p>Forge connections between companies and C-level talent. We prioritize the linking of organizations with top-tier professionals, helping both find their ideal collaborations.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} `} style={bg4}>
                            <div className={styles.exebox_content}>
                                <h1>Simplified process </h1>
                                <p>Streamlining the entire process, we ensure a hassle-free experience inside and out.</p>
                            </div>
                        </div>
                    </div>
            </Slider>
        </div>
        </Container>
    )
}

export default ExeBenefits