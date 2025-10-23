// app/api/tickets/route.ts
import { NextResponse } from "next/server";
import getToken from "@/src/auth/token";
import { TicketAPIResponseSchema } from "@/src/schemas/ticket";
import { PaginatedResponseSchema } from "@/src/types";

export async function GET(req: Request) {
  try {
    const token = await getToken();
    const reqUrl = new URL(req.url);
    const search = reqUrl.search; // incluye '?page=2&priority=Alto&...'

    const base = (process.env.API_URL_LARAVEL ?? "").replace(/\/$/, "");
    const laravelUrl = `${base}/tickets${search}`;

    const res = await fetch(laravelUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: json.message || "Error al obtener tickets" },
        { status: res.status }
      );
    }
    const schema = PaginatedResponseSchema(TicketAPIResponseSchema);
    const tickets = schema.parse(json);
    return NextResponse.json(tickets);
  } catch (error: any) {
    console.error("Error en /api/tickets:", error);
    return NextResponse.json({ error: error.message || "Error interno" }, { status: 500 });
  }
}
