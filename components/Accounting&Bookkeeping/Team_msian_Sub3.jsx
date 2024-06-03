import React, { useEffect, useState, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Styles.module.css"
import Image from 'next/image'
import Container from '../Common/Container';
function Team_msian_Sub1() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    })
  }, []);

  // const [playerState, setPlayerState] = useState({
  //   isPlaying: false
  // })

  // const videoElement = useRef(null);

  // const togglePlay = () => {
  //   setPlayerState({
  //     ...playerState,
  //     isPlaying: !playerState.isPlaying,
  //   });
  // };

  // useEffect(() => {
  //   playerState.isPlaying
  //     ? videoElement.current.play()
  //     : videoElement.current.pause();
  // }, [playerState.isPlaying, videoElement]);
  // const handleOnTimeUpdate = () => {
  //   const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
  //   setPlayerState({
  //     ...playerState,
  //     progress,
  //   });
  // };

  // const handleVideoProgress = (event) => {
  //   const manualChange = Number(event.target.value);
  //   videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
  //   setPlayerState({
  //     ...playerState,
  //     progress: manualChange,
  //   });
  // };

  return (
    <Container>
      <div className={styles.Team_msian_Sub3}>
        <div className={styles.Team_msian_Sub3L} data-aos="fade-right">
          <div className={styles.black36_heading} style={{ marginTop: 20 }}>
            Diverse
            Cultures,
            one MS
          </div>

          <div className={styles.details18Open} style={{ marginTop: 30 }}>
            The only way to achieve great things is with great people who truly enjoy their job. Our team is built of advisors, accountants, and lawyers who are enthusiastic and take pride in in their works.
          </div>
          <div className={styles.details18Open} style={{ marginTop: 30 }}>
            Each project gives us the opportunity to transform the client’s mindset as well as our own, thereby shaping business and enabling meaningful, enduring impact. This demonstrated track record of regulatory and commercial experience provides them with a clear understanding of the challenges faced by your company. Our competence, integrity and commitment to the region will ensure that your compliance needs are met.
          </div>

          <div className={styles.details18Open} style={{ marginTop: 30 }}>
            The key to our success is a multicultural team, highly specialized and client focused.
          </div>

        </div>
        {/* <div className={styles.commonVideo_left + " " + styles.teamVideoWrap} data-aos="fade-left">
          {playerState.isPlaying ? <div className={styles.controls}>
            <input
              type="range"
              min="0"
              max="100"
              value={playerState.progress}
              onChange={(e) => handleVideoProgress(e)}
            />
          </div> : ""}
          <div className={!playerState.isPlaying?styles.pBtn:styles.pBtn1} onClick={togglePlay}>
            {!playerState.isPlaying ? (
              <Image src="/images/playBtn.svg" alt="" width={16} height={16} />
            ) : (
              <div style={{ opacity: .2 }}> <Image src="/images/pauseBtn.png" alt="" width={16} height={16} /></div>
            )}
          </div>
          <video
            poster=
            "/images/thumbnail4.png"
            src="https://ms-ca.com/wp-content/uploads/2021/02/team-msatc.mp4"
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
          />
        </div> */}
        {/* <div className={styles.Team_msian_Sub1R}>
      
      </div> */}
      </div>
    </Container>
  )
}

export default Team_msian_Sub1