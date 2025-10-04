import { Links } from "../schemas/index";
import {
  IconCamera,
  IconPlus,
  IconChartBar,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconListDetails,
  IconReport,
  IconSettings,
  IconUsers,
  IconFileExcel,
} from "@tabler/icons-react";

export const links: Links = {
  user: {
    name: "Carlos Cabrera",
    email: "carloscabreracarreon@gmail.com",
    avatar: "/me_lego.png",
  },
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
      url: "#",
      icon: IconFileExcel,
    },
    {
      title: "Reportes",
      url: "#",
      icon: IconReport,
    },
  ],
};
