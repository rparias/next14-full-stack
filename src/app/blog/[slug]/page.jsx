import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/PostUser"

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/20922645/pexels-photo-20922645/free-photo-of-a-llama-walking-on-a-rocky-terrain-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <PostUser />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              01.01.2024
            </span>
          </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa explicabo fuga tempore vel?</div>
      </div>
    </div>
  )
}

export default SinglePostPage