import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resolvio - Iniciar sesión",
    description: "Inicia sesión en Resolvio para gestionar tus actividades",
  };
}

export default function LoginPage() {
  return (
    <>
      <div className="bg-white p-5 sm:p-10 rounded-lg shadow-lg">
        <LoginForm />
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center mt-5">
          <Link
            href="/auth/sign-up"
            className="text-sm text-jaguar-700 hover:underline text-center"
          >
            ¿No tienes una cuenta? Regístrate
          </Link>
          <Link href="/auth/forgot-password" className="text-sm text-jaguar-700 hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </>
  );
}
