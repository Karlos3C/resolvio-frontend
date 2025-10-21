import CreateTicketForm from "@/components/tickets/CreateTicketForm";
import PreviewTicket from "@/components/tickets/PreviewTicket";
import { getIssues } from "@/src/services/issues";
import { getPriorities } from "@/src/services/priorities";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resolvio - Nuevo ticket",
    description: "Agrega un nuevo ticket para atenderlo",
  };
}

export default async function NewTicketPage() {
  const issues = await getIssues();
  const priorities = await getPriorities();
  return (
    <div className="xl:px-10">
      <h1 className="text-3xl font-black mb-2">Registra tu incidencia</h1>
      <p className="text-gray-700">Completa la información para crear un nuevo ticket</p>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
        <CreateTicketForm issues={issues} priorities={priorities} />
        <PreviewTicket />
      </main>
    </div>
  );
}
