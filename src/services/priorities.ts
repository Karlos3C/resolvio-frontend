import getToken from "@/src/auth/token";
import { PrioritiesAPIResponseSchema } from "@/src/schemas/catalog";

export async function getPriorities() {
  const token = await getToken();
  const url = `${process.env.API_URL_LARAVEL}/priorities`;

  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await req.json();
  if (!req.ok) throw new Error(json.message || "Error al obtener las áreas");

  const priorities = PrioritiesAPIResponseSchema.parse(json);
  return priorities;
}
