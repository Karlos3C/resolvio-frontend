import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resolvio - Olvidé mi contraseña",
    description: "Recupera tu contraseña en Resolvio para gestionar tus actividades",
  };
}

export default function ForgotPasswordPage() {
  return (
    <>
      <div className="bg-white p-5 sm:p-10 rounded-lg shadow-lg">
        <ForgotPasswordForm />
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center mt-5">
          <Link href="/auth/login" className="text-sm text-jaguar-900 hover:underline text-center">
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
          <Link
            href="/auth/sign-up"
            className="text-sm text-jaguar-900 hover:underline text-center"
          >
            ¿No tienes una cuenta? Regístrate
          </Link>
        </div>
      </div>
    </>
  );
}
