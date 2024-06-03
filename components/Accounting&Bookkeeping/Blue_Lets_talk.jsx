import React, { useEffect } from 'react'
import cstyles from "./Blue_Lets_talk.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Button from '../ButtonYellow'
import Image from 'next/image'
import Link from 'next/link';

import Container from '../Common/Container';
function TAS_Lets_talk({service}) {
console.log(service);
    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
            <div className={cstyles.TAS_Lets_talk_container2} data-aos="fade-up">
                <div className={cstyles.TAS_Lets_talk_container2L}>
                    <div className={cstyles.details20Open400TAS}>
                        Reach out to us for all your queries. Assuring you a best solution from the most energetic team at MS.
                    </div>
                    <div className={cstyles.details24500 + " " + cstyles.textCntrMob}>
                        Get the Right Guidance.
                    </div>
                    <div className={cstyles.details20Open400TAS}>
                        Speak to our expert who can assist you{service? ` with the process of ${service} in UAE`:"."}
                    </div>
                    <div className={cstyles.webOnly} style={{ marginTop: 35 }}>
                        <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="346px"
                            height="60px" src="/images/LarrowB.svg" href={service==='DMCC'? "tel:+97148357270":"tel:+97123093344" } style={{fontSize:20}} arrowH={20}  arrowW={12} call={true}/>
                    </div>
                    <div className={cstyles.mobOnly} style={{ marginTop: 24 }}>
                        <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="242px"
                            height="60px" src="/images/LarrowB.svg" href={service==='DMCC'? "tel:+97148357270":"tel:+97123093344" } call={true} />
                    </div>
                </div>
                <div className={cstyles.TAS_Lets_talk_container2RMain}>
                    <div className={cstyles.detail16Po} style={{ marginBottom: 10 }}>Speak to Our Team</div>
                    <div className={cstyles.TAS_Lets_talk_container2R}>
                        <div className={cstyles.TAS_Lets_talk_container2R_img }>
                            {/* <div className={cstyles.img}>  */}
                               
                                <Image src="/images/logo3.svg" alt="" layout='fill' />
                            {/* </div> */}
                        </div>
                       
                        <div className={cstyles.TAS_Lets_talk_container2R_content}>
                            <div className={cstyles.details20500Y} style={{ marginBottom: 15 }}>
                               Customer Support
                            </div>
                            {/* <div className={cstyles.detail16Po400} style={{ marginBottom: 10 }}>Founder & CEO, MS</div> */}
                            <div className={cstyles.tasDF}>
                                <div className={cstyles.icon}>
                                <Image src="/images/PhoneB1w.svg" alt="" layout='fill'/>
                                </div>
                              
                                <div className={cstyles.detailsTas}>
                                   {service==='DMCC'? <Link href="tel:+97148357270">
                                   +97148357270
                                    </Link>:
                                    <Link href="tel:+97123093344">
                                        +97123093344
                                    </Link>}
                                </div>
                            </div>
                            <div className={cstyles.tasDF}>
                            <div className={cstyles.icon}>
                                <Image src="/images/MailBw.svg" alt="" layout="fill" />
                                </div>
                                <div className={cstyles.detailsTas}> <Link href="mailto:info@ms-ca.com" >
                                    info@ms-ca.com
                                </Link></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default TAS_Lets_talk