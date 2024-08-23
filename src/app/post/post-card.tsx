import { IPostCardProps } from "./models/i-post-card.props";

export default function PostCard({ data }: IPostCardProps) {
  return (
    <article className=" flex flex-col justify-between p-2 w-full min-h-40 bg-white rounded-2xl border border-solid border-slate-200 shadow">
      <div>
        <h3 className="text-black">{data.title}</h3>
        <p className="text-gray-500 text-xs line-clamp-2">{data.body}</p>
      </div>
      <span className="text-xs text-gray-400 mt-4">{data.name}</span>
    </article>
  );
}
