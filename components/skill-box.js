import Image from "next/image";

export default function SkillBox({ iconSrc, title }) {
  return (
    <div className="flex p-2 border border-purple-700 rounded-lg shadow-md gap-2 items-center justify-center w-40 h-15 bg-black bg-opacity-15  hover:bg-purple-700 transition-all duration-200">
      <Image src={iconSrc} width={25} height={25} alt={title} />
      <h3 className="text-base font-normal text-white">{title}</h3>
    </div>
  );
}
