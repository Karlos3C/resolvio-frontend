"use client";

import { Area } from "@/src/schemas";

type SignUpFormProps = {
  areas: Area[];
};

export default function SignUpForm({ areas }: SignUpFormProps) {
  return (
    <form className="space-y-3" autoComplete="off">
      <h2 className="text-center text-3xl font-black">Crear cuenta</h2>
      <p className="text-center text-gray-500">Ingresa tus datos para crear una nueva cuenta</p>

      <div>
        <label htmlFor="name" className="block mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          placeholder="Ingresa tu nombre/s"
        />
      </div>
      <div>
        <label htmlFor="last_name" className="block mb-1">
          Apellidos
        </label>
        <input
          type="text"
          id="last_name"
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          placeholder="Ingresa tus apellidos"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
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
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          placeholder="Ingresa tu contraseña"
        />
      </div>
      <div>
        <label htmlFor="password_confirmation" className="block mb-1">
          Confirmar contraseña
        </label>
        <input
          type="password"
          id="password_confirmation"
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          placeholder="Confirma tu contraseña"
        />
      </div>
      <div>
        <label htmlFor="area_id" className="block mb-1">
          Área
        </label>
        <select
          id="area_id"
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
        >
          <option value="">-- Selecciona un área --</option>
          {areas.map((area) => (
            <option key={area.id}>{area.name}</option>
          ))}
        </select>
      </div>
      <input
        type="submit"
        value="Crear cuenta"
        className="w-full p-2 mt-3 bg-jaguar-950 text-white font-bold text-sm uppercase rounded-md cursor-pointer hover:bg-jaguar-910"
      />
    </form>
  );
}
