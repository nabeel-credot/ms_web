import React, { useState, useEffect, useRef } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image'
import Container from '../Common/Container';
function Banner2() {

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
            <div className={cstyles.banner2_container}>

                <div className={cstyles.banner2_left} data-aos="fade-right">
                   {playerState.isPlaying ?  <div className={cstyles.controls}>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={playerState.progress}
                            onChange={(e) => handleVideoProgress(e)}
                        />
                    </div>:""}
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
                        src="https://ms-ca.com/wp-content/uploads/2020/11/Why-Us-Final-1.m4v"
                        ref={videoElement}
                        onTimeUpdate={handleOnTimeUpdate}
                    />
                </div>

                <div className={cstyles.banner2_right} data-aos="fade-left">
                    <div className={styles.white_heading}>
                        Why Choose Us?
                    </div>
                    <div className={cstyles.details_list}>
                        <div className={cstyles.details_list_left + " " + styles.webOnly}>
                            <Image src="/images/time.png" alt="" width={50} height={50} />
                        </div>
                        <div className={cstyles.details_list_left2 + " " + styles.mobOnly}>
                            <Image src="/images/time.png" alt="" width={30} height={30} />
                        </div>
                        <div className={cstyles.details_list_right}>
                            <div className={cstyles.details_listHead}>
                                Fast turnaround times
                            </div>
                            <div className={cstyles.details_list_desc}>
                                We complete years of overdue bookkeeping—fast. That means you get complete and accurate books back quickly to use them for whatever you need.
                            </div>
                        </div>
                    </div>

                    <div className={cstyles.details_list}>
                        <div className={cstyles.details_list_left + " " + styles.webOnly}>
                            <Image src="/images/installment.png" alt="" width={50} height={50} />
                        </div>
                        <div className={cstyles.details_list_left2 + " " + styles.mobOnly}>
                            <Image src="/images/installment.png" alt="" width={30} height={30} />
                        </div>
                        <div className={cstyles.details_list_right}>
                            <div className={cstyles.details_listHead}>
                                Affordable payment plans
                            </div>
                            <div className={cstyles.details_list_desc}>
                                The cost of catching up on your bookkeeping shouldn’t be a dealbreaker for your business. Whatever your situation, we’ll work with you to create a customized package with a clear payment plan.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>

    )
}

export default Banner2