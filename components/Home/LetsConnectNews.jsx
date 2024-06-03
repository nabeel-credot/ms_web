import React, { useState } from "react";

import Image from "next/image";
import styles from "./LetsConnectN.module.css";
import Form from "../WhiteCard";

import Button from "../ButtonYellow";

import ButtonForm from "../ButtonYellowForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sendEmail from "../../utilities/mailer";

function LetsConnect() {
  const initialValues = { name: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [disableBtn,setDisableBtn]=useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if(formValues.name){
      formErrors.name=""
    }
    if (formValues.email) {
      formErrors.email = "";
  }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formValues.name) {
      errors.name = "Name is required!";
    }

    if (!formValues.email) {
      errors.email = "Email is required ";
    } else if (!mailformat.test(formValues.email)) {
      errors.email = "Invalid Email address";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length == 0) {
      setDisableBtn(true)
      // toast("Message has been sent successfully")
      // setFormValues(initialValues)

      try {
        console.log("formValues", formValues);
        const response = await sendEmail("fromBlogNewsLetter", {
          from_name: formValues?.name || "",
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
        setDisableBtn(false);
      }
    }
    // else{
    //      toast("Invalid Form")
    // }
  };

  return (
    <div className={styles.letsConnect_container_news}>
      <div className={styles.letsConnect_left}>
        {/* <Form /> */}
        <Form auto={true}>
          <div className={styles.form_heading}>
            <h3>Be Part of Our Community</h3>
          </div>
          <div className={styles.subscribe}>
            Subscribe for Relevant Blogs and Newsletters from the Industry
          </div>
          <form
            className={styles.form + " " + styles.paddingF}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
            {formErrors.name ? (
              <div style={{ color: "red", marginBottom: 10 }}>
                {formErrors.name}
              </div>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Enter your Email Address"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <div style={{ color: "red" }}>{formErrors.email}</div>
            <div className={styles.webOnly} style={{ marginTop: 20 }}>
              <ButtonForm
                value="Subscribe"
                backgroundColor="#D5AF32"
                color="#192B3A"
                width="278px"
                arrowH={20}
                arrowW={12}
                style={{ border: "2px solid black", fontSize: "16px" }}
                height="50px"
                src="/images/LarrowB.svg"
                disable={disableBtn}
              />
            </div>
            <div
              className={styles.mobOnly}
              style={{ marginTop: 30, marginBottom: 0 }}
            >
              <ButtonForm
                value="Subscribe"
                backgroundColor="#D5AF32"
                color="#192B3A"
                width="256px"
                arrowH={20}
                arrowW={12}
                style={{ border: "2px solid black", fontSize: "16px" }}
                height="50px"
                src="/images/LarrowB.svg"
                disable={disableBtn}
              />
            </div>
          </form>
          {/* <ToastContainer
            autoClose={3000}
            duration={300}
            className="toast-container"
            hideProgressBar={true}
          /> */}
        </Form>
      </div>
      <div className={styles.letsConnect_right}>
        <Form
          auto={true}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles.pt}>
            <Image
              src="/images/letsConnect.svg"
              alt=""
              width={128}
              height={128}
            />
          </div>
          <div className={styles.form_heading1}>Let’s Connect</div>
          <div className={styles.letsConnect_detail}>
            Reach out to us for all your queries. Assuring you a best solution
            from the most energetic team at MS.
          </div>
          <div
            className={styles.webOnly}
            style={{ marginTop: 40, marginBottom: 30 }}
          >
            <Button
              value="Call Us"
              backgroundColor="#D5AF32"
              color="#192B3A"
              width="229px"
              arrowH={20}
              arrowW={12}
              style={{ border: "2px solid black", fontSize: "16px" }}
              height="50px"
              src="/images/LarrowB.svg"
              href="tel: +97123093344"
            />
          </div>
          <div
            className={styles.mobOnly}
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            <Button
              value="Call Us"
              backgroundColor="#D5AF32"
              color="#192B3A"
              width="256px"
              arrowH={20}
              arrowW={12}
              style={{ border: "2px solid black", fontSize: "16px" ,padding:10}}
              src="/images/LarrowB.svg"
              href="tel: +97123093344"
            />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LetsConnect;
