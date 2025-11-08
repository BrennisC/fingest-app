"use client";

import { useState } from "react";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("personal");

    const userInfo = {
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        phone: "+1 (555) 123-4567",
        joinDate: "Enero 2023",
        avatar: "👤",
        address: "123 Main St, Ciudad",
        country: "México",
        timezone: "America/Mexico_City"
    };

    const stats = [
        { label: "Transacciones Totales", value: "247" },
        { label: "Subcuentas Activas", value: "4" },
        { label: "Cursos Completados", value: "2" },
        { label: "Días Activo", value: "180" },
    ];

    const notificationPreferences = [
        { label: "Notificaciones por Email", enabled: true, description: "Recibe notificaciones importantes por correo electrónico" },
        { label: "Notificaciones Push", enabled: true, description: "Recibe alertas en tiempo real en tu dispositivo" },
        { label: "Alertas de Balance Bajo", enabled: true, description: "Te avisamos cuando tu balance esté por debajo del límite" },
        { label: "Recordatorios de Pagos", enabled: false, description: "Recibe recordatorios antes de que venzan tus pagos" },
        { label: "Resumen Semanal", enabled: true, description: "Recibe un resumen de tus finanzas cada semana" },
        { label: "Alertas de Gastos Inusuales", enabled: true, description: "Te notificamos sobre transacciones sospechosas" },
    ];

    const securitySettings = [
        { label: "Autenticación de dos factores (2FA)", enabled: false, description: "Añade una capa extra de seguridad a tu cuenta" },
        { label: "Sesiones activas", enabled: true, description: "Gestiona los dispositivos donde has iniciado sesión" },
        { label: "Historial de inicio de sesión", enabled: true, description: "Revisa los accesos recientes a tu cuenta" },
    ];

    const privacySettings = [
        { label: "Perfil público", enabled: false, description: "Permite que otros usuarios vean tu perfil" },
        { label: "Compartir estadísticas", enabled: false, description: "Comparte tus logros financieros de forma anónima" },
        { label: "Análisis de datos", enabled: true, description: "Permite que usemos tus datos para mejorar el servicio" },
    ];

    const tabs = [
        { id: "personal", label: "Información Personal", icon: "👤" },
        { id: "notifications", label: "Notificaciones", icon: "🔔" },
        { id: "security", label: "Seguridad", icon: "🔒" },
        { id: "privacy", label: "Privacidad", icon: "🛡️" },
        { id: "statistics", label: "Estadísticas", icon: "📊" },
        { id: "account", label: "Cuenta", icon: "⚙️" },
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case "personal":
                return (
                    <div className="space-y-6">
                        {/* Tarjeta de perfil */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-20 h-20 flex items-center justify-center bg-slate-700 text-white text-4xl rounded-full">
                                    {userInfo.avatar}
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                                        {userInfo.name}
                                    </h2>
                                    <p className="text-gray-600 mb-2">{userInfo.email}</p>
                                    <p className="text-sm text-gray-500">
                                        Miembro desde {userInfo.joinDate}
                                    </p>
                                </div>
                                <button className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                                    Cambiar Avatar
                                </button>
                            </div>
                        </div>

                        {/* Información de contacto */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Información de Contacto</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Nombre Completo</label>
                                    <input
                                        type="text"
                                        defaultValue={userInfo.name}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Email</label>
                                    <input
                                        type="email"
                                        defaultValue={userInfo.email}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Teléfono</label>
                                    <input
                                        type="tel"
                                        defaultValue={userInfo.phone}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Dirección</label>
                                    <input
                                        type="text"
                                        defaultValue={userInfo.address}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs text-gray-500 mb-1 block">País</label>
                                        <input
                                            type="text"
                                            defaultValue={userInfo.country}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-500 mb-1 block">Zona Horaria</label>
                                        <input
                                            type="text"
                                            defaultValue={userInfo.timezone}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                                        />
                                    </div>
                                </div>
                                <button className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                                    Guardar Cambios
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case "notifications":
                return (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Preferencias de Notificaciones</h3>
                            <p className="text-sm text-gray-500 mb-6">
                                Controla cómo y cuándo recibes notificaciones
                            </p>
                            <div className="space-y-4">
                                {notificationPreferences.map((pref, i) => (
                                    <div key={i} className="flex items-start justify-between py-4 border-b border-gray-100 last:border-0">
                                        <div className="flex-1 mr-4">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-sm font-medium text-gray-900">{pref.label}</span>
                                            </div>
                                            <p className="text-xs text-gray-500">{pref.description}</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                                            <input
                                                type="checkbox"
                                                defaultChecked={pref.enabled}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-700"></div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-6 w-full px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                                Guardar Preferencias
                            </button>
                        </div>
                    </div>
                );

            case "security":
                return (
                    <div className="space-y-6">
                        {/* Cambiar contraseña */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Cambiar Contraseña</h3>
                            <p className="text-sm text-gray-500 mb-6">
                                Actualiza tu contraseña regularmente para mantener tu cuenta segura
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Contraseña Actual</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Nueva Contraseña</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Confirmar Nueva Contraseña</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    />
                                </div>
                                <button className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                                    Actualizar Contraseña
                                </button>
                            </div>
                        </div>

                        {/* Configuración de seguridad */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Configuración de Seguridad</h3>
                            <div className="space-y-4">
                                {securitySettings.map((setting, i) => (
                                    <div key={i} className="flex items-start justify-between py-4 border-b border-gray-100 last:border-0">
                                        <div className="flex-1 mr-4">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-sm font-medium text-gray-900">{setting.label}</span>
                                            </div>
                                            <p className="text-xs text-gray-500">{setting.description}</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                                            <input
                                                type="checkbox"
                                                defaultChecked={setting.enabled}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-700"></div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 space-y-2">
                                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    Ver Sesiones Activas
                                </button>
                                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    Ver Historial de Inicio de Sesión
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case "privacy":
                return (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Configuración de Privacidad</h3>
                            <p className="text-sm text-gray-500 mb-6">
                                Controla cómo se comparten y utilizan tus datos
                            </p>
                            <div className="space-y-4">
                                {privacySettings.map((setting, i) => (
                                    <div key={i} className="flex items-start justify-between py-4 border-b border-gray-100 last:border-0">
                                        <div className="flex-1 mr-4">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-sm font-medium text-gray-900">{setting.label}</span>
                                            </div>
                                            <p className="text-xs text-gray-500">{setting.description}</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                                            <input
                                                type="checkbox"
                                                defaultChecked={setting.enabled}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-700"></div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-6 w-full px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                                Guardar Configuración
                            </button>
                        </div>

                        {/* Exportar datos */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Exportar Datos</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Descarga una copia de todos tus datos personales
                            </p>
                            <button className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                                Solicitar Exportación de Datos
                            </button>
                        </div>
                    </div>
                );

            case "statistics":
                return (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Estadísticas de tu Cuenta</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {stats.map((stat, i) => (
                                    <div key={i} className="p-4 bg-gray-50 rounded-lg">
                                        <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Actividad Reciente</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Último inicio de sesión</p>
                                        <p className="text-xs text-gray-500">Hace 2 horas</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Última transacción</p>
                                        <p className="text-xs text-gray-500">Hace 1 día</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-3">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Cuenta creada</p>
                                        <p className="text-xs text-gray-500">{userInfo.joinDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "account":
                return (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Gestión de Cuenta</h3>
                            <p className="text-sm text-gray-500 mb-6">
                                Opciones avanzadas para gestionar tu cuenta
                            </p>
                            <div className="space-y-3">
                                <button className="w-full px-4 py-3 text-left text-sm text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <p className="font-medium">Descargar Datos</p>
                                    <p className="text-xs text-gray-500">Obtén una copia de todos tus datos</p>
                                </button>
                                <button className="w-full px-4 py-3 text-left text-sm text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <p className="font-medium">Desactivar Cuenta</p>
                                    <p className="text-xs text-gray-500">Temporalmente desactiva tu cuenta</p>
                                </button>
                                <button className="w-full px-4 py-3 text-left text-sm text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                                    <p className="font-medium">Eliminar Cuenta Permanentemente</p>
                                    <p className="text-xs text-red-500">Esta acción no se puede deshacer</p>
                                </button>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-sm p-6 text-white">
                            <h3 className="text-lg font-bold mb-2">¿Necesitas Ayuda?</h3>
                            <p className="text-sm text-slate-200 mb-4">
                                Nuestro equipo de soporte está aquí para ayudarte con cualquier pregunta
                            </p>
                            <button className="w-full px-4 py-2 bg-white text-slate-700 rounded-lg font-medium hover:bg-slate-100 transition-colors">
                                Contactar Soporte
                            </button>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="bg-gray-50">
            <main className="flex-1 p-8">
                {/* Encabezado */}
                <header className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Configuración</h1>
                    <p className="text-gray-600">
                        Gestiona tu información personal, preferencias y configuración de cuenta
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Navegación lateral de pestañas */}
                    <aside className="lg:col-span-1">
                        <nav className="bg-white rounded-xl shadow-sm border border-gray-200 p-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1 ${activeTab === tab.id
                                        ? "bg-slate-700 text-white"
                                        : "text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    <span className="text-lg">{tab.icon}</span>
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Contenido de la pestaña activa */}
                    <section className="lg:col-span-3">
                        {renderTabContent()}
                    </section>
                </div>
            </main>
        </div>
    );
}

