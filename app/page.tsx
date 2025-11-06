
import Link from "next/link";
import RootLayout from "./layout";
import Footer from "./shared/components/Footer";
import Header from "./shared/components/Header";
import Hero from "./shared/components/Hero";


const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="bg-white border border-gray-200 p-8 text-center hover:border-slate-600 hover:shadow-sm transition">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-sm font-bold text-foreground mb-3">{title}</h3>
    <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function Home() {

  return (
    <RootLayout>

      <Header className="navigation-menu" />

      {/* Hero Section */}
      <div className="hero-section">
        <Hero />
      </div>

      {/* Features Section */}
      <section className="features-section bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="features-cards">
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon="🧠"
                title="Inteligencia Artificial"
                description="Algoritmos avanzados para análisis predictivo y recomendaciones personalizadas"
              />
              <FeatureCard
                icon="👥"
                title="Equipo Experto"
                description="Profesionales en finanzas y tecnología trabajando para tu éxito financiero"
              />
              <FeatureCard
                icon="❤️"
                title="Pasión por Ayudar"
                description="Cada funcionalidad está diseñado pensando en mejorar tu bienestar financiero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      <Footer />
    </RootLayout>
  );
}
