import Link from "next/link";

export default function CtaSection() {
    return (

        <section className="cta-section bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-gray-600 mb-8">
                    Nuestra misión es empoderara las personas con las herramientas
                    financieras que necesitan para prosperar
                </p>
                <Link
                    href="/dashboard"
                    className="inline-block bg-slate-600 text-white px-8 py-3 font-semibold hover:bg-blue-900 transition rounded-sm"
                >
                    Comenzar ahora
                </Link>
            </div>

        </section>

    );
}