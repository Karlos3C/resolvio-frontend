import getToken from "@/src/auth/token";
import { UsersListAPIResponseSchema } from "@/src/schemas/catalog";

export async function getUsers() {
  const token = await getToken();
  const url = `${process.env.API_URL_LARAVEL}/user-list`;

  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await req.json();

  if (!req.ok) throw new Error(json.message || "Error al obtener los usuarios");

  const users = UsersListAPIResponseSchema.parse(json);
  return users;
}
