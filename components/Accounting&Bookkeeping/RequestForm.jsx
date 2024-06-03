import React, { useState } from 'react'
import styles from "./RequestForm.module.css"
import Button from '../ButtonYellowForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function RequestCall() {
    const initialValues = { name: "", email: "", resume: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors,setFormErrors]=useState({})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
console.log(formValues)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const errors={}
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
            toast("Message has been sent successfully")
          
        }
        // else{
        //      toast("Invalid Form")
        // }
    }
    return (
        <div className={styles.container}>
            <div className={styles.heading}>Request Form</div>
            <form onSubmit={handleSubmit}>
                <div className={styles.form} >
                    <input type="text" placeholder='Name' name="name" value={formValues.name}
                        onChange={handleChange} />
                    <input type="text" placeholder='Email' name="email" value={formValues.email}
                        onChange={handleChange} />
                         {formErrors.email?<div style={{color:"red"}}>{formErrors.email}</div>:""}
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
                    {/* <button></button> */}
                    <input id="file-upload" type="file"  onChange={handleChange}  name="resume" value={formValues.resume} accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
                </div>

                <div className={styles.webOnly} style={{ marginTop: 40 }}>
                    <Button value="Send " backgroundColor="#D5AF32" color="#192B3A" width="419px"
                        height="60px" src="/images/LarrowB.svg"/>
                </div>
                <div className={styles.mobOnly} style={{ marginTop: 40 }}>
                    <Button value="Send " backgroundColor="#D5AF32" color="#192B3A" width="300px"
                        height="60px" src="/images/LarrowB.svg"/>
                </div>

            </form>

            {/* <ToastContainer
                      autoClose={ 3000 }
                      duration={ 300 }
                      className="toast-container"
                      hideProgressBar={ true }
                      /> */}
        </div>
    )
}

export default RequestCall