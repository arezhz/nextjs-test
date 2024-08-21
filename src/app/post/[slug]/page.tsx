import { Divider } from "primereact/divider";

export default function PostDetails({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1 className="font-bold text-xl">{params.slug}</h1>
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
