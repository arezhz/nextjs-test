import { IPost } from "../models/i-post";

export async function getPosts(): Promise<IPost[]> {
  const data = await fetch(`${process.env.BASE_URL}/posts`,{
    next: { revalidate: 10 }
  });
  return data.json();
}
