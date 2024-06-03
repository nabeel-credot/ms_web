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
            <div className={styles.onlineBooking_heading + " " + styles.textCntr} >
                Online Bookkeeping Services,<br /> Abu Dhabi, UAE
            </div>
            <div className={styles.onlineBooking_detail + " " + styles.textCntr}>
                We provide a range of specialized online bookkeeping services, Abu Dhabi, UAE which includes:
            </div>



            <div className={styles.onlineBookingService_sub}>
                <div className={styles.columns}>
                    <Collapsible open={false} arrow={true} title={" 1. Ensuring the chart of accounts is used as per business structure and management requirement."}   >
                        <div style={{ padding: 30 }}>
                            Having the right chart of accounts for an expense is important because having too many of them can lead to incorrect account usage, immaterial balances and it also makes the audit process even longer.
                        </div>

                    </Collapsible>
                    <div className={styles.mobOnly}>
                        <Collapsible open={false} arrow={true} title={"2. Bank reconciliation."} >
                            <div style={{ padding: 30 }}>
                                We can ensure an error free books of accounts with increased accuracy and avoidance of miscalculations.
                            </div>
                        </Collapsible>
                    </div>

                    <Collapsible open={false} arrow={true} title={"3. Helping clients on inventory management."} >
                        <div style={{ padding: 30 }}>
                            We provide a detailed analysis of inventory in and out and advice how to manage inventory better to keep the costs in control.
                        </div>
                    </Collapsible>
                    <div className={styles.mobOnly}>
                        <Collapsible open={false} arrow={true} title={"4. Evaluation of financial statement."} >
                            <div style={{ padding: 30 }}>
                                We analyze our client’s performance over a specific period compare the financial statements from the previous period and draw the management’s attention to the most important numbers.
                            </div>
                        </Collapsible>
                    </div>

                    <Collapsible open={false} arrow={true} title={"5. Closing accounts in a timely manner."} >
                        <div style={{ padding: 30 }}>
                            Booking of all entries before closing the book of accounts which includes including accrual, depreciation, prepaid expenses.
                        </div>
                    </Collapsible>

                    <div className={styles.mobOnly}>
                        <Collapsible open={false} arrow={true} title={"6. Management Reports"} >
                            <div style={{ padding: 30 }}>
                                We provide Management reports to help our clients make better business critical decisions.
                            </div>
                        </Collapsible>
                    </div>
                </div>


                <div className={styles.columns}>
                    <div className={styles.webOnly}>
                        <Collapsible open={false} arrow={true} title={"2. Bank reconciliation."} >
                            <div style={{ padding: 30 }}>
                                We can ensure an error free books of accounts with increased accuracy and avoidance of miscalculations.
                            </div>
                        </Collapsible>
                    </div>
                    <div className={styles.webOnly}>
                        <Collapsible open={false} arrow={true} title={"4. Evaluation of financial statement."} >
                            <div style={{ padding: 30 }}>
                                We analyze our client’s performance over a specific period compare the financial statements from the previous period and draw the management’s attention to the most important numbers.
                            </div>
                        </Collapsible>
                    </div>
                    <div className={styles.webOnly}>
                        <Collapsible open={false} arrow={true} title={"6. Management Reports"} >
                            <div style={{ padding: 30 }}>
                                We provide Management reports to help our clients make better business critical decisions.
                            </div>
                        </Collapsible>
                    </div>
                </div>

            </div>
        </div>
        </Container>
    )
}

export default OnlineBookingService