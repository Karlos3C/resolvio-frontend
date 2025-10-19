"use client";

import { forgotPassword } from "@/actions/auth/forgot-password-action";
import { useActionState, useEffect } from "react";
import { ActionResponse } from "@/src/types";
import { ForgotPassword } from "@/src/schemas/auth";
import ErrorMessage from "../ui/ErrorMessage";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const initialState: ActionResponse<ForgotPassword> = { success: "" };

export default function ForgotPasswordForm() {
  const [state, action, pending] = useActionState(forgotPassword, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.laravelErr) {
      state.laravelErr.map((err) => toast.error(err));
    }

    if (state.success) {
      toast.success(state.success);
      router.push("/auth/check-your-email");
    }
  }, [state]);

  return (
    <form className="space-y-4" autoComplete="off" action={action}>
      <h2 className="text-center text-3xl font-black">Recuperar contraseña</h2>
      <p className="text-center text-gray-500">
        Ingresa tu correo electrónico para recuperar tu contraseña
      </p>

      <div>
        <label htmlFor="email" className="block mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          placeholder="Ingresa tu correo electrónico"
        />
        {state.errors?.email && <ErrorMessage message={state.errors.email} />}
      </div>
      <input
        type="submit"
        value="Recuperar contraseña"
        className="w-full p-2 mt-3 bg-jaguar-910 text-white font-bold text-sm uppercase rounded-md cursor-pointer hover:bg-jaguar-950 disabled:cursor-not-allowed disabled:opacity-10"
        disabled={pending}
      />
    </form>
  );
}
