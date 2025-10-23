import z from "zod";

export const CreateTicketSchema = z.object({
  title: z.string().min(3, { message: "El titulo es demasiado corto" }),
  description: z
    .string()
    .min(20, { message: "La descripción es demasiada corta al menos 20 carácteres" }),
  issue_id: z.string().min(1, { message: "El tipo de incidencia es obligatorio" }),
  priority_id: z.string().min(1, { message: "La prioridad es obligatoria" }),
  tags: z
    .string()
    .transform((val) => {
      try {
        const parsed = JSON.parse(val);
        if (Array.isArray(parsed)) {
          return parsed
            .map((item) => (typeof item === "object" ? item.value : item))
            .filter(Boolean);
        }
        return [];
      } catch {
        return [];
      }
    })
    .pipe(z.array(z.string()).nonempty("Los tags son obligatorios")),
});
export const JsonTagsSchema = z.array(z.string()).nonempty("Los tags son obligatorios");

export const TicketAPIResponseSchema = z.object({
  id: z.number(),
  folio: z.string(),
  title: z.string(),
  description: z.string(),
  issue: z.object({
    id: z.number(),
    name: z.string(),
  }),
  priority: z.object({
    id: z.number(),
    name: z.string(),
  }),
  ticket_status: z.object({
    id: z.number(),
    name: z.string(),
  }),
  responsable: z.string().nullable(),
  user: z.string(),
  limit_date: z.string().nullable(),
  tags: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const TicketsAPIResponseSchema = z.object({
  data: z.array(TicketAPIResponseSchema),
});

export type CreateTicket = z.infer<typeof CreateTicketSchema>;
export type Ticket = z.infer<typeof TicketAPIResponseSchema>;
