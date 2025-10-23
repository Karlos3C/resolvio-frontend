import FormSearchTicket from "@/components/tickets/FormSearchTicket";
import TicketPanel from "@/components/tickets/TicketPanel";
import TicketsTable from "@/components/tickets/TicketsTable";
import { getIssues } from "@/src/services/issues";
import { getPriorities } from "@/src/services/priorities";
import { getTicketStatuses } from "@/src/services/ticket-status";
import { getUsers } from "@/src/services/user-list";
import { IconTicket } from "@tabler/icons-react";

export default async function TicketsPage() {
  const issues = await getIssues();
  const priorities = await getPriorities();
  const users = await getUsers();
  const ticketStatuses = await getTicketStatuses();
  return (
    <TicketPanel
      issues={issues.data}
      priorities={priorities.data}
      users={users.data}
      ticketStatuses={ticketStatuses.data}
    />
  );
}
