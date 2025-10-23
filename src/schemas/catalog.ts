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
export const UserAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  last_name: z.string(),
});
export const UsersListAPIResponseSchema = z.object({
  data: z.array(UserAPIResponseSchema),
});
export const TicketStatusAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
});
export const TicketStatusesAPIResponseSchema = z.object({
  data: z.array(TicketStatusAPIResponseSchema),
});

export type Issue = z.infer<typeof IssueAPIResponseSchema>;
export type Issues = z.infer<typeof IssuesAPIResponseSchema>;
export type Priority = z.infer<typeof PriorityAPIResponseSchema>;
export type Priorities = z.infer<typeof PrioritiesAPIResponseSchema>;
export type UserList = z.infer<typeof UserAPIResponseSchema>;
export type UsersList = z.infer<typeof UsersListAPIResponseSchema>;
export type TicketStatus = z.infer<typeof TicketStatusAPIResponseSchema>;
export type TicketStatuses = z.infer<typeof TicketStatusesAPIResponseSchema>;
