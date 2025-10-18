import { ValidationErrors, ValidationLaravelErrors } from "@/src/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatErrorsKeyValue(errors: ZodError): ValidationErrors {
  return Object.fromEntries(errors.issues.map((err) => [err.path[0], err.message]));
}

export function formatLaravelErrorsKeyValue(errors: ValidationLaravelErrors): string[] {
  return Object.values(errors.errors).flatMap((messages) => messages);
}

export function formatZodToLaravelErrors(error: ZodError): string[] {
  return error.issues.map((err) => err.message);
}
