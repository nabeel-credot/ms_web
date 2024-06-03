import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting.module.css"
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
            <div className={styles.acountingBanner_container}>
                <div className={styles.FAS_Banner_left} data-aos="fade-right">
                    <div className={styles.black36_heading_audit}>
                    Defining clarity!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        Financial modelling is a process and tool that aids in predicting the future financial performance of a project or a company. To anticipate the future performance, MS financial modeling combines accounting, finance, and business indicators so that businesses can utilize our financial models to assist in making crucial financial decisions. MS modeling team provides customized, appropriate, integrated, logically structured financial models that best suitable for your business and industry to ascertain your expected future financial performance.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                        Our approach accurately portrays a company&apos;s financial performance in the present and the future based on fair and logical estimates and assumptions that are adaptive to changing work schedules. Our clients will receive straightforward, easy to read models due to our cautious approach in model preparation.
                    </div>
                    <div style={{ marginTop: "20px" }} className={styles.details18Open}>
                    Financial modelling could be utilized for a range of objectives such as company valuation, project evaluation, project financing, acquisition decisions, debt issuing, credit ratings, and more. We can provide financial models to comprehend the potential of your new firm in terms of profitability, cash flow, and working capital requirements.
                    </div>
                </div>
                <div className={styles.RA_banner} data-aos="fade-left">
                    <BookCall />
                </div>
            </div>


        </Container>
    )
}

export default Accounting_Banner2