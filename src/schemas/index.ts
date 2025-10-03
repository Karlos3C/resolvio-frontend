import { z } from "zod";

export const AreaAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
});
export const AreasAPIResponseSchema = z.object({
  data: z.array(AreaAPIResponseSchema),
});

// Types
export type Area = z.infer<typeof AreaAPIResponseSchema>;

// Static Types
const LinkItemSchema = z.object({
  title: z.string(),
  url: z.string(),
  icon: z.any(),
});

const NavCloudsItemSchema = z.object({
  title: z.string(),
  icon: z.any(),
  isActive: z.boolean().optional(),
  url: z.string(),
  items: z.array(
    z.object({
      title: z.string(),
      url: z.string(),
    })
  ),
});

const LinksSchema = z.object({
  user: z.object({
    name: z.string(),
    email: z.string(),
    avatar: z.string(),
  }),
  navMain: z.array(LinkItemSchema),
  navClouds: z.array(NavCloudsItemSchema),
  navSecondary: z.array(LinkItemSchema),
  documents: z.array(LinkItemSchema),
});
export type Links = z.infer<typeof LinksSchema>;
