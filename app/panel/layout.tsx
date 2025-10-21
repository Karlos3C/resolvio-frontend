import { AppSidebar } from "@/components/ui/app-sidebar";
import { SiteHeader } from "@/components/ui/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { verifySession } from "@/src/auth/dal";
import ToastNotification from "@/components/ui/ToastNotification";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await verifySession();
  const user = session?.user ?? null;
  return (
    <>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" className="bg-jaguar-950" user={user} />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2 bg-gray-200 rounded-b-xl">
              <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">{children}</div>
              <ToastNotification />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
