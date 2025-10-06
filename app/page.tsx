import Logo from "@/components/ui/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className=" bg-jaguar-950 py-5">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center p-5 md:p-0">
          <div className="w-96 flex justify-center mb-5 md:mb-0">
            <Logo />
          </div>
          <nav className="flex flex-col md:flex-row md:justify-end gap-5 w-full ">
            <Link
              href="/auth/login"
              className="font-bold text-chelsea-gem-500 uppercase text-sm text-center border py-2 px-4 rounded-lg hover:bg-chelsea-gem-500 hover:text-jaguar-950 transition-colors duration-300 ease-in-out"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/auth/sign-up"
              className="font-bold text-chelsea-gem-500 uppercase text-sm text-center border py-2 px-4 rounded-lg hover:bg-chelsea-gem-500 hover:text-jaguar-950 transition-colors duration-300 ease-in-out"
            >
              Registrarme
            </Link>
          </nav>
        </div>
      </header>

      <main className=" max-w-3xl mx-auto p-5 space-y-5 mt-20">
        <h1 className="font-black text-4xl lg:text-6xl text-jaguar-950 text-center">
          {" "}
          Soporte de incidencias
        </h1>
        <p className="text-3xl font-bold text-center">
          para gestionar tus <span className="text-chelsea-gem-500">tickets</span>
        </p>
        <p className="text-lg">
          Optimiza la atención de incidencias y solicitudes con nuestra plataforma de Tickets de
          Soporte. Centraliza la gestión de bugs, features y consultas en un solo lugar, de manera
          ágil y eficiente. Mantén el control total de tus procesos de soporte y mejora la
          experiencia de tus usuarios.
        </p>

        <h2 className="font-black text-4xl text-jaguar-950 text-center">Ventajas de ReSolvio</h2>

        <ol className="grid grid-cols-1 items-start divide-y-1 divide-gray-300">
          <li className="p-5 shadow-lg text-lg bg-white">
            <span className="text-jaguar-950 font-black">Organización sin esfuerzo: </span>
            Clasifica, prioriza y visualiza tus tickets en un panel claro y ordenado, sin
            complicaciones.
          </li>
          <li className="p-5 shadow-lg text-lg bg-white">
            <span className="text-jaguar-950 font-black">Seguimiento en tiempo real: </span>
            Supervisa el estado de cada ticket y recibe notificaciones sobre su avance de manera
            transparente.
          </li>
          <li className="p-5 shadow-lg text-lg bg-white">
            <span className="text-jaguar-950 font-black">Colaboración efectiva: </span>
            Facilita la comunicación entre equipos y asigna responsables para resolver incidencias
            más rápido.
          </li>
          <li className="p-5 shadow-lg text-lg bg-white">
            <span className="text-jaguar-950 font-black">Acceso desde cualquier lugar: </span>
            Gestiona tickets y da seguimiento estés donde estés, con total flexibilidad.
          </li>
          <li className="p-5 shadow-lg text-lg bg-white">
            <span className="text-jaguar-950 font-black">Seguridad garantizada: </span>
            Protegemos tus datos y la información sensible de tus clientes con los más altos
            estándares de seguridad.
          </li>
        </ol>
      </main>

      <nav className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-10 pb-20 max-w-3xl mx-auto ">
        <Link
          href="/auth/sign-up"
          className="text-gray-500 text-sm uppercase text-center hover:text-jaguar-950 "
        >
          ¿No tienes cuenta? Crea una
        </Link>
        <Link
          href="/auth/login"
          className="text-gray-500 text-sm uppercase text-center hover:text-jaguar-950 "
        >
          ¿Ya tienes cuenta? Iniciar Sesión
        </Link>
      </nav>
    </>
  );
}
