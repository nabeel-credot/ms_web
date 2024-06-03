import React, { useState ,useEffect} from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { useWindowSize } from "@uidotdev/usehooks";
function Testimonial() {
  const screen = useWindowSize();
  const card = [
    {
      image: "/images/jamal.svg",
      name: "Prof. Jamal Sanad Al-Suwaidi",
      post: "H.E. Minister",
      place: "United Arab Emirates",
      content:
        '"Every member of the team is very supportive and shows exceptional dedication to this company. Their support and ability to understand our needs and the amount of effort they have put into work directly impacted us. I would highly recommend MS Group to other companies and related sectors."',
    },
    {
      image: "/images/maria.svg",
      name: "Maria Vavoulas",
      post: "Former Group COO",
      place: "HC Group",
      content:
        '"Having established HC Group Middle East Ltd in 2021, we were looking for a proactive partner to guide us and support our growth strategy. MS have not let us down. The team are passionate, knowledgeable and most importantly for us, responsive."',
    },
    {
      image: "/images/khalid.svg",
      name: "Khalid Akhrif",
      post: "Vice President",
      place: "Technical Aercap",
      content:
        '"I certainly appreciate and commend your team for their professionalism, know-how and customer care, always a pleasure dealing with you guys."',
    },
    {
      image: "/images/ala.svg",
      name: "Ala Qumsieh",
      post: "Co-Founder & CEO",
      place: "Founders & Company Limited",
      content:
        '"We are grateful to the team at MS Chartered Accountants for their outstanding service and expertise. As a startup ourselves, we were looking for a reliable and experienced accounting firm to help us navigate the complex environment. From the very beginning, we were impressed with the team. They took the time to understand our unique business needs and develop a customized support plan that met our specific requirements. The best thing about the relationship is that we always felt they were part of our team, not a service provider."',
    },
    {
      image: "/images/Brodies-01.svg",
      name: "Bryan Wilson ",
      post: "Partner",
      place: "Brodies Middle East LLP",
      content:
        '"MS Accountants provided us with timely and helpful support as we set up our AML compliance function for our ADGM operation.  We look forward to deepening and strengthening our relationship with them."',
    },
    {
      image: "/images/kaplan.svg",
      name: "Amar Mehra",
      post: " Head of Tax",
      place: "KaplanME",
      content:
        '"I would like to congratulate Mr. Shafeek and his team for their professionalism and dedication in getting a piece of work delivered on time within such short notice and without any prior warning. The team had to give up their weekends to get this done. I am truly appreciative and extremely grateful. I will be delighted to work with MS in the future."',
    },
   
  ];
  const [topCardIndex, setTopCardIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(card ? 0 : null);
 
  const handleChange = (type) => {
    let newIndex;
    if (type === 1) {
      newIndex = cardIndex === card.length - 1 ? 0 : cardIndex + 1;
    } else if (type === -1) {
      newIndex = cardIndex === 0 ? card.length - 1 : cardIndex - 1;
    }
    setCardIndex(newIndex);
    if (screen.width < 1000) {
      setTopCardIndex(newIndex);
    } else {
      setTopCardIndex(newIndex >= 4 ? newIndex - 3 : 0);
    }
  };
  // const handleChange = (type) => {
   
  //   if (type === 1) {
  //     const newIndex = cardIndex === card.length - 1 ? 0 : cardIndex + 1;
  //     setCardIndex(newIndex);
  //     if (screen.width < 1000) {
  //       setTopCardIndex(newIndex);
  //     } else {
  //       setTopCardIndex(newIndex >= 4 ? newIndex - 3 : 0);
  //     }
  //   } else if (type === -1) {
  //     const newIndex = cardIndex === 0 ? card.length - 1 : cardIndex - 1;
  //     setCardIndex(newIndex);
  //     if (screen.width < 1000) {
  //       setTopCardIndex(newIndex);
  //     } else {
  //       setTopCardIndex(newIndex >= 4 ? newIndex - 3 : 0);
  //     }
  //   }
   
  // };

  const handleProfileClick = (index) => {
    setCardIndex(index);
    if (screen.width < 1000) {
      setTopCardIndex(index);
    } else {
      setTopCardIndex(index >= 4 ? index - 3 : 0);
    }
  };
  const sortHandle=()=>{

  }

   let autoplayInterval;

  // Function to start autoplay
  const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
      handleChange(1); // Move to the next testimonial
    }, 5000); // Change testimonial every 5 seconds
  };

  // const startAutoplay = () => {
  //   let index = 0;
  //   autoplayInterval = setInterval(() => {
  //     // Move to the next testimonial
  //     index = (index + 1) % card.length;
  //     setTopCardIndex(index);
  //   }, 5000); // Change testimonial every 5 seconds
  // };
  
  // Start autoplay when component mounts
  useEffect(() => {
    startAutoplay();
    return () => clearInterval(autoplayInterval); // Clear interval on component unmount
  }, [cardIndex]);
  return (
    <div className={styles.testimonial_container}>
      <Container>
        <div className={styles.test_outerdiv}>
          <div className={styles.TestimonialTitle}>Client Success Stories</div>
          <div
            className={styles.test_container}
            style={{ overflowX: "scroll" }}
          >
            {card.slice(topCardIndex, topCardIndex + 4).map((item, index) => {
              const realIndex = topCardIndex + index;
              return (
                <div
                  id={`#${realIndex}`}
                  // id={`#${cardIndex}`}
                  className={styles.test_profile}
                  key={realIndex}
                  style={{
                    borderBottom:
                      realIndex === cardIndex
                        ? "2px solid #D4AE31"
                        : "2px solid #00394F",
                  }}
                  onClick={() => handleProfileClick(realIndex)}
                >
                  <div className={styles.test_imagediv}>
                    <Image src={item?.image} alt={item?.name} width={63} height={63} />
                  </div>
                  <div>
                    <p style={{ color: "#FFF", margin: 0 }}>{item?.name}</p>
                    <p style={{ color: "#D4AE31", margin: 0 }}>{item?.post}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {cardIndex !== null ? (
            <Card
              image={card[cardIndex]?.image}
              name={card[cardIndex]?.name}
              post={card[cardIndex]?.post}
              place={card[cardIndex]?.place}
              content={card[cardIndex]?.content}
              handleChange={handleChange}
              cardIndex={cardIndex}
            />
          ) : null}
        </div>
      </Container>
    </div>
  );
}

function Card({ image, name, post, place, content, handleChange, cardIndex }) {
  return (
    <div className={styles.test_card} data-aos="fade-up">
      <div className={styles.img_btn}>
        <div className={styles.test_imgcircle}>
        <Image src={image}  width={73} height={73} /></div>
        <div className={styles.test_btn}>
          {/* {cardIndex ? ( */}
          <div className={styles.test_circle} onClick={() => handleChange(-1)}>
            <MdArrowLeft style={{ fontSize: "30px" }} />
          </div>
          {/* ) : null */}
          {/* } */}
          <div className={styles.test_circle} onClick={() => handleChange(1)}>
            <MdArrowRight style={{ fontSize: "30px" }} />
          </div>
        </div>
      </div>
      <p className={styles.test_name}>{name}</p>
      <p className={styles.test_post}>{post}</p>
      <p className={styles.test_place}>{place}</p>
      <p className={styles.test_content}>{content}</p>
      <div className={styles.responsive_testbtn}>
        <div className={styles.test_btn1}>
          {/* {cardIndex ? ( */}
          <div className={styles.test_circle} onClick={() => handleChange(-1)}>
            <MdArrowLeft style={{ fontSize: "30px" }} />
          </div>
          {/* ) : null} */}
          <div className={styles.test_circle} onClick={() => handleChange(1)}>
            <MdArrowRight style={{ fontSize: "30px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
