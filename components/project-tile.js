import Image from "next/image";
import Link from "next/link";
import LinkIcon from "@mui/icons-material/Link";

export default function ProjectTile({ title, description, imageUrl, url }) {
  return (
    <div className="flex flex-row items-center justify-between w-auto h-[300px] gap-10">
      <div className="md:w-[55%] w-[40%] h-auto flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>
      <div className="w-2/3 flex flex-col justify-center space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg font-normal ">{description}</p>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-black bg-opacity-15 text-white text-sm font-normal rounded-full hover:bg-violet-800 transition-all duration-200 hover:scale-110 w-fit"
        >
          <LinkIcon fontSize="medium" /> Preview
        </Link>
      </div>
    </div>
  );
}
