export default function ResetPasswordForm() {
  return (
    <form className="space-y-4" autoComplete="off">
      <h2 className="text-center text-3xl font-black">Restablecer contraseña</h2>
      <p className="text-center text-gray-500">Ingresa tu nueva contraseña a continuación</p>

      <div>
        <label htmlFor="password" className="block mb-1">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          placeholder="Ingresa tu nueva contraseña"
        />
      </div>
      <div>
        <label htmlFor="confirm-password" className="block mb-1">
          Confirmar contraseña
        </label>
        <input
          type="password"
          id="confirm-password"
          className="w-full mt-1 p-2 border border-gray-300 bg-gray-100 rounded-md"
          placeholder="Confirma tu nueva contraseña"
        />
      </div>
      <input
        type="submit"
        value="Restablecer contraseña"
        className="w-full p-2 mt-3 bg-jaguar-910 text-white font-bold text-sm uppercase rounded-md cursor-pointer hover:bg-jaguar-950"
      />
    </form>
  );
}
