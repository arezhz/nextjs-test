import { Metadata } from "next";
import { Divider } from "primereact/divider";
export const metadata: Metadata = {
  title: "Posts",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
