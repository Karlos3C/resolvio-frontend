import VerifyEmail from "@/components/auth/VerifyEmail";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resolvio - Verificar correo electrónico",
    description: "Verifica tu correo electrónico para acceder a tu cuenta",
  };
}

export default function VerifyEmailPage() {
  return (
    <>
      <div className="bg-white p-5 sm:p-10 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-black">Verificar correo electrónico</h2>
        <p className="text-center text-gray-500">
          Ingresa el código de verificación enviado a tu correo electrónico
        </p>
        <VerifyEmail />
      </div>
    </>
  );
}
