import { IPostCardProps } from "./models/i-post-card.props";

export default function PostCard({ data }: IPostCardProps) {
  return (
    <div className="p-2 w-full min-h-40 bg-white rounded-2xl border border-solid border-slate-200 shadow">
      <h3 className="text-black">{data.title}</h3>
      <span className="text-gray-500 text-xs line-clamp-2">{data.body}</span>
    </div>
  );
}
