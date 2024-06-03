import React from 'react'
import Container from '../Common/Container'
import styles from "./Styles.module.css";

const Privacy_policy_para = () => {
  return (
    <div>
        <Container>
      <div className={styles.privacy_head}>Privacy Policy</div>
      <p style={{fontSize:"18px"}}>The following Privacy Policy (hereinafter the “Policy”) governs the manner in which MS Chartered Accountants Ltd. and its affiliates (collectively known as “MS”) collect, use, maintain, and disclose personal information and explains how you can access your own personal information.
        <br/><br/>
        This policy is applicable to personal information and aggregated information we collect on this MS website, ms-ca.com, which must be read in conjunction with the website&apos;s Terms of Use. ADGM Data Protection Regulations 2021 (DP Regulations) apply to how we approach data privacy. In certain circumstances, other laws may apply to the personal data we process. 
        <br/><br/>
        Where this Policy refers to &quot;we,&quot; &quot;us,&quot; and &quot;our,&quot; we mean MS, and where this policy refers to &quot;you&quot; and &quot;your,&quot; we mean the user of the website.
        <br/><br/>
        You undertake, including but not limited to, that by viewing, using the website, or obtaining any goods or services from us, you shall be deemed to agree to this policy. Should you fail to comply with this Policy, then you must refrain from using or accessing the website.
      </p>
      </Container>
    </div>
  )
}

export default Privacy_policy_para
