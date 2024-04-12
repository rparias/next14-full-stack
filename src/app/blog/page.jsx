import styles from "./blog.module.css"
import PostCard from "@/components/postCard/PostCard"

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", 
    { next: { revalidate: 3600 } } // revalidate 3600 will keep in cache the response for 1 hour
  );
  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json() 
}

const BlogPage = async () => {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map(post => (
      <div className={styles.post} key={post.id}>
        <PostCard post={{
          img: "https://images.pexels.com/photos/20922645/pexels-photo-20922645/free-photo-of-a-llama-walking-on-a-rocky-terrain-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          title: post.title,
          body: post.body,
          createdAt: "01.01.2024",
          slug: post.id }} />
      </div>
      ))}
    </div>
  )
}

export default BlogPage
