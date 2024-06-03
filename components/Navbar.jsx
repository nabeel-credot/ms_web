import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

import Button from "./ButtonYellow";
import Contianer from "./Common/Container";

function Navbar({ color, hoverClr, img1, img2, menuIcon ,bgcolor,smartNav,borderBottom}) {
  const [isHovering, setIsHovering] = useState(0);
console.log(smartNav);
  const [toggleActive, setToggleActive] = useState(false);

  const [dropDown1, setDropdown1] = useState(false);
  const [dropDown2, setDropdown2] = useState(false);
  const [dropDown3, setDropdown3] = useState(false);
  const [dropDown4, setDropdown4] = useState(false);
  const [dropDown5, setDropdown5] = useState(false);
  const [dropDown6, setDropdown6] = useState(false);
  const [dropDown7, setDropdown7] = useState(false);
  const [dropDown8, setDropdown8] = useState(false);
  const [dropDown9, setDropdown9] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1025);
    }

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1025);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const togglerMenu = () => {
    setToggleActive(!toggleActive);
  };

  useEffect(() => {
    if (!isMobile) {
      setToggleActive(false);
    }
  }, [isMobile]);

  return (
    <div style={{background: bgcolor ? bgcolor:"rgba(0, 42, 58, 0.49)",position:"absolute",zIndex:2000,height:"98px",width:"100%"}}>    
      <Contianer style={{ position: "relative", padding: 0 }}>
      <div className={toggleActive ? styles.headerNew : styles.header}>
        <div className={styles.lw}>
          <Link href="/" className={styles.logo}>
            <a>
              <Image
                src="/images/logo-2023.gif"
                alt=""
                layout="fill"
                loop="infinite"
                autoPlay="true"
              />
            </a>

            {/* <video  width="158px" height="78px" autoPlay>
						<source src="/images/logo.webm" type="video/mp4" />
					</video> */}
          </Link>
        </div>

        <div onClick={togglerMenu}>
          <div
            className={
              !toggleActive && menuIcon
                ? styles.menuToggler
                : toggleActive && menuIcon
                ? styles.menuTogglerNew
                : !toggleActive && !menuIcon
                ? styles.menuTogglerY
                : styles.menuTogglerNewY
            }
          ></div>
        </div>

        <ul className={toggleActive ? styles.menuActive : styles.menu}>
          {/* {toggleActive ? (
            <li
              className={styles.closeBtn}
              onClick={() => setToggleActive(!toggleActive)}
            >
              <Image src="/images/close.png" alt="" width={20} height={20} />
            </li>
          ) : (
            ""
          )}
          {!toggleActive ? (
            <li
              className={styles.title + " " + styles.liSpcl}
              style={{
                color: isHovering == 1 ? hoverClr : color,
              }}
              onMouseEnter={() => setIsHovering(1)}
              onMouseLeave={() => setIsHovering(0)}
            >
              <Link href="/">Home</Link>
            </li>
          ) : (
            <li
              className={styles.title + " " + styles.borderBt}
              style={{
                color:
                  isHovering == 1 ? hoverClr : toggleActive ? "#FCFCFC" : color,
              }}
              onMouseEnter={() => setIsHovering(1)}
              onMouseLeave={() => setIsHovering(0)}
            >
              <Link href="/">Home</Link>
            </li>
          )} */}
          <li
            className={styles.title}
            style={{
              color:
                isHovering == 2 ? hoverClr : toggleActive ? "#FCFCFC" : color,
            }}
            onMouseEnter={() => setIsHovering(2)}
            onMouseLeave={() => setIsHovering(0)}
          >
            {!toggleActive ? (
              <div className={styles.dropdown}>
                <div style={{ display: "flex" }}>
                  <span style={{ marginRight: 5 }}>
                    <Link href="/about-us" prefetch={false}>
                      About Us
                    </Link>
                  </span>

                  <span className={styles.defaultArrow}>
                    <Image src={img1} alt="" width={15} height={9} />
                  </span>
                  <span className={styles.hoverArrow}>
                    <Image src={img2} alt="" width={15} height={9} />
                  </span>
                </div>
                {/* {!toggleActive ? */}

                <div className={styles.dropdownMain}>
                  <div className={styles.dropdown_content}>
                    <div style={{ display: "flex", alignItems: "center" }}
                            className={styles.list}
                            >
                      <Link href="/about-us" prefetch={false}>
                        Story
                      </Link>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}
                            className={styles.list}
                            >
                      <Link href="/ms" prefetch={false}>
                        Team Msian
                      </Link>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}
                            className={styles.list}
                            >
                      <Link href="our-awards" prefetch={false}>
                        Our Awards
                      </Link>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}
                            className={styles.list}
                            >
                      <Link href="/careers" prefetch={false}>
                        Careers
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={styles.dropdownMob}
                onClick={() => {
                  setDropdown1(!dropDown1);
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className={styles.borderBt}
                >
                  <div className={!dropDown1 ? styles.title : styles.titleY}>
                    About us
                  </div>

                  <div>
                    <button type="button" className={styles.btn}>
                      {!dropDown1 ? (
                        <Image
                          src="/images/darrow.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      ) : (
                        <Image
                          src="/images/uarrow.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      )}
                    </button>
                  </div>
                </div>
                {dropDown1 ? (
                  <div className={styles.dropdown_mob}>
                    <div
                      style={{ padding: 10, paddingLeft: 30 }}
                      className={styles.borderBt}
                    >
                      <Link href="/about-us" prefetch={false}
                      >
                        Story
                      </Link>
                    </div>
                    <div
                      style={{ padding: 10, paddingLeft: 30 }}
                      className={styles.borderBt}
                    >
                      <Link href="/ms" prefetch={false}>
                        Team Msian
                      </Link>
                    </div>
                    <div
                      style={{ padding: 10, paddingLeft: 30 }}
                      className={styles.borderBt}
                    >
                      <Link href="our-awards" prefetch={false}>
                        Our Awards
                      </Link>
                    </div>
                    <div
                      style={{ padding: 10, paddingLeft: 30 }}
                      className={styles.borderBt}
                    >
                      <Link href="/careers" prefetch={false}>
                        Careers
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </li>
          <li
            style={{
              color:
                isHovering == 3 ? hoverClr : toggleActive ? "#FCFCFC" : color,
               
            }}
            onMouseEnter={() => setIsHovering(3)}
            onMouseLeave={() => setIsHovering(0)}
          >
            <Link href="#howWeHelp">
              {!toggleActive ? (
                <div className={styles.dropdown}>
                  <div style={{ display: "flex" }}>
                    <span style={{ marginRight: 5 }}>How we help </span>
                    <span className={styles.defaultArrow}>
                      <Image src={img1} alt="" width={15} height={9} />
                    </span>
                    <span className={styles.hoverArrow}>
                      <Image src={img2} alt="" width={15} height={9} />
                    </span>
                  </div>

                  <div className={styles.dropdown_content_howMain}>
                    <div className={styles.dropdown_content_how}>
                      <div>
                        <div className={styles.section}>
                          <div className={styles.dropdownTitle}>
                            <Link href="/advisory" prefetch={false}>
                              Advisory
                            </Link>
                          </div>

                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            className={styles.list}
                          >
                            <Link href="/transaction-advisory" prefetch={false}>
                              Transaction Advisory
                            </Link>
                          </div>

                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            className={styles.list}
                          >
                            <Link
                              href="/mergers-and-acquisitions"
                              prefetch={false}
                            >
                              Mergers & Acquisitions
                            </Link>
                          </div>

                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            className={styles.list}
                          >
                            <Link href="/buy-side-advisory" prefetch={false}>
                              Buy-side Advisory
                            </Link>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            className={styles.list}
                          >
                            <Link href="/sell-side-advisory" prefetch={false}>
                              Sell-side Advisory
                            </Link>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            className={styles.list}
                          >
                            <Link href="/business-valuation" prefetch={false}>
                              Valuation
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className={styles.section}>
                        <div className={styles.dropdownTitle}>
                          <Link href="/technology">Technology</Link>
                        </div>

                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link href="/digital-transformation" prefetch={false}>
                            Digital Transformation
                          </Link>
                        </div>

                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link href="/erp-advisory" prefetch={false}>
                            ERP Advisory
                          </Link>
                        </div>

                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link href="/data-analysis" prefetch={false}>
                            Data Analysis
                          </Link>
                        </div>

                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link href="/blockchain" prefetch={false}>
                            Blockchain
                          </Link>
                        </div>

                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/robotic-process-automation"
                            prefetch={false}
                          >
                            Robotic Process Automation
                          </Link>
                        </div>

                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/artificial-intelligence"
                            prefetch={false}
                          >
                            Artificial Intelligence
                          </Link>
                        </div>
                      </div>
                      <div className={styles.section}>
                        <div className={styles.dropdownTitle}>
                          <Link href="/executivesearch">Executive search</Link>
                        </div>
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link href="/executivesearch" prefetch={false}>
                            Compliance
                          </Link>
                        </div>

                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link href="/executivesearch" prefetch={false}>
                            Accounting
                          </Link>
                        </div>

                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/executivesearch"
                            prefetch={false}
                          >
                           Tax
                          </Link>
                        </div>
                        </div>

                      <div className={styles.section}>
                        <div className={styles.dropdownTitle}>
                          <Link href="/tax">Tax</Link>
                        </div>

                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link href="/tax-vat" prefetch={false}>
                            VAT Services
                          </Link>
                        </div>

                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link href="/tax-corporatetax" prefetch={false}>
                            Corporate Tax
                          </Link>
                        </div>

                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/tax-esr"
                            prefetch={false}
                          >
                            Economic substance Regulations(ESR)
                          </Link>
                        </div>
                      </div>

                      <div className={styles.section}>
                        <div
                          className={styles.dropdownTitle}
                          style={{ width: "90%" }}
                        >
                          <Link href="/accounting" prefetch={false}>
                            <a>Accounting</a>
                          </Link>
                        </div>
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link href="/accounting-bookkeeping-service" prefetch={false}>
                            Bookkeeping Services
                          </Link>
                        </div>
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link href="/accounting-payroll-service" prefetch={false}>
                            Payroll Services
                          </Link>
                        </div>
                      </div>

                      {/* <div1 className={styles.section}>
                        <div className={styles.dropdownTitle}>
                          <Link
                            href="/#abu-dhabi-global-market-uae"
                            prefetch={false}
                          >
                            Abu Dhabi Global Market (ADGM)
                          </Link>
                        </div>
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/corporate-services"
                            prefetch={false}
                          >
                            Corporate Services
                          </Link>
                        </div>
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/adgm-compliance-filings-specialist-services-in-abu-dhabi-uae-ms"
                            prefetch={false}
                          >
                            Compliance Services
                          </Link>
                        </div>
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link href="/accounting-service" prefetch={false}>
                            Accounting Services
                          </Link>
                        </div>
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/tax-service"
                            prefetch={false}
                          >
                            Tax Services
                          </Link>
                        </div>
                      </div1> */}

                      <div className={styles.section}>
                        <div className={styles.dropdownTitle}>
                          <Link
                            href="/dubai-international-financial-centre"
                            prefetch={false}
                          >
                            Dubai International Financial Centre (DIFC)
                          </Link>
                        </div>
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/difc-corporate-service"
                            prefetch={false}
                          >
                           Corporate Services
                          </Link>
                        </div>
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/difc-compliance-service"
                            prefetch={false}
                          >
                            Compliance Services
                          </Link>
                        </div>

                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/difc-accounting-service"
                            prefetch={false}
                          >
                            Accounting Services
                          </Link>
                        </div>
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/difc-tax-service"
                            prefetch={false}
                          >
                            Tax Services
                          </Link>
                        </div>
                      </div>

                      {/* <div className={styles.section}>
                        <div className={styles.dropdownTitle}>
                          <Link href="/masdar" prefetch={false}>
                            MASDAR
                          </Link>
                        </div>
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/masdar-incorporation-compliance-and-corporate-services"
                            prefetch={false}
                          >
                            MASDAR Incorporation Compliance and corporate
                            services
                          </Link>
                        </div>
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/masdar-management-advisory"
                            prefetch={false}
                          >
                            Management Advisory
                          </Link>
                        </div>

                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className={styles.list}
                        >
                          <Link
                            href="/masdar-assistance-in-bank-account-opening"
                            prefetch={false}
                          >
                            Assistance in Bank Account opening
                          </Link>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              ) : (  
                <div className={styles.dropdownMob}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    onClick={() => {
                      setDropdown2(!dropDown2);
                    }}
                    className={styles.borderBt}
                  >
                    <div className={!dropDown2 ? styles.title : styles.titleY}>
                      How Can We Help
                    </div>
                    <div>
                      <button type="button" className={styles.btn}>
                        {!dropDown2 ? (
                          <Image
                            src="/images/darrow.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        ) : (
                          <Image
                            src="/images/uarrow.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        )}
                      </button>
                    </div>
                  </div>
                  {dropDown2 ? (
                    <div className={styles.dropdown_mob}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: 10,
                          paddingLeft: 30,
                        }}
                        className={styles.borderBt}
                        onClick={() => {
                          setDropdown3(!dropDown3);
                        }}
                      >
                        <div className={styles.title}>
                          <Link href="/advisory" prefetch={false}>
                            Advisory
                          </Link>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <button type="button" className={styles.btn}>
                            {!dropDown3 ? (
                              <Image
                                src="/images/darrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            ) : (
                              <Image
                                src="/images/uarrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            )}
                          </button>
                        </div>
                      </div>
                      {dropDown3 ? (
                        <div className={styles.dropdown_mob_sub}>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link href="/transaction-advisory" prefetch={false}>
                              Transaction Advisory
                            </Link>
                          </div>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link
                              href="/mergers-and-acquisitions"
                              prefetch={false}
                            >
                              Mergers & Acquisitions
                            </Link>
                          </div>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link href="/buy-side-advisory" prefetch={false}>
                            Buy-side Advisory
                            </Link>
                          </div>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link href="/sell-side-advisory" prefetch={false}>
                            Sell-side Advisory
                            </Link>
                          </div>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link href="/business-valuation" prefetch={false}>
                            Valuation
                            </Link>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: 10,
                          paddingLeft: 30,
                        }}
                        className={styles.borderBt}
                        onClick={() => {
                          setDropdown7(!dropDown7);
                        }}
                      >
                        <div className={styles.title}>
                          <Link href="/technology" prefetch={false}>
                            Technology
                          </Link>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <button type="button" className={styles.btn}>
                            {!dropDown7 ? (
                              <Image
                                src="/images/darrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            ) : (
                              <Image
                                src="/images/uarrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            )}
                          </button>
                        </div>
                      </div>
                      {dropDown7 ? (
                        <div className={styles.dropdown_mob_sub}>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link
                              href="/digital-transformation"
                              prefetch={false}
                            >
                              Digital Transformation
                            </Link>
                          </div>

                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link href="/erp-advisory" prefetch={false}>
                              ERP Advisory
                            </Link>
                          </div>

                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link href="/data-analysis" prefetch={false}>
                              Data Analysis
                            </Link>
                          </div>

                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link href="/blockchain" prefetch={false}>
                              Blockchain
                            </Link>
                          </div>

                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link
                              href="/robotic-process-automation"
                              prefetch={false}
                            >
                              Robotic Process Automation
                            </Link>
                          </div>

                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link
                              href="/artificial-intelligence"
                              prefetch={false}
                            >
                              Artificial Intelligence
                            </Link>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                       <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: 10,
                          paddingLeft: 30,
                        }}
                        className={styles.borderBt}
                        onClick={() => {
                          setDropdown7(!dropDown7);
                        }}
                      >
                        <div className={styles.title}>
                          <Link href="/executivesearch" prefetch={false}>
                            Executive Search
                          </Link>
                        </div>
                       
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: 10,
                          paddingLeft: 30,
                        }}
                        className={styles.borderBt}
                        onClick={() => {
                          setDropdown4(!dropDown4);
                        }}
                      >
                        <div className={styles.title}>
                          <Link href="/tax" prefetch={false}>
                            Tax
                          </Link>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <button type="button" className={styles.btn}>
                            {!dropDown4 ? (
                              <Image
                                src="/images/darrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            ) : (
                              <Image
                                src="/images/uarrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            )}
                          </button>
                        </div>
                      </div>
                      {dropDown4 ? (
                        <div className={styles.dropdown_mob_sub}>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link href="/tax-vat" prefetch={false}>
                              VAT Services
                            </Link>
                          </div>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link href="/tax-corporatetax" prefetch={false}>
                              Corporate Tax
                            </Link>
                          </div>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link
                              href="/tax-esr"
                              prefetch={false}
                            >
                              Economic substance Regulations(ESR)
                            </Link>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: 10,
                          paddingLeft: 30,
                        }}
                        className={styles.borderBt}
                        onClick={() => {
                          setDropdown5(!dropDown5);
                        }}
                      >
                        <div className={styles.title}>
                          <Link href="/accounting" prefetch={false}>
                            Accounting
                          </Link>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "25%",
                          }}
                        >
                          <button type="button" className={styles.btn}>
                            {!dropDown5 ? (
                              <Image
                                src="/images/darrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            ) : (
                              <Image
                                src="/images/uarrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            )}
                          </button>
                        </div>
                      </div>
                      {dropDown5 ? (
                        <div className={styles.dropdown_mob_sub}>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link
                              href="/accounting-bookkeeping-service"
                              prefetch={false}
                            >
                              Bookkeeping Services
                            </Link>
                          </div>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link href="/accounting-payroll-service" prefetch={false}>
                              Payroll Services
                            </Link>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: 10,
                          paddingLeft: 30,
                        }}
                        className={styles.borderBt}
                        onClick={() => {
                          setDropdown6(!dropDown6);
                        }}
                      >
                        {/* <div1 className={styles.title}>
                          <Link
                            href="/#abu-dhabi-global-market-uae"
                            prefetch={false}
                          >
                            ADGM
                          </Link>
                        </div1> */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <button type="button" className={styles.btn}>
                            {!dropDown6 ? (
                              <Image
                                src="/images/darrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            ) : (
                              <Image
                                src="/images/uarrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            )}
                          </button>
                        </div>
                      </div>

                      {dropDown6 ? (
                        <div className={styles.dropdown_mob_sub}>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link
                              href="/corporate-services"
                              prefetch={false}
                            >
                              Corporate Services
                            </Link>
                          </div>
                          {/* <div1
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link
                              href="/adgm-compliance-filings-specialist-services-in-abu-dhabi-uae-ms"
                              prefetch={false}
                            >
                              Compliance Services
                            </Link>
                          </div1> */}
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link href="/accounting-service" prefetch={false}>
                            Accounting Services
                            </Link>
                          </div>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link
                              href="/tax-service"
                              prefetch={false}
                            >
                               Tax Services
                            </Link>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: 10,
                          paddingLeft: 30,
                        }}
                        className={styles.borderBt}
                        onClick={() => {
                          setDropdown8(!dropDown8);
                        }}
                      >
                         <div className={styles.title}>
                          <Link
                            href="/dubai-international-financial-centre"
                            prefetch={false}
                          >
                            DIFC
                          </Link>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <button type="button" className={styles.btn}>
                            {!dropDown8 ? (
                              <Image
                                src="/images/darrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            ) : (
                              <Image
                                src="/images/uarrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            )}
                          </button>
                        </div>
                      </div>
                      {dropDown8 ? (
                         <div className={styles.dropdown_mob_sub}>
                         <div
                           style={{ padding: 10, paddingLeft: 50 }}
                           className={styles.borderBt}
                         >
                           <Link
                             href="/difc-corporate-service"
                             prefetch={false}
                           >
                              Corporate Services
                           </Link>
                         </div>
                         <div
                           style={{ padding: 10, paddingLeft: 50 }}
                           className={styles.borderBt}
                         >
                           <Link
                             href="/difc-compliance-service"
                             prefetch={false}
                           >
                              Compliance Services
                           </Link>
                         </div>

                         <div
                           style={{ padding: 10, paddingLeft: 50 }}
                           className={styles.borderBt}
                         >
                           <Link
                             href="/difc-accounting-service"
                             prefetch={false}
                           >
                             Accounting Services
                           </Link>
                         </div>
                         <div
                           style={{ padding: 10, paddingLeft: 50 }}
                           className={styles.borderBt}
                         >
                           <Link
                             href="/difc-tax-service"
                             prefetch={false}
                           >
                             Tax Services
                           </Link>
                         </div>
                       </div>
                      ) : (
                        ""
                      )}

                      {/* <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: 10,
                          paddingLeft: 30,
                        }}
                        className={styles.borderBt}
                        onClick={() => {
                          setDropdown9(!dropDown9);
                        }}
                      >
                      <div className={styles.title}>
                          <Link href="/masdar" prefetch={false}>
                            MASDAR
                          </Link>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <button type="button" className={styles.btn}>
                            {!dropDown9 ? (
                              <Image
                                src="/images/darrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            ) : (
                              <Image
                                src="/images/uarrow.svg"
                                alt=""
                                width={20}
                                height={20}
                              />
                            )}
                          </button>
                          </div>
                          </div> */}
                     {dropDown9 ? (
                        <div className={styles.dropdown_mob_sub}>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link
                              href="/masdar-incorporation-compliance-and-corporate-services"
                              prefetch={false}
                            >
                              MASDAR Incorporation Compliance and corporate
                              services
                            </Link>
                          </div>
                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link
                              href="/masdar-management-advisory"
                              prefetch={false}
                            >
                              Management Advisory
                            </Link>
                          </div>

                          <div
                            style={{ padding: 10, paddingLeft: 50 }}
                            className={styles.borderBt}
                          >
                            <Link
                              href="/masdar-assistance-in-bank-account-opening"
                              prefetch={false}
                            >
                              Assistance in Bank Account opening
                            </Link>
                          </div>
                     </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              )}
            </Link>
            </li>
          <li
            className={styles.title + " " + styles.borderBt}
            style={{
              color:
                isHovering == 4 ? hoverClr : toggleActive ? "#FCFCFC" : color,
            }}
            onMouseEnter={() => setIsHovering(4)}
            onMouseLeave={() => setIsHovering(0)}
          >
            <Link href="/al-reem-island" prefetch={false}>
              Al Reem
            </Link>
          </li>

          <li
            className={styles.title + " " + styles.borderBt}
            style={{
              color:
                isHovering == 6 ? hoverClr : toggleActive ? "#FCFCFC" : color,
            }}
            onMouseEnter={() => setIsHovering(6)}
            onMouseLeave={() => setIsHovering(0)}
          >
            {/* <div className={styles.miniLogo}>
              <Image src="/images/yCircle.svg" alt="" width={29} height={29} />
            </div> */}

            {/* <span style={{ marginLeft: 5 }}>
              <Link href="/#abu-dhabi-global-market-uae" prefetch={false}>
                ADGM
              </Link>
            </span> */}
          </li>

          <li
            className={styles.title + " " + styles.borderBt}
            style={{
              color:
                isHovering == 8 ? hoverClr : toggleActive ? "#FCFCFC" : color,
            }}
            onMouseEnter={() => setIsHovering(8)}
            onMouseLeave={() => setIsHovering(0)}
          >
            {/* <div className={styles.miniLogo}>
              <Image
                src="/images/dmcc-logo.png"
                alt=""
                width={22}
                height={20}
              />
            </div> */}

            <span style={{ marginLeft: 5 }}>
              <Link href="/dubai-multi-commodities-centre" prefetch={false}>
                DMCC
              </Link>
            </span>
          </li>

          {/* <li
            className={styles.title + " " + styles.borderBt}
            style={{
              color:
                isHovering == 9 ? hoverClr : toggleActive ? "#FCFCFC" : color,
            }}
            onMouseEnter={() => setIsHovering(9)}
            onMouseLeave={() => setIsHovering(0)}
          >
            <div className={styles.miniLogo}>
              <Image
                src="/images/masdar_logoY.png"
                alt=""
                width={22}
                height={20}
              />
            </div>

            <span style={{ marginLeft: 5 }}>
              <Link href="/masdar" prefetch={false}>
                MASDAR
              </Link>
            </span>
          </li> */}
<li
            className={styles.title + " " + styles.borderBt}
            style={{
              color:
                isHovering == 9 ? hoverClr : toggleActive ? "#FCFCFC" : color,
            }}
            onMouseEnter={() => setIsHovering(9)}
            onMouseLeave={() => setIsHovering(0)}
          >
            {/* <div className={styles.miniLogo}>
              <Image
                src="/images/DIFC Logo.png"
                alt=""
                width={22}
                height={20}
              />
            </div> */}

            <span style={{ marginLeft: 5 }}>
              <Link href="/dubai-international-financial-centre" prefetch={false}>
                DIFC
              </Link>
            </span>
          </li>
          <li
            className={styles.title + " " + styles.borderBt}
            style={{
              color:
                isHovering == 5 ? hoverClr : toggleActive ? "#FCFCFC" : color,
            }}
            onMouseEnter={() => setIsHovering(5)}
            onMouseLeave={() => setIsHovering(0)}
          >
            <Link href="/news-and-blogs" prefetch={false}>
              News & Blogs
            </Link>
          </li>

          {!toggleActive ? (
            ""
          ) : (
            <li
              className={styles.title}
              style={{
                color:
                  isHovering == 7 ? hoverClr : toggleActive ? "#FCFCFC" : color,
              }}
              onMouseEnter={() => setIsHovering(7)}
              onMouseLeave={() => setIsHovering(0)}
            >
              <Link href="/contact" prefetch={false}>
                Contact
              </Link>
            </li>
          )}
          <li
            className={styles.title + " " + styles.webOnly1}
            style={{ color: "#192B3A",paddingLeft:"70px" }}
          >
            {/* <Button value="Contact Us" href="/contact" backgroundColor="#D4AE31" color="#192B3A" width="180px"
							height="60px" src="/images/LarrowB.svg" /> */}
            <Link href="/contact" prefetch={false}>
              <a>
                <button className={styles.button}>
                  Contact Us
                  {/* <div className={styles.arrow}>
                    <Image
                      src="/images/LarrowB.svg"
                      width={13}
                      height={22}
                      alt="arrow"
                    />
                  </div> */}
                  <div className={styles.arrowMob}>
                    <Image
                      src="/images/LarrowB.svg"
                      width={9}
                      height={12}
                      alt="arrow"
                    />
                  </div>
                </button>
              </a>
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </div>
    </Contianer>
    </div>

  );
}

export default Navbar;