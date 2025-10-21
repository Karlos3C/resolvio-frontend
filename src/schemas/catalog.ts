import z from "zod";

export const IssueAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
});
export const IssuesAPIResponseSchema = z.object({
  data: z.array(IssueAPIResponseSchema),
});

export const PriorityAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
});
export const PrioritiesAPIResponseSchema = z.object({
  data: z.array(PriorityAPIResponseSchema),
});

export type Issue = z.infer<typeof IssueAPIResponseSchema>;
export type Issues = z.infer<typeof IssuesAPIResponseSchema>;
export type Priority = z.infer<typeof PriorityAPIResponseSchema>;
export type Priorities = z.infer<typeof PrioritiesAPIResponseSchema>;
