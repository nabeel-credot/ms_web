import React ,{useState,useEffect,useRef} from 'react'
import styles from "./Transaction.module.css"
import Image from 'next/image'

function Collapsible({title,children,open,style,arrow}) {
    
    
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
        <div className={styles.box}  >
            <div style={{display:"flex",justifyContent:"space-between",...style}}   onClick={handleFilterOpening}>
             <div className={styles.title}>
             {title}
             </div>
             
             {arrow?
              <div>
              <button type="button" className={styles.btn}>
              {!isOpen ? (
                <Image src="/images/darrow.svg" alt="" width={20} height={20} />
              ) : (
                <Image src="/images/uarrow.svg" alt="" width={20} height={20} />
              )}
            </button>
              </div>
              :""}
            
             
            </div>

            <div className={styles.my_collapse }  style={{ height }}>
        
            <div ref={ref}>
            <>{children}</>
          </div>
            </div>
        </div>
    )
}

export default Collapsible