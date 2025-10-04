import Link from "next/link";
import { Metadata } from "next";
import { getAreas } from "@/src/services/areas";
import SignUpForm from "@/components/auth/SignUpForm";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resolvio - Crear cuenta",
    description: "Crea una cuenta en Resolvio para gestionar tus actividades",
  };
}

export default async function RegisterPage() {
  const areas = await getAreas();
  return (
    <>
      <div className="bg-white p-5 sm:p-10 rounded-lg shadow-lg">
        <SignUpForm areas={areas} />
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center mt-5">
          <Link href="/auth/login" className="text-sm text-jaguar-950 hover:underline text-center">
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
          <Link
            href="/auth/forgot-password"
            className="text-sm text-jaguar-950 hover:underline text-center"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </>
  );
}
