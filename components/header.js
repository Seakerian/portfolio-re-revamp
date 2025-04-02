import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-15 shadow-md p-1.5 rounded-2xl z-50 mt-4 w-full max-w-sm">
      <nav className="flex justify-evenly">
        <Link
          className="text-base font-normal text-white hover:text-gray-200 transform hover:scale-110 transition duration-200"
          href="#home"
        >
          Home
        </Link>
        <Link
          className="text-base font-normal  text-white hover:text-gray-200 transform hover:scale-110 transition duration-200"
          href="#skills"
        >
          Skills
        </Link>
        <Link
          className="text-base font-normal  text-white hover:text-gray-200 transform hover:scale-110 transition duration-200"
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className="text-base font-normal text-white hover:text-gray-200 transform hover:scale-110 transition duration-200"
          href="#contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
