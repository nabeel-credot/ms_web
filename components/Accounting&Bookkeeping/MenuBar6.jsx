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

              
                <Link href="/buy-side-advisory" prefetch={false}>
                    <div className={router.pathname == "/buy-side-advisory" ? styles.active : styles.menu}>
                        {router.pathname == "/buy-side-advisory" ? <span></span> : ""}
                        Buy Side Advisory
                        {router.pathname == "/buy-side-advisory" ? "" : <span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>
                <Link href="/sell-side-advisory" prefetch={false}>
                    <div className={router.pathname == "/sell-side-advisory" ? styles.active : styles.menu}>
                       
                        {router.pathname == "/sell-side-advisory" ? <span></span> : ""}
                        Sell Side Advisory
                        {router.pathname == "/sell-side-advisory" ? "" : <span></span>}
                    </div>
                </Link>


            </div>
        </Container>
    )
}

export default MenuBar