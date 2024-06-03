import React, { useEffect, useState } from 'react'
import styles from "./Transaction.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/router";
function TA_menu() {

    const router = useRouter();

    return (
        <div className={styles.TA_menu}>
            <div className={styles.TA_menuList}>
                <div><Image src="/images/Transaction.svg" alt="" width="70" height="70" /></div>
                <div style={{ marginLeft: 15 }} className={styles.Theading}>Transaction Advisory Services</div>
            </div>

            <Link href="/transaction_advisory_services_overview"  prefetch={false}>
                <a>
                <div className={styles.TA_menuList}>
                    {router.pathname == "/transaction_advisory_services_overview" ?
                        <div className={styles.TA_IconY}>
                            <Image src="/images/Overview.svg" alt="" width={40} height={40} />
                        </div> :
                        <div className={styles.TA_IconW}>
                            <Image src="/images/OverviewW.svg" alt="" width={40} height={40} />
                        </div>
                    }
                    <div style={{ marginLeft: 15 }} className={router.pathname == "/transaction_advisory_services_overview" ? styles.TListY : styles.TList}>
                        Overview</div>
                </div>
                </a>
            </Link>

            <Link href="/transaction_advisory_services_m_and_a_advisory"  prefetch={false}>
                <a>                <div className={styles.TA_menuList}>
                    {router.pathname == "/transaction_advisory_services_m_and_a_advisory" ?
                        <div className={styles.TA_IconY}>
                            <Image src="/images/AdministratorY.svg" alt="" width={40} height={40} />
                        </div> :
                        <div className={styles.TA_Icon}>
                            <Image src="/images/Administrator.svg" alt="" width={40} height={40} />
                        </div>
                    }
                    <div style={{ marginLeft: 15 }} className={router.pathname == "/transaction_advisory_services_m_and_a_advisory" ? styles.TListY : styles.TList}>M & A Advisory</div>
                </div>
                </a>
            </Link>

            <Link href="/transaction_advisory_services_financial_Due_Diligence"  prefetch={false}>
                <a>
                <div className={styles.TA_menuList}>
                    {router.pathname == "/transaction_advisory_services_financial_Due_Diligence" ?
                        <div className={styles.TA_IconY}>
                            <Image src="/images/DocumentY.svg" alt="" width={40} height={40} />
                        </div>
                        :
                        <div className={styles.TA_IconW}>
                            <Image src="/images/Document.svg" alt="" width={40} height={40} />
                        </div>
                    }
                    <div style={{ marginLeft: 15 }} className={router.pathname == "/transaction_advisory_services_financial_Due_Diligence" ? styles.TListY : styles.TList}>Financial Due Diligence</div>
                </div>
                </a>
            </Link>

            <Link href="/transaction_advisory_services_valuation"  prefetch={false}>
                <a>
                <div className={styles.TA_menuList}>
                    {router.pathname == "/transaction_advisory_services_valuation" ?
                        <div className={styles.TA_IconY}>
                            <Image src="/images/ValidationY.svg" alt="" width={40} height={40} />
                        </div>
                        :
                        <div className={styles.TA_IconW}>
                            <Image src="/images/Validation.svg" alt="" width={40} height={40} />
                        </div>
                    }
                    <div style={{ marginLeft: 15 }} className={router.pathname == "/transaction_advisory_services_valuation" ? styles.TListY : styles.TList}>Valuation</div>
                </div>
                </a>
            </Link>
        </div>
    )
}

export default TA_menu