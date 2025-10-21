"use server";

import { formatArrayErrors, formatErrorsKeyValue } from "@/lib/utils";
import getToken from "@/src/auth/token";
import { SuccessSchema } from "@/src/schemas";
import { CreateTicket, CreateTicketSchema, JsonTagsSchema } from "@/src/schemas/ticket";
import { ActionResponse } from "@/src/types";

export async function createTicket(
  prevState: ActionResponse<CreateTicket>,
  formData: FormData
): Promise<ActionResponse<CreateTicket>> {
  const rawData = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    issue_id: formData.get("issue_id") as string,
    priority_id: formData.get("priority_id") as string,
    tags: formData.get("tags") as string,
  };

  const createTicket = CreateTicketSchema.safeParse(rawData);

  if (!createTicket.success) {
    return {
      success: "",
      errors: formatErrorsKeyValue(createTicket.error),
      inputs: {
        ...rawData,
        tags: (() => {
          try {
            const parsed = JSON.parse(rawData.tags);
            return Array.isArray(parsed) ? parsed : [];
          } catch {
            return [];
          }
        })(),
      },
    };
  }

  const url = `${process.env.API_URL_LARAVEL}/tickets`;
  const token = await getToken();
  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...createTicket.data, tags: JSON.stringify(createTicket.data.tags) }),
  });

  const json = await req.json();

  if (!req.ok) {
    return {
      success: "",
      laravelErr: formatArrayErrors(json),
      inputs: {
        ...rawData,
        tags: (() => {
          try {
            const parsed = JSON.parse(rawData.tags);
            return Array.isArray(parsed) ? parsed : [];
          } catch {
            return [];
          }
        })(),
      },
    };
  }

  const success = SuccessSchema.parse(json).message;

  return { success };
}
