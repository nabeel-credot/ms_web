import React from 'react'
import styles from "./Menu.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
import Container from '../Common/Container';

import Image from 'next/image'
function MenuBar() {



    const router = useRouter();

    return (
        <Container>
            
            <div className={styles.menuBar_container4}>

                <Link href="/dmcc-freezone-setup-services" prefetch={false}>
                    <div className={router.pathname == "/dmcc-freezone-setup-services" ? styles.active : styles.menu}>
                        {router.pathname == "/dmcc-freezone-setup-services" ? <span></span> : ""}
                        <div className={styles.width}>DMCC Freezone Setup Services
                        </div>
                        {router.pathname == "/dmcc-freezone-setup-services" ? "" : <span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>



                <Link href="/dmcc-compliance-and-corporate-services" prefetch={false}>
                    <div className={router.pathname == "/dmcc-compliance-and-corporate-services" ? styles.active : styles.menu}>
                        {router.pathname == "/dmcc-compliance-and-corporate-services" ? <span></span> : ""}
                        <div className={styles.width}>DMCC Compliance & Corporate Services</div>
                        {router.pathname == "/dmcc-compliance-and-corporate-services" ? "" : <span></span>}
                    </div>
                </Link>


                <Link href="/management-advisory-and-assistance-dmcc" prefetch={false}>
                    <div className={router.pathname == "/management-advisory-and-assistance-dmcc" ? styles.active : styles.menu}>
                        {router.pathname == "/management-advisory-and-assistance-dmcc" ? <span></span> : ""}
                        <div className={styles.width}>Management Advisory & Assistance</div>
                        {router.pathname == "/management-advisory-and-assistance-dmcc" ? "" : <span></span>}
                    </div>
                </Link>

                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>

                <Link href="/dmcc-business-bank-account-setup-assistance" prefetch={false}>
                    <div className={router.pathname == "/dmcc-business-bank-account-setup-assistance" ? styles.active : styles.menu}>
                        {router.pathname == "/dmcc-business-bank-account-setup-assistance" ? <span></span> : ""}
                        <div  className={styles.width} >DMCC Business Bank Account Setup Assistance</div>
                        {router.pathname == "/dmcc-business-bank-account-setup-assistance" ? "" : <span></span>}
                    </div>
                </Link>

            

           


            </div>
        </Container>
    )
}

export default MenuBar