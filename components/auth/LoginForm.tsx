"use client";

export default function LoginForm() {
  return (
    <form className="space-y-4" autoComplete="off">
      <h2 className="text-center text-3xl font-black">Iniciar sesión</h2>
      <p className="text-center text-gray-500">Ingresa tus credenciales para acceder al sistema</p>

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
      <input
        type="submit"
        value="Iniciar sesión"
        className="w-full p-2 mt-3 bg-jaguar-700 text-white font-bold text-sm uppercase rounded-md cursor-pointer hover:bg-jaguar-900"
      />
    </form>
  );
}
