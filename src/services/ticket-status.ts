import getToken from "@/src/auth/token";
import { TicketStatusesAPIResponseSchema } from "@/src/schemas/catalog";

export async function getTicketStatuses() {
  const token = await getToken();
  const url = `${process.env.API_URL_LARAVEL}/ticket-status`;

  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await req.json();

  if (!req.ok) throw new Error(json.message || "Error al obtener los usuarios");

  const users = TicketStatusesAPIResponseSchema.parse(json);
  return users;
}
