import { AreasAPIResponseSchema } from "@/src/schemas";

export const getAreas = async () => {
  const url = `${process.env.API_URL_LARAVEL}/sign-up-areas`;

  const response = await fetch(url);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message || "Error al obtener las áreas");
  }

  const areas = AreasAPIResponseSchema.parse(json);
  return areas.data;
};
