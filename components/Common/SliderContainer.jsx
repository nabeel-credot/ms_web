import styles from '../Common/Container.module.css'

const Container = ({ children, className,style }) => {
  return (
    <div className={`${styles.mainContainer2} ${className}`} style={{...style}}>{children}</div>
  )
}

export default Container