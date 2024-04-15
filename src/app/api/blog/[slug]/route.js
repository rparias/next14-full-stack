import {deletePost, getPost} from "@/lib/data";
import {NextResponse} from "next/server";

export const GET = async (request, { params }) => {

  const { slug } = params;

  try {
    const post = await getPost(slug)
    return NextResponse.json(post)
  } catch (error) {
    throw new Error("Failed to fetch post from DB")
  }
}

export const DELETE = async (request, { params }) => {

  const { slug } = params;

  try {
    await deletePost(slug)
    return NextResponse.json("Post deleted successfully.");
  } catch (error) {
    throw new Error("Failed to delete post from DB")
  }
}