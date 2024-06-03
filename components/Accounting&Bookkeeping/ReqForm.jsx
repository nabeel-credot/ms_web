import React, { useState,useRef } from "react";
import styles from "./ReqForm.module.css";
import Button from "../ButtonYellowForm";
import Image from "next/image";

import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {sendFormEmail} from "../../utilities/mailer";

// let timer;
//get emailTemplateId as prop
function RequestCall(props) {

  const initialValues = { name: "", email: "", resume: "", jobTitle: props?.id };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors]=useState({})
  const [disableBtn,setDisableBtn]=useState(false)


  console.log("id",props,props?.id)
  const form = useRef();
  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
      if(formValues.name){
        formErrors.name=""
      }
      if (formValues.email) {
        formErrors.email = "";
    }
    if (formValues.resume) {
      formErrors.resume = "";
  }
   
  };
console.log(formValues)
  const handleSubmit=async (e)=>{
      e.preventDefault()
      const errors={}
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!formValues.name){
        errors.name="Name is required "
    }
      if(!formValues.email){
          errors.email="Email is required "
      }
      else if(!mailformat.test(formValues.email)){
          errors.email="Invalid Email address"
      }
      if(!formValues.resume){
          errors.resume="Resume is required "
      }
      setFormErrors(errors)

      if(Object.keys(errors).length==0){
        setDisableBtn(true)
          // toast("Message has been sent successfully")
          try {
            console.log(" response formValues",window.location.href);
            const response = await sendFormEmail("workWithUsFileupload", form.current);
            console.log("response",response)

            // const response = await sendEmail(
            //   props?.templateTitle || "testBookConsultationCall",
            //   {
            //     name: formValues?.name || "",
            //     email: formValues?.email || "",
            //     job-title: formValues?.mobile_no || "",
            //     from_company_name: formValues?.company_name || "",
            //     from_page: window.location.href || "",
            //   }
              
            

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
  }

  return (
    <div className={styles.container}>
      {/* <div className={styles.heading}>BOOK A CONSULTATION CALL!</div> */}
      <div className={styles.header}>
        {/* <div className={styles.icon}>
          <Image src="/images/operator.svg" alt="" layout="fill" />
        </div> */}
        <div className={styles.head}>Drop your CV</div>
      </div>

      <form ref={form} onSubmit={handleSubmit}>
                <div className={styles.form} >
                    <input type="text" placeholder='Name' name="name" value={formValues.name}
                        onChange={handleChange} />
                           {formErrors.name?<div style={{color:"red"}}>{formErrors.name}</div>:""}
                    <input type="text" placeholder='Email' name="email" value={formValues.email}
                        onChange={handleChange} />
                         <input type="text" name="jobTitle" value={"Application for "+props?.id} readOnly className={styles.valueCls}/>
                         {formErrors.email?<div style={{color:"red"}}>{formErrors.email}</div>:""}
                         <div className={styles.cv}>
                         <div className={styles.upload}>
                        <div htmlFor="file-upload" className={formValues.resume && formValues.resume.length>0?styles.custom_file_upload2:styles.custom_file_upload}>
                    {formValues.resume && formValues.resume.length>0?
                    formValues.resume:"Upload Resume"}
                    </div>
                    <label htmlFor="file-upload" className={styles.custom_file_upload_btn}>
                     Upload
                    </label>
                  
                        </div>
                        {formErrors.resume?<div style={{color:"red"}}>{formErrors.resume}</div>:""} 
            
                    <input id="file-upload" type="file"  onChange={handleChange}  name="resume" value={formValues.resume} accept="application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg" />
                         </div>
                         <div style={{fontSize:14}}>Please upload attachments size within 2Mb. Accepted file types are pdf, docx, doc, jpeg.</div>
                       
                </div>

                <div className={styles.webOnly} style={{ marginTop: 10 }}>
                    <Button value="Send " backgroundColor="#D5AF32" color="#192B3A" width="419px"
                        height="60px" src="/images/LarrowB.svg"   style={{ border: "2px solid #192B3A", fontSize: 20 }}
                        disable={disableBtn}
                        />
                </div>
                <div className={styles.mobOnly} style={{ marginTop: 0 }}>
                    <Button value="Send " backgroundColor="#D5AF32" color="#192B3A" width="90%"
                        height="50px" src="/images/LarrowB.svg"   style={{ border: "2px solid #192B3A", fontSize: 20 }}
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
    </div>
  );
}

export default RequestCall;
