import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Startup.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import BookCall from './BookConsultationCall';
import Container from '../Common/Container';
function Accounting_Banner2() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container>
        <div className={cstyles.acountingBanner_container}>
            <div className={cstyles.FAS_Banner_left} data-aos="fade-right">
                <div className={cstyles.black36_heading}>
                    Building Ideas Creating Future!
                </div>

                <div style={{ marginTop: "10px" ,opacity:.5}} className={cstyles.details20Open400 + " " + cstyles.ac2_detail1Width}>
                    Ethical, Transparent, Sustainable and Socially Responsible Business.
                </div>
                <div style={{ marginTop: "10px",fontWeight:500 }} className={cstyles.details20Open400 + " " + cstyles.ac2_detail1Width}>
                    Are you on a roller coaster ride with your business? No worries, let’s take an easy road trip together.
                </div>
                <div style={{ marginTop: "20px" }} className={cstyles.details18Open + " " + cstyles.ac2_detail2Width}>
                    MS is a leading business advisory firm focused on providing services to ambitious entrepreneurs and businesses across the globe. Putting it simply, we are advisors to ambitious businesses, providing them with vital management services. We work with owners / entrepreneurs by assisting them in taking the best decisions in the process, bringing these decisions into action and deliver with sustainable successful results as they desire. For years, we’ve been passionate about achieving positive results for our clients, that will go beyond financial numbers that are uniquely tailored, pragmatic, holistic and enduring.
                </div>

                <div className={cstyles.black36_heading}  style={{marginTop:30}}>
                    The Road Map
                </div>
                <div className={styles.startupSec_list}>
                <ul>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                        <span className={styles.key }>Welcome to The Journey Called Passion!</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                        <span className={styles.key }>Passion to Succeed!</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                        <span className={styles.key }>Passion to Create Values!</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                        <span className={styles.key }>Passion to Create a Future!</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                        <span className={styles.key }>Passion to dream!</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                        <span className={styles.key }>Passion to be the best!</span>
                    </li>
                    <li>
                        <div className={cstyles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={20} height={15} /></div>
                        <span className={styles.key }>Don’t Wait for It, Just Create It.</span>
                    </li>
                    </ul>
                </div>
            </div>
            <div className={cstyles.acountingBanner2Book_right2 } data-aos="fade-left">
                <BookCall />
            </div>
        </div>
        </Container>
    )
}

export default Accounting_Banner2