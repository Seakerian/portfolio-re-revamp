import Header from "@/components/header";
import SkillsPage from "./skills/page";
import HomePage from "./home/page";
import ProjectPage from "./projects/page";
import ContactPage from "./contact/page";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-800 to-black bg-gradient-size animate-gradient_shift">
      <Header />
      <main className="pt-20 flex-grow relative">
        <HomePage />
        <SkillsPage />
        <ProjectPage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
