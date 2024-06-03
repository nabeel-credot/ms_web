import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Styles.module.css"
import BluePointBox from '../BluePointBox'
import Container from '../Common/Container';
function Accounting_services_points() {
    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
            <div className={styles.accounting_services_points_container}>
                <div className={styles.accounting_services_points_box} data-aos="fade-right">
                    <BluePointBox style={{
                        paddingTop: 70, paddingRight: 55, paddingLeft: 30, width: "610px",
                        height: "243px"
                    }}>
                        <div className={styles.accounting_services_points_detail}>
                            You can benefit from our outsourced accounting services with expert services that will save you cost and time, provide you with high level of accuracy and assured internal control.
                        </div>
                    </BluePointBox>
                </div>

                <div className={styles.accounting_services_points_box + " " + styles.services_box_mL} data-aos="fade-left">
                    <BluePointBox style={{
                        paddingTop: 35, paddingRight: 55, paddingLeft: 30, width: "610px",
                        height: "243px"
                    }}>
                        <div className={styles.accounting_services_points_detail}>
                            Even though accounts have a lot more to do with business, we understand that the foundation of any high-performing partnership is a strong relationship. That is why Msians always take care of keeping a beautiful bond with all our clients. We not only help your business grow, but try to get to know you, as well as your firm.
                        </div>
                    </BluePointBox>
                </div>
                <div className={styles.accounting_services_points_box + " " + styles.cntr} data-aos="fade-up">
                    <BluePointBox style={{
                        paddingTop: 48, paddingRight: 65, paddingLeft: 35, width: "610px",
                        height: "243px"
                    }}>
                        <div className={styles.accounting_services_points_detail}>
                            One of our heartfelt missions is to provide all our clients with true visionary accounting and bookkeeping services that increase profits, save time, and ultimately stimulate growth.
                            <span style={{ color: "#D4AE31", marginLeft: 5 }}>Growth is a complex process, but growth with MSians is different. And that is our word!
                            </span>
                        </div>
                    </BluePointBox>
                </div>
                <div className={styles.mobOnly}>
                    <BluePointBox style={{
                        padding: "45px 30px", width: "auto",
                        height: "auto"
                    }}>
                        <div className={styles.accounting_services_points_detail}>
                            You can benefit from our outsourced accounting services with expert services that will save you cost and time, provide you with high level of accuracy and assured internal control.
                        </div>
                    </BluePointBox>

                    <BluePointBox style={{
                        padding: "45px 30px", width: "auto",
                        height: "auto", margin: "50px 0"
                    }}>
                        <div className={styles.accounting_services_points_detail}>
                            Even though accounts have a lot more to do with business, we understand that the foundation of any high-performing partnership is a strong relationship. That is why Msians always take care of keeping a beautiful bond with all our clients. We not only help your business grow, but try to get to know you, as well as your firm.
                        </div>
                    </BluePointBox>

                    <BluePointBox style={{
                        padding: "45px 30px", width: "auto",
                        height: "auto"
                    }}>
                        <div className={styles.accounting_services_points_detail}>
                            One of our heartfelt missions is to provide all our clients with true visionary accounting and bookkeeping services that increase profits, save time, and ultimately stimulate growth.
                            <span style={{ color: "#D4AE31", marginLeft: 5 }}>Growth is a complex process, but growth with MSians is different. And that is our word!
                            </span>
                        </div>
                    </BluePointBox>
                </div>
            </div>
        </Container>
    )
}

export default Accounting_services_points