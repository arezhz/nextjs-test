import { IPost } from "@/app/post/models/i-post";
import { IPostDto } from "@/app/post/models/i-post.dto";
import { getMainSinglePost } from "@/app/post/services/post-api.service";
import { IUsers } from "@/app/user/models/i-users";
import { getUser } from "@/app/user/services/user-api.service";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const postResponse: IPost = await getMainSinglePost(params.slug);
  const userResponse: IUsers = await getUser(postResponse.userId.toString());
  return Response.json({
    ...postResponse,
    name: userResponse.name,
  });
}
