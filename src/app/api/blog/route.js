import {getPosts} from "@/lib/data";
import {NextResponse} from "next/server";

export const GET = async () => {
  try {
    const posts = await getPosts()
    return NextResponse.json(posts)
  } catch (error) {
    throw new Error("Failed to fetch posts from DB")
  }
}