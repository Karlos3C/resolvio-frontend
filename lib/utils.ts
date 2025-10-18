import { ExceptionError } from "@/src/schemas";
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

export function formatExceptionError(err: ExceptionError): string[] {
  return [err.message, err.error].filter(Boolean);
}

function isExceptionError(obj: unknown): obj is ExceptionError {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "message" in obj &&
    "error" in obj &&
    typeof (obj as any).message === "string" &&
    typeof (obj as any).error === "string"
  );
}

export function formatArrayErrors(issues: ValidationLaravelErrors | ExceptionError): string[] {
  if (isExceptionError(issues)) {
    return formatExceptionError(issues);
  }

  return formatLaravelErrorsKeyValue(issues);
}
