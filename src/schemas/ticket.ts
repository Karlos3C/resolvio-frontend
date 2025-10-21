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

export type CreateTicket = z.infer<typeof CreateTicketSchema>;
