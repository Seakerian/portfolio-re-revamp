import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function Links() {
  return (
    <ul className="flex justify-center space-x-3 flex-wrap mt-6 gap-1">
      <li className="flex items-center bg-gray-300 bg-opacity-15 px-2 rounded-2xl text-sm transform hover:scale-110 transition duration-200">
        <Link
          href="https://www.linkedin.com/in/marvin-dominguez-camacho-39ba95203"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon /> LinkedIn
        </Link>
      </li>
      <li className="flex items-center bg-gray-300 bg-opacity-15 px-2 rounded-2xl text-sm transform hover:scale-110 transition duration-200">
        <Link
          href="https://github.com/Seakerian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon /> GitHub
        </Link>
      </li>
      <li className="flex items-center bg-gray-300 bg-opacity-15 px-2 rounded-2xl text-sm transform hover:scale-110 transition duration-200">
        <a href="mailto:marvindom1998@gmail.com">
          <EmailIcon /> marvindom1998@gmail.com
        </a>
      </li>
      <li className="flex items-center bg-gray-300 bg-opacity-15 px-2 rounded-2xl text-sm transform hover:scale-110 transition duration-200">
        <a href="/cv.pdf" download>
          <FileDownloadIcon /> CV
        </a>
      </li>
    </ul>
  );
}
