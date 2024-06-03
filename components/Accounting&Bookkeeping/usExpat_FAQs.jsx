import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Collapsible from "./Collapsible";

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
        <div >
            <div className={styles.black36_heading_audit + " " + styles.textCntr} style={{color:"#212120"}} >
                FAQ’s
            </div>
            <div className={styles.details18OpenBlackPo300  + " " + styles.textCntr} style={{color:"#212120"}}>
                The USA is one of the few countries to tax their citizens not on their US residency status but on their citizenship. The IRS and US government are proactively trying to identify individuals where they think a filing obligation exists.
            </div>

            <div className={styles.onlineBookingService_sub} data-aos="fade-right">
                <div className={styles.columns}>
                    <Collapsible open={false} arrow={true} title={"So how do I know whether I need to file a US Tax Return? "}   fontWeight={500}>
                        <div >
                            Regardless of where you currently reside – whether that’s in the US or in a foreign country – if you are a US citizen or Green Card holder, you are required to file an annual US tax return with the IRS. You may however qualify to exclude some or all of your foreign earned income from U.S. taxation if you meet certain tests.
                        </div>
                    </Collapsible>

                    <Collapsible open={false} arrow={true} title={"Who we are and what services we can provide?"}   fontWeight={500} >
                    <div >
                        MS is a UAE based firm offering US, compliance and consultancy services. We specialize in serving citizens from all over the world and have a talented team whose business is to advise on tax compliance matters that have an international element.
                        
                        </div>
                      
                    </Collapsible>

                </div>
                <div className={styles.columns} data-aos="fade-left" >
                    <Collapsible open={false} arrow={true} title={"What are the implications of filing?"}   fontWeight={500} >
                    <div >
                            <div>As well as the obvious tax consequences of filing, the administrative burden and penalties that can apply also need to be considered.</div>
                            <div style={{marginTop:20}}>
                                Regardless of the level of your US sourced income – which may indeed be none – or whether you owe minimal or no US tax on completion of your return, you are still required to file a return.</div>
                        </div>
                    </Collapsible>

                </div>
            </div>

        </div>
        </Container>
    )
}

export default OnlineBookingService