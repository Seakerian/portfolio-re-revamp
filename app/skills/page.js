import SkillGrid from "@/components/skill-grid";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SkillsPage() {
  return (
    <section id="skills" className="mt-20 scroll-m-20">
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl mb-6">
          <SettingsIcon fontSize="large" /> Skills
        </h2>
        <SkillGrid />
      </div>
    </section>
  );
}
