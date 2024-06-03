import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Collapsible from "./Collapsible";
import styles from "./Styles.module.css"

import Container from '../Common/Container';
function OnlineBookingService() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
            <div className={styles.onlineBookingService_container}>
                <div className={styles.black36_heading + " " + styles.textCntr} >
                    Frequently Asked Questions (FAQ)
                </div>

                <div className={styles.onlineBookingService_sub}>
                    <div className={styles.columns} data-aos="fade-right">

                        <Collapsible open={false} arrow={true} title={"Being a foreigner, Can i be the 100% owner of the DMCC (Dubai) company? "} >
                            <div >
                            Foreigners in the UAE can have 100% ownership of their own business along with complete capital repatriation, when you setup in DMCC.
                            </div>

                        </Collapsible>



                        <Collapsible open={false} arrow={true} title={"Can i setup my bank account for my company in DMCC (Dubai)?"} >
                            <div >
                                Yes, you can take advantage of the local banking infrastructure, at the same time you can enjoy extensive banking facilities in DMCC.
                            </div>

                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Do any activities require special approvals from external authorities?"} >
                            <div >
                                Yes, there are some activities that are regulated by third party authorities in the UAE. In these cases, a No Objection Certificate (NOC) is required in order to add such activity on DMCC license.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"What type of licenses does DMCC (Dubai) issue? "}  >
                            <div >
                                <div style={{ marginBottom: 20 }}>Trade Licenses : To carry out trading activities.
                                </div>
                                <div style={{ marginBottom: 20 }}>
                                    Service License : To carry out service activities.
                                </div>
                                <div style={{ marginBottom: 20 }}>
                                    Industrial License : To carry out light manufacturing activities
                                </div>

                            </div>
                        </Collapsible>



                        <Collapsible open={false} arrow={true} title={"What is the Governing Law for all the DMCC (Dubai) registered companies?"}>
                            <div >
                                All registered companies are subject to the laws of the UAE and DMCC rules and regulations.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Where do I begin in setting my company in DMCC (Dubai)?"}>
                            <div >
                            Contact MS we are more than happy to be a part of your business success
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Do I have to live in Dubai to open a business there?"}  >
                            <div >
                            No, since 100% foreign ownership is now possible Free Zones and for onshore UAE-based businesses.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Why must I establish a business in Dubai?"}  >
                            <div >
                            UAE is the world’s largest market and serves as the ideal place for business. Plus, the entrepreneurs are also exempted from taxes. Additionally, they can also experience excellent logistics and don’t even have capital restrictions on Dubai business setup.
                            </div>
                        </Collapsible>

                    </div>



                    <div className={styles.columns} data-aos="fade-left">

                        <Collapsible open={false} arrow={true} title={"How many same or different activities can I have under one DMCC (Dubai) License."} >
                            <div >
                                You can include up to six similar actvities with each license in DMCC. Additional fees apply in case the activities are from a different category.
                            </div>

                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"What is the minimum share capital required to form a company in DMCC (Dubai)?"}  >
                            <div >
                                The Minimum share Capital for a free zone company in DMCC is AED 50,000.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Can a branch company apply for any activity?"}  >
                            <div >
                                A branch company can be licensed only for the activities that its parent company is currently licensed for. It also essential that these activities are available in DMCC
                            </div>
                        </Collapsible>


                        <Collapsible open={false} arrow={true} title={"Is it Mandatory to have an office to open a new company in DMCC (Dubai)?"}>
                            <div >
                                <div style={{ marginBottom: 20 }}>
                                    Yes, physical office space is mandatory for company set up in DMCC.
                                </div>
                                <div style={{ marginBottom: 20 }}>
                                    You can Choose the following:
                                </div>
                                <div style={{ marginBottom: 20, marginLeft: 30 }}>
                                    <div>- Flexi Desk</div>
                                    <div>- Serviced Office</div>
                                    <div>- Physical office for lease</div>
                                    <div>- Physical office for sale</div>
                                    <div>- Co working Space.</div>
                                    <div>- Retail Space.</div>
                                </div>

                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"What is the license cost to set up a company in DMCC (Dubai) "}>
                        <div >
                                <div style={{ marginBottom: 20 }}>One year License Cost (Trading & Service License) - AED 20,265
                                </div>
                                <div >
                                One year Licesense Cost (General Trading License) -AED 50,265
                                </div> 
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"How long does it take to set up a business in Dubai? "}  >
                            <div >
                            This will depend on whether it’s an LLC or a Free Zone Company. It will also vary depending on which Free Zone and if the company has an individual or corporate shareholder.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"How much does it cost to get a business license?"}  >
                            <div >
                            The cost of applying for an investor visa for company formation differs based on how you choose to get it. Usually, it ranges between AED 15,000 to 50,000 (approx.) or even more.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Is Dubai truly tax-free?"}  >
                            <div>
                            In most cases Dubai is completely tax-free.
                            </div>
                        </Collapsible>

                    </div>
                </div>
            </div>
        </Container>
    )
}

export default OnlineBookingService