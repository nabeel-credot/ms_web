import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./ClientsC.module.css";
import Image from "next/image";
import Container from "../Common/SliderContainer";

function Clients({ isVisible }) {
  const clientSection = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);
  const [c, setC] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setC(c + 1);
      if (c == 11) {
        setC(0);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  });
  useEffect(() => {
    if (isVisible) {
      const testimonialSection = document.getElementById("testimonial-section");
      testimonialSection.scrollIntoView({ behavior: "smooth" });
      setC(0);
    }
  }, [isVisible]);

  return (
    <Container>
      <div className={styles.container} id="testimonial-section">
        <div className={styles.heading}>Our Precious Clients</div>
        <div className={styles.sub_container}>
          <div className={styles.left} data-aos="fade-right">
            <div className={styles.box}>
              {c == 0 ? (
                <div className={styles.item1}>
                  <div className={styles.image}>
                    <Image
                      src="/images/c1.png"
                      alt=""
                      width={196}
                      height={196}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className={styles.name}>
                    Prof. Jamal Sanad Al-Suwaidi
                  </div>
                  <div className={styles.desig}>H.E. Minister</div>
                  <div className={styles.cLogo}>United Arab Emirates</div>
                  <div className={styles.detail}>
                    “Every member of the team is very supportive and shows
                    exceptional dedication to this company. Their support and
                    ability to understand our needs and the amount of effort
                    they have put into work directly impacted us. I would highly
                    recommend MS to other companies and related sectors”
                  </div>

                  <div className={styles.arrowbtn}>
                    <div
                      onClick={() => {
                        setC(12);
                      }}
                    >
                      <Image
                        src="/images/Left.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setC(1);
                      }}
                    >
                      <Image
                        src="/images/Right.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              ) : c == 1 ? (
                <div className={styles.item1}>
                  <div className={styles.image}>
                    <Image
                      src="/images/c4.png"
                      alt=""
                      width={196}
                      height={196}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className={styles.name}>Maria Vavoulas</div>
                  <div className={styles.desig}>Former Group COO</div>
                  <div className={styles.cLogo}>HC Group</div>
                  <div className={styles.detail}>
                    “ Having established HC Group Middle East Ltd in 2021, we
                    were looking for a proactive partner to guide us and support
                    our growth strategy. MS have not let us down. The team are
                    passionate, knowledgeable and most importantly for us,
                    responsive ”
                  </div>

                  <div className={styles.arrowbtn}>
                    <div
                      onClick={() => {
                        setC(0);
                      }}
                    >
                      <Image
                        src="/images/Left.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setC(2);
                      }}
                    >
                      <Image
                        src="/images/Right.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              ) : c == 2 ? (
                <div className={styles.item1}>
                  <div className={styles.image}>
                    <Image
                      src="/images/c13.png"
                      alt=""
                      width={196}
                      height={196}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className={styles.name}>Khalid Akhrif</div>
                  <div className={styles.desig}>Vice President</div>
                  <div className={styles.cLogo}>Technical-Aercap</div>
                  <div className={styles.detail}>
                    “I certainly appreciate and commend your team for their
                    professionalism, know how and customer care, always a
                    pleasure dealing with you guys.”
                  </div>

                  <div className={styles.arrowbtn}>
                    <div
                      onClick={() => {
                        setC(1);
                      }}
                    >
                      <Image
                        src="/images/Left.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setC(3);
                      }}
                    >
                      <Image
                        src="/images/Right.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              ) : c == 3 ? (
                <div className={styles.item1}>
                  <div className={styles.image}>
                    <div className={styles.webOnly}>
                      <Image
                        src="/images/dx.png"
                        alt=""
                        width={145}
                        height={150}
                      />
                    </div>
                    <div className={styles.mobOnly}>
                      <Image
                        src="/images/dx.png"
                        alt=""
                        width={90}
                        height={90}
                      />
                    </div>
                  </div>
                  <div className={styles.name}>Daniel Dorr</div>
                  <div className={styles.desig}>Co-Founder</div>
                  <div className={styles.cLogo}>DX Compliance</div>
                  <div className={styles.detail}>
                    “MS is a great partner who supports all our startup needs.
                    As we got an Introduction from Hub 71 to MS we are very
                    happy to work together with MS”
                  </div>
                  {/* <div className={styles.image}>
                                                        <Image src="/images/c4.png" alt="" width={196} height={196} style={{ borderRadius: "50%" }} />
                                                    </div>
                                                    <div className={styles.name}>
                                                        Maria Vavoulas
                                                    </div>
                                                    <div className={styles.desig}>
                                                        Group COO
                                                    </div>
                                                    <div className={styles.cLogo}>
                                                        HC Group
                                                    </div>
                                                    <div className={styles.detail}>
                                                        “
                                                        Having established HC Group Middle East Ltd in 2021, we were looking for a proactive partner to guide us and support our growth strategy. MS have not let us down. The team are passionate, knowledgeable and most importantly for us, responsive
                                                        ”
                                                    </div> */}

                  <div className={styles.arrowbtn}>
                    <div
                      onClick={() => {
                        setC(2);
                      }}
                    >
                      <Image
                        src="/images/Left.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setC(4);
                      }}
                    >
                      <Image
                        src="/images/Right.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              ) : c == 4 ? (
                <div className={styles.item1}>
                  <div className={styles.image}>
                    <Image
                      src="/images/c5.png"
                      alt=""
                      width={196}
                      height={196}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className={styles.name}>S. Patel</div>
                  <div className={styles.desig}>Finance Manager</div>
                  <div className={styles.cLogo}>M2P Solutions Limited</div>

                  <div className={styles.detail}>
                    “It has been an absolute pleasure working with MS Team. They
                    have shown a high level of commitment and professionalism in
                    planning our audit process and have gone above and beyond to
                    be available to answer our queries regardless of the time of
                    day. A special shout out to Shafeek, Anas, and Zanish for
                    their combined efforts. I would highly recommend them to any
                    business looking for an external auditing service.”
                  </div>

                  <div className={styles.arrowbtn}>
                    <div
                      onClick={() => {
                        setC(3);
                      }}
                    >
                      <Image
                        src="/images/Left.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setC(5);
                      }}
                    >
                      <Image
                        src="/images/Right.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              ) : c == 5 ? (
                <div className={styles.item1}>
                  <div className={styles.image}>
                    <Image
                      src="/images/c12.png"
                      alt=""
                      width={196}
                      height={196}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className={styles.name}>Fahad Al Harthi</div>
                  <div className={styles.desig}>Owner</div>
                  <div className={styles.cLogo}>Emocean Marine</div>
                  <div className={styles.detail}>
                    “MS has given me step by step guidance on tax planning,
                    accounting and how to grow my business. Shafeek is also an
                    excellent business advisor who helped me in setting my
                    business strategy right and scaling up my business.
                    Throughout MS has done an exceptional job in delivering the
                    services. Thoroughly satisfied.”
                  </div>

                  <div className={styles.arrowbtn}>
                    <div
                      onClick={() => {
                        setC(4);
                      }}
                    >
                      <Image
                        src="/images/Left.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setC(6);
                      }}
                    >
                      <Image
                        src="/images/Right.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              ) : c == 6 ? (
                <div className={styles.item1}>
                  <div className={styles.image}>
                    <Image
                      src="/images/c9.png"
                      alt=""
                      width={196}
                      height={196}
                      style={{ borderRadius: "50%" }}
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.name}>Fathima AlDhaheri</div>
                  <div className={styles.desig}>Founder</div>
                  <div className={styles.cLogo}>Sofra</div>
                  <div className={styles.detail}>
                    “ MS has been a great addition to our team. Mr. Shafeek and
                    his team are passionate about what they are doing and they
                    won&apos;t hesitate to provide you with all kinds of
                    support. If you are just starting your business, I would
                    recommend approaching them. ”
                  </div>

                  <div className={styles.arrowbtn}>
                    <div
                      onClick={() => {
                        setC(5);
                      }}
                    >
                      <Image
                        src="/images/Left.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setC(7);
                      }}
                    >
                      <Image
                        src="/images/Right.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              ) : c == 7 ? (
                <div className={styles.item1}>
                  <div className={styles.image}>
                    <Image
                      src="/images/c3.png"
                      alt=""
                      width={196}
                      height={196}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className={styles.name}>Chetan Shrestha</div>
                  <div className={styles.desig}>Management</div>
                  <div className={styles.cLogo}>
                    Global Green Growth Institute
                    <br /> (Masdar City)
                  </div>
                  <div className={styles.detail}>
                    “ As the UAE is gradually transitioning to a knowledge-based
                    economy, expert consulting services as such from MS will
                    remain invaluable across all socio-economic sectors. ”
                  </div>{" "}
                  *
                  <div className={styles.arrowbtn}>
                    <div
                      onClick={() => {
                        setC(6);
                      }}
                    >
                      <Image
                        src="/images/Left.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setC(8);
                      }}
                    >
                      <Image
                        src="/images/Right.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              ) : c == 8 ? (
                <div className={styles.item1}>
                  <div className={styles.image}>
                    <Image
                      src="/images/Kaplan-01kk.svg"
                      alt=""
                      width={196}
                      height={196}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className={styles.name}>Amar Mehra</div>
                  <div className={styles.desig}>Head of Tax</div>
                  <div className={styles.cLogo}>KaplanME</div>
                  <div className={styles.detail}>
                    “I would like to congratulate Mr. Shafeek and his team for
                    their professionalism and dedication in getting a piece of
                    work delivered on time within such short notice and without
                    any prior warning. The team had to give up their weekends to
                    get this done. I am truly appreciative and extremely
                    grateful. I will be delighted to work with MS in the
                    future.”
                  </div>

                  <div className={styles.arrowbtn}>
                    <div
                      onClick={() => {
                        setC(7);
                      }}
                    >
                      <Image
                        src="/images/Left.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setC(9);
                      }}
                    >
                      <Image
                        src="/images/Right.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              ) : c == 9 ? (
                <div className={styles.item1}>
                  <div className={styles.image}>
                    <Image
                      src="/images/c7c.png"
                      alt=""
                      width={196}
                      height={196}
                      style={{ borderRadius: "50%" }}
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.name}>Ajith Kumar</div>
                  <div className={styles.desig}>Director</div>
                  <div className={styles.cLogo}>Metlife</div>
                  <div className={styles.detail}>
                    “I am very happy with MS. MS provides very specialized
                    service for all tax needs for incorporation, accounting and
                    taxes. I have referred several colleagues and they are all
                    very happy with the service and expertise.”
                  </div>

                  <div className={styles.arrowbtn}>
                    <div
                      onClick={() => {
                        setC(9);
                      }}
                    >
                      <Image
                        src="/images/Left.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setC(11);
                      }}
                    >
                      <Image
                        src="/images/Right.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              ) : c == 10 ? (
                <div className={styles.item1}>
                  <div className={styles.image}>
                    <Image
                      src="/images/Brodies-01.svg"
                      alt=""
                      width={196}
                      height={196}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className={styles.name}>Bryan Wilson</div>
                  <div className={styles.desig}>Partner</div>
                  <div className={styles.cLogo}>Brodies Middle East LLP</div>
                  <div className={styles.detail}>
                    “MS Accountants provided us with timely and helpful support
                    as we set up our AML compliance function for our ADGM
                    operation. We look forward to deepening and strengthening
                    our relationship with them.”
                  </div>

                  <div className={styles.arrowbtn}>
                    <div
                      onClick={() => {
                        setC(8);
                      }}
                    >
                      <Image
                        src="/images/Left.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setC(10);
                      }}
                    >
                      <Image
                        src="/images/Right.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              ) : c == 11 ? (
                <div className={styles.item1}>
                  <div className={styles.image}>
                    <Image
                      src="/images/c6.png"
                      alt=""
                      width={196}
                      height={196}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className={styles.name}>Meriem Al Busthani</div>
                  <div className={styles.desig}>General Manager</div>
                  <div className={styles.cLogo}>Inter B konsult</div>
                  <div className={styles.detail}>
                    “The service from MS has proven to exceed my expectations.
                    They not only give the reassurance to know you are complying
                    with the rules and regulations but if you have any queries,
                    you feel the team is personally and fully dedicated to
                    sorting it out. They are brilliant at responding live. I
                    strongly recommend MS for their professional, tailor made
                    and timely service. Their advice and support has been
                    invaluable and I often phone Shafeek or other members of his
                    team to bounce off ideas or take their objective opinion.”
                  </div>

                  <div className={styles.arrowbtn}>
                    <div
                      onClick={() => {
                        setC(10);
                      }}
                    >
                      <Image
                        src="/images/Left.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setC(0);
                      }}
                    >
                      <Image
                        src="/images/Right.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.item1}>
                  <div className={styles.image}>
                    <Image
                      src="/images/c6.png"
                      alt=""
                      width={196}
                      height={196}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className={styles.name}>Meriem Al Busthani</div>
                  <div className={styles.desig}>General Manager</div>
                  <div className={styles.cLogo}>Inter B konsult</div>
                  <div className={styles.detail}>
                    “The service from MS has proven to exceed my expectations.
                    They not only give the reassurance to know you are complying
                    with the rules and regulations but if you have any queries,
                    you feel the team is personally and fully dedicated to
                    sorting it out. They are brilliant at responding live. I
                    strongly recommend MS for their professional, tailor made
                    and timely service. Their advice and support has been
                    invaluable and I often phone Shafeek or other members of his
                    team to bounce off ideas or take their objective opinion.”
                  </div>
                  <div className={styles.arrowbtn}>
                    <div
                      onClick={() => {
                        setC(10);
                      }}
                    >
                      <Image
                        src="/images/Left.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setC(0);
                      }}
                    >
                      <Image
                        src="/images/Right.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.right}>
            <div
              onClick={() => {
                setC(0);
              }}
              className={styles.c3}
              data-aos="fade-left"
            >
              <div style={{ padding: 10 }}>
                <div className={styles.sname}> Prof.Jamal Sanad Al-Suwaidi</div>
                <div className={styles.sdesig}>H.E. Minister</div>
              </div>
              <div
                className={
                  c == 0
                    ? styles.imgC9 + " " + styles.borderY
                    : styles.imgC9 + " " + styles.borderG
                }
              >
                <div className={styles.img}>
                  <Image
                    src="/images/c1.png"
                    alt=""
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setC(1);
              }}
              className={styles.c4}
              data-aos="fade-left"
            >
              <div
                className={
                  c == 1
                    ? styles.imgC4 + " " + styles.borderY2
                    : styles.imgC4 + " " + styles.borderGt
                }
              >
                <div className={styles.img}>
                  <Image
                    src="/images/c4.png"
                    alt=""
                    width="45"
                    height="45"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
              <div style={{ padding: "3px 5px", marginRight: 15 }}>
                <div className={styles.sname}>Maria Vavoulas</div>
                <div className={styles.sdesig}>Former Group COO</div>
                <div className={styles.scompany}>HC Group</div>
              </div>
            </div>

            <div
              onClick={() => {
                setC(2);
              }}
              className={styles.c13}
              data-aos="fade-left"
            >
              <div
                className={
                  c == 2
                    ? styles.imgC7 + " " + styles.borderY2
                    : styles.imgC7 + " " + styles.borderGt
                }
              >
                <div className={styles.img}>
                  <Image
                    src="/images/c13.png"
                    alt=""
                    width={56}
                    height={56}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
              <div style={{ marginTop: 8, marginRight: 15 }}>
                <div className={styles.sname}>Khalid Akhrif</div>
                <div className={styles.sdesig}>Vice President </div>
                <div className={styles.scompany}>Technical-Aercap</div>
              </div>
            </div>

            <div
              onClick={() => {
                setC(3);
              }}
              className={styles.c10}
              data-aos="fade-left"
            >
              <div
                className={
                  c == 3
                    ? styles.imgC7 + " " + styles.borderY2
                    : styles.imgC7 + " " + styles.borderGt
                }
              >
                <div className={styles.imgSpcl}>
                  <Image
                    src="/images/c10small.jpg"
                    alt=""
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                    objectPosition="bottom"
                  />
                </div>
              </div>
              <div style={{ marginTop: 8, marginRight: 15 }}>
                <div className={styles.sname}>Daniel Dorr</div>
                <div className={styles.sdesig}>Co-Founder</div>
                <div className={styles.scompany}>DX Compliance</div>
              </div>
            </div>

            <div
              onClick={() => {
                setC(4);
              }}
              className={styles.c2}
              data-aos="fade-left"
            >
              <div style={{ padding: "7px" }}>
                <div className={styles.sname}> S. Patel</div>
                <div className={styles.sdesig}>Finance Manager </div>
                <div className={styles.scompany}>M2P Solutions Limited</div>
              </div>
              <div
                className={
                  c == 4
                    ? styles.imgC9 + " " + styles.borderY
                    : styles.imgC9 + " " + styles.borderG
                }
              >
                <div className={styles.img}>
                  <Image
                    src="/images/c5.png"
                    alt=""
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setC(5);
              }}
              className={styles.c12}
              data-aos="fade-left"
            >
              <div
                className={
                  c == 5
                    ? styles.imgC7 + " " + styles.borderY2
                    : styles.imgC7 + " " + styles.borderGt
                }
              >
                <div className={styles.img}>
                  <Image
                    src="/images/c12.png"
                    alt=""
                    width={56}
                    height={56}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
              <div style={{ marginTop: 8, marginRight: 15 }}>
                <div className={styles.sname}>Fahad Al Harthi</div>
                <div className={styles.sdesig}>Owner</div>
                <div className={styles.scompany}>Emocean Marine</div>
              </div>
            </div>

            <div
              onClick={() => {
                setC(6);
              }}
              className={styles.c9}
              data-aos="fade-left"
            >
              <div style={{ padding: "7px" }}>
                <div className={styles.sname}>Fathima AlDhaheri</div>
                <div className={styles.sdesig}>Founder</div>
                <div className={styles.scompany}>Sofra</div>
              </div>
              <div
                className={
                  c == 6
                    ? styles.imgC9 + " " + styles.borderY
                    : styles.imgC9 + " " + styles.borderG
                }
              >
                <div className={styles.img}>
                  <Image
                    src="/images/c9.png"
                    alt=""
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setC(7);
              }}
              className={styles.c5}
              data-aos="fade-left"
            >
              <div style={{ padding: "5px" }}>
                <div className={styles.sname}>Chetan Shrestha</div>
                <div className={styles.sdesig}>Management</div>
                <div className={styles.scompany}>
                  Global Green Growth <br />
                  Institute (Masdar City){" "}
                </div>
              </div>
              <div
                className={
                  c == 7
                    ? styles.imgC1 + " " + styles.borderY
                    : styles.imgC1 + " " + styles.borderG
                }
              >
                <div className={styles.img}>
                  <Image
                    src="/images/c3.png"
                    alt=""
                    width="68"
                    height="68"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setC(8);
              }}
              className={styles.c1}
              data-aos="fade-left"
            >
              <div style={{ padding: "10px" }}>
                <div className={styles.sname}>Amar Mehra</div>
                <div className={styles.sdesig}>Head of Tax</div>
                <div className={styles.scompany}>KaplanME</div>
              </div>
              <div
                className={
                  c == 8
                    ? styles.imgC + " " + styles.borderY
                    : styles.imgC + " " + styles.borderG
                }
              >
                <div className={styles.img}>
                  <Image
                    src="/images/Kaplan-01kk.svg"
                    alt=""
                    width="70"
                    height="70"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setC(9);
              }}
              className={styles.c7}
              data-aos="fade-left"
            >
              <div
                className={
                  c == 9
                    ? styles.imgC7 + " " + styles.borderY2
                    : styles.imgC7 + " " + styles.borderGt
                }
              >
                <div className={styles.imgSpcl2}>
                  <Image
                    src="/images/c7c.png"
                    alt=""
                    width={58}
                    height={58}
                    style={{ borderRadius: "50%" }}
                    objectFit="contain"
                  />
                </div>
              </div>
              <div style={{ marginTop: 8, marginRight: 15 }}>
                <div className={styles.sname}>Ajith Kumar</div>
                <div className={styles.sdesig}>Director </div>
                <div className={styles.scompany}>Metlife</div>
              </div>
            </div>

            <div
              onClick={() => {
                setC(10);
              }}
              className={styles.c11}
              data-aos="fade-left"
            >
              <div style={{ padding: 5 }}>
                <div className={styles.sname}>Bryan Wilson</div>
                <div className={styles.sdesig}>Partner</div>
                <div className={styles.scompany}>Brodies Middle East LLP</div>
              </div>
              <div
                className={
                  c == 10
                    ? styles.imgC9 + " " + styles.borderY
                    : styles.imgC9 + " " + styles.borderG
                }
              >
                <div className={styles.img}>
                  <Image
                    src="/images/Brodies-01.svg"
                    alt=""
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setC(11);
              }}
              className={styles.c6}
              data-aos="fade-left"
            >
              <div
                className={
                  c == 11
                    ? styles.imgC6 + " " + styles.borderY2
                    : styles.imgC6 + " " + styles.borderGt
                }
              >
                <div className={styles.img}>
                  <Image
                    src="/images/c6.png"
                    alt=""
                    width="64"
                    height="64"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
              <div style={{ marginTop: 8, marginRight: 15 }}>
                <div className={styles.sname}>Meriem Al Busthani</div>
                <div className={styles.sdesig} style={{ marginTop: 4 }}>
                  General Manager
                </div>
                <div className={styles.scompany}>Inter B konsult</div>
              </div>
            </div>
          </div>
        </div>
        {/* <button onClick={scrollToTestimonial}>View All Testimonials</button> */}
      </div>
    </Container>
  );
}

export default Clients;
