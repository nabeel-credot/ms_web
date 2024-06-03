import React from 'react'
import styles from "./Styles.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
function MenuBar() {



    const router = useRouter();
   
    return (
        <div className={styles.menuBar_container}>

            <Link href="cfo"  prefetch={false}>
                <div className={router.pathname == "/cfo" ? styles.active : styles.menu}>
                CFO Services <span></span>
                </div>
            </Link>

            <Link href="fdd"  prefetch={false}>
                <div className={router.pathname == "/financial-due-diligence" ? styles.active : styles.menu}>
                Financial Due Diligence<span></span>
                </div>
            </Link>

            <Link href="/business_scaleup"  prefetch={false}>
                <div className={router.pathname == "/business_scaleup" ? styles.active : styles.menu}>
                Startup Advisory<span></span>
                </div>
            </Link>

         
        </div>
    )
}

export default MenuBar