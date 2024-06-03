import React, { useEffect, useState } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Contact_sectionN.module.css"
import lstyles from "../../components/Home/LetsConnect.module.css"
import Image from 'next/image'
import formStyles from "./BookConsultationCall.module.css"
import Button from '../ButtonYellow'

import Container from '../Common/Container';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from "../WhiteCard"
function Contact_sectionN() {

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


    const initialValues2 = { name: "", email: "", company_name: "", mobile_no: "", message: "" };
    const [formValues2, setFormValues2] = useState(initialValues2);
    const [formErrors2, setFormErrors2] = useState({});
    const handleChange2 = (e) => {
        const { name, value } = e.target;
        setFormValues2({ ...formValues2, [name]: value });
    };



    const handleSubmit2 = (e) => {
        e.preventDefault();

        const errors = {};
        var phoneNoformat = /^\d{10,13}$/;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!formValues2.name) {
            errors.name = "Name is required!";
        }

        if (!formValues2.email) {
            errors.email = "Email is required!";
        }
        else if (!mailformat.test(formValues2.email)) {
            errors.email = "Invalid Email";
        }
        if (!formValues2.mobile_no) {
            errors.mobile_no = "Mobile number is required";
        }
        else if (!phoneNoformat.test(formValues2.mobile_no)) {
            errors.mobile_no = "Invalid Mobile Number";
        }
        setFormErrors2(errors)

        if (Object.keys(errors).length === 0) {
            toast("Message has been sent successfully")
        }
        // else{
        //     toast("Invalid Form data")
        // }
    };

    return (
        <Container>
            <div className={styles.container}>
                <h3 className={styles.title}>Get in Touch</h3>
                <div className={styles.addressWrapper}>
                    <div className={styles.box}>
                        <div>
                            <Image src="/images/LocationB.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.address}>ADGM Square, Al Maryah<br /> Island ,Abu Dhabi</div>
                    </div>

                    <div className={styles.box}>
                        <div>
                            <Image src="/images/phoneB.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.address}>+97123093344</div>
                    </div>

                    <div className={styles.box}>
                        <div>
                            <Image src="/images/mailB.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.address}>info@ms-ca.com</div>
                    </div>

                    <div className={styles.box}>
                        <div>
                            <Image src="/images/LocationB.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.address}>Al Neyadi Tower<br />
                            Sheikh Rshid Bin Saeed<br /> Road, Abu Dhabi</div>
                    </div>

                    <div className={styles.box}>
                        <div>
                            <Image src="/images/phoneB.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.address}>+97123093344</div>
                    </div>

                    <div className={styles.box}>
                        <div>
                            <Image src="/images/mailB.svg" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.address}>info@ms-ca.com</div>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <h3 className={styles.title2}>Leave a Reply</h3>
                    <div className={styles.formContainer}>
                        <div className={styles.formWrapper}>
                            <form onSubmit={handleSubmit2}>
                                <div className={styles.form2}>
                                    <div className={styles.inputB}>
                                        <input type="text" placeholder='Full Name' name="name" value={formValues2.name}
                                            onChange={handleChange2} />
                                        {formErrors2.name ? <div style={{ color: "red" }}>{formErrors2.name}</div> : ""}
                                    </div>
                                    <div className={styles.inputB}>
                                        <input type="text" placeholder='Email' name="email" value={formValues2.email}
                                            onChange={handleChange2} />
                                        {formErrors2.email ? <div style={{ color: "red" }}>{formErrors2.email}</div> : ""}
                                    </div>
                                    <div className={styles.inputB}>
                                        <input type="text" placeholder='Company/Organization' name="company_name" value={formValues2.company_name}
                                            onChange={handleChange2} />
                                    </div>

                                    <div className={styles.inputB}>
                                        <input type="number" placeholder='Contact Number' name="mobile_no" value={formValues2.mobile_no}
                                            onChange={handleChange2} />
                                        {formErrors2.mobile_no ? <div style={{ color: "red" }}>{formErrors2.mobile_no}</div> : ""}
                                    </div>

                                    <textarea placeholder='Message' name="message" value={formValues2.message}
                                        onChange={handleChange2} rows="6" ></textarea>

                                </div>
                                <div className={styles.webOnly} style={{ marginTop: 40 }}>
                                    <Button value="Submit " backgroundColor="#D5AF32" color="#192B3A" width="215px"
                                        height="70px" src="/images/LarrowB.svg" style={{ border: "2px solid black" }} />
                                </div>
                                <div className={styles.mobOnly} style={{ marginTop: 40 }}>
                                    <Button value="Submit " backgroundColor="#D5AF32" color="#192B3A" width="364px"
                                        height="50px" src="/images/LarrowB.svg" style={{ border: "2px solid black" }} />
                                </div>
                            </form>

                        </div>

                        <div className={styles.subscribeWrapper}>
                            <Form style={{ border: "2px solid #192B3A" }} small={true}>
                                <div className={lstyles.form_heading2}>
                                    <h3>Be Part of Our Community</h3>
                                </div>
                                <div className={lstyles.subscribe}>Subscribe for Relevant Blogs and Newsletters from the Industry</div>
                                <form className={lstyles.form + " " + lstyles.paddingF2} onSubmit={handleSubmit}>
                                    <input type="text" placeholder='Enter your Name' name="name" value={formValues.name}
                                        onChange={handleChange} />
                                    {formErrors.name ? <div style={{ color: "red", marginBottom: 10 }}>{formErrors.name}</div> : ""}
                                    <input type="text" placeholder='Enter your Email Address' name="email" value={formValues.email}
                                        onChange={handleChange} />
                                    <div style={{ color: "red" }}>{formErrors.email}</div>
                                    <div className={lstyles.webOnly} style={{ marginTop: 20 }} >
                                        <Button value="Subscribe" backgroundColor="#D5AF32" color="#192B3A" width="258px" style={{ border: "2px solid black" }}
                                            height="50px" src="/images/LarrowB.svg" />

                                    </div>
                                    <div className={lstyles.mobOnly} style={{ marginTop: 30, marginBottom: 0 }} >
                                        <Button value="Subscribe" backgroundColor="#D5AF32" color="#192B3A" width="156px" style={{ border: "2px solid black" }}
                                            height="40px" src="/images/LarrowB.svg" />

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
                    </div>

                </div>



            </div>
        </Container>

    )
}

export default Contact_sectionN