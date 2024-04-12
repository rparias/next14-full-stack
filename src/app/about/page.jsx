import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about" width={500} height={500} />
        <Image src="https://images.pexels.com/photos/19404767/pexels-photo-19404767/free-photo-of-man-in-jacket-standing-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="about" width={500} height={500} />
      </div>
    </div>
  )
}

export default AboutPage