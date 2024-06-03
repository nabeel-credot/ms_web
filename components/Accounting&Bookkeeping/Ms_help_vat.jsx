import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Link from "next/link"
import Image from "next/image";
function Company_Form_Banner() {
return (
    <div className={styles.vat_help_banner}>
        <Container>
        <div className={styles.comp_form} data-aos="fade-right">
        <div className={styles.typelogo} style={{marginBottom:"20px"}}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>
    <div className={styles.assistTitle_corp} style={{color:"white"}}>How MS can help?</div>
    <p className={styles.vat_help_para} style={{paddingTop:"10px"}}>
    With MS, you can alleviate the burden of procedures – that&apos;s our assurance! Upon receiving your requirements, our VAT experts meticulously analyse your business, scrutinise applications, and provide advisory services tailored to the specific compliance needs of your domain. Our dedicated approach not only saves you time but also ensures cost-effectiveness. While Winston Churchill may have said, &apos;There is no such thing as a good tax,&apos; MSians believe in employing good methodologies, taking the right actions, and, most importantly, ensuring timely updates!
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
