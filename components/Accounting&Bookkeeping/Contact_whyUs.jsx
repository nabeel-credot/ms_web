import React, { useEffect, useState } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Contact_sectionN.module.css"
import Image from 'next/image'
import formStyles from "./BookConsultationCall.module.css"
import Button from '../ButtonYellow'

import Container from '../Common/Container';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from "../WhiteCard"
function Contact_sectionN() {

   return(
    <Container>
        <div className={styles.whyUs_wrapper}>
        <div className={styles.whyUs_wrapperL}  data-aos="fade-right">
          <div className={cstyles.black36w700_heading} >Why Us?</div>
          <div style={{ marginTop: 20 }} className={styles.whyUs_detailWidth}
          >Our <span>mission </span>is clear –to not only stimulate business creation and sustainable economic development by providing advisory services to entrepreneurs and business, but also to incite an open dialogue between local communities and foreign companies with the ultimate goal of improving both. With your support, our mission will be possible</div>
        </div>
        <div className={styles.whyUs_wrapperR}  data-aos="fade-left">
          <div >
            <Image src="/images/contactBg.png" alt="" width="632" height="329" />
          </div>

        </div>
        </div>
    </Container>
   )

}

export default Contact_sectionN