import React, { useEffect } from 'react'
import styles from "./RA_Services.module.css"

import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';
function RA_IA_service() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);

    return (
        <Container>
            <div className={styles.containerCT + " " + styles.HomePadding} data-aos="fade-up">
                {/* <h3 className={styles.heading}>
                    Plan For The <span style={{ marginLeft: 5, color: "#D4AE31" }}>Future</span>
                </h3>
                <div className={styles.subdetail}>
                    Planning staff cost and their relevant experience is a great glimpse to get of accommodating the costs, and the operational efficiency required, for such a cost to be incurred.
                </div> */}
                <h4 className={styles.subHeadingPay}>
                    Our Services Include:
                </h4>
                <div className={styles.serviceWrap}>
                    <div className={styles.box}>
                        <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
                            </div>
                            <div className={styles.num}>01</div>
                        </div>
                        <div className={styles.title}>
                            Computation of end of service benefits as per the regulations.
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
                            </div>
                            <div className={styles.num}>02</div>
                        </div>
                        <div className={styles.title}>
                            Management of Employee travel expenses.
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
                            </div>
                            <div className={styles.num}>03</div>
                        </div>
                        <div className={styles.title}>
                            Processing of Salaries.
                        </div>
                    </div>

                   
                    <div className={styles.box}>
                        <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
                            </div>
                            <div className={styles.num}>04</div>
                        </div>
                        <div className={styles.title}>
                            Maintaining a secured database that contains information about the employee and will be updated on a regular basis.
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
                            </div>
                            <div className={styles.num}>05</div>
                        </div>
                        <div className={styles.title}>
                            We deliver personalized accurate payroll calculations which include regular and extra payroll calculations, bonus calculations, vacation pay calculations, overtime, etc.
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
                            </div>
                            <div className={styles.num}>06</div>
                        </div>
                        <div className={styles.title}>
                            Maintaining leave records and entitlements.
                        </div>
                    </div>


               
                </div>

                <div className={styles.subContents}>
                According to the regulations, all employers registered with the Ministry of Human Resources and Emiratisation (MoHRE) must subscribe to Wages Protection System (WPS) and pay the wages of their employees through the WPS, as per the due dates. Under this system, the salaries of employees will be transferred to their accounts in banks or financial institutions, which are authorized by the Central Bank of the UAE to provide the service.
                </div>
                <div className={styles.subContents}>
                    We use the Wage Protection System (WPS) to generate the employee file as well as the payslip. The employees will be paid on your behalf automatically through the WPS on time!
                </div>

                <div className={styles.subContents}>
                    If you knew, that hiring a great team – is a strong pillar for your organization, then know that having a great system in place to manage the team efficiently is the next.
                </div>

                <div className={styles.subContents}>
                To the business owners, we say – the dream of ease, performance, management, accuracy, and optimization. And know that, you are a business owner, so let us be the payroll expert!
                </div>
            </div>

        </Container>
    )
}

export default RA_IA_service