import React ,{useState, useEffect,useRef } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Image from 'next/image'

import Container from '../Common/Container';
function Banner({heading,detail}) {

  useEffect(()=>{
    AOS.init({
      duration: 1400,
      once: false,
    })},[]);

    const [playerState, setPlayerState] = useState({
      isPlaying: false})
  
    const videoElement = useRef(null);
    const togglePlay = () => {
      setPlayerState({
        ...playerState,
        isPlaying: !playerState.isPlaying,
      });
    };
  
    // useEffect(() => {
    //   playerState.isPlaying
    //     ? videoElement.current.play()
    //     : videoElement.current.pause();
    // }, [playerState.isPlaying, videoElement]);
  
  
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
    <div className={styles.container}>
            <div className={styles.acountingBanner_left} data-aos="fade-right">
              <div  className={styles.white_heading48 +" "+styles.padding60}>
               {heading}
              </div>

              <div className={styles.details24400W} style={{paddingRight:10}}>
                {detail}
              </div>
              <div >

              </div>
            </div>
            {/* <div className={styles.commonVideo_left}  data-aos="fade-left">
            <div className={styles.pBtn}  onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <Image src="/images/playBtn.svg" alt="" width="16px" height="16px" />
              ) : (
               <div style={{opacity:.2}}> <Image src="/images/pauseBtn.png" alt="" width="16px" height="16px" /></div>
              )}
                </div>
        <video
        poster={poster}
          src={src}
          ref={videoElement}
          
        />
            </div> */}
            <div className={cstyles.banner2_leftV} data-aos="fade-right">
            {/* {playerState.isPlaying ?  <div className={cstyles.controls}>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={playerState.progress}
                            onChange={(e) => handleVideoProgress(e)}
                        />
                    </div>:""}
    <div className={styles.pBtn}  onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <Image src="/images/playBtn.svg" alt="" width={16} height={16} />
              ) : (
                <Image src="/images/pauseBtn.png" alt="" width={16} height={16} />
              )}
                </div> */}
                {/* <video
        poster={poster}
          src={src}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        /> */}

        <iframe loading="lazy" title="Why Economic Substance Regulations is required for your Entity ?" width="100%" height="100%" src="https://www.youtube.com/embed/PImEG88fyA4?feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          </Container>
  )
}

export default Banner