export default function TransactionsPage() {
    const transactions = [
        {
            id: 1,
            icon: "🌐",
            title: "Internet Bill",
            date: "Jul 21, 2023",
            category: "Utilities",
            amount: -150.00,
            type: "expense"
        },
        {
            id: 2,
            icon: "🎬",
            title: "Movie Night",
            date: "Jul 19, 2023",
            category: "Entertainment",
            amount: -33.00,
            type: "expense"
        },
        {
            id: 3,
            icon: "🍽️",
            title: "Restaurant Dinner",
            date: "Jul 17, 2023",
            category: "Food & Dining",
            amount: -68.00,
            type: "expense"
        },
        {
            id: 4,
            icon: "💰",
            title: "Salary",
            date: "Jul 15, 2023",
            category: "Income",
            amount: 2500.00,
            type: "income"
        },
        {
            id: 5,
            icon: "🛒",
            title: "Grocery Shopping",
            date: "Jul 14, 2023",
            category: "Food & Dining",
            amount: -125.50,
            type: "expense"
        },
        {
            id: 6,
            icon: "⛽",
            title: "Gas Station",
            date: "Jul 12, 2023",
            category: "Transportation",
            amount: -45.00,
            type: "expense"
        },
    ];

    const categories = [
        { name: "All", count: transactions.length },
        { name: "Income", count: transactions.filter(t => t.type === "income").length },
        { name: "Expenses", count: transactions.filter(t => t.type === "expense").length },
        { name: "Food & Dining", count: transactions.filter(t => t.category === "Food & Dining").length },
        { name: "Utilities", count: transactions.filter(t => t.category === "Utilities").length },
        { name: "Entertainment", count: transactions.filter(t => t.category === "Entertainment").length },
    ];

    const totalIncome = transactions
        .filter(t => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = transactions
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    return (
        <div className="bg-gray-50">
            <main className="flex-1 p-8">
                {/* Encabezado */}
                <header className="flex justify-between items-start mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
                        <p className="text-gray-600">
                            View and manage all your financial transactions
                        </p>
                    </div>
                    <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                        + Add Transaction
                    </button>
                </header>

                {/* Estadísticas rápidas */}
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <p className="text-xs text-gray-500 mb-1">Total Income</p>
                        <p className="text-2xl font-bold text-green-600">${totalIncome.toFixed(2)}</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <p className="text-xs text-gray-500 mb-1">Total Expenses</p>
                        <p className="text-2xl font-bold text-red-600">${totalExpenses.toFixed(2)}</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <p className="text-xs text-gray-500 mb-1">Net Balance</p>
                        <p className="text-2xl font-bold text-gray-900">${(totalIncome - totalExpenses).toFixed(2)}</p>
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
                                {cat.name} ({cat.count})
                            </button>
                        ))}
                    </div>
                </section>

                {/* Lista de transacciones */}
                <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900">All Transactions</h2>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">Export</button>
                            <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">Filter</button>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {transactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors last:border-0"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 text-xl rounded-lg">
                                        {transaction.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">
                                            {transaction.title}
                                        </p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <p className="text-xs text-gray-500">{transaction.date}</p>
                                            <span className="text-xs text-gray-400">•</span>
                                            <span className="text-xs text-gray-500">{transaction.category}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p
                                        className={`text-sm font-bold ${transaction.type === "income"
                                            ? "text-green-600"
                                            : "text-red-600"
                                            }`}
                                    >
                                        {transaction.type === "income" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

