import { Links } from "../schemas/auth";
import {
  IconPlus,
  IconChartBar,
  IconDashboard,
  IconListDetails,
  IconReport,
  IconSettings,
  IconUsers,
  IconFileExcel,
} from "@tabler/icons-react";

export const links: Links = {
  navMain: [
    {
      title: "Dashboard",
      url: "/panel/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Tickets",
      url: "/panel/tickets",
      icon: IconListDetails,
    },
    {
      title: "Nuevo Ticket",
      url: "/panel/tickets/new",
      icon: IconPlus,
    },
    {
      title: "Users",
      url: "/panel/users",
      icon: IconUsers,
    },
    {
      title: "Metricas",
      url: "/panel/metrics",
      icon: IconChartBar,
    },
  ],
  navSecondary: [
    {
      title: "Configuración",
      url: "/panel/settings",
      icon: IconSettings,
    },
  ],
  documents: [
    {
      title: "Exportar Excel",
      url: "/panel/excel",
      icon: IconFileExcel,
    },
    {
      title: "Reportes",
      url: "/panel/reports",
      icon: IconReport,
    },
  ],
};
