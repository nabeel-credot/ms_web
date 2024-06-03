import React, { useState } from "react";
import styles from "./BookConsultationCall.module.css";
import Button from "../ButtonYellowForm";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sendEmail from "../../utilities/mailer";
import { useRouter } from "next/router";
// let timer;
//get emailTemplateId as prop
function RequestCall(props) {
  console.log(props.path);
  const router = useRouter();
  const [isFormVisible, setIsFormVisible] = useState(true);
  const handleCloseForm = () => {
    props.setAppoint(false)
  };
  const initialValues = {
    name: "",
    email: "",
    company_name: "",
    mobile_no: "",
    enquiry: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [disableBtn, setDisableBtn] = useState(false);
  //   const [responseText, setResponseText] = useState(" ");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (formValues.name) {
      formErrors.name = "";
    }
    if (formValues.email) {
      formErrors.email = "";
    }
    if (formValues.mobile_no) {
      formErrors.mobile_no = "";
    }
    if(formValues.company_name){
      formErrors.company_name="";
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
    if (!formValues.company_name){
      errors.company_name="Company name is required!"
    }

    if (!formValues.email) {
      errors.email = "Email is required!";
    } else if (!mailformat.test(formValues.email)) {
      errors.email = "Invalid Email";
    }
    if (!formValues.mobile_no) {
      errors.mobile_no = "Mobile number is required!";
    } else if (!phoneNoformat.test(formValues.mobile_no)) {
      errors.mobile_no = "Invalid Mobile Number!";
    }
    if (!formValues.message) {
      errors.message = "Message is required!";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // toast("Message has been sent successfully")
      // setFormValues(initialValues)
      setDisableBtn(true);
      try {
        const response = await sendEmail(
          props?.templateTitle || "testBookConsultationCall",
          {
            from_full_name: formValues?.name || "",
            from_email: formValues?.email || "",
            from_phone: formValues?.mobile_no || "",
            from_company_name: formValues?.company_name || "",
            from_message: formValues?.message || "",
            from_page: window.location.href || "",
          }
        );
        //  console.log("responseresponse:", response);
        if (response?.success === true) {
          toast("Message has been sent successfully");
          setFormValues(initialValues);
          setDisableBtn(false);
          if (props.path === "adgm") {
            router.push("/thankyou-adgm");
          } else if (props.path === "dmcc") {
            router.push("/thankyou-dmcc");
          } else {
            router.push("/thankyou");
          }
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
  // const isConditionMet = true;
  console.log( props?.closehide );
  const appContainerClassName = props?.isConditionMet
  ? `${styles.Appcontainer} ${styles.ConditionalBorderStyle}`
  : styles.Appcontainer;
  return (
    <>
    <div className={appContainerClassName}>
     
      <div className={styles.Appheader}>
        <div className={styles.Appiconhead}>
        <div className={styles.Appicon}>
          <Image src="/images/pophead.svg" alt="" layout="fill" />
        </div>
        <div className={styles.Apphead}>
        Schedule your Appointment
         
          </div></div>
          {!props?.closehide && <div className={styles.closebtn} onClick={handleCloseForm}><IoIosClose style={{fontSize:"20px"}} /></div>}
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.Appform}>
          <input
            type="text"
            placeholder="Full Name*"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {formErrors.name ? (
            <div style={{ color: "red",fontSize:"12px" }}>{formErrors.name}</div>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="Company/Organization*"
            name="company_name"
            value={formValues.company_name}
            onChange={handleChange}
          />
           {formErrors.company_name ? (
            <div style={{ color: "red",fontSize:"12px" }}>{formErrors.company_name}</div>
          ) : (
            ""
          )}

          <input
            type="text"
            placeholder="Email*"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email ? (
            <div style={{ color: "red",fontSize:"12px" }}>{formErrors.email}</div>
          ) : (
            ""
          )}
          <input
            type="number"
            placeholder="Contact Number*"
            name="mobile_no"
            value={formValues.mobile_no}
            onChange={handleChange}
            className={styles.AppcustomInput}
          />

          {formErrors.mobile_no ? (
            <div style={{ color: "red",fontSize:"12px" }}>{formErrors.mobile_no}</div>
          ) : (
            ""
          )}
         
          <textarea
  placeholder="Message*"
  name="message"
  value={formValues.message}
  onChange={handleChange}
  row={5}
/>
{formErrors.message ? (
            <div style={{ color: "red",fontSize:"12px" }}>{formErrors.message}</div>
          ) : (
            ""
          )}
          {/* <p className="response-text">{responseText}</p> */}
        <div className={styles.AppwebOnly}>
          <button className={styles.Appbutton}><span>Speak to Our Team</span></button>
         
        </div>
        </div>

        <div className={styles.AppmobOnly}>
          <Button
            value="Schedule Now "
            backgroundColor="#D5AF32"
            color="#192B3A"
            width="90%"
            style={{ border: "2px solid #192B3A" }}
            height="50px"
            src="/images/LarrowB.svg"
            disable={disableBtn}
          />
        </div>
      </form>
      <div className={styles.Appinfo}>
        Are you in a hurry? reach us on{" "}
        <span>
        {props?.path==="difc"||props?.path==="dmcc"? <Link href="tel: +971 48357270">+97148357270</Link>:
          <Link href="tel: +971 48357270">+97148357270</Link>}
        </span>{" "}
        or{" "}
       <br/> <span>
          <Link href="mailto:info@ms-ca.com">info@ms-ca.com</Link>
        </span>
      </div>
     
    </div></>
  );
}

export default RequestCall;
