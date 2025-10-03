import { z } from "zod";

export const AreaAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const AreasAPIResponseSchema = z.object({
  data: z.array(AreaAPIResponseSchema),
});

export type Area = z.infer<typeof AreaAPIResponseSchema>;
