import styles from "./postUser.module.css"
import Image from "next/image"

const getData = async (userId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, 
    { next: { revalidate: 3600 } } // revalidate 3600 will keep in cache the response for 1 hour
  );
  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json() 
}

const PostUser = async ({ userId }) => {
  const user = await getData(userId)

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src="/noavatar.png"
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.name}</span>
      </div>
    </div>
  );
};

export default PostUser;