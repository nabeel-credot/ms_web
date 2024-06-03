import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./FD.module.css"
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
            <div className={styles.acountingBanner_left} data-aos="fade-right">
                <div className={cstyles.black36_heading}>
                    You can’t imagine what impact a financial director could have on your business’s growth. It’s huge.
                </div>

                <div style={{ marginTop: "10px" }} className={cstyles.details18Open + " " + cstyles.ac2_detail1Width}>
                    Don’t you think, they are, after all, pivotal in the management of your money. It’s their job to make sure it’s used strategically and effectively. Not yours to be honest.
                </div>


                <div style={{ marginTop: "10px" }} className={cstyles.details18Open + " " + cstyles.ac2_detail1Width}>
                    We’ve a good news for you! That you don’t have to employ a full-time Financial Director to benefit from their expertise. The clever thing for any entrepreneur to do is to outsource it, which is where we come in. Our Financial Director on Demand service offers you all the experience and expertise of a full-time FD, but at a fraction of the cost.
                </div>

                <div style={{ marginTop: "10px" }} className={cstyles.details18Open + " " + cstyles.ac2_detail1Width}>
                    Geared solely towards your business’ needs and goals, you’ll benefit from invaluable business advice with one end in mind – your business’ success, growth and efficiency. And that’s our word.
                </div>

                <div style={{ marginTop: "10px" }} className={cstyles.details18Open + " " + cstyles.ac2_detail1Width}>
                Alongside this service we also offer Financial Controller (FC) on Demand. This role sits between the FD role and your internal accounts team. So get ready to tie up with the best.
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