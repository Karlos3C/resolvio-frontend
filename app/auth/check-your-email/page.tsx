import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resolvio - Revisa tu email",
    description: "Resolvio te ha enviado indicaciones para reestablecer tu contraseña",
  };
}

export default function ForgotPasswordPage() {
  return (
    <>
      <div className="bg-white p-5 sm:p-10 rounded-lg shadow-lg">
        <div className="space-y-4">
          <h2 className="text-center text-3xl font-black">Revisa tu email</h2>
          <p className="text-center text-gray-500">
            Resolvio te ha enviado indicaciones para reestablecer tu contraseña
          </p>
          <div className="flex flex-row justify-center">
            <Link
              href={"/auth/login"}
              className="w-full text-center p-2 mt-3 bg-jaguar-910 text-white font-bold text-sm uppercase rounded-md cursor-pointer hover:bg-jaguar-950"
            >
              Volver al inicio de sesión
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
