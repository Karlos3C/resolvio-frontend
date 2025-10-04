import { IconFilter } from "@tabler/icons-react";

export default function FormSearchTicket() {
  return (
    <form className="bg-white p-4 rounded-lg shadow-lg space-y-3" autoComplete="off">
      <h2 className="flex flex-row items-center gap-2 text-2xl font-bold">
        <IconFilter className="size-7!" />
        Filtros y Busquedas
      </h2>
      <div>
        <input
          type="search"
          name="search"
          id="search"
          className="bg-gray-100 w-full py-2 px-4 rounded-lg border border-gray-200 col-span-4"
          placeholder="Buscar por folio o titulo. Ej: TCK-2509-WAAGVN, Error en foliado, etc."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        <select
          name="issue"
          id="issue"
          className="bg-gray-100 py-1 px-2 rounded-lg border border-gray-200"
        >
          <option value="">-- Tipo de incidencia --</option>
        </select>
        <select
          name="priority"
          id="priority"
          className="bg-gray-100 py-1 px-2 rounded-lg border border-gray-200"
        >
          <option value="">-- Prioridad --</option>
        </select>
        <select
          name="responsable"
          id="responsable"
          className="bg-gray-100 py-1 px-2 rounded-lg border border-gray-200"
        >
          <option value="">-- Responsable --</option>
        </select>
        <select
          name="ticket_status"
          id="ticket_status"
          className="bg-gray-100 py-1 px-2 rounded-lg border border-gray-200"
        >
          <option value="">-- Estado del ticket --</option>
        </select>
        <select
          name="user"
          id="user"
          className="bg-gray-100 py-1 px-2 rounded-lg border border-gray-200"
        >
          <option value="">-- Creado por --</option>
        </select>
      </div>
      <div className="flex justify-end mt-4 gap-2">
        <button
          type="button"
          className="px-6 py-1 border border-gray-500 text-gray-500 rounded-lg font-bold text-sm uppercase hover:bg-gray-100 cursor-pointer transition"
        >
          Limpiar
        </button>
        <input
          type="submit"
          value="Buscar"
          className="col-span-1 bg-jaguar-910 text-white rounded-lg py-1 px-6 font-bold text-sm uppercase hover:bg-jaguar-950 cursor-pointer transition"
        />
      </div>
    </form>
  );
}
