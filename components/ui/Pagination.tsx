import type { Links, MetaPagination } from "@/src/types";
import Link from "next/link";

type PaginationProps = {
  meta: MetaPagination;
  links: Links;
  onNavigate?: (url: string | null) => void;
};

export default function Pagination({ meta, links, onNavigate }: PaginationProps) {
  const current =
    "z-10 bg-jaguar-900 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jaguar-600 dark:bg-white/5 dark:focus-visible:outline-jaguar-900";
  const base =
    "text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:outline-offset-0 dark:text-gray-200 dark:inset-ring-jaguar-900 dark:hover:bg-white/5";

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 lg:px-6">
      {meta.total > meta.per_page && (
        <div className="flex flex-1 justify-between lg:hidden">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.(links.prev ?? null);
            }}
            className="relative inline-flex items-center border border-gray-910 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.(links.next ?? null);
            }}
            className="relative ml-3 inline-flex items-center border border-gray-910 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Siguiente
          </button>
        </div>
      )}
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-jaguar-910">
            Mostrando <span className="font-medium">{meta.from}</span> a{" "}
            <span className="font-medium">
              {meta.per_page * meta.current_page > meta.total
                ? meta.total
                : meta.per_page * meta.current_page}
            </span>{" "}
            de <span className="font-medium">{meta.total}</span> resultados
          </p>
        </div>
        <div>
          {meta.total > meta.per_page && (
            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px shadow-xs">
              {meta.links.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.(link.url ?? null);
                  }}
                  className={`${
                    link.active ? current : base
                  } relative inline-flex items-center px-4 py-2 text-sm font-semibold first-of-type:rounded-l-md last-of-type:rounded-r-md focus:z-20 disabled:cursor-not-allowed disabled:opacity-50`}
                  disabled={link.url === null}
                >
                  <span dangerouslySetInnerHTML={{ __html: link.label }} />
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
