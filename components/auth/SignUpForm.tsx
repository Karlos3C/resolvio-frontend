"use client";

import { signUp } from "@/actions/auth/sign-up-action";
import { Area } from "@/src/schemas";
import { useActionState, useEffect } from "react";
import { SignUpActionResponse } from "@/src/types";
import ErrorMessage from "../ui/ErrorMessage";
import { toast } from "react-toastify";

type SignUpFormProps = {
  areas: Area[];
};

const initialState: SignUpActionResponse = {
  success: false,
  message: "",
};

export default function SignUpForm({ areas }: SignUpFormProps) {
  const [state, action, pending] = useActionState(signUp, initialState);

  useEffect(() => {
    if (state.message && !state.success) {
      toast.error(state.message);
    }

    if (state.message && state.success) {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <form className="space-y-3" autoComplete="off" action={action}>
      <h2 className="text-center text-3xl font-black">Crear cuenta</h2>
      <p className="text-center text-gray-500">Ingresa tus datos para crear una nueva cuenta</p>

      <div>
        <label htmlFor="name" className="block mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={state.inputs?.name ?? ""}
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          placeholder="Ingresa tu nombre/s"
        />
        {state.errors?.name && <ErrorMessage message={state.errors.name.errors[0]} />}
      </div>
      <div>
        <label htmlFor="last_name" className="block mb-1">
          Apellidos
        </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          defaultValue={state.inputs?.last_name ?? ""}
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          placeholder="Ingresa tus apellidos"
        />
        {state.errors?.last_name && <ErrorMessage message={state.errors.last_name.errors[0]} />}
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={state.inputs?.email ?? ""}
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          placeholder="Ingresa tu correo electrónico"
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          defaultValue={state.inputs?.password ?? ""}
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          placeholder="Ingresa tu contraseña"
        />
        {state.errors?.password && <ErrorMessage message={state.errors.password.errors[0]} />}
      </div>
      <div>
        <label htmlFor="password_confirmation" className="block mb-1">
          Confirmar contraseña
        </label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          defaultValue={state.inputs?.password_confirmation ?? ""}
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          placeholder="Confirma tu contraseña"
        />
        {state.errors?.password_confirmation && (
          <ErrorMessage message={state.errors.password_confirmation.errors[0]} />
        )}
      </div>
      <div>
        <label htmlFor="area_id" className="block mb-1">
          Área
        </label>
        <select
          id="area_id"
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          name="area_id"
          defaultValue={state.inputs?.area_id ?? ""}
        >
          <option value="">-- Selecciona un área --</option>
          {areas.map((area) => (
            <option key={area.id} value={area.id}>
              {area.name}
            </option>
          ))}
        </select>
        {state.errors?.area_id && <ErrorMessage message={state.errors.area_id.errors[0]} />}
      </div>
      <input
        type="submit"
        value="Crear cuenta"
        className="w-full p-2 mt-3 bg-jaguar-910 text-white font-bold text-sm uppercase rounded-md cursor-pointer hover:bg-jaguar-950 disabled:cursor-not-allowed disabled:opacity-10"
        disabled={pending}
      />
    </form>
  );
}
