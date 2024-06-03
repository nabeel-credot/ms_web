import React from 'react'
import styles from "./Menu.module.css"
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/router";
import Container from '../Common/Container';
function MenuBar() {



    const router = useRouter();

    return (
        <Container>
            <div className={styles.menuBar_container}>
                <Link href="/accounting-bookkeeping" prefetch={false}>
        
                    <div className={router.pathname == "/accounting-bookkeeping" ? styles.active : styles.menu}>
                        {router.pathname == "/accounting-bookkeeping" ? <span></span> : ""}
                        Accounting and Bookkeeping Service
                        {router.pathname == "/accounting-bookkeeping" ? "" : <span></span>}
                    </div>
                </Link>
                
                
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>

                <Link href="/payroll-services" prefetch={false}>
                    <div className={router.pathname == "/payroll-services" ? styles.active : styles.menu}>
                        {router.pathname == "/payroll-services" ? <span></span> : ""}
                         Payroll Service
                        {router.pathname == "/payroll-services" ? "" : <span></span>}
                    </div>
                </Link>

                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>


                <Link href="/audit" prefetch={false}>
                    <div className={router.pathname == "/audit" ? styles.active : styles.menu}>
                        {router.pathname == "/audit" ? <span></span> : ""}
                        Audit Service
                        {router.pathname == "/audit" ? "" : <span></span>}
                    </div>
                </Link>

      


            </div>
        </Container>
    )
}

export default MenuBar