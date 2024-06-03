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
            <div className={styles.menuBar_container}>

                <Link href="/internal-audit" prefetch={false}>
                    <div className={router.pathname == "/internal-audit" ? styles.active : styles.menu}>
                        {router.pathname == "/internal-audit" ? <span></span> : ""}
                        Internal Audit
                        {router.pathname == "/internal-audit" ? "" : <span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>




                <Link href="/corporate-governance" prefetch={false}>
                    <div className={router.pathname == "/corporate-governance" ? styles.active : styles.menu}>
                    
                        {router.pathname == "/corporate-governance" ? <span></span> : ""}
                        Corporate Governance
                        {router.pathname == "/corporate-governance" ? "" : <span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>


                <Link href="/risk-management" prefetch={false}>
                    <div className={router.pathname == "/risk-management" ? styles.active : styles.menu}>
                        {router.pathname == "/risk-management" ? <span></span> : ""}
                        Risk Management
                        {router.pathname == "/risk-management" ? "" : <span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>


                <Link href="/policy-and-process-advisory" prefetch={false}>
                    <div className={router.pathname == "/policy-and-process-advisory" ? styles.active : styles.menu}>
                        {router.pathname == "/policy-and-process-advisory" ? <span></span> : ""}
                        Policy & Process Advisory
                        {router.pathname == "/policy-and-process-advisory" ? "" : <span></span>}
                    </div>
                </Link>
            </div>
        </Container>
    )
}

export default MenuBar