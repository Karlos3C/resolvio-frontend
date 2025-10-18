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
      <div className="xl:grid xl:grid-cols-2 xl:h-screen xl:overflow-hidden">
        <div className="flex justify-center items-center bg-jaguar-950 xl:h-screen">
          <div className="xl:w-96 py-10 xl:py-20">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
        </div>
        <div className="p-10 xl:p-15 flex flex-col justify-start items-center 2xl:h-screen 2xl:justify-center lg:overflow-y-auto">
          <div className="w-full md:max-w-2xl mx-auto mt-8">{children}</div>
          <ToastNotification />
        </div>
      </div>
    </>
  );
}
