import {connectToDB} from "@/lib/connectToDB";
import {Post} from "@/lib/models";
import {revalidatePath} from "next/cache";

export const addPost = async (formData) => {
  "use server" // this function will be executed on server

  const { title, body, slug, userId } = Object.fromEntries(formData)

  try {
    await connectToDB()

    const newPost = new Post({
      title,
      body,
      slug,
      userId
    })

    await newPost.save()
    console.log("Post saved to DB")

    revalidatePath("/blog") // this will refresh the data on the blog page

  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong when adding Post",
    }
  }
}

export const deletePost = async (formData) => {
  "use server" // this function will be executed on server

  const { id } = Object.fromEntries(formData)

  try {
    await connectToDB()
    Post.findByIdAndDelete(id)
    console.log("Post deleted from DB")

    revalidatePath("/blog") // this will refresh the data on the blog page

  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong when adding Post",
    }
  }
}