import React from "react";
import { Separator } from "../ui/separator";

const items = [
  { id: 1, name: "Usa un título descriptivo y claro" },
  { id: 2, name: "Incluye pasos para reproducir el problema" },
  { id: 3, name: "Asigna la prioridad según el impacto" },
  { id: 4, name: "Añade etiquetas para facilitar la búsqueda" },
];

export default function PreviewTicket() {
  return (
    <aside className="bg-white rounded-lg p-5 shadow-lg">
      <h3 className="mb-3 text-xl font-semibold">Consejos</h3>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <div className="text-sm">{item.name}</div>
          <Separator className="my-2" />
        </React.Fragment>
      ))}
    </aside>
  );
}
