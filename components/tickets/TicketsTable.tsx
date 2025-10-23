"use client";

import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";
import { IconEye, IconPencil } from "@tabler/icons-react";
import Link from "next/link";
import Pagination from "../ui/Pagination";
import { useEffect, useMemo, useState } from "react";
import { DataPaginated, PaginatedResponseSchema } from "@/src/types";
import { Ticket, TicketAPIResponseSchema } from "@/src/schemas/ticket";
import { useGet } from "@/hooks/get-data";
export default function TicketsTable() {
  const schema = useMemo(() => PaginatedResponseSchema(TicketAPIResponseSchema), []);
  const options = useMemo(() => ({ auto: true, parseSchema: schema }), [schema]);

  const {
    data: ticketsData,
    loading,
    setFromExternal,
  } = useGet<DataPaginated<Ticket>>("/api/tickets", options);

  const handleNavigate = (externalUrl: string | null) => {
    setFromExternal(externalUrl, "/api/tickets");
  };

  if (loading) return <p>Cargando...</p>;
  if (!ticketsData) return <p>No hay tickets</p>;

  const { data: tickets, meta, links } = ticketsData;
  const colors: Record<string, string> = {
    "Muy Bajo": "bg-aqua text-dark-aqua",
    Bajo: "bg-green text-dark-green",
    Medio: "bg-yellow text-dark-yellow",
    Alto: "bg-red text-dark-red",
    Crítico: "bg-pink text-dark-pink",
  };

  return (
    <>
      <p className="text-sm text-gray-500">{meta.total} ticket(s) encontrado(s)</p>
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
              {tickets.map((ticket) => (
                <tr
                  className="whitespace-nowrap text-sm even:bg-white odd:bg-gray-100 border"
                  key={ticket.id}
                >
                  <td className="py-2 px-3 font-semibold">{ticket.folio}</td>
                  <td className="py-2 px-3">{ticket.title}</td>
                  <td className="py-2 px-3">{ticket.issue.name}</td>
                  <td className={`${colors[ticket.priority.name]} py-2 px-3 font-medium`}>
                    {ticket.priority.name}
                  </td>
                  <td className="py-2 px-3">{ticket.responsable ?? "No asignado"}</td>
                  <td className="py-2 px-3">{ticket.ticket_status.name}</td>
                  <td className="py-2 px-3">{ticket.user}</td>
                  <td className="py-2 px-3 flex gap-3 items-center">
                    <Link href={"#"} className="flex gap-1 items-center text-indigo-600">
                      <IconEye className="size-4!" /> Ver
                    </Link>
                    <Link href={"#"} className="flex gap-1 items-center text-teal-800">
                      <IconPencil className="size-4!" /> Editar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Pagination meta={meta} links={links} onNavigate={handleNavigate} />
    </>
  );
}
