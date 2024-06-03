import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Services.module.css"

import Image from 'next/image'
import Link from 'next/link';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from '../Common/SliderContainer';

function MSian() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false
        })
    }, []);


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        // dotsClass: Bstyles.button__bar,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    centerMode: true,
                    centerPadding: "50px",
                    infinite:true,
                }
            }
        ]
    };

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container>
            <div className={styles.msian_container} data-aos="fade-up">

                <div className={styles.bc_container1 + " " + styles.msianWrap + " " + styles.webOnly}>
                    <div className={styles.bc_container1Wrap} >
                        <div className={styles.meet_heading}>
                            <h3>Being an MSian</h3>
                        </div>
                        <div style={{ marginBottom: 40, marginTop: 30 }} className={styles.msian_detail1}>
                            We’re a people company. Whether you want to advance an idea, a capability, or the world at large, MS is with you every step of the way.
                        </div>

                        <button className={styles.ms_button}>
                            <Link href="/ms" prefetch={false}>Our Team</Link>
                            <div className={styles.arrow} style={{ marginLeft: 20, marginTop: 10 }}>
                                <Image src="/images/LarrowB.svg" alt="" width={12} height={20} />
                            </div>
                        </button>
                    </div>

                </div>

                <div className={styles.bc_container + " " + styles.webOnly} >
                    <Link href="/ms">
                        <a>
                            <div className={styles.msianWrap}>
                                <div className={styles.bIcon} >
                                    <Image src="/images/teamIcon.svg" alt="" width={156} height={156} />
                                </div>
                                <div className={styles.wIcon} >
                                    <Image src="/images/teamWhite.svg" alt="" width={110} height={77} />
                                </div>
                                <div className={styles.msian_heading}>

                                    LIFE OF AN MSIAN


                                </div>

                                <div style={{ marginBottom: 40, textAlign: "center" }} className={styles.msian_detail}>
                                    MSians are driven by unbreakable passion, unequaled competence, and incompetent energy.
                                </div>



                                <button className={styles.ms_buttonH}>
                                    Read More
                                    <div className={styles.arrow} style={{ marginLeft: 20, marginTop: 10 }}>
                                        <Image src="/images/LarrowW.svg" alt="" width={12} height={20} />
                                    </div>
                                </button>


                            </div>
                        </a>
                    </Link>

                    {/* <div className={styles.bIcon} >
                    <Image src="/images/teamIcon.svg" alt="" width={110} height={77} />
                </div>
                <div className={styles.wIcon}>
                    <Image src="/images/teamWhite.svg" alt="" width={110} height={77} />
                </div>

                <div className={styles.msian_heading}>
                    LIFE OF AN MSIAN
                </div>
                <div style={{ marginBottom: 40, textAlign: "center" }} className={styles.msian_detail}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                </div>
                <button className={styles.ms_button}>
                    <Link href="#life-of_msian">Read More</Link>
                    <div className={styles.arrow} style={{ marginLeft: 20, marginTop: 10 }}>
                        <Image src="/images/LarrowB.svg" alt="" width={15.1} height={25.71} />
                    </div>
                </button>
                <button className={styles.ms_buttonH}>
                    <Link href="#life-of_msian">Read More</Link>
                    <div className={styles.arrow} style={{ marginLeft: 20, marginTop: 10 }}>
                        <Image src="/images/LarrowW.svg" alt="" width={15.1} height={25.71} />
                    </div>
                </button> */}

                </div>

                <div className={styles.bc_container + " " + styles.webOnly} >
                    <Link href="/our-awards" prefetch={false}>
                        <a>
                            <div className={styles.msianWrap}>

                                <div className={styles.bIcon} >
                                    <Image src="/images/award.svg" alt="" width="156" height="156" />
                                </div>
                                <div className={styles.wIcon} >
                                    <Image src="/images/awardW.png" alt="" width="156" height="156" />
                                </div>
                                <div className={styles.msian_heading}>

                                    MS AWARDS


                                </div>

                                <div style={{ marginBottom: 40, textAlign: "center" }} className={styles.msian_detail}>
                                    Globally Recognized Advisor
                                </div>


                                <button className={styles.ms_buttonH} >
                                    Read More
                                    <div className={styles.arrow} style={{ marginLeft: 20, marginTop: 10 }}>
                                        <Image src="/images/LarrowW.svg" alt="" width={12} height={20} />
                                    </div>
                                </button>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.bc_container + " " + styles.webOnly} >
                    <Link href="/ms" prefetch={false}>
                        <a>
                            <div className={styles.msianWrap}>
                                <div className={styles.bIcon}>
                                    <Image src="/images/msian.svg" alt="" width="156" height="156" />
                                </div>
                                <div className={styles.wIcon}>
                                    <Image src="/images/necktie.png" alt="" width="156" height="156" />
                                </div>
                                <div className={styles.msian_heading}>
                                    MSIAN
                                </div>

                                <div style={{ marginBottom: 40, textAlign: "center" }} className={styles.msian_detail}>
                                    Our team is built of advisors, accountants, and lawyers who are enthusiastic and take pride in each of their projects.
                                </div>


                                <button className={styles.ms_buttonH} >
                                    Read More
                                    <div className={styles.arrow} style={{ marginLeft: 20, marginTop: 10 }}>
                                        <Image src="/images/LarrowW.svg" alt="" width={12} height={20} />
                                    </div>
                                </button>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className={styles.mobOnly} style={{ marginTop: 10 }} >
                    <div className={styles.audit_heading}>
                        <h3><Link href="/audit" prefetch={false}>Being an MSian</Link></h3>
                    </div>
                    <div className={styles.audit_detail} style={{ padding: "0 40px" }}>
                        We’re a people company. Whether you want to advance an idea, a capability, or the world at large, MS is with you every step of the way.
                    </div>
                </div>

                <div className={styles.mobOnly}>
                    <Slider {...settings} style={{ marginTop: 30 }}>
                        <div className={styles.bc_container + " " + styles.mobOnly} >
                            <Link href="/our-awards">
                                <a>
                                    <div className={styles.msianWrap}>
                                        <div className={styles.bIcon} >
                                            <Image src="/images/award.svg" alt="" width="156" height="156" />
                                        </div>
                                        <div className={styles.wIcon} >
                                            <Image src="/images/awardW.png" alt="" width={110} height="97" />
                                        </div>
                                        <div className={styles.msian_heading}>
                                            MS AWARDS
                                        </div>
                                        <button className={styles.ms_buttonH}>
                                            Read More
                                            <div className={styles.arrow} style={{ marginLeft: 10, marginTop: 1 }}>
                                                <Image src="/images/LarrowW.svg" alt="" width="9" height="10" />
                                            </div>
                                        </button>
                                    </div>
                                </a>
                            </Link>

                        </div>

                        <div className={styles.bc_container + " " + styles.mobOnly} >
                            <Link href="/ms">
                                <a>
                                    <div className={styles.msianWrap}>
                                        <div className={styles.bIcon} >
                                            <Image src="/images/teamIcon.svg" alt="" width={156} height={156} />
                                        </div>
                                        <div className={styles.wIcon}>
                                            <Image src="/images/teamWhite.svg" alt="" width={110} height={77} />
                                        </div>

                                        <div className={styles.msian_heading}>
                                            LIFE OF AN MSIAN
                                        </div>


                                        <button className={styles.ms_buttonH}>
                                            Read More
                                            <div className={styles.arrow} style={{ marginLeft: 10, marginTop: 1 }}>
                                                <Image src="/images/LarrowW.svg" alt="" width="9" height="10" />
                                            </div>
                                        </button>
                                    </div>
                                </a>
                            </Link>

                        </div>

                        <div className={styles.bc_container + " " + styles.mobOnly} >
                            <Link href="/ms">
                                <a>
                                    <div className={styles.msianWrap}>
                                        <div className={styles.bIcon}>
                                            <Image src="/images/msian.svg" alt="" width="156" height="156" />
                                        </div>
                                        <div className={styles.wIcon}>
                                            <Image src="/images/necktie.png" alt="" width={110} height="97" />
                                        </div>
                                        <div className={styles.msian_heading}>

                                            MSIAN
                                        </div>
                                        <button className={styles.ms_buttonH}>
                                            Read More
                                            <div className={styles.arrow} style={{ marginLeft: 10, marginTop: 1 }}>
                                                <Image src="/images/LarrowW.svg" alt="" width="9" height="10" />
                                            </div>
                                        </button>
                                    </div>
                                </a>
                            </Link>

                        </div>
                    </Slider>
                </div>

                <div className={styles.mobOnly2} style={{ marginTop: 30 }}>
                    <button className={styles.ms_buttonTeam}>
                        <Link href="/ms" prefetch={false}>Our Team</Link>
                        <div className={styles.arrow} style={{ marginLeft: 20, marginTop: 1 }}>
                            <Image src="/images/LarrowB.svg" alt="" width="9" height="15" />
                        </div>
                    </button>
                </div>



            </div>
        </Container>
    )
}

export default MSian