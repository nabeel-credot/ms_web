    import React from "react";
    import styles from "./Styles.module.css";
    import Container from "../Common/Container";
    import Link from "next/link"
    function Company_Form_Banner() {
    return (
        <div className={styles.company_formContainer_difc}>
            <Container>
            <div className={styles.comp_form} data-aos="fade-right">
        <div className={styles.assistTitle_corp} style={{color:"white"}}>Is MLRO outsourcing<br/> permitted by the DFSA?</div>
        <p className={styles.company_form_para}>
        The regulator permits outsourcing the MLRO role based on your business&apos;s scale and complexity. In the DIFC, numerous firms choose to outsource compliance and MLRO functions, ensuring access to requisite expertise without the financial commitment of a full-time resource. This approach proves advantageous, especially when the operation&apos;s size and complexity do not warrant a permanent, in-house position.
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
