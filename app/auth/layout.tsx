import Logo from "@/components/ui/Logo";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
        <div className="flex justify-center items-center bg-jaguar-950">
          <div className="lg:w-96 py-10 lg:py-20">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
        </div>
        <div className="p-10 lg:p-15 flex items-center h-screen overflow-y-auto max-h-full">
          <div className="w-full md:max-w-2xl mx-auto">{children}</div>
        </div>
      </div>
    </>
  );
}
