import React, {useEffect, useState } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Contact.module.css"
import Image from 'next/image'
import formStyles from "./BookConsultationCall.module.css"
import Button from '../ButtonYellow'

import Container from '../Common/Container';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact_section() {

  useEffect(()=>{
    AOS.init({
      duration: 1900,
      once: false,
    })},[]);



  const initialValues = { name: "", email: "", company_name: "", mobile_no: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };



const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    var phoneNoformat = /^\d{10,13}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formValues.name) {
        errors.name = "Name is required!";
    } 

    if (!formValues.email) {
        errors.email = "Email is required!";
    } 
    else if (!mailformat.test(formValues.email)) {
        errors.email = "Invalid Email";
    }
    if (!formValues.mobile_no) {
        errors.mobile_no = "Mobile number is required";
     } 
     else if (!phoneNoformat.test(formValues.mobile_no)) {
        errors.mobile_no = "Invalid Mobile Number";
    }
    setFormErrors(errors)
 
    if (Object.keys(errors).length === 0) {
        toast("Message has been sent successfully")
    }
    // else{
    //     toast("Invalid Form data")
    // }
};

  return (
    <Container>
    <div className={styles.Contact_section}  data-aos="fade-up">
      <div className={styles.Contact_Sub}>
        <div className={styles.mapLoc}>
          <div className={styles.gmap_canvas}>
            <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
            </iframe><a href="https://2piratebay.org">
            </a>
          </div>
        </div>
        <div className={styles.Contact_formWrap}>
          <div className={styles.Contact_formLeft}>
            <div className={cstyles.white_heading}>Let’s Talk!</div>
            <div className={cstyles.details18OpenWhitePo}>It just takes one conversation to get the ball unstuck and rolling in the right direction, so why not get in touch?</div>
            <div className={cstyles.detail20400} style={{ color: "#D4AE31" }}>Mon – Fri : 8.30 am – 5.30 pm
             <br/> Sunday : Closed</div>
            <form onSubmit={handleSubmit}>
              <div className={formStyles.form2}>
                <input type="text" placeholder='Full Name' name="name" value={formValues.name}
                  onChange={handleChange} />
                    {formErrors.name? <div style={{ color: "red" }}>{formErrors.name}</div>:""}
                <input type="text" placeholder='Email' name="email" value={formValues.email}
                  onChange={handleChange} />
                   {formErrors.email?<div style={{ color: "red" }}>{formErrors.email}</div>:""}
                <input type="text" placeholder='Company/Organization' name="company_name" value={formValues.company_name}
                  onChange={handleChange} />
                <input type="number" placeholder='Contact Number' name="mobile_no" value={formValues.mobile_no}
                  onChange={handleChange} />
                    {formErrors.mobile_no?<div style={{ color: "red" }}>{formErrors.mobile_no}</div>:""}
                <textarea placeholder='Message' name="message" value={formValues.message}
                  onChange={handleChange} rows="4" ></textarea>
                {/* <input type="text" placeholder='Message' name="message" value={formValues.message}
                    onChange={handleChange} /> */}
              </div>

              <div className={styles.webOnly} style={{ marginTop: 40 }}>
                <Button value="Submit " backgroundColor="#D5AF32" color="#192B3A" width="200px"
                  height="70px" src="/images/LarrowB.svg" />
              </div>
              <div className={styles.mobOnly} style={{ marginTop: 40 }}>
                <Button value="Submit " backgroundColor="#D5AF32" color="#192B3A" width="364px"
                  height="50px" src="/images/LarrowB.svg" />
              </div>
            </form>
            {/* <ToastContainer
                      autoClose={ 3000 }
                      duration={ 300 }
                      className="toast-container"
                      hideProgressBar={ true }
                      /> */}
          </div>
          <div className={styles.Contact_formRight}>
            <ul>
              <div className={styles.yellowBg}  data-aos="fade-right">
                <li>
                  <Image src="/images/LocationB.svg" alt="" width={30} height={30} />
                  <span style={{ marginLeft: 10 }}>ADGM Square, Al Maryah Island ,Abu Dhabi</span></li>
                <li>
                  <Image src="/images/PhoneB.svg" alt="" width={30} height={30} />
                  <span style={{ marginLeft: 10 }}>+97123093344</span></li>
                <li>
                  <Image src="/images/EmailB.svg" alt="" width={30} height={30} />
                  <span style={{ marginLeft: 10 }}>info@ms-ca.com</span></li>

              </div>
              <div className={styles.yellowBg}  data-aos="fade-left">
                <li>
                  <Image src="/images/LocationB.svg" alt="" width={30} height={30} />
                  <span style={{ marginLeft: 10 }}>Al Neyadi Tower
                    Sheikh Rshid Bin Saeed Road, Abu Dhabi
                  </span></li>
                <li>
                  <Image src="/images/PhoneB.svg" alt="" width={30} height={30} />
                  <span style={{ marginLeft: 10 }}>+97123093344
                  </span></li>
                <li>
                  <Image src="/images/EmailB.svg" alt="" width={30} height={30} />
                  <span style={{ marginLeft: 10 }}>info@ms-ca.com
                  </span></li>
              </div>
            </ul>
          </div>
        </div>
      </div>
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

    </div>
    </Container>
  )
}

export default Contact_section