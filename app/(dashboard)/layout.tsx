import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SidebarApp } from "../shared/ui/app-sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <SidebarApp />
            <main className="flex-1 p-4">
                <SidebarTrigger className="bg-slate-800 text-white w-10 h-10 p-2" />
                {children}
            </main>
        </SidebarProvider>
    )
}