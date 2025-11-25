export default function FinancialAdvicePage() {
    const advice = [
        {
            id: 1,
            title: "Construye un fondo de emergencia",
            description: "Mantén al menos 3-6 meses de gastos en una cuenta de fácil acceso para emergencias inesperadas.",
            category: "Ahorro",
            icon: "🛡️",
            color: "bg-blue-100",
            priority: "high"
        },
        {
            id: 2,
            title: "Diversifica tus inversiones",
            description: "No pongas todos tus huevos en una canasta. Distribuye tus inversiones en diferentes activos.",
            category: "Inversión",
            icon: "📊",
            color: "bg-green-100",
            priority: "medium"
        },
        {
            id: 3,
            title: "Revisa tus gastos mensuales",
            description: "Analiza tus gastos recurrentes y elimina suscripciones que no uses regularmente.",
            category: "Presupuesto",
            icon: "💳",
            color: "bg-purple-100",
            priority: "high"
        },
        {
            id: 4,
            title: "Automatiza tus ahorros",
            description: "Configura transferencias automáticas a tu cuenta de ahorros cada mes para construir el hábito.",
            category: "Ahorro",
            icon: "🤖",
            color: "bg-yellow-100",
            priority: "medium"
        },
        {
            id: 5,
            title: "Paga tus deudas de alto interés primero",
            description: "Enfócate en eliminar las deudas con las tasas de interés más altas para ahorrar dinero a largo plazo.",
            category: "Deudas",
            icon: "💸",
            color: "bg-red-100",
            priority: "high"
        },
        {
            id: 6,
            title: "Invierte en tu educación financiera",
            description: "Dedica tiempo a aprender sobre finanzas personales. El conocimiento es la mejor inversión.",
            category: "Educación",
            icon: "📚",
            color: "bg-indigo-100",
            priority: "low"
        },
    ];

    const categories = ["Todos", "Ahorro", "Inversión", "Presupuesto", "Deudas", "Educación"];

    return (
        <div className="bg-gray-50">
            <main className="flex-1 p-8">
                {/* Encabezado */}
                <header className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Consejos Financieros</h1>
                    <p className="text-gray-600">
                        Recomendaciones personalizadas para mejorar tu salud financiera
                    </p>
                </header>

                {/* Banner de consejo destacado */}
                <section className="mb-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
                    <div className="flex items-start gap-4">
                        <div className="text-4xl">💡</div>
                        <div className="flex-1">
                            <h2 className="text-xl font-bold mb-2">Consejo del Día</h2>
                            <p className="text-blue-100 mb-4">
                                "Revisa tu presupuesto semanalmente. Pequeños ajustes regulares pueden generar grandes ahorros a largo plazo."
                            </p>
                            <button className="px-4 py-2 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                                Ver más consejos
                            </button>
                        </div>
                    </div>
                </section>

                {/* Filtros por categoría */}
                <section className="mb-6">
                    <div className="flex gap-3 flex-wrap">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${i === 0
                                    ? "bg-slate-700 text-white"
                                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Grid de consejos */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {advice.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className={`w-14 h-14 flex items-center justify-center ${item.color} text-2xl rounded-lg flex-shrink-0`}>
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                                            {item.category}
                                        </span>
                                        {item.priority === "high" && (
                                            <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded">
                                                Importante
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <button className="text-sm text-slate-700 font-medium hover:text-slate-900 transition-colors">
                                    Aplicar consejo →
                                </button>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Sección de recursos adicionales */}
                <section className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Recursos Adicionales</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                            <p className="font-medium text-gray-900 mb-1">📖 Calculadoras</p>
                            <p className="text-xs text-gray-500">Herramientas para planificar tus finanzas</p>
                        </button>
                        <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                            <p className="font-medium text-gray-900 mb-1">📚 Artículos</p>
                            <p className="text-xs text-gray-500">Lee sobre temas financieros importantes</p>
                        </button>
                        <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                            <p className="font-medium text-gray-900 mb-1">🎓 Cursos</p>
                            <p className="text-xs text-gray-500">Amplía tus conocimientos financieros</p>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

