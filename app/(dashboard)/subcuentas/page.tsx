export default function SubcuentasPage() {
    const subcuentas = [
        {
            id: 1,
            name: "Ahorros Personales",
            balance: 1250.00,
            icon: "💰",
            color: "bg-blue-100",
            transactions: 12,
            lastActivity: "Jul 20, 2023"
        },
        {
            id: 2,
            name: "Fondo de Emergencia",
            balance: 3500.00,
            icon: "🛡️",
            color: "bg-green-100",
            transactions: 5,
            lastActivity: "Jul 18, 2023"
        },
        {
            id: 3,
            name: "Vacaciones",
            balance: 850.00,
            icon: "✈️",
            color: "bg-purple-100",
            transactions: 8,
            lastActivity: "Jul 15, 2023"
        },
        {
            id: 4,
            name: "Inversiones",
            balance: 5200.00,
            icon: "📈",
            color: "bg-yellow-100",
            transactions: 3,
            lastActivity: "Jul 10, 2023"
        },
    ];

    const totalBalance = subcuentas.reduce((sum, s) => sum + s.balance, 0);

    return (
        <div className="bg-gray-50">
            <main className="flex-1 p-8">
                {/* Encabezado */}
                <header className="flex justify-between items-start mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Subcuentas</h1>
                        <p className="text-gray-600">
                            Gestiona tus diferentes cuentas y objetivos de ahorro
                        </p>
                    </div>
                    <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                        + Nueva Subcuenta
                    </button>
                </header>

                {/* Resumen total */}
                <section className="mb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <p className="text-xs text-gray-500 mb-1">Balance Total de Subcuentas</p>
                        <p className="text-3xl font-bold text-gray-900">${totalBalance.toFixed(2)}</p>
                        <p className="text-xs text-gray-500 mt-2">{subcuentas.length} subcuentas activas</p>
                    </div>
                </section>

                {/* Grid de subcuentas */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {subcuentas.map((subcuenta) => (
                        <div
                            key={subcuenta.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 flex items-center justify-center ${subcuenta.color} text-2xl rounded-lg`}>
                                        {subcuenta.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{subcuenta.name}</h3>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {subcuenta.transactions} transacciones
                                        </p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mb-4">
                                <p className="text-2xl font-bold text-gray-900">${subcuenta.balance.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <p className="text-xs text-gray-500">
                                    Última actividad: {subcuenta.lastActivity}
                                </p>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200 transition-colors">
                                        Ver Detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Acciones rápidas */}
                <section className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Acciones Rápidas</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                            <p className="font-medium text-gray-900 mb-1">Transferir entre cuentas</p>
                            <p className="text-xs text-gray-500">Mueve dinero entre tus subcuentas</p>
                        </button>
                        <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                            <p className="font-medium text-gray-900 mb-1">Establecer meta</p>
                            <p className="text-xs text-gray-500">Define objetivos de ahorro</p>
                        </button>
                        <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                            <p className="font-medium text-gray-900 mb-1">Ver historial</p>
                            <p className="text-xs text-gray-500">Revisa todas las transacciones</p>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

