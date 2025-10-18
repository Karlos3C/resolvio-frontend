import { z } from "zod";

export const SuccessSchema = z.object({ message: z.string() });
export const ExceptionErrorResponse = z.object({ message: z.string(), error: z.string() });

export type ExceptionError = z.infer<typeof ExceptionErrorResponse>;
