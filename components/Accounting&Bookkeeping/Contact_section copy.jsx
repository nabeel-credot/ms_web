import React, { useEffect, useState } from "react";
import cstyles from "./Styles.module.css";
import styles from "./ContactN.module.css";
import Image from "next/image";
import formStyles from "./BookConsultationCall.module.css";
import Button from "../ButtonYellowForm";

import Container from "../Common/Container";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Link from "next/link";
import sendEmail from "../../utilities/mailer";
import { useRouter } from "next/router";
function Contact_section() {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 1900,
      once: false,
    });
  }, []);

  const initialValues2 = {
    name: "",
    email: "",
    company_name: "",
    mobile_no: "",
    message: "",
  };
  const [formValues2, setFormValues2] = useState(initialValues2);
  const [formErrors2, setFormErrors2] = useState({});
  const [disableBtn, setDisableBtn] = useState(false);
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormValues2({ ...formValues2, [name]: value });
    if (formValues2.name) {
      formErrors2.name = "";
    }
    if (formValues2.email) {
      formErrors2.email = "";
    }
    if (formValues2.mobile_no) {
      formErrors2.mobile_no = "";
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    const errors = {};
    var phoneNoformat = /^\d{10,13}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formValues2.name) {
      errors.name = "Name is required!";
    }

    if (!formValues2.email) {
      errors.email = "Email is required!";
    } else if (!mailformat.test(formValues2.email)) {
      errors.email = "Invalid Email";
    }
    if (!formValues2.mobile_no) {
      errors.mobile_no = "Mobile number is required";
    } else if (!phoneNoformat.test(formValues2.mobile_no)) {
      errors.mobile_no = "Invalid Mobile Number";
    }
    setFormErrors2(errors);

    if (Object.keys(errors).length === 0) {
      //sent email form
      setDisableBtn(true);
      try {
        const response = await sendEmail("contactForm", {
          from_full_name: formValues2?.name || "",
          from_email: formValues2?.email || "",
          from_company_name: formValues2?.company_name || "",
          from_phone: formValues2?.mobile_no || "",
          from_message: formValues2?.message || "",
          from_page: window.location.href || "",
        });
        if (response?.success === true) {
          toast("Message has been sent successfully");
          setFormValues2(initialValues2);
          setDisableBtn(false);
          router.push("/thankyou");
        } else if (response?.success === false) {
          toast("Message not sent successfully");
          setDisableBtn(false);
        }
      } catch (err) {
        toast("Message not sent successfully");
        setDisableBtn(false);
      }
    }
    // else{
    //     toast("Invalid Form data")
    // }
  };

  return (
    <Container>
      <div className={styles.Contact_section} data-aos="fade-up">
        <div className={styles.Contact_Sub}>
          <div className={styles.mapLoc}>
            <div className={styles.gmap_canvas}>
              <iframe
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=%20Level%2015,%20Al%20Sarab%20Tower%20ADGM%20Square,%20Al%20Maryah%20Island%20Abu%20Dhabi,%20UAE&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              <a href="https://2piratebay.org"></a>
            </div>
          </div>

          <div className={styles.Contact_formWrap}>
            <div className={styles.Contact_formLeft}>
              <div
                className={cstyles.black36_heading_audit}
                style={{ marginBottom: 20 }}
              >
                Let’s Talk!
              </div>

              <form onSubmit={handleSubmit2}>
                <div className={styles.form2}>
                  <div className={styles.inputB}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      value={formValues2.name}
                      onChange={handleChange2}
                    />
                    {formErrors2.name ? (
                      <div style={{ color: "red", marginBottom: 10 }}>
                        {formErrors2.name}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={styles.inputB}>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={formValues2.email}
                      onChange={handleChange2}
                    />
                    {formErrors2.email ? (
                      <div style={{ color: "red", marginBottom: 10 }}>
                        {formErrors2.email}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={styles.inputB}>
                    <input
                      type="text"
                      placeholder="Company/Organization"
                      name="company_name"
                      value={formValues2.company_name}
                      onChange={handleChange2}
                    />
                  </div>

                  <div className={styles.inputB}>
                    <input
                      type="number"
                      placeholder="Contact Number"
                      name="mobile_no"
                      value={formValues2.mobile_no}
                      onChange={handleChange2}
                    />
                    {formErrors2.mobile_no ? (
                      <div style={{ color: "red", marginBottom: 10 }}>
                        {formErrors2.mobile_no}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <textarea
                    placeholder="Message"
                    name="message"
                    value={formValues2.message}
                    onChange={handleChange2}
                    rows="6"
                  ></textarea>
                </div>
                <div className={styles.webOnly} style={{ marginTop: 50 }}>
                  <Button
                    value="Submit "
                    backgroundColor="#D5AF32"
                    color="#192B3A"
                    width="215px"
                    height="70px"
                    src="/images/LarrowB.svg"
                    style={{
                      border: "2px solid black",
                      fontSize: 20,
                      zIndex: 9999,
                    }}
                    arrowH={20}
                    arrowW={12}
                    disable={disableBtn}
                  />
                </div>
                <div className={styles.mobOnly} style={{ marginTop: 40 }}>
                  <Button
                    value="Submit "
                    backgroundColor="#D5AF32"
                    color="#192B3A"
                    width="364px"
                    height="50px"
                    src="/images/LarrowB.svg"
                    style={{ border: "2px solid black" }}
                    disable={disableBtn}
                  />
                </div>
              </form>
            </div>
            <div className={styles.Contact_formRight}>
              <div
                className={cstyles.white_heading + " " + styles.title}
                style={{ marginBottom: 20 }}
              >
                Get in Touch
              </div>
              <div>
                <ul>
                  <li>
                    <div className={styles.icon}>
                      <Image
                        src="/images/Location.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>

                    <div className={styles.key} style={{ flex: 1 }}>
                      {/* Level 15, Al Sarab Tower
                      <br />
                      ADGM Square,
                      <br />
                      Al Maryah Island
                      <br />
                      Abu Dhabi, UAE */}
                      Level 14, Al Khatem Tower,
                      <br />
                      Abu Dhabi Global Market (ADGM),
                      <br />
                      Al Maryah Island
                      <br />
                      Abu Dhabi, UAE
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <Image
                        src="/images/Location.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className={styles.key} style={{ flex: 1 }}>
                      {/* Suite 501, Floor 5,
                      <br />
                      Al Neyadi Tower,Sheikh Rashid Bin
                      <br /> Saeed Road (Airport Road)
                      <br />
                      P.O.Box No 752 430
                      <br />
                      Abu Dhabi, UAE */}
                      Level 5, Al Neyadi Tower,
                      <br />
                      Sheikh Rashid Bin Saeed Road
                      <br />
                      Abu Dhabi, UAE
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <Image
                        src="/images/Location.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className={styles.key} style={{ flex: 1 }}>
                      {/* Level 1,
                      <br />
                      JEWELLERY & GEMPLEX 3
                      <br /> DMCC
                      <br />
                       Abu Dhabi, UAE */}
                      {/* MS Global Solutions DMCC<br /> */}
                      Fortune Tower - 1107 Cluster C <br />
                      Jumeirah Lake Towers
                      <br />
                      Dubai, UAE
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <Image
                        src="/images/Email.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                    </div>

                    <div className={styles.keyS}>
                      {" "}
                      <Link href="mailto:info@ms-ca.com">info@ms-ca.com</Link>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <Image
                        src="/images/Phone.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                    </div>

                    <div className={styles.keyS}>
                      <Link href="tel: +97123093344">+97123093344</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.whyUs_wrapper}>
          <div className={styles.whyUs_wrapperL} data-aos="fade-right">
            <div className={cstyles.black36w700_heading}>Why Us?</div>
            <div style={{ marginTop: 20 }} className={styles.whyUs_detailWidth}>
              Our <span>mission </span>is clear –to not only stimulate business
              creation and sustainable economic development by providing
              advisory services to entrepreneurs and business, but also to
              incite an open dialogue between local communities and foreign
              companies with the ultimate goal of improving both. With your
              support, our mission will be possible
            </div>
          </div>
          <div className={styles.whyUs_wrapperR} data-aos="fade-left">
            <div>
              <Image
                src="/images/contactBg.png"
                alt=""
                width="632"
                height="329"
              />
            </div>
          </div>
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
}

export default Contact_section;
