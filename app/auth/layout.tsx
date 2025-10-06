import Logo from "@/components/ui/Logo";
import ToastNotification from "@/components/ui/ToastNotification";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:h-screen lg:overflow-hidden">
        <div className="flex justify-center items-center bg-jaguar-950 lg:h-screen">
          <div className="lg:w-96 py-10 lg:py-20">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
        </div>
        <div className="p-10 lg:p-15 flex flex-col justify-start items-center lg:h-screen lg:overflow-y-auto">
          <div className="w-full md:max-w-2xl mx-auto">{children}</div>
          <ToastNotification />
        </div>
      </div>
    </>
  );
}
