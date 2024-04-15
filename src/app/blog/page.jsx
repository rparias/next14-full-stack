import styles from "./blog.module.css"
import PostCard from "@/components/postCard/PostCard"
import {getPosts} from "@/lib/data";

const getData = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts",
  const res = await fetch("http://localhost:3000/api/blog",
    { next: { revalidate: 3600 } } // revalidate 3600 will keep in cache the response for 1 hour
  );
  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json() 
}

const BlogPage = async () => {
  // get posts from api
  const posts = await getData();

  // get posts from mongo db without api
  // const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map(post => (
      <div className={styles.post} key={post.id}>
        <PostCard post={{
          img: post.img,
          title: post.title,
          body: post.body,
          createdAt: "01.01.2024",
          slug: post.slug }} />
      </div>
      ))}
    </div>
  )
}

export default BlogPage
