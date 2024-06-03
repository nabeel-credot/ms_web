
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
        <div  className={styles.row}>
            <div className={styles.exe10}>
                <h1 className={styles.pagetitle}><span>Benefits</span> of Hiring the Executives Outsourced</h1>
            </div>
        </div>
        <div className={`${styles.row} ${styles.desktop} `}>
            <div className={styles.exe8}>
                <div className={styles.exebox} style={bg1}>
                    <div className={styles.exebox_content}>

                        <h1>Access to a wider talent pool</h1>
                        <p> Headhunting allows for the identification and selection of top talents across diverse domains, ensuring a comprehensive search for the right fit.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe4}>
                <div className={styles.exebox} style={bg2}>
                    <div className={styles.exebox_content}>

                        <h1>Efficient and prompt hiring process</h1>
                        <p>Executive search streamlines the hiring process, enabling a systematic and timely approach. This efficiency contributes to the rapid and consistent growth of the team.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.row} ${styles.desktop} `} style={mt_2}>
            <div className={styles.exe4}>
                <div className={styles.exebox} style={bg4}>
                    <div className={styles.exebox_content}>

                        <h1>Confidentiality maintenance</h1>
                        <p>Leadership services prioritize the confidentiality of both clients and candidates, fostering trust and strong relationships throughout the hiring process.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe8}>
                <div className={styles.exebox} style={bg5}>
                    <div className={styles.exebox_content}>

                        <h1>Fair Pricing Policy</h1>
                        <p>Opting for executive search eliminates the need for excessive spending on finding the right talent, making it a cost-effective choice without compromising on quality.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.row} ${styles.desktop} `} style={mt_2}>
            <div className={styles.exe8}>
                <div className={styles.exebox} style={bg6}>
                    <div className={styles.exebox_content}>

                        <h1>Customized approach</h1>
                        <p>Executive search strategies can meet the unique needs of clients and candidates, ensuring a targeted effort to secure the right talent for advancing the organization to the next level.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe4}>
                <div className={styles.exebox} style={bg7}>
                    <div className={styles.exebox_content}>

                        <h1>Hiring passive candidates </h1>
                        <p>Identifying and hiring candidates who are actively seeking the right opportunity is more beneficial than hiring candidates who may be hesitant or uncertain. Executive search focuses on recruiting passive candidates, bringing valuable assets to lead teams.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.row} ${styles.mob} `}>
        <Slider {...settings}>
        <div className={styles.exe8} style={{}}>
                <div className={styles.exebox} style={bg1}>
                    <div className={styles.exebox_content}>

                        <h1>Access to broader talent pool </h1>
                        <p>Headhunting allows for the identification and selection of top talents across diverse domains, ensuring a comprehensive search for the right fit.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe4}>
                <div className={styles.exebox} style={bg2}>
                    <div className={styles.exebox_content}>

                        <h1>Efficient and prompt hiring process</h1>
                        <p>Executive search streamlines the hiring process, enabling a systematic and timely approach. This efficiency contributes to the rapid and consistent growth of the team.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe4}>
                <div className={styles.exebox} style={bg4}>
                    <div className={styles.exebox_content}>

                        <h1>Confidentiality maintenance</h1>
                        <p>Leadership services prioritize the confidentiality of both clients and candidates, fostering trust and strong relationships throughout the hiring process.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe8}>
                <div className={styles.exebox} style={bg5}>
                    <div className={styles.exebox_content}>

                        <h1>Fair Pricing Policy</h1>
                        <p>Opting for executive search eliminates the need for excessive spending on finding the right talent, making it a cost-effective choice without compromising on quality.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe8}>
                <div className={styles.exebox} style={bg6}>
                    <div className={styles.exebox_content}>

                        <h1>Customized approach</h1>
                        <p>Executive search strategies can meet the unique needs of clients and candidates, ensuring a targeted effort to secure the right talent for advancing the organization to the next level.</p>
                    </div>
                </div>
            </div>
            <div className={styles.exe4}>
                <div className={styles.exebox} style={bg7}>
                    <div className={styles.exebox_content}>

                        <h1>Hiring passive candidates </h1>
                        <p>Identifying and hiring candidates who are actively seeking the right opportunity is more beneficial than hiring candidates who may be hesitant or uncertain. Executive search focuses on recruiting passive candidates, bringing valuable assets to lead teams.</p>
                    </div>
                </div>
            </div>
            </Slider>
        </div>
        </Container>
    )
}

export default OutsourcinGallerys