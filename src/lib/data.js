import {connectToDB} from "@/lib/connectToDB";
import {Post, User} from "@/lib/models";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    await connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts from DB");
  }
}

export const getPost = async (slug) => {
  try {
    await connectToDB();
    const post = await Post.findOne({slug});
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch single post from DB");
  }
}

export const getUsers = async () => {
  try {
    await connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users from DB");
  }
}

export const getUser = async (id) => {
  noStore(); // this noStore prevents to not cache the response, similar to cache: no-store
  try {
    await connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user from DB");
  }
}