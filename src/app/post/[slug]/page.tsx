import { Divider } from "primereact/divider";
import { getSinglePost } from "../services/post-api.service";
import { IPostDto } from "../models/i-post.dto";

export default async function PostDetails({
  params,
}: {
  params: { slug: string };
}) {
  const data: IPostDto = await getSinglePost(params.slug);
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="font-bold text-xl text-black">{data.title}</h1>
        <span className="text-sm text-gray-400">{data.name}</span>
      </div>
      <Divider />
      <p className="text-gray-500 text-sm">{data.body}</p>
    </div>
  );
}
