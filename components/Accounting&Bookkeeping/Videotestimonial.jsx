import React,{useState} from 'react'
import styles from './videotestimonial.module.css'
import Style from "./Styles.module.css";
import Image from "next/image"
import Container from '../Common/Container'
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
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
const testimonials=[{
  image:"/images/testvideonew2.webp",
  videoUrl:"https://youtu.be/WVTSGp6oAs4",
  title:"Testimonial | Episode 1 | Client success stories"
},
{
  image:"/images/testvideo3new.webp",
  videoUrl:"https://youtu.be/OdJXZpXg6tc",
  title:"Testimonial | Episode 2 | Client success stories"

},
{
  image:"/images/testvideo_difc.webp",
  videoUrl:"https://youtu.be/_6qoQaSSqfk",
  title:"Testimonial | Client Success Stories | Episode 5"
}]
function Videotestimonial() {
  const [modalOpen, setModalOpen] = useState(false);
  // const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const openModal = (videoUrl , index) => {
    setModalOpen(true);
    // setCurrentVideoUrl(videoUrl);
    setCurrentVideoIndex(index);
  };
  const nextVideo = () => {
    console.log("Next video clicked");
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevVideo = () => {
    console.log("Previous video clicked");
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX && endX) {
      const difference = startX - endX;
      if (difference > 50) {
        nextVideo();
      } else if (difference < -50) {
        prevVideo();
      }
    }
    setStartX(null);
    setEndX(null);
  };

  return (
    <>
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
            url={testimonials[currentVideoIndex].videoUrl}
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
    <Container>
      <div className={styles.webvideotestimonial} data-aos="fade-up">
   <div className={styles.title_arrow}><div className={Style.servicenewTitle}>Watch Them Say, Why MS!</div>
  <div className={styles.arrowsection}>     {testimonials.length > 3 && ( 
              <>
                <div className={Style.test_circle}>
                  <MdArrowLeft style={{ fontSize: '30px' }} />
                </div>
                <div className={Style.test_circle}>
                  <MdArrowRight style={{ fontSize: '30px' }} />
                </div>
              </>
            )}
          </div>
   </div>
   <div className={styles.video_testimonial}>
     {testimonials.map((item,index)=>{
      return(

 <div className={styles.singlevideo} key={index}>
 <div className={styles.videoimg} style={{position:"relative"}}>
<div className={styles.playButton} onClick={() => openModal(item.videoUrl,index)}>
                    <span className={styles.playIcon}><Image src="/images/videotest_arrow.png" width={19} height={26} alt='Video_arrow'/></span>
                  </div>
                  <Image src = { item.image }
                                width = { 455 }
                                height = { 215 }
                                alt = {item.title }/>
   </div>
  <div ><p>{item.title }</p></div>
 </div>
      )
     })}
      </div>
   </div>
   <div className={styles.mobvideotestimonial}>
   <div className={styles.title_arrow}><div className={Style.servicenewTitle}>Watch Them Say,<br/> Why MS!</div>
  <div className={styles.arrowsection}>   
                <div className={Style.test_circle} onClick={prevVideo}>
                  <MdArrowLeft style={{ fontSize: '30px' }} />
                </div>
                <div className={Style.test_circle}  onClick={nextVideo}>
                  <MdArrowRight style={{ fontSize: '30px' }} />
                </div>

          </div>
   </div>
   <div className={styles.video_testimonial} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
     {testimonials.map((item,index)=>{
      return(

 <div className={styles.singlevideo} key={index}>
 <div className={styles.videoimg} style={{position:"relative"}}>
<div className={styles.playButton} onClick={() => openModal(item.videoUrl,currentVideoIndex)}>
                    <span className={styles.playIcon}><Image src="/images/videotest_arrow.png" width={19} height={26} alt='Video_arrow'/></span>
                  </div>
                  <Image src = { testimonials[currentVideoIndex].image }
                                width = { 455 }
                                height = { 215 }
                                alt = { testimonials[currentVideoIndex].title }/>
   </div>
  <div><p>{ testimonials[currentVideoIndex].title }</p></div>
 </div>
      )
     })}
      </div>
   </div>
    
    
      </Container>
    </>
  )
}

export default Videotestimonial