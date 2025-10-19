import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resolvio - Restablecer contraseña",
    description: "Restablece tu contraseña en Resolvio para gestionar tus actividades",
  };
}
export default async function ResetPasswordPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  return (
    <>
      <div className="bg-white p-5 sm:p-10 rounded-lg shadow-lg">
        <ResetPasswordForm token={token} />
      </div>
    </>
  );
}
