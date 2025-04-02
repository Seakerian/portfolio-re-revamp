export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center w-full h-28 mt-20 text-white ">
      <div>
        <span>Marvin Dominguez © {currentYear}</span>
      </div>
    </footer>
  );
}
