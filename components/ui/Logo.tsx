import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src={"/logo-resolvio-horizontal.png"}
      alt="Resolvio Logo"
      width={1024}
      height={1024}
      className="w-48 lg:w-full"
      priority
    />
  );
}
