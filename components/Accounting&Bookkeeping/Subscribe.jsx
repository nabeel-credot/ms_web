import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";
import cstyles from "./Subscribe.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Container from "../Common/Container";
import sendEmail from "../../utilities/mailer"

function Subscribe() {
  const initialValues = { email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [disableBtn,setDisableBtn]=useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if(formValues.email){
      formErrors.email=""
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formValues.email) {
      errors.email = "Email is required ";
    } else if (!mailformat.test(formValues.email)) {
      errors.email = "Invalid Email address";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length == 0) {
      setDisableBtn(true)
      //sent email form
      try {
        const response = await sendEmail("newsLetterWithEmail", {
          from_email: formValues?.email || "",
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
  };

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);
  return (
    <Container>
      <div className={cstyles.subscribe_Container} data-aos="fade-up">
        <div className={cstyles.subscribe_Left}>
          <div className={styles.black36w600_heading}>
            We help our community of enthusiasts, visionaries, and
            <br /> builders make their ideas a reality.
          </div>
        </div>
        <div className={cstyles.subscribe_Right}>
          <div className={cstyles.details18BlackPo400}>
            To find the latest updates from the Smartups team, subscribe to our
            newsletter here.
          </div>
          <div>
            <form className={cstyles.form2} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Drop your Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email ? (
                <div
                  className={styles.mobOnly}
                  style={{ color: "red", marginTop: 20 }}
                >
                  {formErrors.email}
                </div>
              ) : (
                ""
              )}
              <button className={cstyles.button} type="submit" disabled={disableBtn}>
                Subscribe
                <div className={cstyles.arrow}>
                  <Image
                    src="/images/LarrowW.svg"
                    width={9}
                    height={15}
                    alt="arrow"
                  />
                </div>
              </button>
            </form>
            {formErrors.email ? (
              <div
                className={styles.webOnly}
                style={{ color: "red", marginTop: 20 }}
              >
                {formErrors.email}
              </div>
            ) : (
              ""
            )}
          </div>

          {/* <ToastContainer
            autoClose={3000}
            duration={300}
            className="toast-container"
            hideProgressBar={true}
          /> */}
        </div>
      </div>
    </Container>
  );
}

export default Subscribe;
