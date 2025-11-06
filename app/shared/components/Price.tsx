import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const questions_faq = [
    {
        question: "¿Puedo cambiar de plan en cualquier momento?",
        answer:
            "Sí, puedes actualizar o cancelar tu plan en cualquier momento. Los cambios se aplicarán en tu próximo ciclo de facturación.",
    },
    {
        question: "¿Ofrecen una prueba gratuita?",
        answer:
            "Sí, ofrecemos una prueba gratuita de 14 días para que puedas probar todas nuestras funciones sin compromiso.",
    },
    {
        question: "¿Cómo se manejan los datos personales?",
        answer:
            "Nos tomamos muy en serio la privacidad de tus datos. Consulta nuestra política de privacidad para más información.",
    },
];

export default function Price() {
    return (

        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8" id="price">
            <h1 className="text-4xl font-bold text-center text-primary mb-8">
                Precios de Fingest
            </h1>

            <div className="mb-12 text-center max-w-2xl mx-auto">
                <p className="text-lg">
                    Elige el plan que mejor se adapte a tus necesidades financieras. Sin
                    importar tu elección, estarás más cerca de alcanzar tus metas.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Plan Gratuito */}
                <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-slate-50 p-6 border-b">
                        <h3 className="text-2xl font-bold mb-2">Plan Free</h3>
                        <div className="flex items-end gap-1">
                            <span className="text-4xl font-bold">$0</span>
                            <span className="text-gray-500 mb-1">/mes</span>
                        </div>
                        <p className="text-gray-600 mt-2">
                            Perfecto para comenzar a organizar tus finanzas
                        </p>
                    </div>
                    <div className="p-6">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Registro básico de ingresos y gastos</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Visualización de estadísticas mensuales</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Hasta 3 categorías personalizadas</span>
                            </li>
                        </ul>
                        <button className="mt-6 w-full py-2 px-4 border border-primary text-primary font-medium rounded hover:bg-primary hover:text-white transition-colors">
                            Comenzar Gratis
                        </button>
                    </div>
                </div>

                {/* Plan Pro */}
                <div className="border rounded-lg overflow-hidden shadow-lg border-primary">
                    <div className="bg-primary text-white p-6 border-b relative">
                        <div className="absolute -top-1 -right-1 bg-yellow-400 text-xs font-bold text-gray-900 py-1 px-3 rounded-bl-lg rounded-tr-lg">
                            RECOMENDADO
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Plan Pro</h3>
                        <div className="flex items-end gap-1">
                            <span className="text-4xl font-bold">$9.99</span>
                            <span className="text-gray-200 mb-1">/mes</span>
                        </div>
                        <p className="text-gray-200 mt-2">
                            Control financiero completo y personalizado
                        </p>
                    </div>
                    <div className="p-6">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Todo lo incluido en el plan Free</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Categorías ilimitadas y personalizables</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Informes detallados y exportables</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Alertas y notificaciones personalizadas</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Soporte con AI para asesoramiento financiero</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Soporte prioritario 24/7</span>
                            </li>
                        </ul>
                        <button className="mt-6 w-full py-2 px-4 bg-primary text-white font-medium rounded hover:bg-primary-dark transition-colors">
                            Obtener Plan Pro
                        </button>
                    </div>
                </div>
            </div>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm md:max-w-4xl mx-auto mb-16"
            >
                <CarouselContent>
                    {questions_faq.map((feature, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="grid gap-4 p-8">
                                        <span className="text-2xl font-semibold">{feature.question}</span>
                                        <div className="ml-4">
                                            <p className="text-sm text-muted-foreground">
                                                {feature.answer}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    );
}
