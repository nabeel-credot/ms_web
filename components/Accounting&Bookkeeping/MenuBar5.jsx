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
                  <Link href="/financial-due-diligence" prefetch={false}>
                    <div className={router.pathname == "/financial-due-diligence" ? styles.active : styles.menu}>
                    { router.pathname == "/financial-due-diligence"?<span></span>:""}
                    Financial Due Diligence 
                  { router.pathname == "/financial-due-diligence"?"":<span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>

                <Link href="/business-valuation" prefetch={false}>
                    <div className={router.pathname == "/business-valuation" ? styles.active : styles.menu}>
                    { router.pathname == "/business-valuation"?<span></span>:""}
                    Business Valuation
                    { router.pathname == "/business-valuation"?"":<span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>

                <Link href="/deal-advisory" prefetch={false}>
                    <div className={router.pathname == "/deal-advisory" ? styles.active : styles.menu}>
                    { router.pathname == "/deal-advisory"?<span></span>:""}
                    Deal Advisory
                    { router.pathname == "/deal-advisory"?"":<span></span>}
                    </div>
                </Link>

            </div>
        </Container>
    )
}

export default MenuBar