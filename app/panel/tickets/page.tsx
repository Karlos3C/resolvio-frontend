import FormSearchTicket from "@/components/tickets/FormSearchTicket";
import TicketsTable from "@/components/tickets/TicketsTable";
import { IconTicket } from "@tabler/icons-react";

export default async function TicketsPage() {
  return (
    <>
      <FormSearchTicket />
      <main className="bg-white p-4 rounded-lg shadow-lg space-y-3">
        <div>
          <h2 className="flex flex-row items-center gap-2 text-2xl font-bold mb-2">
            <IconTicket className="size-7!" />
            Lista de Tickets
          </h2>
        </div>
        <TicketsTable />
      </main>
    </>
  );
}
