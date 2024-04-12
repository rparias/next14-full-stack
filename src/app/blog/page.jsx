import styles from "./blog.module.css"
import PostCard from "@/components/postCard/PostCard"

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard post={{
          img: "https://images.pexels.com/photos/20922645/pexels-photo-20922645/free-photo-of-a-llama-walking-on-a-rocky-terrain-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          title: "Title",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa explicabo fuga tempore vel?",
          createdAt: "01.01.2024",
          slug: "post" }} />
      </div>
      <div className={styles.post}>
        <PostCard post={{
          img: "https://images.pexels.com/photos/20922645/pexels-photo-20922645/free-photo-of-a-llama-walking-on-a-rocky-terrain-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          title: "Title",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa explicabo fuga tempore vel?",
          createdAt: "01.01.2024",
          slug: "post" }} />
      </div>
      <div className={styles.post}>
        <PostCard post={{
          img: "https://images.pexels.com/photos/20922645/pexels-photo-20922645/free-photo-of-a-llama-walking-on-a-rocky-terrain-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          title: "Title",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa explicabo fuga tempore vel?",
          createdAt: "01.01.2024",
          slug: "post" }} />
      </div>
      <div className={styles.post}>
        <PostCard post={{
          img: "https://images.pexels.com/photos/20922645/pexels-photo-20922645/free-photo-of-a-llama-walking-on-a-rocky-terrain-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          title: "Title",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa explicabo fuga tempore vel?",
          createdAt: "01.01.2024",
          slug: "post" }} />
      </div>
    </div>
  )
}

export default BlogPage
