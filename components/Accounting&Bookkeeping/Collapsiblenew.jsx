import React ,{useState,useEffect,useRef} from 'react'
import styles from "./FAQ.module.css"
import Image from 'next/image'
import { FaCaretDown } from "react-icons/fa";
import { BiSolidUpArrow } from "react-icons/bi";
function Collapsible({title,children,open,style,width,marginTop,fontWeight,fontSize,arrow}) {
    
    
    const ref = useRef(null);
 const [isOpen, setIsOpen] = useState(open);
 const [height, setHeight] = useState(0);

 useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
      };


    return (
        <div className={styles.onlineBookingService_boxnew}  >
            <div style={{...style}} className={styles.onlineBookingService_boxContentnew}  onClick={handleFilterOpening}>
             <div className={isOpen?styles.dataY:styles.data} style={{fontWeight:fontWeight,fontSize:fontSize}}>
             {title}
             </div>
             
             {arrow?
              <div style={{width:width,marginTop:marginTop}} className={styles.arrowWidth}>
              <button type="button" className={styles.btn}>
              {!isOpen ? (
                <FaCaretDown style={{fontSize:"20px",color:"black"}}/>
                // <Image src="/images/arrownewdown.png" alt="" width={40} height={30} />
              ) : (
                <BiSolidUpArrow style={{color:"black"}}/>
                // <Image src="/images/uarrow.svg" alt="" width={20} height={20} />
              )}
            </button>
              </div>
              :""}
            
                {/* <span className={styles.dArrowB}> <Image src="/images/dArrowB.svg" alt="" width="50" height="50" /></span>
                <span className={styles.hoverArrow}> <Image src="/images/UarrowB.svg" alt="" width="30" height="30" /></span> */}
            </div>

            <div className={styles.onlineBookingService_boxOnHover+" "+styles.my_collapse }  style={{ height }}>
            {/* {isOpen && <div style={{padding:"30px"}}>{children}</div>} */}
           
            <div className={styles.childY} ref={ref}>
            {/* <div style={{padding:"30px"}}>{children}</div> */}
            <>{children}</>
          </div>
            </div>
        </div>
    )
}

export default Collapsible