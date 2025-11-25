import fingest from "@/app/assets/img/fingest.jpg"
import {
    Bell,
    CreditCard,
    GraduationCap,
    LayoutDashboard,
    LogOut as LogOutIcon,
    TrendingUp,
    User,
    Users
} from "lucide-react"
import Image from "next/image"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard, type: "finance" },
    { title: "Transactions", url: "/transactions", icon: CreditCard, type: "finance" },
    { title: "Subcuentas", url: "/subcuentas", icon: Users, type: "finance" },
    { title: "Alerts", url: "/alerts", icon: Bell, type: "alerts" },
    { title: "Courses", url: "/courses", icon: GraduationCap, type: "education" },
    { title: "Financial Advice", url: "/financial-advice", icon: TrendingUp, type: "education" },
    { title: "Profile", url: "/profile", icon: User, type: "user" },
    { title: "Log Out", url: "/", icon: LogOutIcon, type: "logout" },
]

export function SidebarApp() {
    // Agrupar automáticamente por tipo
    const grouped = items.reduce((acc, item) => {
        if (!acc[item.type]) acc[item.type] = []
        acc[item.type].push(item)
        return acc
    }, {} as Record<string, typeof items>)

    // Función para mostrar nombre de grupo formateado
    const groupLabels: Record<string, string> = {
        finance: "Finanzas",
        alerts: "Alertas",
        education: "Educación",
        user: "Usuario",
    }

    return (
        <Sidebar className="fixed left-0 top-0 h-full w-64 bg-">
            <SidebarContent className="bg-slate-800 border-r border-slate-700/50">
                <SidebarGroup className="space-y-6">
                    {/* Header con logo y título */}
                    <SidebarGroupLabel className="flex items-center gap-3 text-2xl py-6 px-4 text-white">
                        <Image
                            src={fingest}
                            alt="FinGest"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain rounded-lg"
                        />
                        <span className="font-semibold text-white text-2xl">FINGEST</span>
                    </SidebarGroupLabel>

                    {/* Recorre dinámicamente los grupos */}
                    {Object.entries(grouped).map(([type, groupItems]) => (
                        <SidebarGroupContent key={type} className="space-y-2">
                            <SidebarGroupLabel className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                {groupLabels[type] || type}
                            </SidebarGroupLabel>
                            <SidebarMenu className="space-y-1 px-2">
                                {groupItems.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            className="w-full rounded-lg transition-all duration-200 hover:bg-slate-700/50"
                                        >
                                            <a
                                                href={item.url}
                                                className="flex items-center gap-3 px-3 py-2.5 text-slate-300 hover:text-white"
                                            >
                                                <item.icon className="w-5 h-5" />
                                                <span className="text-sm font-medium">{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    ))}
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}