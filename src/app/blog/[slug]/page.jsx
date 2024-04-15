import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/PostUser"
import {Suspense} from "react"

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, 
    { next: { revalidate: 3600 } } // revalidate 3600 will keep in cache the response for 1 hour
  );
  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json() 
}

const SinglePostPage = async ({ params }) => {
  const { slug } = params
  const post = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/20922645/pexels-photo-20922645/free-photo-of-a-llama-walking-on-a-rocky-terrain-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              01.01.2024
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  )
}

export default SinglePostPage