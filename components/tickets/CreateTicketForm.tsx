"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TicketIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Issues, Priorities } from "@/src/schemas/catalog";
import React, { useActionState, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { createTicket } from "@/actions/ticket/create-ticket-action";
import { ActionResponse } from "@/src/types";
import { CreateTicket } from "@/src/schemas/ticket";
import ErrorMessage from "../ui/ErrorMessage";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Loader from "../ui/loader";
const ReactSelect = dynamic(() => import("react-select"), { ssr: false });

type CreateTicketFormProps = {
  issues: Issues;
  priorities: Priorities;
};

type items = {
  value: string;
  label: string;
};

const initialState: ActionResponse<CreateTicket> = { success: "" };

export default function CreateTicketForm({ issues, priorities }: CreateTicketFormProps) {
  const [selectedTags, setSelectedTags] = useState<items[]>([]);
  const router = useRouter();

  const items = [...issues.data, ...priorities.data].map((item) => ({
    value: item.name,
    label: item.name,
  }));

  const [state, action, pending] = useActionState(createTicket, initialState);
  const handleChange = (items: items[]) => setSelectedTags(items);

  useEffect(() => {
    if (state.laravelErr) {
      state.laravelErr.map((err) => toast.error(err));
    }

    if (state.success) {
      toast.success(state.success);
      router.push("/panel/tickets");
    }
  }, [state]);

  return (
    <>
      <div className="lg:col-span-2 bg-white rounded-lg p-5 shadow-lg">
        <div className="mb-5">
          <h2 className="flex flex-row items-center gap-2 text-xl font-semibold">
            <TicketIcon />
            Información del Ticket
          </h2>
          <p className="text-gray-500">Proporciona los detalles principales del ticket</p>
        </div>

        <form action={action} className="space-y-5" autoComplete="off">
          <div>
            <Label htmlFor="title" className="text-gray-600 uppercase mb-2 font-bold">
              Titulo *
            </Label>
            <Input
              name="title"
              id="title"
              defaultValue={state.inputs?.title ?? ""}
              placeholder="Describe brevemente el problema o solicitud"
            />
            {state.errors?.title && <ErrorMessage message={state.errors.title} />}
          </div>
          <div>
            <Label htmlFor="description" className="text-gray-600 uppercase mb-2 font-bold">
              Descripción *
            </Label>
            <Textarea
              name="description"
              id="description"
              defaultValue={state.inputs?.description ?? ""}
              placeholder="Proporciona una descripción detallada del ticket ..."
            ></Textarea>
            {state.errors?.description && <ErrorMessage message={state.errors.description} />}
          </div>
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-3">
            <div>
              <Label htmlFor="issue_id" className="text-gray-600 uppercase mb-2 font-bold">
                Tipo incidencia *
              </Label>
              <Select name="issue_id">
                <SelectTrigger className="w-full" id="issue_id">
                  <SelectValue placeholder="Selecciona el tipo de incidencia" />
                </SelectTrigger>
                <SelectContent defaultValue={state.inputs?.issue_id ?? ""}>
                  <SelectGroup>
                    <SelectLabel>Incidencias</SelectLabel>
                    {issues.data.map((issue) => (
                      <SelectItem key={issue.id} value={issue.id.toString()}>
                        {issue.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {state.errors?.issue_id && <ErrorMessage message={state.errors.issue_id} />}
            </div>
            <div>
              <Label htmlFor="priority_id" className="text-gray-600 uppercase mb-2 font-bold">
                Prioridad *
              </Label>
              <Select name="priority_id">
                <SelectTrigger className="w-full" id="priority_id">
                  <SelectValue placeholder="Selecciona el tipo de incidencia" />
                </SelectTrigger>
                <SelectContent defaultValue={state.inputs?.priority_id ?? ""}>
                  <SelectGroup>
                    <SelectLabel>Prioridades</SelectLabel>
                    {priorities.data.map((priority) => (
                      <SelectItem key={priority.id} value={priority.id.toString()}>
                        {priority.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {state.errors?.priority_id && <ErrorMessage message={state.errors.priority_id} />}
            </div>
          </div>
          <div>
            <Label htmlFor="tags" className="text-gray-600 uppercase mb-2 font-bold">
              Tags *
            </Label>
            <ReactSelect
              isMulti={true}
              id="tags"
              options={items}
              className="basic-multi-select bg-gray-100"
              classNamePrefix="select"
              onChange={handleChange}
            />
            {state.errors?.tags && <ErrorMessage message={state.errors.tags} />}
            <Input type="hidden" value={JSON.stringify(selectedTags)} name="tags" />
          </div>
          <input
            type="submit"
            value="Generar ticket"
            className="w-full p-2 bg-jaguar-910 text-white font-bold text-sm uppercase rounded-md cursor-pointer hover:bg-jaguar-950 disabled:cursor-not-allowed disabled:opacity-10"
            disabled={pending}
          />
        </form>
      </div>
      {pending && <Loader />}
    </>
  );
}
