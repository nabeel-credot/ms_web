import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Link from "next/link"
function Company_Form_Banner() {
return (
    <div className={styles.Compliance_significant_banner}>
        <Container>
        <div className={styles.comp_form} data-aos="fade-right">
    <div className={styles.assistTitle_corp} style={{color:"white"}}>The Significance of the <br/>Compliance Officer in DIFC</div>
    <p className={styles.vat_help_para}>
    In the Dubai International Financial Centre (DIFC), the Dubai Financial Services Authority (DFSA) oversees financial service firms, placing significant emphasis on Compliance. This function is among the mandatory appointments required for DIFC financial service firms, reflecting its significance in ensuring adherence to extensive rules and regulations, including Conduct of Business, Prudential, Investment, and Data Protection Rules. Non-compliance can result in severe consequences, from financial penalties to reputational damage and business closure. Despite not directly generating revenue, a strong Compliance function is crucial for success, fostering a culture of adherence to regulations and indirectly contributing to efficiency and revenue generation. The DFSA mandates the appointment of knowledgeable and experienced Compliance Officers, recognizing their pivotal role in the authorization process.
    </p>
    {/* <div>
    <Link href="/incorporation-advisory-and-assistance">
<button className={styles.company_form_button_difc}>
    <span>Discover More</span>
</button>
</Link>      </div> */}
</div>
    </Container>
    </div>
);
}

export default Company_Form_Banner;
