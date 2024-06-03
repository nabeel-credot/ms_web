import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import BluePointBox from '../BluePointBox'
import Container from '../Common/Container';
function ESR_section4() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    })
  }, []);

  return (
    <Container>
    <div className={styles.StartConversation_container}>
      <div className={styles.esr_section4_sub} >
        <div className={styles.accounting_services_points_box} data-aos="fade-right">
          <BluePointBox style={{
            paddingTop: 35, paddingRight: 55, paddingLeft: 30, width: "616px",
            height: "245px"
          }}>
            <div className={styles.accounting_services_points_detail}>
              To ensure the Economic Substance Test is conducted accurately, an entity can look for qualified professional help to assess the impact of economic substance that entity has on UAE. Before the end of the financial period, an entity must make sure to consider the list of matters (mentioned above) and report to its relevant regulatory authority in accordance with its requirements.

            </div>
          </BluePointBox>
        </div>

        <div className={styles.accounting_services_points_box} data-aos="fade-left">
          <BluePointBox style={{
            paddingTop: 30, paddingRight: 25, paddingLeft: 30, width: "616px",
            height: "245px"
          }}>
            <div className={styles.accounting_services_points_detail}>
              UAE businesses are expected to use a “substance over form” approach, based on the economic substance doctrine to determine whether they undertake a Relevant Activity and, as a result, fall within the scope of the Economic Substance Regulations. To make this determination, Licensees should not only consider the activities stated in their commercial license or registration certificates but also assess the activities carried out during a financial period.
            </div>
          </BluePointBox>
        </div>
      </div>

      <div className={styles.mobOnly}>
        <BluePointBox style={{
          padding: "45px 30px", width: "auto",
          height: "auto"
        }}>
          <div className={styles.accounting_services_points_detail}>
            To ensure the Economic Substance Test is conducted accurately, an entity can look for qualified professional help to assess the impact of economic substance that entity has on UAE. Before the end of the financial period, an entity must make sure to consider the list of matters (mentioned above) and report to its relevant regulatory authority in accordance with its requirements.

          </div>
        </BluePointBox>

        <BluePointBox style={{
          padding: "45px 30px", width: "auto",
          height: "auto", margin: "50px 0"
        }}>
          <div className={styles.accounting_services_points_detail}>
            UAE businesses are expected to use a “substance over form” approach, based on the economic substance doctrine to determine whether they undertake a Relevant Activity and, as a result, fall within the scope of the Economic Substance Regulations. To make this determination, Licensees should not only consider the activities stated in their commercial license or registration certificates but also assess the activities carried out during a financial period.
          </div>
        </BluePointBox>


      </div>
    </div>
    </Container>
  )
}

export default ESR_section4