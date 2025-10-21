import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
const items = [
  {
    id: 1,
    title: "Back End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 2,
    title: "Front End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 3,
    title: "User Interface Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
  },
];

export default function Pagination() {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 lg:px-6">
      <div className="flex flex-1 justify-between lg:hidden">
        <a
          href="#"
          className="relative inline-flex items-center border border-gray-910 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          Anterior
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center border border-gray-910 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          Siguiente
        </a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-jaguar-910">
            Mostrando <span className="font-medium">1</span> a{" "}
            <span className="font-medium">10</span> de <span className="font-medium">10</span>{" "}
            resultados
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px shadow-xs">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-1.5 text-gray-400 inset-ring inset-ring-gray-200 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <IconChevronLeft aria-hidden="true" className="size-5" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 inset-ring inset-ring-gray-200 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-jaguar-910 px-3 py-1 text-sm text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jaguar-910"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-3 py-1 text-sm text-gray-900 inset-ring inset-ring-gray-200 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-3 py-1 text-sm text-gray-900 inset-ring inset-ring-gray-200 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-3 py-1 text-sm text-gray-500 inset-ring inset-ring-gray-200 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-3 py-1 text-sm text-gray-900 inset-ring inset-ring-gray-200 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-3 py-1 text-sm text-gray-900 inset-ring inset-ring-gray-200 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-3 py-1 text-sm text-gray-900 inset-ring inset-ring-gray-200 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-1.5 text-gray-400 inset-ring inset-ring-gray-200 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <IconChevronRight aria-hidden="true" className="size-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
