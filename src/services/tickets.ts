import getToken from "@/src/auth/token";
import { TicketAPIResponseSchema } from "../schemas/ticket";
import { PaginatedResponseSchema } from "../types";

export async function getTickets() {
  const token = await getToken();
  const url = `${process.env.API_URL_LARAVEL}/tickets`;

  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await req.json();
  if (!req.ok) throw new Error(json.message || "Error al obtener los tickets");

  const schema = PaginatedResponseSchema(TicketAPIResponseSchema);
  const tickets = schema.parse(json);

  return tickets;
}
