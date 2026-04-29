import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
    <main className="min-h-screen">
      <h1 className="sr-only">Kulsoom Jahangir — Flutter Front-End Developer Portfolio</h1>
      <Hero />
      <ProjectsSection />
      <Footer />
    </main>
    </>
  );
};

export default Index;
