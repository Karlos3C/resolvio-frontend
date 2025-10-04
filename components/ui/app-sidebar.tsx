"use client";

import { IconSettingsCheck } from "@tabler/icons-react";
import * as React from "react";
import { NavDocuments } from "@/components/ui/nav-documents";
import { NavMain } from "@/components/ui/nav-main";
import { NavSecondary } from "@/components/ui/nav-secondary";
import { NavUser } from "@/components/ui/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { links } from "@/src/data/links";
import { usePathname } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname: string = usePathname();
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 text-chelsea-gem-500"
            >
              <Link href="/">
                <IconSettingsCheck className="!size-7" />
                <span className="text-2xl font-semibold">ReSolvio</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={links.navMain} pathname={pathname} />
        <NavDocuments items={links.documents} pathname={pathname} />
        <NavSecondary items={links.navSecondary} pathname={pathname} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={links.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
