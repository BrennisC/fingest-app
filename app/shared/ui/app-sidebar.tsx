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
        <Sidebar>
            <SidebarContent className="bg-slate-800">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-3xl py-5 text-white rounded-4x not-even:align-top justify-center">FinGest</SidebarGroupLabel>

                    {/* Recorre dinámicamente los grupos */}
                    {Object.entries(grouped).map(([type, groupItems]) => (
                        <SidebarGroupContent key={type}>
                            <SidebarGroupLabel className="text-white py-3">{groupLabels[type] || type}</SidebarGroupLabel>
                            <SidebarMenu className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-4">
                                {groupItems.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span className="hover:text-cyan-900">{item.title}</span>
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
