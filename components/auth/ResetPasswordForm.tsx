"use client";

import { resetPassword } from "@/actions/auth/reset-password-action";
import { ResetPassword } from "@/src/schemas/auth";
import { ActionResponse } from "@/src/types";
import { useActionState, useEffect } from "react";
import ErrorMessage from "../ui/ErrorMessage";
import { toast } from "react-toastify";
import { useParams, useRouter } from "next/navigation";
import Loader from "../ui/loader";

const initialState: ActionResponse<ResetPassword> = { success: "" };

export default function ResetPasswordForm({ token }: { token: string }) {
  const resetPasswordWithToken = resetPassword.bind(null, token);
  const [state, action, pending] = useActionState(resetPasswordWithToken, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.laravelErr) {
      state.laravelErr.map((err) => toast.error(err));
    }

    if (state.success) {
      toast.success(state.success);
      router.push("/auth/login");
    }
  }, [state]);
  return (
    <>
      <form className="space-y-4" autoComplete="off" action={action}>
        <h2 className="text-center text-3xl font-black">Restablecer contraseña</h2>
        <p className="text-center text-gray-500">Ingresa tu nueva contraseña a continuación</p>

        <div>
          <label htmlFor="password" className="block mb-1">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
            placeholder="Ingresa tu nueva contraseña"
          />
          {state.errors?.password && <ErrorMessage message={state.errors.password} />}
        </div>
        <div>
          <label htmlFor="confirm-password" className="block mb-1">
            Confirmar contraseña
          </label>
          <input
            type="password"
            id="confirm-password"
            name="password_confirmation"
            className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
            placeholder="Confirma tu nueva contraseña"
          />
          {state.errors?.password_confirmation && (
            <ErrorMessage message={state.errors.password_confirmation} />
          )}
        </div>
        <input
          type="submit"
          value="Restablecer contraseña"
          className="w-full p-2 mt-3 bg-jaguar-910 text-white font-bold text-sm uppercase rounded-md cursor-pointer hover:bg-jaguar-950 disabled:cursor-not-allowed disabled:opacity-10"
          disabled={pending}
        />
      </form>
      {pending && <Loader />}
    </>
  );
}
