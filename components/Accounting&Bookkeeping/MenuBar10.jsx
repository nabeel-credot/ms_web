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

                <Link href="/transaction-advisory" prefetch={false}>
                    <div className={router.pathname == "/transaction-advisory" ? styles.active : styles.menu}>
                    
                        {router.pathname == "/transaction-advisory" ? <span></span> : ""}
                        Transaction Advisory
                        {router.pathname == "/transaction-advisory" ? "" : <span></span>}
                    </div>
                </Link>

  <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>

              

                <Link href="/mergers-and-acquisitions" prefetch={false}>
                    <div className={router.pathname == "/mergers-and-acquisitions" ? styles.active : styles.menu}>
                        {router.pathname == "/mergers-and-acquisitions" ? <span></span> : ""}
                        Mergers And Acquisitions
                        {router.pathname == "/mergers-and-acquisitions" ? "" : <span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>

                <Link href="/risk-advisory" prefetch={false}>
                    <div className={router.pathname == "/risk-advisory" ? styles.active : styles.menu}>
                        {router.pathname == "/risk-advisory" ? <span></span> : ""}
                       Risk Advisory
                        {router.pathname == "/risk-advisory" ? "" : <span></span>}
                    </div>
                </Link>
             
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>

                <Link href="/management-advisory" prefetch={false}>
                    <div className={router.pathname == "/management-advisory" ? styles.active : styles.menu}>
                        {router.pathname == "/management-advisory" ? <span></span> : ""}
                        Management Advisory
                        {router.pathname == "/management-advisory" ? "" : <span></span>}
                    </div>
                </Link>
            </div>
        </Container>
    )
}

export default MenuBar