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

                        <Collapsible open={false} arrow={true} title={"What are the legal frameworks for entities to be established in Masdar CityFree Zone? "} >
                            <div>
                                <div style={{ marginBottom: 20 }}>
                                    Foreigners in the UAE can have 100% ownership of their own business along with complete capital repatriation, when you setup in DMCC.
                                </div>
                                <div style={{ marginBottom: 20 }}>
                                    Masdar City Free Zone offers the following three legal frameworks:
                                </div>
                                <div style={{ marginBottom: 20, marginLeft: 30 }}>
                                    <div>•  Limited Liability Company – Corporate Shareholder </div>
                                    <div>•  Limited Liability Company – Natural Shareholder </div>
                                    <div>• A Branch of a Foreign / UAE company – Branch </div>

                                </div>

                            </div>
                        </Collapsible>


                        <Collapsible open={false} arrow={true} title={"What is the minimum capital required for establishing a company in Masdar City Free Zone? "} >
                            <div >
                                There is no minimum capital requirement if you are setting up a branch of your company. However, for establishing an LLC, the minimum capital requirement is AED50,000 (US$13,623.97).
                            </div>

                        </Collapsible>


                        <Collapsible open={false} arrow={true} title={"Do I need a local partner to invest in Masdar Free Zone?"} >
                            <div >
                                No, 100 per cent foreign ownership is permitted in Masdar City Free Zone.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Is it possible to open a branch office of my free zone company outside the free zone? "}  >
                            <div >
                                Companies incorporated and registered in Masdar City Free Zone have their own legal identity and have the right to open branches outside the free zone subject to the approval of the concerned authorities.
                            </div>
                        </Collapsible>



                        <Collapsible open={false} arrow={true} title={"Can I transfer my money outside the country freely? "}>
                            <div >
                                Yes. Masdar City Free Zone allows unrestricted repatriation of capital and profits.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Can I sell my goods in the local market?"}>
                            <div >
                                The licence issued by Masdar City Free Zone is valid for operating your business only inside the free zone. Goods can be sold in the local market through distributors or agents.
                            </div>
                        </Collapsible>



                        <Collapsible open={false} arrow={true} title={"Can I have a licence from Masdar City Free Zone but operate from Dubai or another Emirate? "}  >
                            <div >
                                The licence issued by Masdar City Free Zone is valid for operating your business only inside the free zone. This licence cannot be used for setting up a business in any of the other Emirates. Goods may be sold to other Emirates through distributors.
                            </div>
                        </Collapsible>


                        

                        <Collapsible open={false} arrow={true} title={"What is the method of payment for facilities at Masdar City Free Zone? "}  >
                            <div >
                                Advance payment is required.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"What are the activities allowed in Masdar City Free Zone? "}  >
                            <div >
                                All trading activities of specific products are allowed as long as they are not hazardous.
                            </div>
                        </Collapsible>



                        <Collapsible open={false} arrow={true} title={"Is it necessary for businesses licensed by Masdar City Free Zone Authority to lease premises in your zone? "}  >
                            <div >
                                Commercial licences issued by Masdar City Free Zone Authority are subject to leasing a facility within Masdar City.
                            </div>
                        </Collapsible>

                    </div>



                    <div className={styles.columns} data-aos="fade-left">

                        <Collapsible open={false} arrow={true} title={"Do I have to employ UAE nationals in my business? "} >
                            <div >
                                There is no compulsion to do so and you are free to hire staff from any country.
                            </div>

                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Can a Masdar City company enter into partnership with another body / entity to set up another company outside Masdar City? "}  >
                            <div >
                                As a legal entity, a Masdar City company can enter into partnership as a shareholder in another entity, whether inside or outside Masdar as permitted.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Can I establish a branch of my own company? "}  >
                            <div >
                                Yes, any company can establish a branch in Masdar City Free Zone.
                            </div>
                        </Collapsible>


                        <Collapsible open={false} arrow={true} title={"Can I be a partner in more than one company? "}>
                            <div >
                                There is no restriction on the number of businesses one person can be involved in.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Is there any corporate / income tax applied to the companies or to the individuals? "}>
                            <div >
                                {/* Masdar City Free Zone follows a zero percent tax regime. */}
                                Contact MS we are more than happy to be a part of your business success
                            </div>
                        </Collapsible>


                        <Collapsible open={false} arrow={true} title={"What is the validity of the licence? "}  >
                            <div >
                                Licences are valid for a period of one year and are renewable on an annual basis.
                            </div>
                        </Collapsible>
                        <Collapsible open={false} arrow={true} title={"How long does it take to register a company after submitting all legal documents and settling payment? "}  >
                            <div >
                                Registering a company will take two working days after submitting all legal documents and settling payment.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"Can a company take a licence at Masdar City Free Zone without renting a facility?"}  >
                            <div >
                                No, a company must lease a facility in order to receive a licence.
                            </div>
                        </Collapsible>

                        <Collapsible open={false} arrow={true} title={"How long does it take to set up a business through Masdar City Free Zone? "}  >
                            <div >
                                It takes an average of five days to set up a business once a completed licence application has been received.
                            </div>
                        </Collapsible>



                    </div>
                </div>
            </div>
        </Container>
    )
}

export default OnlineBookingService