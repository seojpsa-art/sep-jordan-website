import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSEP from "@/components/AboutSEP";
import CountriesExplorer from "@/components/CountriesExplorer";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import ApplicationForm from "@/components/ApplicationForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-sep-navy overflow-hidden">
      <Navbar />
      <Hero />
      <AboutSEP />
      <CountriesExplorer />
      <Testimonials />
      <Timeline />
      <ApplicationForm />
      <FAQ />
      <Footer />
    </main>
  );
}
