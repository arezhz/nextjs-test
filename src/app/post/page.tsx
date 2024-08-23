import { Divider } from "primereact/divider";
import PostCard from "./post-card";
import { getPosts } from "./services/post-api";
import { IPost } from "./models/i-post";

export default async function Post() {
  const data: IPost[] = await getPosts();
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
      <div className="flex flex-wrap gap-4">
        {data.map((post: IPost) => (
          <div key={post.id} className="basis-1/4">
            <PostCard data={post} />
          </div>
        ))}
      </div>
    </>
  );
}
