import z from "zod";
export type ValidationErrors = {
  [k: string]: string;
};

export type ValidationLaravelErrors = Record<string, string[]>;

export type ActionResponse<T> = {
  success: string;
  errors?: ValidationErrors;
  laravelErr?: string[];
  inputs?: Partial<T>;
};

export const LinksSchema = z.object({
  first: z.string().nullable(),
  last: z.string().nullable(),
  next: z.string().nullable(),
  prev: z.string().nullable(),
});

export const PaginationLinkSchema = z.object({
  url: z.string().nullable(),
  label: z.string(),
  active: z.boolean(),
});

export const MetaPaginationSchema = z.object({
  current_page: z.number(),
  from: z.number().nullable(),
  last_page: z.number(),
  links: z.array(PaginationLinkSchema),
  path: z.string(),
  per_page: z.number(),
  to: z.number().nullable(),
  total: z.number(),
});

export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    data: z.array(schema),
    links: LinksSchema,
    meta: MetaPaginationSchema,
  });

export type Links = z.infer<typeof LinksSchema>;
export type PaginationLink = z.infer<typeof PaginationLinkSchema>;
export type MetaPagination = z.infer<typeof MetaPaginationSchema>;

export type DataPaginated<T> = {
  data: T[];
  meta: MetaPagination;
  links: Links;
};
