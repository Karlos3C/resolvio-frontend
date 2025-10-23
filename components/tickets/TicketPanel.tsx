"use client";

import { useState } from "react";
import FormSearchTicket from "./FormSearchTicket";
import TicketsTable from "./TicketsTable";
import type { Issue, Priority, UserList, TicketStatus } from "@/src/schemas/catalog";

type Props = {
  issues: Issue[];
  priorities: Priority[];
  users: UserList[];
  ticketStatuses: TicketStatus[];
};
export default function TicketPanel({ issues, priorities, users, ticketStatuses }: Props) {
  const [filterQuery, setFilterQuery] = useState<string>("");

  return (
    <>
      <FormSearchTicket
        issues={issues}
        priorities={priorities}
        users={users}
        ticketStatuses={ticketStatuses}
        onSearch={(qs) => setFilterQuery(qs)}
      />
      <main className="bg-white p-4 rounded-lg shadow-lg space-y-3">
        <TicketsTable filterQuery={filterQuery} />
      </main>
    </>
  );
}
