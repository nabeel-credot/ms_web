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
                    Family owned businesses are different from any other type of businesses. It can be challenging due to its complexity as well as rewarding due to family dynamics!
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.detailWidth2}>
                    Family business sure has its difference from other businesses. Roles, relationships, and differing priorities all affect both the family and the business, creating normal tensions. This effect can lead to misalignment, lack of clear direction, and slowed decision making which can significantly challenge the continuity of the business and the family harmony.
                    </div>

                    <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.detailWidth2}>
                    As per report from well knowned print media, Family-owned or controlled businesses constitute about 70 per cent of the overall businesses in the GCC. Hence it is evident that Family-owned business has an internal competition with other family-owned businesses along with the competitions with the other business in the same sector. It is therefore essential to stay up to date with the changing markets and dynamic technological changes in order to sustain a Family-owned business. These businesses play a vital role in the economy and hence, preserving each of these businesses is very important.
                    </div>
                  
                </div>
                <div className={styles.acountingBanner2Book_right2} data-aos="fade-left">
                    <BookCall />
                </div>
            </div>
            <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.detailWidth} data-aos="fade-right">
            UAE is encouraging more family-owned business to get listed in the Stock exchange and publish its Initial Public Offering (IPO). Thus, such a move could lead to the introduction of multiple share classes in the country.
            </div>
            <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.detailWidth} data-aos="fade-right">
            However, statistics prove Family businesses have problems in sustaining its business passed on to multiple generations. Most family businesses do not survive past the second generation.
            </div>
            <div style={{ marginTop: "20px" }} className={styles.details18Open + " " + styles.detailWidth} data-aos="fade-right">
            There are a few challenges that Family-owned businesses would face in comparison to a Corporate Business. There is an absolute obligation for the owner to pass down the business to the next generation and there is an equal obligation for that generation to carry on the burdens of the business without consideration of interest or qualification. There also lies a challenge that certain opportunities are missed out by the Family-owned business due to lack of awareness of the change in the market behavior, new rising solutions etc. To bridge any gap that exists in a family-owned company, professional Business Advisory Services are being provided at MS.
            </div>   
        </div>
        </Container>
    )
}

export default Accounting_Banner2