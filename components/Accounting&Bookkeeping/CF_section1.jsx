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
            <div className={styles.acountingBanner_container}>
                <div className={styles.FAS_Banner_left} data-aos="fade-right">
                    <div className={styles.black36_heading}>
                        As a successful entrepreneur, you’ll realise that making the most out of your opportunities means always maximizing them and occasionally taking risks.
                    </div>

                    <div style={{ marginTop: "10px" }} className={styles.details18Open + " " + styles.ac2_detail1Width}>
                        It’s to be noted that MS is an independent advisory firm for all key issues of entrepreneurial activity: strategy, M&A and transformation. And our team believes that this unique approach in business is that makes our clients measurably more successful. We understand that the combination of corporate finance and management consulting creates sustainable added value when determining valid courses of action, reaching decisions and implementing them. Boasting about the treasures of business experience, MS advises clients in all key industries world-wide: Business Services, Energy, Infrastructure & Mobility, Financial Institutions, Healthcare, Industrials & Automotive, Retail & FMCG and TMT.
                    </div>

                    <div style={{ marginTop: "10px" }} className={styles.details18Open + " " + styles.ac2_detail1Width}>
                        For the key business issues of strategy, M&A and transformation, standard solutions are rarely the right answer. On every project, MS ensures that there is always sufficient scope for proven methods to be combined with individual and client-specific approaches. Our consultants lay the foundations for excellent results by trusting their own opinions and experience and taking a strong stance on the entrepreneurial challenges to be resolved. Aren’t you looking forward to being the successful entrepreneur of your dreams?
                    </div>
                </div>
                <div className={styles.acountingBanner2Book_right2} data-aos="fade-left">
                    <BookCall />
                </div>
            </div>
        </Container>
    )
}

export default Accounting_Banner2