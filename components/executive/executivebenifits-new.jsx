import React from 'react';
import styles from "./executivenew.module.css";
import Container from '../Common/Container';
import  Slider from 'react-slick'

function ExeBenefits() {
    const mt_4 = {
        marginTop: '90px'
    };
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
        width:"100%",
    };
    const bg4 = {
        backgroundImage: 'url("./images/m4.webp")',
    };
    const mb = {
        marginTop: '50px',
        marginBottom: '80px',
    }

    // Combine styles
    const combinedStyles = {
        ...mb_2,
        ...mt_4,
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "2%"
    };

    return (
        <Container style={combinedStyles}>
             <div className={`${styles.row} ${styles.desktop} `}>
            <div className={styles.exe9}>
                <h1 className={styles.pagetitle} data-aos="fade-right"><span>Benefits</span> of Finding your C – Level candidates with US</h1>
            </div>
        </div>
        <div className={`${styles.row} ${styles.desktop} `}>
            <div className={styles.exe6}>
                <div className={`${styles.exe12} ${styles.card} ${styles.height1}`}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} ${styles.back} `}  style={bg2} data-aos="fade-right">
                            <div className={styles.exebox_content1}>
                                <h1>Exclusive senior level retained search</h1>
                                <p>Retained executive search where you get a game-changing head to your team.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.exe12} ${styles.card} ${styles.height2}`}  style={mt_2}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} ${styles.back} `}  style={bg3} data-aos="fade-left">
                            <div className={styles.exebox_content1}>
                                <h1>Simplified process</h1>
                                <p>Streamlining the entire process, we ensure a hassle-free experience inside and out.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.exe6} >
                <div className={`${styles.exe12} ${styles.card} ${styles.height2}`} >
                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} ${styles.back} `}  style={bg4} data-aos="fade-right">
                            <div className={styles.exebox_content1}>
                                <h1>Shape you to fit in</h1>
                                <p>No worries as we give you the basic insights into the candidates and clients before they become part of your team.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.exe12} ${styles.card} ${styles.height1}`}  style={mt_2}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} ${styles.back} `}  style={bg1} data-aos="fade-left">
                            <div className={styles.exebox_content1}>
                                <h1>Bridging both companies and C-level talent</h1>
                                <p>We connect companies with top-level talents and C-level professionals who can find their ideal firms to work with.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            


            <div className={`${styles.row} ${styles.mob} `}>
        <div className={styles.row}>
            <div className={styles.exe9}>
                <h1 className={styles.pagetitle}><span>Benefits</span> of Finding<br/>your C – Level <br/> <span style={{fontWeight:"unset"}}>candidates with US</span></h1>
            </div>
        </div>
            <Slider {...settings}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} `} style={bg1}>
                            <div className={styles.exebox_content}>
                                <h1>Access to broader talent pool </h1>
                                <p>Top talents from various domains can be accessed rather than satisfying with the minimal search. A thorough search will help to pick the right fit.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} `} style={bg3}>
                            <div className={styles.exebox_content}>
                                <h1>Access to broader talent pool </h1>
                                <p>Top talents from various domains can be accessed rather than satisfying with the minimal search. A thorough search will help to pick the right fit.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} `} style={bg2}>
                            <div className={styles.exebox_content}>
                                <h1>Access to broader talent pool </h1>
                                <p>Top talents from various domains can be accessed rather than satisfying with the minimal search. A thorough search will help to pick the right fit.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.exebox} `} style={bg4}>
                            <div className={styles.exebox_content}>
                                <h1>Access to broader talent pool </h1>
                                <p>Top talents from various domains can be accessed rather than satisfying with the minimal search. A thorough search will help to pick the right fit.</p>
                            </div>
                        </div>
                    </div>
            </Slider>
        </div>
        </Container>
    )
}

export default ExeBenefits;
