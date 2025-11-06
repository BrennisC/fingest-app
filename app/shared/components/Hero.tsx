import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CtaSection from "../ui/cta-section";
import About from "./About";
import { Contact } from "./Contact";
import Price from "./Price";

const features = [
    {
        title: "Gestión de presupuestos",
        description:
            "Crea y administra presupuestos personalizados para controlar tus gastos mensuales.",
        icon: "💼",
    },
    {
        title: "Ahorro inteligente",
        description:
            "Automatiza tus ahorros y alcanza tus metas financieras más rápido.",
        icon: "🏦",
    },
    {
        title: "Análisis de gastos",
        description:
            "Obtén informes detallados sobre tus hábitos de gasto y encuentra áreas de mejora.",
        icon: "📊",
    },
];

export default function Hero() {
    return (
        <div>

            <section className="bg-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-3xl pb-3">
                        Simplificamos tus finanzas
                        personales
                    </p>
                    <p className="text-base text-gray-600 mb-12 max-w-2xl mx-auto">
                        Somos expertos en tecnología financiera comprometidos con democratizar
                        el acceso a herramientas profesionales de gestión financiera.
                    </p>
                </div>

            </section>

            {/* Features Section */}

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm md:max-w-4xl mx-auto mb-16"
                id="features"
            >
                <CarouselContent>
                    {features.map((feature, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{feature.icon}</span>
                                        <div className="ml-4">
                                            <h3 className="text-sm font-bold text-foreground mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {feature.description}
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
            {/* Sobre nosotros */}
            <About />
            {/* Footer */}
            <Price />
            <Contact />
            <CtaSection />


        </div >
    );
}
