"use client";

import { signIn } from "@/actions/auth/sign-in-action";
import { useActionState, useEffect } from "react";
import { ActionResponse } from "@/src/types";
import { SignIn } from "@/src/schemas/auth";
import ErrorMessage from "../ui/ErrorMessage";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Loader from "../ui/loader";

const initialState: ActionResponse<SignIn> = { success: "" };

export default function LoginForm() {
  const [state, action, pending] = useActionState(signIn, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.laravelErr) {
      state.laravelErr.map((err) => toast.error(err));
    }

    if (state.success) {
      toast.success(state.success);
      router.push("/panel/dashboard");
    }
  }, [state]);

  return (
    <>
      <form className="space-y-4" autoComplete="off" action={action}>
        <h2 className="text-center text-3xl font-black">Iniciar sesión</h2>
        <p className="text-center text-gray-500">
          Ingresa tus credenciales para acceder al sistema
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
        <div>
          <label htmlFor="password" className="block mb-1">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
            placeholder="Ingresa tu contraseña"
          />
          {state.errors?.password && <ErrorMessage message={state.errors.password} />}
        </div>
        <input
          type="submit"
          value="Iniciar sesión"
          disabled={pending}
          className="w-full p-2 mt-3 bg-jaguar-910 text-white font-bold text-sm uppercase rounded-md cursor-pointer hover:bg-jaguar-950 disabled:cursor-not-allowed disabled:opacity-10"
        />
      </form>
      {pending && <Loader />}
    </>
  );
}
