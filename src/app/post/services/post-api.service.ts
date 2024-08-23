import { IPost } from "../models/i-post";
import { IPostDto } from "../models/i-post.dto";

export async function getMainPosts(): Promise<IPost[]> {
  const data = await fetch(`${process.env.API_BASE_URL}/posts`,{
    next: { revalidate: 10 }
  });
  return data.json();
}

export async function getPosts(): Promise<IPostDto[]> {
  const data = await fetch(`${process.env.BASE_URL}/api/post`,{
    next: { revalidate: 10 }
  });
  return data.json();
}