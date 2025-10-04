import FormSearchTicket from "@/components/tickets/FormSearchTicket";
import Pagination from "@/components/ui/Pagination";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";
import { IconEye, IconPencil, IconTicket } from "@tabler/icons-react";
import Link from "next/link";

export default function TicketsPage() {
  return (
    <>
      <FormSearchTicket />
      <main className="bg-white p-4 rounded-lg shadow-lg space-y-3">
        <div>
          <h2 className="flex flex-row items-center gap-2 text-2xl font-bold mb-2">
            <IconTicket className="size-7!" />
            Lista de Tickets
          </h2>
          <p className="text-sm text-gray-500">10 ticket(s) encontrado(s)</p>
        </div>

        <ScrollArea className="w-full overflow-auto mb-0">
          <div className="w-full py-1">
            <table className="w-full table-auto">
              <thead>
                <tr className="whitespace-nowrap text-left bg-jaguar-910 text-white text-xs font-bold uppercase">
                  <th className="py-2 px-3">Folio</th>
                  <th className="py-2 px-3">Titulo</th>
                  <th className="py-2 px-3">Incidencia</th>
                  <th className="py-2 px-3">Prioridad</th>
                  <th className="py-2 px-3">Responsable</th>
                  <th className="py-2 px-3">Estado</th>
                  <th className="py-2 px-3">Creado por</th>
                  <th className="py-2 px-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="whitespace-nowrap text-sm even:bg-white odd:bg-gray-100 border">
                  <td className="py-1 px-3 font-semibold">TCK-2509-WAAGVN</td>
                  <td className="py-1 px-3">Error en foliado</td>
                  <td className="py-1 px-3">Bug</td>
                  <td className="py-1 px-3">
                    <span className="px-4 py-0.5 bg-red-200 rounded-full text-red-700 text-xs font-semibold">Alto</span>
                  </td>
                  <td className="py-1 px-3">Carlos Cabrera</td>
                  <td className="py-1 px-3">Por asignar</td>
                  <td className="py-1 px-3">Usuario Quejumbroso</td>
                  <td className="py-1 px-3 flex gap-3 items-center">
                    <Link href={"#"} className="flex gap-1 items-center text-indigo-600">
                      <IconEye className="size-4!" /> Ver
                    </Link>
                    <Link href={"#"} className="flex gap-1 items-center text-teal-800">
                      <IconPencil className="size-4!" /> Editar
                    </Link>
                  </td>
                </tr>
                <tr className="whitespace-nowrap text-sm even:bg-white odd:bg-gray-100 border">
                  <td className="py-1 px-3 font-semibold">TCK-2509-WAAGVN</td>
                  <td className="py-1 px-3">Error en foliado</td>
                  <td className="py-1 px-3">Bug</td>
                  <td className="py-1 px-3">
                    <span className="px-4 py-0.5 bg-orange-200 rounded-full text-orange-700 text-xs font-semibold">Medio</span>
                  </td>
                  <td className="py-1 px-3">Carlos Cabrera</td>
                  <td className="py-1 px-3">Por asignar</td>
                  <td className="py-1 px-3">Usuario Quejumbroso</td>
                  <td className="py-1 px-3 flex gap-3 items-center">
                    <Link href={"#"} className="flex gap-1 items-center text-indigo-600">
                      <IconEye className="size-4!" /> Ver
                    </Link>
                    <Link href={"#"} className="flex gap-1 items-center text-teal-800">
                      <IconPencil className="size-4!" /> Editar
                    </Link>
                  </td>
                </tr>
                <tr className="whitespace-nowrap text-sm even:bg-white odd:bg-gray-100 border">
                  <td className="py-1 px-3 font-semibold">TCK-2509-WAAGVN</td>
                  <td className="py-1 px-3">Error en foliado</td>
                  <td className="py-1 px-3">Bug</td>
                  <td className="py-1 px-3">
                    <span className="px-4 py-0.5 bg-red-200 rounded-full text-red-700 text-xs font-semibold">Alto</span>
                  </td>
                  <td className="py-1 px-3">Carlos Cabrera</td>
                  <td className="py-1 px-3">Por asignar</td>
                  <td className="py-1 px-3">Usuario Quejumbroso</td>
                  <td className="py-1 px-3 flex gap-3 items-center">
                    <Link href={"#"} className="flex gap-1 items-center text-indigo-600">
                      <IconEye className="size-4!" /> Ver
                    </Link>
                    <Link href={"#"} className="flex gap-1 items-center text-teal-800">
                      <IconPencil className="size-4!" /> Editar
                    </Link>
                  </td>
                </tr>
                <tr className="whitespace-nowrap text-sm even:bg-white odd:bg-gray-100 border">
                  <td className="py-1 px-3 font-semibold">TCK-2509-WAAGVN</td>
                  <td className="py-1 px-3">Error en foliado</td>
                  <td className="py-1 px-3">Bug</td>
                  <td className="py-1 px-3">
                    <span className="px-4 py-0.5 bg-black rounded-full text-yellow-400 text-xs font-semibold">Crítico</span>
                  </td>
                  <td className="py-1 px-3">Carlos Cabrera</td>
                  <td className="py-1 px-3">Por asignar</td>
                  <td className="py-1 px-3">Usuario Quejumbroso</td>
                  <td className="py-1 px-3 flex gap-3 items-center">
                    <Link href={"#"} className="flex gap-1 items-center text-indigo-600">
                      <IconEye className="size-4!" /> Ver
                    </Link>
                    <Link href={"#"} className="flex gap-1 items-center text-teal-800">
                      <IconPencil className="size-4!" /> Editar
                    </Link>
                  </td>
                </tr>
                <tr className="whitespace-nowrap text-sm even:bg-white odd:bg-gray-100 border">
                  <td className="py-1 px-3 font-semibold">TCK-2509-WAAGVN</td>
                  <td className="py-1 px-3">Error en foliado</td>
                  <td className="py-1 px-3">Bug</td>
                  <td className="py-1 px-3">
                    <span className="px-4 py-0.5 bg-orange-200 rounded-full text-orange-700 text-xs font-semibold">Medio</span>
                  </td>
                  <td className="py-1 px-3">Carlos Cabrera</td>
                  <td className="py-1 px-3">Por asignar</td>
                  <td className="py-1 px-3">Usuario Quejumbroso</td>
                  <td className="py-1 px-3 flex gap-3 items-center">
                    <Link href={"#"} className="flex gap-1 items-center text-indigo-600">
                      <IconEye className="size-4!" /> Ver
                    </Link>
                    <Link href={"#"} className="flex gap-1 items-center text-teal-800">
                      <IconPencil className="size-4!" /> Editar
                    </Link>
                  </td>
                </tr>
                <tr className="whitespace-nowrap text-sm even:bg-white odd:bg-gray-100 border">
                  <td className="py-1 px-3 font-semibold">TCK-2509-WAAGVN</td>
                  <td className="py-1 px-3">Error en foliado</td>
                  <td className="py-1 px-3">Bug</td>
                  <td className="py-1 px-3">
                    <span className="px-4 py-0.5 bg-green-200 rounded-full text-green-700 text-xs font-semibold">Muy Bajo</span>
                  </td>
                  <td className="py-1 px-3">Carlos Cabrera</td>
                  <td className="py-1 px-3">Por asignar</td>
                  <td className="py-1 px-3">Usuario Quejumbroso</td>
                  <td className="py-1 px-3 flex gap-3 items-center">
                    <Link href={"#"} className="flex gap-1 items-center text-indigo-600">
                      <IconEye className="size-4!" /> Ver
                    </Link>
                    <Link href={"#"} className="flex gap-1 items-center text-teal-800">
                      <IconPencil className="size-4!" /> Editar
                    </Link>
                  </td>
                </tr>
                <tr className="whitespace-nowrap text-sm even:bg-white odd:bg-gray-100 border">
                  <td className="py-1 px-3 font-semibold">TCK-2509-WAAGVN</td>
                  <td className="py-1 px-3">Error en foliado</td>
                  <td className="py-1 px-3">Bug</td>
                  <td className="py-1 px-3">
                    <span className="px-4 py-0.5 bg-red-200 rounded-full text-red-700 text-xs font-semibold">Alto</span>
                  </td>
                  <td className="py-1 px-3">Carlos Cabrera</td>
                  <td className="py-1 px-3">Por asignar</td>
                  <td className="py-1 px-3">Usuario Quejumbroso</td>
                  <td className="py-1 px-3 flex gap-3 items-center">
                    <Link href={"#"} className="flex gap-1 items-center text-indigo-600">
                      <IconEye className="size-4!" /> Ver
                    </Link>
                    <Link href={"#"} className="flex gap-1 items-center text-teal-800">
                      <IconPencil className="size-4!" /> Editar
                    </Link>
                  </td>
                </tr>
                <tr className="whitespace-nowrap text-sm even:bg-white odd:bg-gray-100 border">
                  <td className="py-1 px-3 font-semibold">TCK-2509-WAAGVN</td>
                  <td className="py-1 px-3">Error en foliado</td>
                  <td className="py-1 px-3">Bug</td>
                  <td className="py-1 px-3">
                    <span className="px-4 py-0.5 bg-yellow-200 rounded-full text-yellow-700 text-xs font-semibold">Bajo</span>
                  </td>
                  <td className="py-1 px-3">Carlos Cabrera</td>
                  <td className="py-1 px-3">Por asignar</td>
                  <td className="py-1 px-3">Usuario Quejumbroso</td>
                  <td className="py-1 px-3 flex gap-3 items-center">
                    <Link href={"#"} className="flex gap-1 items-center text-indigo-600">
                      <IconEye className="size-4!" /> Ver
                    </Link>
                    <Link href={"#"} className="flex gap-1 items-center text-teal-800">
                      <IconPencil className="size-4!" /> Editar
                    </Link>
                  </td>
                </tr>
                <tr className="whitespace-nowrap text-sm even:bg-white odd:bg-gray-100 border">
                  <td className="py-1 px-3 font-semibold">TCK-2509-WAAGVN</td>
                  <td className="py-1 px-3">Error en foliado</td>
                  <td className="py-1 px-3">Bug</td>
                  <td className="py-1 px-3">
                    <span className="px-4 py-0.5 bg-yellow-200 rounded-full text-yellow-700 text-xs font-semibold">Bajo</span>
                  </td>
                  <td className="py-1 px-3">Carlos Cabrera</td>
                  <td className="py-1 px-3">Por asignar</td>
                  <td className="py-1 px-3">Usuario Quejumbroso</td>
                  <td className="py-1 px-3 flex gap-3 items-center">
                    <Link href={"#"} className="flex gap-1 items-center text-indigo-600">
                      <IconEye className="size-4!" /> Ver
                    </Link>
                    <Link href={"#"} className="flex gap-1 items-center text-teal-800">
                      <IconPencil className="size-4!" /> Editar
                    </Link>
                  </td>
                </tr>
                <tr className="whitespace-nowrap text-sm even:bg-white odd:bg-gray-100 border">
                  <td className="py-1 px-3 font-semibold">TCK-2509-WAAGVN</td>
                  <td className="py-1 px-3">Error en foliado</td>
                  <td className="py-1 px-3">Bug</td>
                  <td className="py-1 px-3">
                    <span className="px-4 py-0.5 bg-red-200 rounded-full text-red-700 text-xs font-semibold">Alto</span>
                  </td>
                  <td className="py-1 px-3">Carlos Cabrera</td>
                  <td className="py-1 px-3">Por asignar</td>
                  <td className="py-1 px-3">Usuario Quejumbroso</td>
                  <td className="py-1 px-3 flex gap-3 items-center">
                    <Link href={"#"} className="flex gap-1 items-center text-indigo-600">
                      <IconEye className="size-4!" /> Ver
                    </Link>
                    <Link href={"#"} className="flex gap-1 items-center text-teal-800">
                      <IconPencil className="size-4!" /> Editar
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Pagination />
      </main>
    </>
  );
}
