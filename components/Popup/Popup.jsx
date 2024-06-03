import React, { useState } from "react";
import styles from "./Popup.module.css";
import Button from "../ButtonYellowForm";
import Image from "next/image";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sendEmail from "../../utilities/mailer";

function RequestCall({ onClick }) {
  const initialValues = {
    name: "",
    email: "",
    company_name: "",
    mobile_no: "",
  };
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
  if (formValues.mobile_no) {
    formErrors.mobile_no = "";
}

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    var phoneNoformat = /^\d{10,13}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formValues.name) {
      errors.name = "Name is required!";
    }

    if (!formValues.email) {
      errors.email = "Email is required!";
    } else if (!mailformat.test(formValues.email)) {
      errors.email = "Invalid Email";
    }
    if (!formValues.mobile_no) {
      errors.mobile_no = "Mobile number is required";
    } else if (!phoneNoformat.test(formValues.mobile_no)) {
      errors.mobile_no = "Invalid Mobile Number";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setDisableBtn(true)
      // toast("Message has been sent successfully")
      try {
        console.log("formValues", formValues);
        const response = await sendEmail("popupCommon", {
          from_name: formValues?.name || "",
          from_email: formValues?.email || "",
          from_phone: formValues?.mobile_no || "",
          from_company_name: formValues?.company_name || "",
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

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerC}>
            <div className={styles.icon}>
              <Image src="/images/operator.svg" alt="" layout="fill" />
            </div>
            <div className={styles.head}>Book a free consultation</div>
          </div>
          <div onClick={onClick} style={{ cursor: "pointer" }}>
            <Image src="/images/close.png" alt="" width={30} height={30} />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
            {formErrors.name ? (
              <div style={{ color: "red" }}>{formErrors.name}</div>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Company/Organization"
              name="company_name"
              value={formValues.company_name}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email ? (
              <div style={{ color: "red" }}>{formErrors.email}</div>
            ) : (
              ""
            )}
            <input
              type="number"
              placeholder="Contact Number"
              name="mobile_no"
              value={formValues.mobile_no}
              onChange={handleChange}
            />
            {formErrors.mobile_no ? (
              <div style={{ color: "red" }}>{formErrors.mobile_no}</div>
            ) : (
              ""
            )}
          </div>

          <div className={styles.webOnly}>
            <Button
              value="Schedule Now "
              backgroundColor="#D5AF32"
              color="#192B3A"
              width="402px"
              style={{ border: "2px solid #192B3A" }}
              height="70px"
              src="/images/LarrowB.svg"
              disable={disableBtn}
            />
          </div>
          <div className={styles.mobOnly}>
            <Button
              value="Schedule Now "
              backgroundColor="#D5AF32"
              color="#192B3A"
              width="278px"
              style={{ border: "2px solid #192B3A" }}
              height="50px"
              src="/images/LarrowB.svg"
              disable={disableBtn}
            />
          </div>
        </form>
        <div className={styles.info}>
          Are you in a hurry? reach us on{" "}
          <span>
            {" "}
            <Link href="tel:+97123093344">+97123093344</Link>
          </span>{" "}
          or <Link href="mailto:info@ms-ca.com">info@ms-ca.com</Link>
        </div>
        {/* <ToastContainer
          autoClose={3000}
          duration={300}
          className="toast-container"
          hideProgressBar={true}
        /> */}
      </div>
    </div>
  );
}

export default RequestCall;
