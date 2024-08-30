import { Divider } from "primereact/divider";
import { getSinglePost } from "../services/post-api.service";
import { IPostDto } from "../models/i-post.dto";

export default async function PostDetails({ params }: { params: { slug: string } }) {
  const data : IPostDto = await getSinglePost(params.slug);
  return (
    <div>
      <h1 className="font-bold text-xl text-black">{params.slug}</h1>
      <Divider />
      <p  className="text-gray-500 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
        possimus hic explicabo consequuntur adipisci repellendus, enim quibusdam
        rem tenetur cupiditate, et pariatur. Dolor tenetur error beatae expedita
        cumque inventore obcaecati.
      </p>
    </div>
  );
}
