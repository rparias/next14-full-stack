import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>logodev</div>
      <div className={styles.text}>Logo creative thoughts agency. All rights reserved.</div>
    </footer>
  )
}

export default Footer