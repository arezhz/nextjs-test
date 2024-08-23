import { IPost } from "@/app/post/models/i-post";
import { IPostDto } from "@/app/post/models/i-post.dto";
import { getPosts } from "@/app/post/services/post-api.service";
import { IUsers } from "@/app/user/models/i-users";
import { getUsers } from "@/app/user/services/user-api.service";

export async function GET() {
  const response: [IPost[], IUsers[]] = await Promise.all([
    getPosts(),
    getUsers(),
  ]);
  const postList: IPostDto[] = [];
  for (const item of response[0]) {
    const userName = response[1].find((f) => f.id === item.id)?.name;
    postList.push({
      ...item,
      name: userName || "",
    });
  }
  return Response.json(postList);
}
