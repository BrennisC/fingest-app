"use client";


import fingest from "@/app/assets/img/fingest.jpg";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/dist/client/link";
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";


export default function LoginForm() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí irá la lógica de inicio de sesión
        console.log("Login form submitted");
        handleHome();
    };

    const handleHome = () => {
        window.location.href = "/dashboard";

    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-md">
                {/* Logo Section */}
                <div className="text-center mb-8 login-logo">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 mb-4 transition-transform hover:scale-105"
                    >
                        <Image
                            src={fingest}
                            alt="Logo"
                            width="100"
                            height="100"
                            className="border-t-green-700 rounded-2xl"
                        />
                    </Link>
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                        Bienvenido de vuelta
                    </h1>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                        Inicia sesión en tu cuenta para acceder a tu panel
                    </p>
                </div>

                {/* Login Form */}
                <Card className="mb-6 border-0 shadow-lg login-form">
                    <CardHeader className="relative pb-2">

                        <CardTitle>Iniciar Sesión</CardTitle>
                        <CardDescription>
                            Introduce tus credenciales para continuar
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form className="space-y-4">
                            {/* Email Field */}
                            <div className="login-email space-y-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-foreground"
                                >
                                    Correo Electrónico
                                </label>
                                <div className="relative">
                                    <Mail
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                        size={18}
                                    />
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="tu@email.com"
                                        className="pl-10 transition-all border-input focus-within:border-primary"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="login-password space-y-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-foreground"
                                >
                                    Contraseña
                                </label>
                                <div className="relative">
                                    {/* You can add an icon here if desired */}
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="pl-10 transition-all border-input focus-within:border-primary"
                                    />
                                </div>
                            </div>



                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="login-button w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 mt-6"
                                onClick={handleSubmit}
                            >
                                Iniciar Sesión
                            </Button>

                            {/* Forgot Password Link */}
                            <div className="text-center pt-1">
                                <Button
                                    variant="link"
                                    className="text-sm text-primary hover:text-primary/80 p-0 h-auto"

                                >
                                    ¿Olvidaste tu contraseña?
                                </Button>
                            </div>
                        </form>
                    </CardContent>

                    <CardFooter className="flex flex-col space-y-4 pt-0">
                        <div className="relative w-full py-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-muted"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-card px-2 text-xs text-muted-foreground">
                                    O
                                </span>
                            </div>
                        </div>

                        <div className="text-center w-full login-register">
                            <p className="text-muted-foreground text-sm mb-3">
                                ¿No tienes cuenta?{" "}
                                <Link
                                    href="/register"
                                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                                >
                                    Regístrate aquí
                                </Link>
                            </p>

                            <Button
                                variant="outline"
                                onClick={handleHome}
                                className="w-full flex items-center justify-center gap-2 transition-all"
                            >
                                <ArrowLeft size={16} />
                                Volver a inicio
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} FinGest. Todos los derechos reservados.
            </div>
        </div>
    );
}
