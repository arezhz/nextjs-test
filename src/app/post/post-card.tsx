import Link from "next/link";
import { IPostCardProps } from "./models/i-post-card.props";

export default function PostCard({ data }: IPostCardProps) {
  return (
    <article className=" p-2 w-full bg-white rounded-2xl border border-solid border-slate-200 shadow">
      <Link href={`post/${data.id}`} className="flex flex-col justify-between min-h-40">
        <div>
          <h3 className="text-black">{data.title}</h3>
          <p className="text-gray-500 text-xs line-clamp-2">{data.body}</p>
        </div>
        <span className="text-xs text-gray-400 mt-4">{data.name}</span>
      </Link>
    </article>
  );
}
