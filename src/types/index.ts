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
