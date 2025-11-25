import { courses } from "@/lib/courses";

export default function CoursesPage() {

    const completedCourses = courses.filter(c => c.progress === 100).length;
    const inProgressCourses = courses.filter(c => c.progress > 0 && c.progress < 100).length;

    return (
        <div className="bg-gray-50">
            <main className="flex-1 p-8">
                {/* Encabezado */}
                <header className="flex justify-between items-start mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Cursos</h1>
                        <p className="text-gray-600">
                            Mejora tus conocimientos financieros con nuestros cursos
                        </p>
                    </div>
                    <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                        Explorar Cursos
                    </button>
                </header>

                {/* Estadísticas */}
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <p className="text-xs text-gray-500 mb-1">Cursos Completados</p>
                        <p className="text-2xl font-bold text-green-600">{completedCourses}</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <p className="text-xs text-gray-500 mb-1">En Progreso</p>
                        <p className="text-2xl font-bold text-blue-600">{inProgressCourses}</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <p className="text-xs text-gray-500 mb-1">Total de Cursos</p>
                        <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
                    </div>
                </section>

                {/* Filtros */}
                <section className="mb-6">
                    <div className="flex gap-3 flex-wrap">
                        {["Todos", "En Progreso", "Completados", "Nuevos"].map((filter, i) => (
                            <button
                                key={i}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${i === 0
                                    ? "bg-slate-700 text-white"
                                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Grid de cursos */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 flex items-center justify-center ${course.color} text-2xl rounded-lg`}>
                                        {course.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                                                {course.category}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                                            {course.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {course.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Barra de progreso */}
                            {course.progress > 0 && (
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs text-gray-500">Progreso</span>
                                        <span className="text-xs font-medium text-gray-700">{course.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full transition-all"
                                            style={{ width: `${course.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            )}

                            {/* Información del curso */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span>📅 {course.duration}</span>
                                    <span>📖 {course.completed}/{course.lessons} lecciones</span>
                                </div>
                                <button className="px-4 py-2 text-sm font-medium bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                                    {course.progress === 0 ? "Comenzar" : course.progress === 100 ? "Revisar" : "Continuar"}
                                </button>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}

