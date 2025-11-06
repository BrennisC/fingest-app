
import fingest from "@/app/assets/img/fingest.jpg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


interface HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps = {}) {

    return (
        <header
            className={cn("bg-white border-b border-gray-200 header", className)}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-bold text-xl text-foreground header-logo"
                    >
                        <Image
                            src={fingest}
                            alt="Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain rounded"
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8 header-nav">
                        <Link
                            href="/"
                            className="text-foreground hover:text-slate-600 text-sm font-medium transition"
                        >
                            Funcionalidades
                        </Link>
                        <Link
                            href="/about"
                            className="text-foreground hover:text-slate-600 text-sm font-medium transition"
                        >
                            Sobre nosotros
                        </Link>
                        <Link
                            href="/price"
                            className="text-foreground hover:text-slate-600 text-sm font-medium transition"
                        >
                            Precios
                        </Link>
                        <Link
                            href="/"
                            className="text-foreground hover:text-slate-600 text-sm font-medium transition"
                        >
                            Contacto
                        </Link>
                    </nav>

                    {/* Right side buttons */}
                    <div className="flex items-center gap-4 header-user">
                        <Link
                            href="/login"
                            className="text-foreground hover:text-slate-600 text-sm font-medium transition"
                        >
                            Iniciar sesión
                        </Link>
                        <Link
                            href="/register"
                            className="bg-slate-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-900 transition rounded-sm"
                        >
                            Comenzar gratis
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    );
}
