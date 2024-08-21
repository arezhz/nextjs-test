export default function PostDetails({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
