import React, { useEffect, useState } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Smartup.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

import YellowBorderCard from "../YellowBorderCardWithBorderSmartup"
import YellowBorderCardSmall from "../YellowBorderCardSmall"
import Container from '../Common/Container';
function Smartup_section3() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    })
  }, []);

  function monthAssign(dObj, monthId) {
    let month = ("0" + (dObj.getMonth() + 1)).slice(-2);
    let year = dObj.getFullYear();

    document.getElementById(monthId).value = year + "-" + month;
  }
  var d1 = new Date();
  var d2 = new Date(); d2.setMonth(d1.getMonth() - 1);
  var d3 = new Date(); d3.setMonth(d2.getMonth() - 1);

  // monthAssign(d1, "month1");
  //  monthAssign(d2, "month2"); 
  //  monthAssign(d3, "month3");

  const [resultsWrap, setResultWrap] = useState(false)
  const [burnRate, setburnRate] = useState(0)
  const [runAway, setrunAway] = useState(0)
  let months = 3;

  function addMOnth() {
    months++;
    let mydiv = document.createElement("div");
    let mytextbox1 = document.createElement("INPUT");
    mytextbox1.setAttribute("type", "number");
    mytextbox1.setAttribute("required", "");
    mytextbox1.classList.add("amount");

    let mytextbox2 = document.createElement("INPUT");
    mytextbox2.setAttribute("type", "month");
    mytextbox2.setAttribute("placeholder", "Select Date");
    mytextbox2.classList.add("month");
    mytextbox2.setAttribute("required", "");
    mydiv.appendChild(mytextbox1);
    mydiv.appendChild(mytextbox2);
    mydiv.classList.add("newEntry");
    mydiv.classList.add(styles.burnRateFormDetails);
    const entrieswrap = document.getElementById("entriesWrap");
    const monthCount = document.getElementById("monthCount");
    entrieswrap.appendChild(mydiv);
    monthCount.textContent = parseInt(months);
  }




  function calculate() {
    let notGiven = false;
    var cashvalues = Array.from(document.querySelectorAll(".amount")).map((input) => input.value);
    var monthvalues = Array.from(document.querySelectorAll(".month")).map((input) => input.value);
    for (let j = 0; j < cashvalues.length; j++) {
      if (cashvalues[j] == "") {
        notGiven = true;
        break;
      }
    }
    for (let j = 0; j < monthvalues.length; j++) {
      if (monthvalues[j] == "") {
        notGiven = true;
        break;
      }
    }

    var StartingBalance = cashvalues[cashvalues.length - 1];

    var EndingBalance = cashvalues[0];

    var CurrentCashBalance = cashvalues[cashvalues.length - 1];

    var noOfMonths = monthvalues.length;

    var BurnRate = (StartingBalance - EndingBalance) / noOfMonths;
    setburnRate(parseFloat(BurnRate).toFixed(2))

    var CashRunway = CurrentCashBalance / BurnRate;
    setrunAway(parseFloat(CashRunway).toFixed(2))

    if (isNaN(BurnRate) || isNaN(CashRunway) || notGiven == true) {
      setResultWrap(false)
    }
    else {
      setResultWrap(true)
    }
  }

  function reset() {
    var amtObj = document.getElementsByClassName("amount");
    let monthCount = document.getElementById("monthCount");
    for (var i = 0; i < amtObj.length; i++) { amtObj[i].value = " "; }
    var mntObj = document.getElementsByClassName("month");
    for (var i = 0; i < mntObj.length; i++) { mntObj[i].value = " "; }
    setResultWrap(false)
    // var resOuts = document.getElementById("resOuts"); 
    // resOuts.classList.remove("resultsWrap"); 
    // resOuts.classList.add("NoresultsWrap"); 
    const collection = document.querySelectorAll(".newEntry");
    for (const elem of collection) { elem.remove(); }
    monthAssign(d1, "month1");
    monthAssign(d2, "month2");
    monthAssign(d3, "month3");
    months = 3
    monthCount.textContent = parseInt(months)
  }

  return (
    <Container style={{ padding: "0 10px" }}>
      <div className={styles.Smartup_section3_container}>
        <div className={styles.sub} data-aos="fade-up">

          <div className={styles.Smartup_section3_left + " " + styles.order1}>
            <div className={cstyles.white_heading}>
              Unlock E-Commerce Business<br />
              Potential in you
            </div>
            <div className={cstyles.details18OpenWhitePo + " " + cstyles.ac2_detail1Width}>
              Join us and be part of a global community where you can connect and share your passion and enthusiasm with people near and far. We help you get your business off the ground.
            </div>
          </div>

          <div className={styles.order2}>

            <YellowBorderCard src="/images/smartUp1.svg" title={<>Setting up a new Business in the UAE</>} />
          </div>
          <div className={styles.order3}>
            <YellowBorderCard src="/images/smartUp2.svg" title={<>Scalability of my<br /> business model</>} />
          </div>
          <div className={styles.order4}>
            <YellowBorderCard src="/images/smartUp3.svg" title={<>E-Commerce in the<br /> UAE</>} />
          </div>
          <div className={styles.order5}>
            <YellowBorderCard src="/images/smartUp4.svg" title={<>Post launch stability<br /> of my business</>} />
          </div>
          <div className={styles.order6}>
            <YellowBorderCard src="/images/smartUp5.svg" title={<>I want to take my<br /> numbers on track</>} />
          </div>

        </div>

        <div className={styles.smartUp_formContainer}>
          <div className={styles.Smartup_formL} data-aos="fade-right">
            <div className={cstyles.white_heading + " " + cstyles.textCntr}>
              What is your Business Idea?
            </div>
            <div className={cstyles.details18WhitePo300 + " " + cstyles.textCntr} style={{ marginTop: 20, padding: "0 20px" }}>
              We help you plan, run, and scale the venture you’ve always dreamed of.
            </div>
            <div className={styles.Smartup_formL_sub}>
              <div>
                <YellowBorderCardSmall src="/images/smartUp6.svg" backgroundClr="white" title="Resources" href="/smartup" />
              </div>
              <div className={cstyles.services_box_mL2}>
                <YellowBorderCardSmall src="/images/smartUp7.svg" backgroundClr="white" title="Solutions" />
              </div>
              <div className={cstyles.cntr}>
                <YellowBorderCardSmall src="/images/smartUp8.svg" backgroundClr="white" title="Stories" />
              </div>


            </div>
          </div>

          <div className={styles.Smartup_form2} data-aos="fade-left">
            <div className={styles.Smartup_formR}>
              <div className={cstyles.white_heading + " " + cstyles.textCntr}>
                Calculate Burn Rate and Startup Runway
              </div>
              <div className={cstyles.details18WhitePo300 + " " + cstyles.textCntr} style={{ marginTop: 20, padding: "0 20px" }}>
                We help you plan, run, and scale the venture you’ve always dreamed of.
              </div>
              <div className={cstyles.details18WhitePo300 + " " + cstyles.textCntr} style={{ marginTop: 20 }}>
                Fill in the cash balance at the end of the last three months. (For enhanced accuracy, you can add up to 12 months).
              </div>

              <div className={styles.burnRateForm}>
                <div>
                  <div className={styles.burnRateFormHead}>
                    <div className={cstyles.details18PoY500}>
                      Cash Balance ($)
                    </div>
                    <div className={cstyles.details18PoY500}>
                      Months <span id="monthCount">3</span>
                    </div>
                  </div>
                </div>

                <div id="entriesWrap" >
                  <div className={styles.burnRateFormDetails}>
                    <input type="number" className='amount' required />
                    <input type="month" placeholder="Select Date" className='month' id="month1" required />
                  </div>
                  <div className={styles.burnRateFormDetails}>
                    <input type="number" className='amount' required />
                    <input type="month" placeholder="Select Date" className='month' id="month2" required />
                  </div>
                  <div className={styles.burnRateFormDetails}>
                    <input type="number" className='amount' required />
                    <input type="month" placeholder="Select Date" className='month' id="month3" required />
                  </div>
                </div>



                <div>
                  <button className={styles.AddMonth} onClick={() => addMOnth()}>
                    <div style={{ margin: "auto" }}>+ Add Month</div>
                    <div >
                      <Image src="/images/datePicker.svg" alt="" width={30} height={30} />
                    </div>
                  </button>
                </div>
                <div className={styles.calcButtons}>
                  <button className={styles.calBtn} onClick={() => calculate()}>
                    Calculate  <div className={styles.arrow} >
                      <Image src="/images/LarrowB.svg" width={9} height={15} alt="arrow" />
                    </div>
                    

                  </button>
                  <button className={styles.resetBtn} onClick={() => reset()}>
                    Reset  <div className={styles.arrow} >
                      <Image src="/images/LarrowY.svg" width={9} height={15} alt="arrow" />
                    </div>

                  </button>
                </div>
              </div>


            </div>



            {resultsWrap ?
              <div className={styles.resultWrap} id="result">
                <div className={styles.ResultHead}>
                  <div className={styles.ResultTitle}>
                    Burn Rate
                  </div>
                  <div className={styles.ResultTitle}>
                    Cash Runway
                  </div>
                </div>
                <div className={styles.ResultHead} style={{ marginTop: 30 }}>
                  <div className={cstyles.headingW24500} style={{ textAlign: "left" }}>
                    ${burnRate} per Month
                  </div>
                  <div className={cstyles.headingW24500} style={{ textAlign: "right" }}>
                    {runAway} Months
                  </div>
                </div>
              </div> : ""}

          </div>


        </div>

      </div>
    </Container>
  )
}

export default Smartup_section3