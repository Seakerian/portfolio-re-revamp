import SkillBox from "./skill-box";
import HtmlSvg from "../public/icons/html.svg";
import cssSvg from "../public/icons/css.svg";
import jsSvg from "../public/icons/javascript.svg";
import reactSvg from "../public/icons/react.svg";
import nextjsSvg from "../public/icons/nextjs.svg";
import tailwindSvg from "../public/icons/tailwind.svg";
import postgreSvg from "../public/icons/postgresql.svg";
import flutterSvg from "../public/icons/flutter.svg";

const skills = [
  { id: 1, src: HtmlSvg, title: "HTML" },
  { id: 2, src: cssSvg, title: "CSS" },
  { id: 3, src: jsSvg, title: "JavaScript" },
  { id: 4, src: reactSvg, title: "React" },
  { id: 5, src: nextjsSvg, title: "Next.js" },
  { id: 6, src: tailwindSvg, title: "TailwindCSS" },
  { id: 7, src: postgreSvg, title: "PostgreSQL" },
  { id: 8, src: flutterSvg, title: "Flutter" },
];

export default function SkillGrid() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {skills.map((item) => (
          <SkillBox key={item.id} iconSrc={item.src} title={item.title} />
        ))}
      </div>
    </div>
  );
}
