import { useCallback, useEffect, useRef, useState } from "react";
import type { ZodType } from "zod";

type UseGetOptions<T> = {
  auto?: boolean;
  parseSchema?: ZodType<T>;
  headers?: Record<string, string>;
};

export function useGet<T = any>(initialUrl: string, options?: UseGetOptions<T>) {
  const [url, setUrl] = useState<string>(initialUrl);
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const fetcher = useCallback(
    async (overrideUrl?: string) => {
      controllerRef.current?.abort();
      const controller = new AbortController();
      controllerRef.current = controller;

      const fetchUrl = overrideUrl ?? url;
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(fetchUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(options?.headers ?? {}),
          },
          signal: controller.signal,
        });

        const json = await res.json();

        if (!res.ok) {
          throw json;
        }

        if (options?.parseSchema) {
          const parsed = options.parseSchema.parse(json);
          setData(parsed as T);
          return parsed as T;
        }

        setData(json as T);
        return json as T;
      } catch (err: any) {
        if (err?.name === "AbortError") return;
        setError(err);
        setData(null);
        throw err;
      } finally {
        setLoading(false);
        controllerRef.current = null;
      }
    },
    [url, options]
  );

  useEffect(() => {
    if (options?.auto ?? true) {
      fetcher().catch(() => {});
    }
    return () => controllerRef.current?.abort();
  }, [fetcher, options?.auto]);

  const setFromExternal = useCallback(
    (externalUrl: string | null, localPath = initialUrl) => {
      if (!externalUrl) return;
      try {
        const base = typeof window !== "undefined" ? window.location.origin : "http://localhost";
        const u = new URL(externalUrl, base);
        setUrl(`${localPath}${u.search}`);
      } catch {
        const match = externalUrl.match(/\?(.*)$/);
        const qs = match ? `?${match[1]}` : "";
        setUrl(`${localPath}${qs}`);
      }
    },
    [initialUrl]
  );

  const setFromLink = useCallback(
    (link: { url: string | null } | null, localPath = initialUrl) => {
      setFromExternal(link?.url ?? null, localPath);
    },
    [setFromExternal, initialUrl]
  );
  const setFromLinksArray = useCallback(
    (links: Array<{ url: string | null }> | null, index = 0, localPath = initialUrl) => {
      if (!links || links.length === 0) return;
      const candidate = links[index]?.url ?? links.find((l) => l.url)?.url ?? null;
      setFromExternal(candidate, localPath);
    },
    [setFromExternal, initialUrl]
  );

  return {
    data,
    loading,
    error,
    url,
    setUrl,
    setFromExternal,
    setFromLink,
    setFromLinksArray,
    refetch: fetcher,
    abort: () => controllerRef.current?.abort(),
  };
}
