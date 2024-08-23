import { Divider } from "primereact/divider";
import PostCard from "./post-card";
import { getPosts } from "./services/post-api.service";
import { IPostDto } from "./models/i-post.dto";

export default async function Post() {
  const data: IPostDto[] = await getPosts();
  return (
    <>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          From the blog
        </h1>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <Divider />
      <div className="grid grid-cols-4 gap-4">
        {data.map((post: IPostDto) => (
          <div key={post.id}>
            <PostCard data={post} />
          </div>
        ))}
      </div>
    </>
  );
}
