import React, { useEffect ,useState} from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Home_how.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookCall from './BookConsultationCall';
import Button from "../ButtonYellowForm"
import Form from "../WhiteCardNew";
import Collapsible from "../Home/Collapsible";
import Container from '../Common/Container';
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import sendEmail from "../../utilities/mailer";
function Accounting_Banner2() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    const initialValues = { name: "", email: "", company_name: "", message: "" };
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
    if (formValues.message) {
      formErrors.message = "";
  }
    };
  
    useEffect(() => {
      AOS.init({
        duration: 1400,
        once: false,
      });
    }, []);
  
    const handleSumbit = async (e) => {
      e.preventDefault();
      const errors = {};
  
      var phoneNoformat = /^\d{10,13}$/;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!formValues.name) {
        errors.name = "Name is required";
      }
      if (!formValues.email) {
        errors.email = "Email is required";
      } else if (!mailformat.test(formValues.email)) {
        errors.email = "Invalid email";
      }
      if (!formValues.message) {
        errors.message = "Message is required";
      }
      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
        //sent email form
        setDisableBtn(true)
        try {

          const response = await sendEmail("askAQuestion", {
            from_full_name: formValues?.name || "",
            from_email: formValues?.email || "",
            from_company_name: formValues?.company_name || "",
            from_message: formValues?.message || "",
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

    return (
        <Container>
            <div className={cstyles.acountingBanner_container}>
                <div className={cstyles.FAS_Banner_left} data-aos="fade-right">
                    <div className={styles.howHelp_heading}>
                        <h3>How we can help you?</h3>
                    </div>
                    <div className={styles.howCanWeHelp_content}>
                        <Collapsible
                            title={
                                <Link href="/advisory" prefetch={false}>
                                    I am looking for a business advice
                                </Link>
                            }
                            open={false}
                            arrow={true}
                        >
                            <div>
                                Our advisors could bring diverse expertise dependent on your
                                business needs. Advisors are committed to working with
                                clients for at least a year with quarterly on-site meetings.
                            </div>
                        </Collapsible>
                        {/* </div>

                    <div> */}
                        <Collapsible
                            title={
                                <Link href="/deal-advisory" prefetch={false}>
                                    I am thinking of selling my business
                                </Link>
                            }
                            open={false}
                            arrow={true}
                        >
                            <div>
                                We offer clients a more nuanced, more relational and
                                operational approach. We are focused as much on “quick wins”
                                that build momentum as we are on building foundations for
                                the long term.
                            </div>
                        </Collapsible>
                        {/* </div>
                    <div> */}

                        <Collapsible
                            title={
                                <Link href="/#abu-dhabi-global-market-uae" prefetch={false}>
                                    I am thinking for starting my business
                                </Link>
                            }
                            open={false}
                            arrow={true}
                        >
                            <div>
                                Our award winning team of advisers will get under the skin
                                of your business and determine what success means to you.
                            </div>
                        </Collapsible>
                        {/* </div>
                    <div>              */}
                        <Collapsible
                            title={
                                <Link href="/taxation" prefetch={false}>
                                    I am looking for a tax advisor
                                </Link>
                            }
                            open={false}
                            arrow={true}
                        >
                            <div>
                                Our Tax team work closely with our Accounts team to amplify
                                efficiencies and value. We’re also proactive about how your
                                tax liability can be mitigated and, importantly, what can be
                                done in future to reduce your tax burdens.
                            </div>
                        </Collapsible>
                        {/* </div>
                    <div> */}
                        <Collapsible
                            title={
                                <Link href="/audit" prefetch={false}>
                                    I need help to audit and improve my business
                                </Link>
                            }
                            open={false}
                            arrow={true}
                        >
                            <div>
                                We, MSians ensure that the financial systems that hold your
                                business together are reliable, consistent and inherently
                                robust. And by understanding your business and the industry
                                you operate within, we can tailor our support to meet your
                                needs, which will always get the best results.
                            </div>
                        </Collapsible>
                        {/* </div> */}
                    </div>

</div>
                
                <div className={cstyles.RA_banner} data-aos="fade-left">
                <Form>
                <form className={styles.form} onSubmit={handleSumbit}>
                  <input
                    type="text"
                    placeholder="Full Name"
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
                    placeholder="Company Name"
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
                    <div style={{ color: "red", marginBottom: 10 }}>
                      {formErrors.email}
                    </div>
                  ) : (
                    ""
                  )}
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    rows="4"
                  ></textarea>
                  {formErrors.message ? (
                    <div style={{ color: "red", marginBottom: 10 }}>
                      {formErrors.message}
                    </div>
                  ) : (
                    ""
                  )}
                  <div
                    className={styles.webOnly}
                    style={{ marginTop: 20, marginBottom: 30 }}
                  >
                    <Button
                      value="Schedule Now"
                      backgroundColor="#D5AF32"
                      color="#192B3A"
                      width="402px"
                      style={{ fontSize: 20 }}
                      height="70px"
                      src="/images/LarrowB.svg"
                      arrowH={20}
                      arrowW={12}
                      disable={disableBtn}
                    />
                  </div>
                  <div className={styles.info}>
                    Are you in a hurry? reach us on
                    <span>
                      <Link href="tel:+97123093344">+97123093344</Link>
                    </span>{" "}
                    or
                    <span>
                      <Link href="mailto:info@ms-ca.com">info@ms-ca.com</Link>
                    </span>
                  </div>
                  <div className={styles.mobOnly} style={{ marginTop: 40 }}>
                    <Button
                      value="Schedule Now"
                      backgroundColor="#D5AF32"
                      color="#192B3A"
                      width="256px"
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
            </div>
        </Container>
    )
}

export default Accounting_Banner2