import React, { useEffect, useState } from "react";
import { forwardRef } from "react";
import styles from "./Styles.module.css";
import cstyles from "./Smartup.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../ButtonYellow";
import ButtonForm from "../ButtonYellowForm";
import Button2 from "../Button";
import Form from "../WhiteCardForm";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../Common/Container";
import sendEmail from "../../utilities/mailer";

const Results = forwardRef((props, ref) => {
  const initialValues = {
    mobile_no: "",
    email: "",
    company_name: "",
    job_designation: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [disableBtn,setDisableBtn]=useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    
    if (formValues.email) {
      formErrors.email = "";
  }
  if (formValues.mobile_no) {
    formErrors.mobile_no = "";
}

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    var phoneNoformat = /^\d{10,13}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formValues.mobile_no) {
      errors.mobile_no = "Mobile Number is required";
    } else if (!phoneNoformat.test(formValues.mobile_no)) {
      errors.mobile_no = "Invalid Mobile Number";
    }

    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!mailformat.test(formValues.email)) {
      errors.email = "Invalid Email";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setDisableBtn(true)
      //sent email form
      try {
        console.log("formValues", formValues);
        const response = await sendEmail("smartupContactform", {
          from_email: formValues?.email || "",
          from_company_name: formValues?.company_name || "",
          from_phone: formValues?.mobile_no || "",
          from_role: formValues?.job_designation || "",
          from_page: window.location.href || "",
        });
        if (response?.success === true) {
          toast("Message has been sent successfully");
          setFormValues(initialValues);
          setDisableBtn(false)
        } else if (response?.success === false) {
          toast("Message not sent successfully");
          setDisableBtn(false)
        }
      } catch (err) {
        toast("Message not sent successfully");
        setDisableBtn(false)
      }
    }
    // else{
    //     toast("Invalid Form data")
    // }
  };

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <Container>
      <div className={cstyles.smartUpW_container} data-aos="fade-up">
        <div className={styles.black36_heading_audit + " " + styles.textCntr}>
          Why Team MS?
        </div>
        <div
          className={styles.details18OpenBlackPo300 + " " + styles.textCntr}
          style={{ marginTop: 20 }}
        >
          There are countless reasons to work with us - we know you!
        </div>
        <div
          className={styles.details24400 + " " + styles.textCntr}
          style={{ marginTop: 20 }}
        >
          MSians are driven by unequalled competence and incompetent energy. Our
          approach is holistic and unique, as we bring customized solutions.
        </div>
        <div
          className={styles.details24400 + " " + styles.textCntr}
          style={{ marginTop: 20 }}
        >
          We assist from the startup to establishment, equipping them from day
          one to stay within the law. We bring together all aspects of your
          financial and taxation affairs at ease!
        </div>

        <div className={cstyles.blueContainer_smartUp}>
          <div className={styles.white_heading + " " + styles.textCntr}>
            <span style={{ color: "#D4AE31", marginRight: 10 }}>SmartUp</span>
            Special Package
          </div>
          <div
            className={styles.details18WhitePo300SM + " " + styles.textCntr}
            style={{ marginTop: 30 }}
          >
            We believe that the future lies in the creative ideas that each
            Startups brings to life. Our Full Support Bundle Package customized
            for the startups helps to evaluate the viability of your business
            idea and help you make your business model leaner.
          </div>
          <div
            className={styles.details18WhitePo300SM + " " + styles.textCntr}
            style={{ marginTop: 30 }}
          >
            Taking away your troubles with numbers, we will enable you to move
            faster into your dream venture!
          </div>
          <div className={styles.webOnly5} style={{ marginTop: 40 }}>
            <Button
              value="Enquire Now"
              backgroundColor="#D5AF32"
              color="#192B3A"
              width="382px"
              height="75px"
              src="/images/LarrowB.svg"
            href="#form"
              style={{ fontSize: 20 }}
              arrowH={20}
              arrowW={12}
            />
          </div>
          <div className={styles.mobOnly5} style={{ marginTop: 40 }}>
            <Button
              value="Enquire Now"
              backgroundColor="#D5AF32"
              color="#192B3A"
              width="217px"
              style={{padding:10}}
              src="/images/LarrowB.svg"
              href="#form"
              
            />
          </div>
        </div>

        <div
          className={cstyles.Smartup_section4_formContainer}
          ref={ref}
          id="form"
        >
          {/* <div className={styles.enquireForm}> */}
          <Form>
            <div
              className={
                styles.black36w600_heading +
                " " +
                styles.textCntr +
                " " +
                cstyles.spclWidth +
                " " +
                styles.webOnly
              }
            >
              Drop in your contact below to
              <br />
              <span style={{ color: "#D4AE31" }}>
                get the best solution at light speed
              </span>
            </div>
            <div
              className={
                styles.black36w600_heading +
                " " +
                styles.textCntr +
                " " +
                cstyles.spclWidth +
                " " +
                styles.mobOnly
              }
            >
              Drop in your contact below to
              <span style={{ color: "#D4AE31", marginLeft: 5 }}>
                get the best solution at light speed
              </span>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ring me up in this Number"
                name="mobile_no"
                value={formValues.mobile_no}
                onChange={handleChange}
              />
              <div style={{ marginBottom: 10, color: "red" }}>
                {formErrors.mobile_no}
              </div>
              <input
                type="email"
                placeholder="Drop me a Mail too"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <div style={{ marginBottom: 10, color: "red" }}>
                {formErrors.email}
              </div>
              <input
                type="text"
                placeholder="Company Name"
                name="company_name"
                value={formValues.company_name}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="My Title in the Company is"
                name="job_designation"
                value={formValues.job_designation}
                onChange={handleChange}
              />
              <div className={cstyles.webOnly} style={{ marginTop: 20 }}>
                <ButtonForm
                  value="Enquire Now"
                  backgroundColor="#D5AF32"
                  color="#192B3A"
                  width="500px"
                  height="70px"
                  src="/images/LarrowB.svg"
                  style={{ fontSize: 20 }}
                  arrowH={20}
                  arrowW={12}
                  disable={disableBtn}
                />
              </div>
              <div className={cstyles.mobOnly} style={{ marginTop: 20 }}>
                <ButtonForm
                  value="Enquire Now"
                  backgroundColor="#D5AF32"
                  color="#192B3A"
                  width="348px"
                  style={{padding:10}}
                  src="/images/LarrowB.svg"
                  disable={disableBtn}
                />
              </div>
              {/* <ToastContainer /> */}
            </form>

            {/* </div> */}
          </Form>
          {/* <div className={styles.callNowForm}></div> */}
          <Form>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Image
                src="/images/smartUpF.svg"
                alt=""
                width={128}
                height={128}
              />
            </div>
            <div className={styles.black36w600_heading + " " + styles.textCntr}>
              Made by Entrepreneurs,
              <br />
              for Entrepreneurs.
            </div>
            {/* <div className={styles.details18BlackPo400 + " " + styles.textCntr} style={{ marginTop: 30 }} >
                        Accessible, useful, and affordable, entrepreneurs helping entrepreneurs is how our MS Smartups Program works.
                    </div> */}
            <div className={cstyles.webOnly} style={{ marginTop: 40 }}>
              <Button
                value="Let’s Talk? Call Now"
                backgroundColor="#D5AF32"
                color="#192B3A"
                width="500px"
                height="70px"
                src="/images/LarrowB.svg"
                href="tel:+97123093344"  
                style={{ fontSize: 20 }}
                arrowH={20}
                arrowW={12} call={true}
              />
            </div>
            <div className={cstyles.webOnly} style={{ marginTop: 30 }}>
              <Button2
                value="Get a Price Package"
                backgroundColor="transparent"
                color="#192B3A"
                width="500px"
                height="70px"
                src="/images/LarrowB.svg"
                href="tel:+97123093344"  
                style={{ fontSize: 20 }}
                arrowH={20}
                arrowW={12} call={true}
              />
            </div>

            <div className={cstyles.mobOnly} style={{ marginTop: 40 }}>
              <Button
                value="Let’s Talk? Call Now"
                backgroundColor="#D5AF32"
                color="#192B3A"
                width="300px"
                style={{padding:10}}
                src="/images/LarrowB.svg"
                href="tel:+97123093344"  call={true}
              />
            </div>
            <div className={cstyles.mobOnly} style={{ marginTop: 30 }}>
              <Button2
                value="Get a Price Package"
                backgroundColor="transparent"
                color="#192B3A"
                width="300px"
                style={{padding:10}}
                src="/images/LarrowB.svg"
                href="tel:+97123093344"  call={true}
              />
            </div>
          </Form>
        </div>
      </div>
      {/* <ToastContainer
        autoClose={3000}
        duration={300}
        className="toast-container"
        hideProgressBar={true}
      /> */}
    </Container>
  );
});

Results.displayName = "Results ";

export default Results;
