import React, { useState } from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import { LuDownload } from "react-icons/lu";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
function Company_Types() {
  //   const [selectedContent, setSelectedContent] = useState(
  //     "Establishing a regulated firm in the Abu Dhabi Global Market (ADGM) requires a careful application process overseen by the independent regulator, the Financial Services Regulatory Authority (FSRA). Firms must undergo FSRA's authorization and supervision procedures, which cover various financial activities such as investment advisory, asset management, brokerage, and wholesale banking."
  //   );
  //   const [title, setTitle] = useState("Regulated Company");
  //   const [activeSpan, setActiveSpan] = useState("Regulated Company");
  //   const handleSpanClick = (companyType) => {

  //     switch (companyType) {
  //       case "Regulated Company":
  //         setSelectedContent(
  //           "Establishing a regulated firm in the Abu Dhabi Global Market (ADGM) requires a careful application process overseen by the independent regulator, the Financial Services Regulatory Authority (FSRA). Firms must undergo FSRA's authorization and supervision procedures, which cover various financial activities such as investment advisory, asset management, brokerage, and wholesale banking."
  //         );
  //         setTitle("Regulated Company");
  //         break;
  //       case "Non-regulated Company":
  //         setSelectedContent(
  //           "Establishing a non-regulated company in the Abu Dhabi Global Market (ADGM) offers a streamlined process exempt from specific financial regulations. Non-regulated entities operate in sectors not requiring direct oversight, allowing for a simplified application process and a business-friendly environment within the ADGM."
  //         );
  //         setTitle("Non-regulated Company");
  //         break;
  //       case "Holding Company":
  //         setSelectedContent(
  //           "Creating a holding company in the Abu Dhabi Global Market (ADGM) follows a structured process under ADGM regulations. Entrepreneurs must choose a legal structure, like a Limited Liability Company (LTD), and reserve a trade name through the ADGM Registration Authority. The holding company serves as a strategic entity overseeing subsidiary companies."
  //         );
  //         setTitle("Holding Company");
  //         break;
  //       case "Family Officer":
  //         setSelectedContent(
  //           "Establishing a family office in the Abu Dhabi Global Market (ADGM) requires a flexible approach tailored to each family's unique needs. It involves centralized wealth management influenced by family dynamics. ADGM, inspired by the UK, recognizes the diverse structures and regulations of family offices, emphasizing a bespoke understanding."
  //         );
  //         break;
  //       case "Trust & Foundations":
  //         setSelectedContent(
  //           "In ADGM, Trust Law facilitates the creation of non-charitable purpose trusts, offering flexibility aligned with regulations. Settlors can appoint Protectors with various powers. Enforcers ensure compliance with non-charitable purposes. Both cannot be trustees to avoid conflicts. ADGM Foundations, an alternative to trusts, cater to HNWI and offer versatile solutions like wealth management, succession planning, tax planning, and corporate structuring. The regime accommodates Public Interest Purpose Foundations, showcasing ADGM's commitment to diverse financial planning needs."
  //         );
  //         break;


  //       default:
  //         setSelectedContent("Default content...");
  //     }
  //     setActiveSpan(companyType);
  //   };
  //   return (
  //     <>
  //       <div className={styles.company_formContainer}>
  //         <Container>
  //           <div className={styles.company_form_title}>{title}</div>
  //           <p className={styles.companytype_para}>{String(selectedContent)}</p>
  //           <div className={styles.downbtnWrapper}>
  //             <div className={styles.downloadbtn}>
  //               <LuDownload />
  //             </div>
  //             Download PDF
  //           </div>
  //         </Container>
  //       </div>
  //       <div className={styles.companyNames}>
  //         <div className={styles.companymenus}>
  //           <span
  //             onClick={() => handleSpanClick("Regulated Company")}
  //             className={
  //               activeSpan === "Regulated Company" ? styles.activeSpan : ""
  //             }
  //           >
  //             Regulated Company
  //           </span>
  //           <span
  //             onClick={() => handleSpanClick("Non-regulated Company")}
  //             className={
  //               activeSpan === "Non-regulated Company" ? styles.activeSpan : ""
  //             }
  //           >
  //             Non- regulated Company
  //           </span>
  //           <span
  //             className={
  //               activeSpan === "Holding Company" ? styles.activeSpan : ""
  //             }
  //             onClick={() => handleSpanClick("Holding Company")}
  //           >
  //             Holding Company
  //           </span>
  //           <span
  //             className={activeSpan === "Family Officer" ? styles.activeSpan : ""}
  //             onClick={() => handleSpanClick("Family Officer")}
  //           >
  //             Family Officer
  //           </span>
  //           <span
  //             className={
  //               activeSpan === "Trust & Foundations" ? styles.activeSpan : ""
  //             }
  //             onClick={() => handleSpanClick("Trust & Foundations")}
  //           >
  //             Trust & Foundations
  //           </span>
  //         </div>
  //       </div>
  //       <div className={styles.mobiletabs}>
  //         <div className={styles.slidebtn}>
  //           <MdArrowLeft style={{ fontSize: "30px" }} />
  //         </div>
  //         {title}
  //         <div className={styles.slidebtn}>
  //           <MdArrowRight style={{ fontSize: "30px" }} />
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
  const companyTypes = [

    {
      title: "Non-regulated Company",
      content: "Establishing an operating set-up/incorporation company (op-co) in the Abu Dhabi Global Market (ADGM) offers a streamlined process exempt from specific financial regulations. Non-regulated entities operate in sectors not requiring direct oversight, allowing for a simplified application process and a business-friendly environment within the ADGM."
    },
    {
      title: "Holding Company",
      content:
        "Creating a holding company in the Abu Dhabi Global Market (ADGM) follows a structured process under ADGM regulations. Entrepreneurs must choose a legal structure, like a Limited Liability Company (LTD), and reserve a trade name through the ADGM Registration Authority. The holding company serves as a strategic entity overseeing subsidiary companies."
    },
    {
      title: "Regulated Company",
      content:
        "Establishing a regulated firm in the Abu Dhabi Global Market (ADGM) requires a careful application process overseen by the independent regulator, the Financial Services Regulatory Authority (FSRA). Firms must undergo FSRA's authorization and supervision procedures, which cover various financial activities such as investment advisory, asset management, brokerage, and wholesale banking."
    },
    {
      title: "Family Officer",
      content:
        "Establishing a family office in the Abu Dhabi Global Market (ADGM) requires a flexible approach tailored to each family's unique needs. It involves centralized wealth management influenced by family dynamics. ADGM, inspired by the UK, recognizes the diverse structures and regulations of family offices, emphasizing a bespoke understanding."
    },
    {
      title: "Trust & Foundations",
      content:
        "In ADGM, Trust Law facilitates the creation of non-charitable purpose trusts, offering flexibility aligned with regulations. Settlers can appoint Protectors with various powers. Enforcers ensure compliance with non-charitable purposes. Both cannot be trustees to avoid conflicts. ADGM Foundations, an alternative to trusts, cater to HNWI and offer versatile solutions like wealth management, succession planning, tax planning, and corporate structuring. The regime accommodates Public Interest Purpose Foundations, showcasing ADGM's commitment to diverse financial planning needs."
    }
  ];

  // function Company_Types() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleArrowClick = (direction) => {
    const lastIndex = companyTypes.length - 1;

    if (direction === "left") {
      const newIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
      setActiveIndex(newIndex);
    } else if (direction === "right") {
      const newIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
      setActiveIndex(newIndex);
    }
  };

  return (
    <>
      <div className={styles.company_formContainer}>
        <Container>
          <div className={styles.webwrapper} data-aos="fade-right">
            <div className={styles.company_form_title} >
              {companyTypes[activeIndex].title}
            </div>
            <p className={styles.companytype_para}>
              {companyTypes[activeIndex].content}
            </p>
            {/* <div className={styles.downbtnWrapper}>
            <div className={styles.downloadbtn}>
              <LuDownload />
            </div>
            Download PDF
          </div> */}
          </div>
        </Container>
      </div>
      <div className={styles.companyNames}>
        <div className={styles.companymenus} data-aos="fade-up">
          {companyTypes.map((company, index) => (
            <span
              key={index}
              onClick={() => setActiveIndex(index)}
              className={index === activeIndex ? styles.activeSpan : ""} 
            >
              {company.title} 
            </span>
          ))}
        </div>
      </div>
      <div className={styles.mobiletabs}>
        <div
          className={styles.slidebtn}
          onClick={() => handleArrowClick("left")}
        >
          <MdArrowLeft style={{ fontSize: "30px" }} />
        </div>
        {companyTypes[activeIndex].title}
        <div
          className={styles.slidebtn}
          onClick={() => handleArrowClick("right")}
        >
          <MdArrowRight style={{ fontSize: "30px" }} />
        </div>
      </div>
    </>
  );
}
export default Company_Types;
