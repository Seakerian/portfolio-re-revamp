import ProjectCarousel from "@/components/project-carousel";
import ProjectTile from "@/components/project-tile";
import TerminalIcon from "@mui/icons-material/Terminal";

export default function ProjectPage() {
  return (
    <section id="projects" className="mt-20 scroll-m-20">
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl">
          <TerminalIcon fontSize="large" /> Projects
        </h2>
        <ProjectCarousel />
      </div>
    </section>
  );
}
