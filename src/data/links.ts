import { Links } from "../schemas/index";
import {
  IconCamera,
  IconPlus,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconListDetails,
  IconReport,
  IconSettings,
  IconUsers,
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
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
  ],
  documents: [
    {
      title: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      title: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      title: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
};
