import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Button from "../ButtonYellowForm"

import Service from "./A&B_service"
import Container from '../Common/Container';
export default function BookkeepinServiceWork({parentCallback}) {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container style={{position:"relative"}}>
            <div className={cstyles.bookkeepinServiceWork_container} >
      

                <div className={cstyles.subContainer2}>
                    <div className={cstyles.a_left2} data-aos="fade-right">
                        <div className={cstyles.dedicated_heading}>
                            Are your finances out of control<br /> and you want to get caught up ?
                        </div>
                        <div className={styles.details18Open + " " + cstyles.subContainer2Detail2+" "+cstyles.margin40}>
                            Bookkeeping is rarely one-size-fits-all. No matter your business situation (or how far behind your books are), we can handle any amount of retroactive bookkeeping.
                        </div>
                        <div className={styles.webOnly}  onClick={()=>parentCallback(true)}>
                            <Button value="Book a Call"  backgroundColor="#D5AF32" color="#192B3A" width="212px"
                                height="60px" src="/images/LarrowB.svg" style={{fontSize:"20px"}} />
                        </div>

                        <div className={styles.mobOnly}  onClick={()=>parentCallback(true)}>
                            <Button value="Book a Call"  backgroundColor="#D5AF32" color="#192B3A" width="177px"
                                height="40px" src="/images/LarrowB.svg" />
                        </div>

                    </div>
                    <div className={cstyles.a_right2+" "+cstyles.fledEnd} data-aos="fade-left">
                        {/* <Image src="/images/fddSub3.png" alt="" width={738} height={345} style={{ objectFit: "cover" }} className={{}} /> */}
                        <div className={cstyles.imgWrap2} >
                            <Image src="/images/bookservice.jpg" alt=""layout='fill' className={cstyles.borderR} objectPosition="center"/>
                        </div>
                    </div>

                </div>

                <Service/>
            </div>
        </Container>
    )
}
