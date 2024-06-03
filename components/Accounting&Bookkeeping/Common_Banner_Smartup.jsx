import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";
import cstyles from "./Common_BannerNews.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../ButtonYellowForm";
import Container from "../Common/Container";
import sendEmail from "../../utilities/mailer";
import { ToastContainer, toast } from "react-toastify";

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 1900,
      once: false,
    });
  }, []);

  const initialValues = { email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [disableBtn,setDisableBtn]=useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
 
    if (formValues.email) {
      formErrors.email = "";
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
      // toast("Message has been sent successfully")
      setDisableBtn(true)
      try {
    
        const response = await sendEmail("fromSmartupBlogsBannerNewsLetter", {
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
    // else{
    //      toast("Invalid Form")
    // }
  };

  return (
    <Container>
      <div className={cstyles.container_Blue} data-aos="fade-up">
        <h1 className={styles.white_heading48 + " " + styles.margin20}>
        MS Smartup Blogs
        </h1>

        <div className={styles.details24400W + " " + styles.detailWidthCB3}>
        Explore the resource hub for entrepreneurs.
We’ve got it all here
        </div>

        <div className={cstyles.formWrapper}>
          <form className={cstyles.form2} onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Drop your Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email ? (
                <div style={{ color: "red", marginTop: 7 }}>
                  {formErrors.email}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className={styles.webOnly + " " + cstyles.marginL+" "+cstyles.subscribeWrap}>
              <Button
                value="Subscribe"
                backgroundColor="#D5AF32"
                color="#192B3A"
                width="216px"
                style={{ border: "2px solid black", fontSize: 20 }}
                height="60px"
                src="/images/LarrowB.svg"
                arrowH={20}
                arrowW={12}
                disable={disableBtn}
              />
            </div>
            <div className={styles.mobOnly + " " + cstyles.marginL+" "+cstyles.subscribeWrap}>
              <Button
                value="Subscribe"
                backgroundColor="#D5AF32"
                color="#192B3A"
                width="200px"
                style={{ border: "2px solid black" }}
                height="50px"
                src="/images/LarrowB.svg"
                disable={disableBtn}
              />
            </div>
          </form>
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

export default Banner;
