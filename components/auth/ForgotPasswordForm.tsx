export default function ForgotPasswordForm() {
  return (
    <form className="space-y-4" autoComplete="off">
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
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          placeholder="Ingresa tu correo electrónico"
        />
      </div>
      <input
        type="submit"
        value="Recuperar contraseña"
        className="w-full p-2 mt-3 bg-jaguar-910 text-white font-bold text-sm uppercase rounded-md cursor-pointer hover:bg-jaguar-950"
      />
    </form>
  );
}
