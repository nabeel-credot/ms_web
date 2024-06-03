import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import BookCall from './BookConsultationCall';
import Container from '../Common/Container';
function Accounting_Banner2() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    return (
        <Container>
            <div className={styles.payrollBanner_container}>
                <div className={styles.payrollBanner_sub_container}>
                    <div className={styles.FAS_Banner_left} data-aos="fade-right">
                        <div className={styles.payrollBanner_heading}>
                            “To win in the marketplace, you must first win in the workplace” – And we are with you in this!
                        </div>

                        <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                            One of the primary and fundamental aspects of a business is to ensure that the employees are kept in high regard with good morale.
                        </div>

                        <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                            Once you are assured the employees have the motivation and morale to work, it’s an added perk to the business – contributing to success, because you are home to a bunch willing to put an additional effort to gear up the business. Hence, it is vital to ensure that the employees’ wellbeing is taken care of, by maintaining good harmony in the working environment by paying decent salaries on schedule.
                        </div>

                        <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                            Furthermore, payroll management can seem a bit insurmountable if not handled with absolute precision and care as it involves accounting for many factors rather than just wage calculation such as vacation, additional expenses like accommodation, insurance, medical expenses, etc.
                        </div>

                        <div style={{ marginTop: "20px" }} className={styles.details18Open }>
                            To make the ordinary a little easier for businesses, when it comes to payroll management, it is advisable for businesses to hire payroll management services. This would create room and allow businesses to focus on other important factors that can help develop the growth of the business rather than worry about payroll management. Thereby, increasing the efficiency of the business.
                        </div>
                       
                            <div style={{ marginTop: "20px" }} className={styles.details18Open } >
                                Managing all financial responsibilities like payroll management and accounting is a hectic process being very time-consuming. Many businesses still carry out such activities themselves not realizing the quantum of resources being consumed. It is definitely observable that payroll management is an important fundamental activity in every business.
                            </div>

                            <div style={{ marginTop: "20px" }} className={styles.details18Open } >
                                In addition, there are many fundamental factors that are considered when managing the payroll of a business. These factors include precision and accuracy whilst maintaining confidentiality also adhering to the labor laws and regulations where at least one accountant or HR assistant should be present to handle the procedures of payroll for a company.
                            </div>


                    </div>

                    <div className={styles.acountingBanner2Book_right2} data-aos="fade-left">
                        <BookCall />
                    </div>
                </div>
              
            </div>
        </Container>
    )
}

export default Accounting_Banner2