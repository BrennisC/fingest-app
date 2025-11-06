import RootLayout from "./layout";
import About from "./shared/components/About";
import Footer from "./shared/components/Footer";
import Header from "./shared/components/Header";
import Hero from "./shared/components/Hero";
import Price from "./shared/components/Price";
import CtaSection from "./shared/ui/cta-section";

export default function Home() {

  return (
    <RootLayout>

      <Header className="navigation-menu" />

      {/* Hero Section */}
      <div className="hero-section">
        <Hero />
      </div>
      <Footer />
    </RootLayout>
  );
}
