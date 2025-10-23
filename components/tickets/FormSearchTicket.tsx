"use client";
import { useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { IconFilter } from "@tabler/icons-react";
import { Issue, Priority, TicketStatus, UserList } from "@/src/schemas/catalog";

type FormSearchTicketProps = {
  issues: Issue[];
  priorities: Priority[];
  users: UserList[];
  ticketStatuses: TicketStatus[];
  onSearch?: (queryString: string) => void;
};

export default function FormSearchTicket({
  issues,
  priorities,
  users,
  ticketStatuses,
  onSearch,
}: FormSearchTicketProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [priority, setPriority] = useState<string>("");
  const [responsable, setResponsable] = useState<string>("");
  const [issue, setIssue] = useState<string>("");
  const [ticketStatus, setTicketStatus] = useState<string>("");
  const [user, setUser] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    for (const [k, v] of fd.entries()) {
      const val = (v ?? "").toString().trim();
      if (val !== "") params.append(k, val);
    }
    const qs = params.toString() ? `?${params.toString()}` : "";
    onSearch?.(qs);
  };

  const handleClear = () => {
    formRef.current?.reset();
    setPriority("");
    setResponsable("");
    setIssue("");
    setTicketStatus("");
    setUser("");
    onSearch?.("");
  };

  return (
    <form
      ref={formRef}
      className="bg-white p-4 rounded-lg shadow-lg space-y-3"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2 className="flex flex-row items-center gap-2 text-2xl font-bold">
        <IconFilter className="size-7!" />
        Filtros y Busquedas
      </h2>
      <div>
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Buscar por folio o titulo. Ej: TCK-2509-WAAGVN, Error en foliado, etc."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        <div>
          <Label htmlFor="priority" className="text-gray-600 uppercase mb-2 font-bold">
            Prioridad
          </Label>
          <Select onValueChange={(v) => setPriority(v)} value={priority}>
            <SelectTrigger className="w-full" id="priority">
              <SelectValue placeholder="Selecciona la prioridad" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Prioridades</SelectLabel>
                {priorities.map((p) => (
                  <SelectItem key={p.id} value={p.id.toString()}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="priority" value={priority} />
        </div>
        <div>
          <Label htmlFor="responsable" className="text-gray-600 uppercase mb-2 font-bold">
            Responsable
          </Label>
          <Select onValueChange={(v) => setResponsable(v)} value={responsable}>
            <SelectTrigger className="w-full" id="responsable">
              <SelectValue placeholder="Selecciona el responsable" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Responsable</SelectLabel>
                {users.map((u) => (
                  <SelectItem key={u.id} value={u.id.toString()}>
                    {u.name} {u.last_name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="responsable" value={responsable} />
        </div>
        <div>
          <Label htmlFor="issue" className="text-gray-600 uppercase mb-2 font-bold">
            Incidencia
          </Label>
          <Select onValueChange={(v) => setIssue(v)} value={issue}>
            <SelectTrigger className="w-full" id="issue">
              <SelectValue placeholder="Selecciona el tipo de incidencia" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Incidencia</SelectLabel>
                {issues.map((i) => (
                  <SelectItem key={i.id} value={i.id.toString()}>
                    {i.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="issue" value={issue} />
        </div>
        <div>
          <Label htmlFor="ticket_status" className="text-gray-600 uppercase mb-2 font-bold">
            Estado del Ticket
          </Label>
          <Select onValueChange={(v) => setTicketStatus(v)} value={ticketStatus}>
            <SelectTrigger className="w-full" id="ticket_status">
              <SelectValue placeholder="Selecciona el estado del ticket" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Estado del Ticket</SelectLabel>
                {ticketStatuses.map((s) => (
                  <SelectItem key={s.id} value={s.id.toString()}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="ticket_status" value={ticketStatus} />
        </div>
        <div>
          <Label htmlFor="user" className="text-gray-600 uppercase mb-2 font-bold">
            Creador del ticket
          </Label>
          <Select onValueChange={(v) => setUser(v)} value={user}>
            <SelectTrigger className="w-full" id="user">
              <SelectValue placeholder="Selecciona el creador del ticket" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Creador del ticket</SelectLabel>
                {users.map((u) => (
                  <SelectItem key={u.id} value={u.id.toString()}>
                    {u.name} {u.last_name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="user" value={user} />
        </div>
      </div>
      <div className="flex justify-end mt-4 gap-2">
        <button
          type="button"
          onClick={handleClear}
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
