import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./BePartCompany.module.css"
import cstyles from "./Services.module.css"
import Button from "../ButtonForm"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../Common/Container';
function BePartCompany() {


    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false
        })

    }, []);

    const initialValues = { name: "", email: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = {}
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!formValues.email) {
            errors.email = "Email is required "
        }
        else if (!mailformat.test(formValues.email)) {
            errors.email = "Invalid Email address"
        }
        setFormErrors(errors)
        if (Object.keys(errors).length == 0) {
            toast("Message has been sent successfully")

        }
        // else{
        //      toast("Invalid Form")
        // }
    }


    return (
        <Container>
        <div className={styles.bePartCompany_container} data-aos="fade-up">
            <div className={styles.be_heading}>Be Part of Our Community</div>
            <div className={styles.be_detail}>Subscribe for Relevant Blogs and Newsletters from the Industry</div>
            <div className={styles.be_form}>
                <form className={styles.subscribe_form} onSubmit={handleSubmit}>
                    <div>
                    <input type="text" placeholder='Enter your Name' name="name" value={formValues.name}
                        onChange={handleChange} />
                    </div>
                   <div>
                   <input type="text" placeholder='Enter your Email Address' name="email" value={formValues.email}
                        onChange={handleChange} />
                    <div style={{ color: "red" }}>{formErrors.email}</div>
                   </div>
                  <div className={cstyles.webOnly}  style={{marginTop:"-5px"}}>
                  <Button value="Subscribe" backgroundColor="#192B3A" color="#FCFCFC" width="205px"
                        height="80px" src="/images/LarrowW.svg" />
                  </div>
                  <div className={cstyles.mobOnly2} style={{marginTop:30}}>
                  <Button value="Subscribe" backgroundColor="#192B3A" color="#FCFCFC" width="173px"
                        height="50px" src="/images/LarrowW.svg" />
                  </div>
                  
                </form>

                {/* <ToastContainer /> */}
            </div>

        </div>
        </Container>
    )
}

export default BePartCompany