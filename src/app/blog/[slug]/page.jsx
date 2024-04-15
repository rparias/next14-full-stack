import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/PostUser"
import {Suspense} from "react"
import {getPost} from "@/lib/data";

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

  // get post from api
  // const post = await getData(slug)

  // get post from mongo db
  const post = await getPost(slug)

  return (
    <div className={styles.container}>
      { post.img &&
        <div className={styles.imgContainer}>
          <Image
            src={post.img}
            alt="" fill className={styles.img}/>
        </div>
      }
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          { post &&
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId}/>
              </Suspense>
          }
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  )
}

export default SinglePostPage