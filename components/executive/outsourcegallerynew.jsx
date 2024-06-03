
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
function OutsourcinGallerys() {
    const mt_2 = {
        marginTop: '30px',
    };
    const mb_2 = {
        marginBottom: '50px',
    };
    const bg1 = {
      backgroundImage: 'url("./images/img2.webp")',
    };
    const bg2 = {
      backgroundImage: 'url("./images/img3.webp")',
    };
    const bg4 = {
      backgroundImage: 'url("./images/img4.webp")',
    };
    const bg5 = {
      backgroundImage: 'url("./images/img5.webp")',
    };
    const bg6 = {
      backgroundImage: 'url("./images/executivesearchbanner.webp")',
    };
    const bg7 = {
      backgroundImage: 'url("./images/img1.webp")',
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
        <Container style={mb_2}>
        <div  className={`${styles.row} ${styles.desktop} `}>
            <div className={styles.exe10}>
                <h1 className={styles.pagetitle} data-aos="fade-right"><span>Benefits</span> of Hiring the Executives<br/>Outsourced</h1>
            </div>
        </div>
        <div className={`${styles.row} ${styles.desktop} `}>
            <div className={styles.exe8}>
            <div className={styles.exebox} style={bg2} data-aos="fade-right">
                    <div className={styles.exebox_content}>

                        <h1> Efficient and timely process</h1>
                        <p>Executive search will become systematic and effective in less time. Faster and consistent hiring can lead to growth of the team.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe4}>
            <div className={styles.exebox} style={bg1} data-aos="fade-light">
                    <div className={styles.exebox_content}>

                        <h1>Access to a wider talent pool</h1>
                        <p> Top talents from various domains can be accessed rather than satisfying with the minimal search. A thorough search will help to pick the right fit.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.row} ${styles.desktop} `} style={mt_2}>
            <div className={styles.exe4}>
                <div className={styles.exebox} style={bg4} data-aos="fade-right">
                    <div className={styles.exebox_content}>

                        <h1>Maintaining confidentiality</h1>
                        <p>The privacy and interests of both the clients and the candidates will be protected throughout the hiring process and build good relationships.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe8}>
                <div className={styles.exebox} style={bg5} data-aos="fade-left">
                    <div className={styles.exebox_content}>

                        <h1>Cost-effective hiring</h1>
                        <p>Spending a lot on hiring the right talent is not needed when executive search is the choice. Affordability of the process makes it the accepted method.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.row} ${styles.desktop} `} style={mt_2}>
            <div className={styles.exe8}>
            <div className={styles.exebox} style={bg7} data-aos="fade-right">
                    <div className={styles.exebox_content}>

                        <h1>Hiring passive candidates </h1>
                        <p>The candidates waiting for the right opportunity are always better than hiring tip toeing candidates to lead a team.Recruiting the passive candidates to head the team will be an asset.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe4}>
            <div className={styles.exebox} style={bg6} data-aos="fade-left">
                    <div className={styles.exebox_content}>
                        <h1>Customized approach</h1>
                        <p>The search efforts will be only after studying the unique needs of clients and candidates to get the right talent to help your organization advance to the next level.</p>
                    </div>
                </div>
            </div>
        </div>



        <div className={`${styles.row} ${styles.mob} `}>
        <div className={styles.exe10}>
        <h1 className={styles.pagetitle}><span>Benefits</span> of Hiring the<br/> Executives Outsourced</h1>
            </div>
        <Slider {...settings}>
        <div className={styles.exe8} style={{}}>
                <div className={styles.exebox} style={bg1}>
                    <div className={styles.exebox_content}>

                        <h1>Access to broader talent pool </h1>
                        <p> Top talents from various domains can be accessed rather than satisfying with the minimal search. A thorough search will help to pick the right fit.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe4}>
                <div className={styles.exebox} style={bg2}>
                    <div className={styles.exebox_content}>
                    <h1> Efficient and timely process</h1>
                        <p>Executive search will become systematic and effective in less time. Faster and consistent hiring can lead to growth of the team.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe4}>
                <div className={styles.exebox} style={bg4}>
                    <div className={styles.exebox_content}>

                    <h1>Maintaining confidentiality</h1>
                        <p>The privacy and interests of both the clients and the candidates will be protected throughout the hiring process and build good relationships.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe8}>
                <div className={styles.exebox} style={bg5}>
                    <div className={styles.exebox_content}>

                    <h1>Cost-effective hiring</h1>
                        <p>Spending a lot on hiring the right talent is not needed when executive search is the choice. Affordability of the process makes it the accepted method.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe8}>
            <div className={styles.exebox} style={bg7}>
                    <div className={styles.exebox_content}>
                    <h1>Hiring passive candidates </h1>
                        <p>The candidates waiting for the right opportunity are always better than hiring tip toeing candidates to lead a team.Recruiting the passive candidates to head the team will be an asset.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe4}>
            <div className={styles.exebox} style={bg6}>
                    <div className={styles.exebox_content}>
                    <h1>Customized approach</h1>
                        <p>The search efforts will be only after studying the unique needs of clients and candidates to get the right talent to help your organization advance to the next level.</p>
                    </div>
                </div>
            </div>
            </Slider>
        </div>
        </Container>
    )
}

export default OutsourcinGallerys