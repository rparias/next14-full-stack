"use server"

import {connectToDB} from "@/lib/connectToDB";
import {Post, User} from "@/lib/models";
import {revalidatePath} from "next/cache";
import {signIn, signOut} from "@/lib/auth";
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formData) => {
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
    revalidatePath("/admin") // this will refresh the data on the admin page

    return { success: true } // this info will be saved on the state on the useFormState

  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong when adding Post",
    }
  }
}

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    await connectToDB()
    await Post.findByIdAndDelete(id)
    console.log("Post deleted from DB")

    revalidatePath("/blog") // this will refresh the data on the blog page
    revalidatePath("/admin") // this will refresh the data on the admin page

  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong when adding Post",
    }
  }
}

export const addUser = async (previousState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData)

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await connectToDB()

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img
    })

    await newUser.save()
    console.log("User saved to DB")

    revalidatePath("/admin") // this will refresh the data on the admin page

    return { success: true } // this info will be saved on the state on the useFormState

  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong when adding User",
    }
  }

}

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    await connectToDB()

    await Post.deleteMany({ userId: id })
    await User.findByIdAndDelete(id)
    console.log("User deleted from DB")

    revalidatePath("/admin") // this will refresh the data on the admin page

  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong when adding Post",
    }
  }
}

export const handleGithubLogin = async () => {
  await signIn("github")
}

export const handleGithubLogout = async () => {
  await signOut()
}

export const register = async (previousState, formData) => {
  const { username, email, password, passwordRepeat, img } = Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await connectToDB();

    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      img
    });

    await newUser.save();

    return { success: true } // this info will be saved on the state on the useFormState

  } catch (error) {
    console.log(error);
    return { error: "Something went wrong when adding User" }
  }
}

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });

    return { success: true } // this info will be saved on the state on the useFormState

  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
}
