export default function DashboardPage() {
    const stats = [
        {
            title: "Total Balance",
            value: "$1,490.00",
            subtitle: "+$25 from last month",
            color: "text-foreground",
        },
        {
            title: "Total Income",
            value: "$2,700.00",
            subtitle: "From 1 source",
            color: "text-slate-600",
        },
        {
            title: "Total Expenses",
            value: "$1,210.00",
            subtitle: "44.8% of income",
            color: "text-red-600",
        },
        {
            title: "Savings Progress",
            value: "45.8%",
            subtitle: "Toward your savings goals",
            color: "text-gray-900",
        },
    ];

    const transactions = [
        {
            icon: "🌐",
            title: "Internet Bill",
            date: "Jul 21, 2023 - Utilities",
            amount: "-$150.00",
        },
        {
            icon: "🎬",
            title: "Movie Night",
            date: "Jul 19, 2023 - Entertainment",
            amount: "-$33.00",
        },
        {
            icon: "🍽️",
            title: "Restaurant Dinner",
            date: "Jul 17, 2023 - Food & Dining",
            amount: "-$68.00",
        },
    ];

    const alerts = [
        {
            icon: "⚠️",
            message: "Your balance is below $500",
            date: "Jul 22, 2023",
            bg: "bg-yellow-50 border-yellow-200",
        },
        {
            icon: "✅",
            message: "You've reached 60% of your Emergency Fund goal",
            date: "Jul 21, 2023",
            bg: "bg-green-50 border-green-200",
        },
        {
            icon: "💡",
            message: "Electricity bill due in 3 days",
            date: "Jul 20, 2023",
            bg: "bg-blue-50 border-blue-200",
        },
    ];

    return (
        <div className=" bg-gray-50">
            <main className="flex-1 p-8">
                {/* Encabezado */}
                <header className="flex justify-between items-start mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-600">
                            Descripción general de tu situación financiera
                        </p>
                    </div>
                </header>

                {/* Pestañas */}
                <nav className="flex gap-6 mb-8 border-b border-gray-200">
                    {["Overview", "Analytics", "Savings Goals"].map((tab, i) => (
                        <button
                            key={i}
                            className={`px-4 py-2 text-sm font-medium ${i === 0
                                ? "text-slate-700 border-b-2 border-slate-600"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>

                {/* Estadísticas */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                        >
                            <p className="text-xs text-gray-500 mb-1">{s.title}</p>
                            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                            <p className="text-xs text-gray-500 mt-2">{s.subtitle}</p>
                        </div>
                    ))}
                </section>

                {/* Gráficos y Listas */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Transacciones recientes */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h2 className="text-sm font-bold text-gray-900 mb-3">
                            Recent Transactions
                        </h2>
                        <p className="text-xs text-gray-500 mb-5">
                            Your latest financial activities
                        </p>
                        <ul className="space-y-3">
                            {transactions.map((t, i) => (
                                <li
                                    key={i}
                                    className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 flex items-center justify-center bg-gray-200 text-lg rounded-md">
                                            {t.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">
                                                {t.title}
                                            </p>
                                            <p className="text-xs text-gray-500">{t.date}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-red-600">{t.amount}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Alertas y Recordatorios */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h2 className="text-sm font-bold text-gray-900 mb-3">
                            Alerts & Reminders
                        </h2>
                        <p className="text-xs text-gray-500 mb-5">
                            Important notifications about your finances
                        </p>
                        <ul className="space-y-3">
                            {alerts.map((a, i) => (
                                <li
                                    key={i}
                                    className={`flex items-start gap-3 p-3 rounded-lg border ${a.bg}`}
                                >
                                    <span className="text-lg">{a.icon}</span>
                                    <div className="flex-1">
                                        <p className="text-xs font-medium text-gray-900">
                                            {a.message}
                                        </p>
                                        <p className="text-xs text-gray-500">{a.date}</p>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-600 font-bold">
                                        ×
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}
