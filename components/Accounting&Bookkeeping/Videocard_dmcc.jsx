import React, { useState } from "react";
import style from "./videocard.module.css";
import Container from "../Common/Container";
import ReactPlayer from "react-player/lazy";
import Modal from "react-modal";
import vstyle from "../VideoGallery/videoGallery.module.css";
import { IoIosClose } from "react-icons/io";
const customModalStyles = {
  overlay: {
    backgroundColor: "rgb(0 0 0  / 10%)",
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: "50%",
    /* position the top  edge of the element at the middle of the parent */
    left: "50%",
    /* position the left edge of the element at the middle of the parent */

    transform: "translate(-50%, -50%)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    // Change the color here
  },
  content: {
    backgroundColor: "transparent",
    width: "100%",

    border: "none",
    overflow: "none",
    padding: 0,
    inset: 0,
    insetBottom: "30px",
  },
};

function VideoCard({ imagePath, title, author, position, styles,customclass,fontSize,background ,fillcolor}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const openModal = (vidoe) => {
    setModalOpen(true);
    setCurrentVideo(vidoe);
  };
console.log(fillcolor);
  return <>
    {modalOpen && (
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Video Modal"
        style={customModalStyles}
      >
        <div onClick={() => setModalOpen(false)} className={vstyle.closeButton}>
        <IoIosClose style={{fontSize:"40px",color:"black"}}/>
          {/* <img src="/images/close.png" alt="" width={20} height={20} /> */}
        </div>
        <div className={vstyle.containerPopop}>
          {/* Modal content */}
          <ReactPlayer
            url="https://youtu.be/acJpd8C9d6g"
            playing={false}
            controls={true}
            width="100%"
            height="100%"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              margin: "auto",
            }} /* Adjust video styles */
          />
        </div>
      </Modal>
    )}

    <div
      className={style.videocard}
      style={{
        backgroundImage: background?`${background}, url("${imagePath}")` : `linear-gradient(180deg, rgba(0, 70, 109, 0) 0%, #00466d 100%),url("${imagePath}")`,
        // `linear-gradient(180deg, rgba(0, 70, 109, 0) 0%, #00466d 100%),url("${imagePath}")`,
        ...styles,
      }}
    >
      <div className={style.videocontentwrapper}>
        <button
          className={style.playbtn_dmcc}
          onClick={() => {
            openModal();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="58"
            viewBox="0 0 64 63"
            
            fill={fillcolor ? fillcolor : "#00466D"}
            className={style.playsvg}
          >
            <path d="M21.1852 49.1362V12.9307L50.3148 31.0334L21.1852 49.1362Z" />
          </svg>
        </button>
        <h4 className={style.cardtitle} style={fontSize ? { fontSize } : null}>{title}</h4>
        <div>
          {author ? <p className={style.author}>{author}</p> : null}
          {position ? <p className={style.position}>{position}</p> : null}
        </div>
      </div>
    </div>
  </>;
}

export default VideoCard;
