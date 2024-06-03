import React, { useState, useEffect, useRef } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';



import Image from 'next/image'
import Container from '../Common/Container';
function Banner() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    })
  }, []);
  const [playerState, setPlayerState] = useState({
    isPlaying: false
  })

  const videoElement = useRef(null);

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
      progress: 0,
    });
  };

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);


  const handleOnTimeUpdate = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };


  return (
    <Container>
      <div className={cstyles.acc_container}>
        <div className={styles.left} data-aos="fade-right">
          <div className={cstyles.white_heading48}>
            You run your business.<br />
            We’ll do your bookkeeping.
          </div>
          <div className={cstyles.yellow_heading}>
            You’re a business owner with lots of to do. We’re professional accountants with experience serving entrepreneurs.
          </div>
          <div className={cstyles.details}>
            Get a professional bookkeeper at a price you can afford, and powerful financial reporting with zero learning curve.
          </div>
          <div >

          </div>
        </div>

        <div className={cstyles.banner2_left} data-aos="fade-left">
          {playerState.isPlaying ? <div className={cstyles.controls}>
            <input
              type="range"
              min="0"
              max="100"
              value={playerState.progress}
              onChange={(e) => handleVideoProgress(e)}
            />
          </div> : ""}
          <div className={styles.pBtn} onClick={togglePlay}>
            {!playerState.isPlaying ? (
              <Image src="/images/playBtn.svg" alt="" width={16} height={16} />
            ) : (
              <Image src="/images/pauseBtn.png" alt="" width={16} height={16} />
            )}
          </div>
          <video
          poster=
          "/images/thumbnail2.png"
          src="https://www.youtube.com/embed/VIDEO_ID" type="video/mp4" 
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
          {/* <video   ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}>
            <source src="https://www.youtube.com/embed/VIDEO_ID" type="video/mp4" />
          </video> */}
        </div>

      </div>
    </Container>
  )
}

export default Banner