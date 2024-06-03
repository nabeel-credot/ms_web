import React ,{useState,useEffect,useRef} from 'react'
import styles from "./Collapsible.module.css"

import Image from 'next/image'


function Collapsible({title,children,open,style,arrow,width,href}) {
    
    
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
      
        <div className={styles.Collapsiblebox}  >
            <div style={{display:"flex",justifyContent:"space-between",style}}   onMouseOver={handleFilterOpening}>
            <div className={!isOpen?styles.key:styles.keyY}>{title}</div>
             
             {arrow?
          
                 <div style={{width:width}}>
                 <button type="button" className={styles.btn}>
                 {!isOpen ? (
                  <Image src="/images/LarrowB.svg" alt="" width={20} height={20} />
                 ) : (
                    <Image src="/images/LarrowY.svg" alt="" width={20} height={20} />
                 )}
               </button>
                 </div>
              :""}
            
             
            </div>

            <div className={styles.my_collapse }  style={{ height }}>
        
            <div className={styles.content} ref={ref}>
            <>{children}</>
          </div>
            </div>
        </div>
     
    )
}

export default Collapsible