import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resolvio - Restablecer contraseña",
    description: "Restablece tu contraseña en Resolvio para gestionar tus actividades",
  };
}
export default function ResetPasswordPage() {
  return (
    <>
      <div className="bg-white p-5 sm:p-10 rounded-lg shadow-lg">
        <ResetPasswordForm />
      </div>
    </>
  );
}
