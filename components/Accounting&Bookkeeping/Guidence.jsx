import React from 'react'
import Image from "next/image"
import Container from '../Common/Container'
import styles from "./Styles.module.css";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
export default function Guidence() {
  return (
    <Container>

        <div className={styles.guidenceOuter} data-aos="fade-up">
            <div className={styles.guidencelogocontainer}>
            <div className={styles.borderdiv}> <div className={styles.guidencelogo}>  <Image src="/images/logo3new.svg"layout="fill" alt=''/></div></div>
             <div className={styles.contactdiv}><h5 className={styles.rightguide}>Speak to Our Team</h5>
             <div className={styles.mobileguidelogo}>
              <Image src="/images/logo3.svg"layout='fill' alt="logo"/>
             </div>
             <p className={styles.customer}>Customer Support</p>
             <div className={styles.emailnumber}><span style={{fontSize:"17px"}}><MdOutlineLocalPhone style={{marginBottom:"-2px"}}/>&nbsp;&nbsp;+971 48357270&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; &nbsp;&nbsp;<CiMail className={styles.cimail}/>&nbsp;&nbsp; info@ms-ca.com  </span></div>
             <div className={styles.emailnumbermob}><span style={{fontSize:"17px"}}><MdOutlineLocalPhone style={{marginBottom:"-2px"}}/>&nbsp;&nbsp;+971 48357270<br/><CiMail className={styles.cimail}/>&nbsp;&nbsp; info@ms-ca.com  </span></div>

             </div>
            </div>
            <div className={styles.guidediv}>
              <div className={styles.mobOnlyguide}>
                <h5 className={styles.rightguide}>Get the Right Guidance </h5>
                <p className={styles.customer}>Reach out to us for all your queries. Assuring you a best solution<br/> from the most energetic team at MS.</p></div>
                <div style={{paddingBottom:"30px"}}><button className={styles.talkbtn}><a href="tel:+1234567890">Let&apos;s Talk</a></button></div>
            </div>
        </div>
    </Container>
  )
}
