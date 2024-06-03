import React, { useEffect ,useState} from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Home_how.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookCall from './BookConsultationCall';
import Button from "../ButtonYellowForm"
import Form from "../WhiteCardNew";
import Collapsible from "./collapsiblehom";
import Container from '../Common/Container';
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Appointment from '../Accounting&Bookkeeping/Appointment_schedule'

import sendEmail from "../../utilities/mailer";
function Accounting_Banner2() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);
         
    const [appoint,setAppoint]=useState(false)
    const isConditionMet = true;

    return (
        <Container>
            <div className={cstyles.acountingBanner_container}>
                <div className={cstyles.FAS_Banner_left} data-aos="fade-right">
                    <div className={cstyles.needTitle}>
                        How we can help you?
                    </div>
                    <div className={styles.howCanWeHelp_content}>
                        <Collapsible
                            title={"I am thinking of starting my business at ADGM"
                            }
                            open={false}
                            arrow={true}
                        >
                            <div>
                            Embark on a seamless journey with MS&apos;s expert team to establish your presence in ADGM&apos;s dynamic financial hub. Experience effortless registration, incorporation, licensing, and more with precision and efficiency.
                            </div>
                        </Collapsible>
                        {/* </div>

                    <div> */}
                        <Collapsible
                            title={"I am thinking of starting my business at DIFC"
                            }
                            open={false}
                            arrow={true}
                        >
                            <div>
                            DIFC stands tall as a premier financial hub in the Middle East, and with MSians by your side, your drive to establish a presence here is set to be exceptional. Let us guide you through the exciting path of making your mark in DIFC, ensuring a journey filled with possibilities and success.
                            </div>
                        </Collapsible>
                        {/* </div>
                    <div> */}

                        <Collapsible
                            title={"I m in search of a tax advisor to manage my corporate tax filings"
                            }
                            open={false}
                            arrow={true}
                        >
                            <div>
                            Our Tax and Accounts team works together closely to cut down on tax hassles and boost efficiency for your businesses. Trust us to navigate the complexities of tax systems across jurisdictions, minimizing your tax burdens effectively.
                            </div>
                        </Collapsible>
                        {/* </div>
                    <div>              */}
                        <Collapsible
                            title={"How can I obtain a Tech Innovation license in DIFC?"
                            }
                            open={false}
                            arrow={true}
                        >
                            <div>
                            Obtaining a Tech Innovation License in DIFC involves application, criteria fulfillment, and regulatory review. We specialize in guiding startups through this process, unlocking exclusive incentives for innovation in DIFC.
                            </div>
                        </Collapsible>
                        {/* </div>
                        {/* </div> */}
                    </div>

</div>
                
                <div className={cstyles.RA_banner}>
                <div><Appointment isConditionMet={isConditionMet} appoint={appoint} setAppoint={setAppoint} closehide={true}/></div>
                </div>
            </div>
        </Container>
    )
}

export default Accounting_Banner2