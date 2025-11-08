import RootLayout from "./layout";
import Footer from "./shared/components/Footer";
import Header from "./shared/components/Header";
import Hero from "./shared/components/Hero";

export default function Home() {

  return (
    <RootLayout>

      <Header className="navigation-menu" />

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Hero />
      </div>
      <Footer />
    </RootLayout>
  );
}
