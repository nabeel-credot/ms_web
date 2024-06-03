import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import styles from "./HaveAnyQue.module.css"
// import styles from "./Services.module.css"
import Image from 'next/image'
import Button from "../ButtonYellow"

import Container from '../Common/Container';
function HaveAnyQue() {

    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false
        })},[]);

    return (
        
      
             <Container style={{backgroundColor:"#192B3A"}}>
                  <div className={styles.haveAnyQue_container} data-aos="fade-up">
            <div className={styles.imgContainer}>
            <div className={styles.qMark+" "+styles.logo_is_animetion}>
                    <Image src="/images/QMark.png" alt="" width={86} height={86} />
                </div>

                <div className={styles.qMark1+" "+styles.logo_is_animetion+" "+styles.webOnly3}>
                    <Image src="/images/QMark.png" alt="" width={24} height={24} />
                </div>
                <div className={styles.qMark1+" "+styles.mobOnly3}>
                    <Image src="/images/QMark.png" alt="" width={24} height={24} />
                </div>

                <div className={styles.qMark2+" "+styles.logo_is_animetion}>
                    <Image src="/images/QMark.png" alt="" width={52} height={52} />
                </div>
                

                <div className={styles.qMark3+" "+styles.logo_is_animetion}>
                    <Image src="/images/QMark.png" alt="" width={86} height={86} />
                </div>

                <div className={styles.qMark4+" "+styles.logo_is_animetion+" "+styles.webOnly3}>
                    <Image src="/images/QMark.png" alt="" width={24} height={24} />
                </div>
                <div className={styles.qMark4+" "+styles.mobOnly3}>
                    <Image src="/images/QMark.png" alt="" width={24} height={24} />
                </div>

                <div className={styles.qMark5+" "+styles.logo_is_animetion}>
                    <Image src="/images/QMark.png" alt="" width={52} height={52} />
                </div>

                <div className={styles.qMark6}>
                    <Image src="/images/QMark.png" alt="" width="52" height="52" />
                </div>


                <div className={styles.qMark7}>
                    <Image src="/images/QMark.png" alt="" width="52" height="52" />
                </div>
                {/* <div className={styles.q1+" "+styles.logo_is_animetion}>
                    <Image src="/images/q1.svg" alt="" width="107" height="105" />
                </div>
                <div className={styles.r1+" "+styles.logo_is_animetion}>
                    <Image src="/images/rectangle1.svg" alt="" width="90" height="30" />
                </div>
                <div className={styles.line1+" "+styles.logo_is_animetion}>
                    <Image src="/images/line1.svg" alt="" width="70" height="3" />
                </div>
                <div className={styles.r2 +" "+styles.logo_is_animetion}>
                   
                    <Image src="/images/rectangle2.svg" alt="" width="90" height="30" />
                   
                  
                </div>
                <div className={styles.line2+" "+styles.logo_is_animetion}>
                   
                    <Image src="/images/line2.svg" alt="" width="70" height="3" />
                   
                   
                </div>
                <div className={styles.r3+" "+styles.logo_is_animetion}>
                   
                    <Image src="/images/rectangle3.svg" alt="" width="90" height="30" />
                   
                    
                </div>
                <div className={styles.line3 +" "+styles.logo_is_animetion}>
                     <Image src="/images/line3.svg" alt="" width="70" height="3" />
                  
                </div>
                <div className={styles.q2 +" "+styles.logo_is_animetion}>
                     <Image src="/images/q2.svg" alt="" width="107" height="105" />
                  
                </div>
                <div className={styles.q3 +" "+styles.logo_is_animetion}>
                    <Image src="/images/q3.svg" alt="" width="206" height="206" />
                   
                </div> */}
            </div>
            <div className={styles.haveAnyQue_heading}>
                <h3 style={{ textAlign: "center" }}>Have any question?</h3>
            </div>
            <div className={styles.haveAnyQue_detail}>
                <div>
                    At MS, we take pride in ourselves on having established as one of the best taxation and accounting consultants UAE. Our portfolio applies to all forms of tax-related services, from registration of value added tax to collection and refund of taxes.
                </div>

                <div>
                    Our goal is to provide practical and meaningful solutions to our clients that can help grow their business, while making in most out of their taxes and obligations. If you are looking for a Tax consultant UAE to help you file your taxes, or need assistance with negotiating pricing arrangements, we have got your back!
                </div>
            </div>

            <div className={styles.webOnly3}>
                <Button value="Let’s Talk" backgroundColor="#D4AE31" color="#192B3A" width="271px"
                    height="60px" src="/images/LarrowB.svg"  href="tel:+97123093344" style={{fontSize:"25px"}} arrowH={25} arrowW={15}  call={true}  big={true}/>
            </div>
            <div className={styles.mobOnly3}>
                <Button value="Let’s Talk" backgroundColor="#D4AE31" color="#192B3A" width="auto"
                     src="/images/LarrowB.svg"  href="tel:+97123093344" call={true} style={{padding:10}}/>
            </div>
            </div>
            </Container>
       
       
    )
}

export default HaveAnyQue