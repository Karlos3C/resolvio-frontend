import { z } from "zod";

export const SuccessSchema = z.object({
  message: z.string(),
});
