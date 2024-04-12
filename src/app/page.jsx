import Image from "next/image"
import styles from "./home.module.css"

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Creative Thoughts Agency</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa explicabo fuga tempore vel? Ab alias amet at
        eos expedita magnam, minima nisi quaerat quis, quod sunt suscipit, voluptates. Delectus, deleniti!
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="brands" fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="hero" fill />
    </div>
  </div>;
};

export default Home;