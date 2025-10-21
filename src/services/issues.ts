import getToken from "@/src/auth/token";
import { IssuesAPIResponseSchema } from "@/src/schemas/catalog";

export async function getIssues() {
  const token = await getToken();
  const url = `${process.env.API_URL_LARAVEL}/issues`;

  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await req.json();
  if (!req.ok) throw new Error(json.message || "Error al obtener las áreas");

  const issues = IssuesAPIResponseSchema.parse(json);
  return issues;
}
