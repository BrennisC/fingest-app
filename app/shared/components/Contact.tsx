"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    Ponte en contacto
                </h1>
                <p className="text-gray-600 text-lg mb-10">
                    ¿Tienes dudas o deseas más información sobre Fingest?
                    <br />
                    Completa el formulario y te responderemos en breve.
                </p>
            </div>

            <Card className="w-full max-w-md shadow-md border border-gray-200">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-semibold">Contáctanos</CardTitle>
                    <CardDescription>
                        Inicia tu viaje financiero con Fingest. ¡Regístrate o escríbenos!
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form
                        className="flex flex-col gap-5"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Mensaje enviado correctamente ✅");
                        }}
                    >
                        {/* Nombre */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Nombre</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Tu nombre completo"
                                required
                            />
                        </div>

                        {/* Correo */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="tucorreo@ejemplo.com"
                                required
                            />
                        </div>

                        {/* Mensaje */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="message">Mensaje</Label>
                            <Textarea
                                id="message"
                                placeholder="Escribe tu mensaje aquí..."
                                className="min-h-[120px]"
                                required
                            />
                        </div>

                        {/* Botón */}
                        <CardFooter className="justify-center pt-4">
                            <Button
                                type="submit"
                                className="w-full bg-slate-700 hover:bg-slate-900 text-white transition"
                            >
                                Enviar mensaje
                            </Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
}
