export default function AlertsPage() {
    const alerts = [
        {
            id: 1,
            type: "warning",
            icon: "⚠️",
            title: "Balance bajo",
            message: "Tu balance está por debajo de $500",
            date: "Jul 22, 2023",
            priority: "high",
            bg: "bg-yellow-50 border-yellow-200",
            textColor: "text-yellow-800"
        },
        {
            id: 2,
            type: "success",
            icon: "✅",
            title: "Meta alcanzada",
            message: "Has alcanzado el 60% de tu meta de Fondo de Emergencia",
            date: "Jul 21, 2023",
            priority: "medium",
            bg: "bg-green-50 border-green-200",
            textColor: "text-green-800"
        },
        {
            id: 3,
            type: "info",
            icon: "💡",
            title: "Recordatorio de pago",
            message: "La factura de electricidad vence en 3 días",
            date: "Jul 20, 2023",
            priority: "high",
            bg: "bg-blue-50 border-blue-200",
            textColor: "text-blue-800"
        },
        {
            id: 4,
            type: "info",
            icon: "📊",
            title: "Análisis mensual",
            message: "Tu gasto en entretenimiento ha aumentado un 25% este mes",
            date: "Jul 19, 2023",
            priority: "low",
            bg: "bg-purple-50 border-purple-200",
            textColor: "text-purple-800"
        },
        {
            id: 5,
            type: "warning",
            icon: "🔔",
            title: "Gasto inusual",
            message: "Se detectó un gasto inusual de $450 en tu cuenta",
            date: "Jul 18, 2023",
            priority: "high",
            bg: "bg-orange-50 border-orange-200",
            textColor: "text-orange-800"
        },
    ];

    const unreadCount = alerts.filter(a => a.priority === "high").length;
    const allCount = alerts.length;

    return (
        <div className="bg-gray-50">
            <main className="flex-1 p-8">
                {/* Encabezado */}
                <header className="flex justify-between items-start mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Alertas</h1>
                        <p className="text-gray-600">
                            Notificaciones importantes sobre tus finanzas
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            Marcar todas como leídas
                        </button>
                        <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                            Configurar Alertas
                        </button>
                    </div>
                </header>

                {/* Estadísticas de alertas */}
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <p className="text-xs text-gray-500 mb-1">Total de Alertas</p>
                        <p className="text-2xl font-bold text-gray-900">{allCount}</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <p className="text-xs text-gray-500 mb-1">Alertas Importantes</p>
                        <p className="text-2xl font-bold text-orange-600">{unreadCount}</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <p className="text-xs text-gray-500 mb-1">Alertas Leídas</p>
                        <p className="text-2xl font-bold text-green-600">{allCount - unreadCount}</p>
                    </div>
                </section>

                {/* Filtros */}
                <section className="mb-6">
                    <div className="flex gap-3 flex-wrap">
                        {["Todas", "Importantes", "Recordatorios", "Metas", "Gastos"].map((filter, i) => (
                            <button
                                key={i}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    i === 0
                                        ? "bg-slate-700 text-white"
                                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Lista de alertas */}
                <section className="space-y-4">
                    {alerts.map((alert) => (
                        <div
                            key={alert.id}
                            className={`flex items-start gap-4 p-5 rounded-xl border ${alert.bg} hover:shadow-md transition-shadow`}
                        >
                            <div className="text-2xl">{alert.icon}</div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h3 className={`font-bold ${alert.textColor} mb-1`}>
                                            {alert.title}
                                        </h3>
                                        <p className={`text-sm ${alert.textColor} opacity-90`}>
                                            {alert.message}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {alert.priority === "high" && (
                                            <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded">
                                                Importante
                                            </span>
                                        )}
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-3">
                                    <p className={`text-xs ${alert.textColor} opacity-75`}>
                                        {alert.date}
                                    </p>
                                    <div className="flex gap-2">
                                        <button className={`px-3 py-1 text-xs font-medium rounded ${alert.textColor} bg-white/50 hover:bg-white/70 transition-colors`}>
                                            Ver Detalles
                                        </button>
                                        <button className={`px-3 py-1 text-xs font-medium rounded ${alert.textColor} bg-white/50 hover:bg-white/70 transition-colors`}>
                                            Marcar como leída
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}

