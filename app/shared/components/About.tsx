import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const features_about = [
    {
        title: "Control de Gastos",
        description:
            "Registra y categoriza tus gastos diarios para entender mejor tus hábitos de consumo.",
        icon: "💸",
    },
    {
        title: "Presupuestos Personalizados",
        description:
            "Crea presupuestos adaptados a tus necesidades y recibe alertas cuando te acerques a los límites establecidos.",
        icon: "📊",
    }, {
        title: "Subcuentas",
        description:
            "Organiza tus finanzas creando subcuentas para diferentes objetivos o categorías de gasto.",
        icon: "📂",
    },
    {
        title: "Consejos Financieros",
        description:
            "Obtén recomendaciones personalizadas para mejorar tu salud financiera basadas en tus hábitos de gasto.",
        icon: "💡",
    }
]
export default function About() {
    return (

        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8" id="about">
            <h1 className="text-4xl font-bold text-center text-primary mb-8">
                Sobre Fingest
            </h1>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm md:max-w-4xl mx-auto mb-16"
            >
                <CarouselContent>
                    {features_about.map((feature, index) => (
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

        </div>

    );
}
