import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Awards.module.css"
import Card from "../AwardYellowCard"

function Award_sub2() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    })
  }, []);

  return (
    <div className={styles.Award_sub2_container}>
      <div className={styles.Award_sub2_box} >
        <div className={styles.Award_sub2_card} data-aos="fade-right">
          <Card src="/images/awards1.svg" imgWidth="337px" imgHeight="129px" title="Tax Advisory" 
          >
            Today our clients can start a business in UAE and MS are able to offer a high level of international knowledge and expertise to businesses to help them make the right decisions, supported with accountancy and tax services wherever they may engage in business.
          </Card>
        </div>
        <div className={styles.Award_sub2_card} data-aos="fade-right" >
          <Card src="/images/awards2.svg" imgWidth="340px" imgHeight="69px" title="Best Tax Consultancy Of the Year 2019"
            >
            <div>
              We’re honored to have received the Award for “Best Tax Consultancy Firm 2019 – UAE” by MEA Business Awards. Achieving this distinction reinforce our commitment and outstanding performance to resolving tax issues across the region.
            </div>
            <div style={{ marginTop: 10 }}>
              From tax returns to complex tax planning, our experienced, tax-qualified advisers will work with you to appreciate your needs and deliver the results you want.
            </div>
          </Card>

        </div>

        <div className={styles.Award_sub2_card} data-aos="fade-right">
          <Card src="/images/awards3.svg" imgWidth="207px" imgHeight="185px" title="ACCA Approved Employer"
            >
            <div>
              When you are at your best, we are the best at serving our clients.
            </div>
            <div style={{ marginTop: 10 }}>
              The award recognizes the investment in our talented and dedicated team as paramount to ensure our client service delivery remains world class and our team stay engaged. MS is committed to fostering a positive ethos of continuous learning to all staff and providing training opportunities.
            </div>
          </Card>

        </div>


      </div>
      <div className={styles.Award_sub2_box}>
        <div className={styles.Award_sub2_card} data-aos="fade-right" >
          <Card src="/images/award1.svg" imgWidth="331px" imgHeight="199px" title="Best Business Advisor
              UAE-2018" 
          >
            <div>
              Corporate Magazine has named Mohammed Shafeek one of the top business advisor for 2018 for his excellence in corporate finance & tax advisory.
            </div>
            <div style={{ marginTop: 10 }}>
              The Business Advisor of the Year award recognizes Mohamed Shafeek’s strive to drive efficiencies and growth, enabling business to be a competitive front – runner.
            </div>
          </Card>
        </div>

        <div className={styles.Award_sub2_card} data-aos="fade-right">
          <Card src="/images/award1.svg" imgWidth="299px" imgHeight="189px"
           title="Best for affordable accountancy service 2018 – UAE." 
          >
            <div>
              Thank you for voting us
            </div>
            <div style={{ marginTop: 10 }}>
              We are Multi Award-Winning Chartered Certified Accountants in UAE.The client experience is one of the most powerful ways that we set ourselves apart from the competition, we have demonstrated our commitment to client service, investing in a survey and feedback program that brings transparency to the client experience at their firm.
            </div>
            <div style={{ marginTop: 10 }}>
              We have the pleasure of serving the very SME’s as well as the Fortune500.
            </div>
          </Card>
        </div>

        <div className={styles.Award_sub2_card} data-aos="fade-right">
          <Card src="/images/award2.svg" imgWidth="349px" imgHeight="199px" title="ISO"
          >
            MS went through evaluation process that included management system documentation review, quality management system development, audit, and initial assessment in order to become an ISO 9001 Compliant. Our choice to progress in the direction of ISO 9001 accreditation exhibits the promise to giving a high-calibre and consistent services to our customers and our continuous interest in innovation and improvement.
          </Card>
        </div>

      </div>
      <div className={styles.Award_sub2_box}>
        <div className={styles.Award_sub2_card} data-aos="fade-right" >
          <Card src="/images/awards4.svg" imgWidth="340px" imgHeight="219px" 
          title="Best Full Service Tax Consultant UAE- 2018" 
          >
            <div>
              MS is delighted to be named as Best Full-Service Tax Consultant in UAE for 2018 in the MEA Excellence Awards.We are extremely honored to be recognized among this group of international experts.
            </div>
            <div style={{ marginTop: 10 }}>
              We would not be here today if it were not for our demanding clients, proactive team members, and a corporate culture that attracts valuable talent by fostering rapid and flexible development. Receiving this award in UAE is particularly significant.
            </div>

          </Card>
        </div>

        <div className={styles.Award_sub2_card} data-aos="fade-right" >
          <Card src="/images/awards5.svg" imgWidth="315px" imgHeight="105px" 
          title="Leading Business Taxation And Financial Management Consultancy Of  The Year, UAE."
          >
            <div>
              Every day, MS provides financial and business management solutions to businesses on a flexible and scalable basis, whether that be on a regular part-time basis or for a specific period or project.
            </div>
            <div style={{ marginTop: 10, fontSize: "18px" }}>
              We committed for client’s accomplishments and that is our success too. We are proud to have been recognized for our commitment to the market and in giving back to the community.
            </div>

          </Card>
        </div>

        <div className={styles.Award_sub2_card} data-aos="fade-right" >
          <Card src="/images/awards6.svg" imgWidth="228px" imgHeight="196px" title="GAE"
          >
            MS named as Tax and Accounting Consultancy Firm of the Year in the UAE award for 2020.Thank you for believing in us and keeping us informed about how best to serve your needs. Our ongoing success relies on the loyalty and support from you !
          </Card>
        </div>

      </div>
    </div>
  )
}

export default Award_sub2