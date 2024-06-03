import React from 'react'
import styles from "./Menu.module.css"
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/router";
function MenuBar() {



    const router = useRouter();

    return (
        <div className={styles.menuBar_container}>

            <Link href="/vat-consultant" prefetch={false}>
                <div className={router.pathname == "/vat-consultant" ? styles.active : styles.menu}>
                    {router.pathname == "/vat-consultant" ? <span></span> : ""}
                    VAT Services
                    {router.pathname == "/vat-consultant" ? "" : <span></span>}
                </div>
            </Link>
            <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>
            <Link href="/corporate-tax" prefetch={false}>
                <div className={router.pathname == "/corporate-tax" ? styles.active : styles.menu}>
                    {router.pathname == "/corporate-tax" ? <span></span> : ""}
                    Corporate Tax
                    {router.pathname == "/corporate-tax" ? "" : <span></span>}
                </div>
            </Link>
            <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>
            <Link href="/economic-substance-regulations" prefetch={false}>
                <div className={router.pathname == "/economic-substance-regulations" ? styles.active : styles.menu}>
                    {router.pathname == "/economic-substance-regulations" ? <span></span> : ""}
                    ESR 
                    {router.pathname == "/economic-substance-regulations" ? "" : <span></span>}
                </div>
            </Link>
            <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>
            <Link href="/cbc-reporting" prefetch={false}>
                <div className={router.pathname == "/cbc-reporting" ? styles.active : styles.menu}>
                    {router.pathname == "/cbc-reporting" ? <span></span> : ""}
                    CBCR
                    {router.pathname == "/cbc-reporting" ? "" : <span></span>}
                </div>
            </Link>
            <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>
            {/* <Link href="/us-expat-tax-consultant" prefetch={false}>
                <div className={router.pathname == "/us-expat-tax-consultant" ? styles.active : styles.menu}>
                    {router.pathname == "/us-expat-tax-consultant" ? <span></span> : ""}
                    US EXPAT
                    {router.pathname == "/us-expat-tax-consultant" ? "" : <span></span>}
                </div>
            </Link> */}
            <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>
            <Link href="/ultimate-beneficial-ownership" prefetch={false}>
                <div className={router.pathname == "/ultimate-beneficial-ownership" ? styles.active : styles.menu}>
                    {router.pathname == "/ultimate-beneficial-ownership" ? <span></span> : ""}
                    UBO
                    {router.pathname == "/ultimate-beneficial-ownership" ? "" : <span></span>}
                </div>
            </Link>

        </div>
    )
}

export default MenuBar