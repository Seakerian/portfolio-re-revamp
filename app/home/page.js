import Links from "@/components/links";

export default function HomePage() {
  return (
    <section id="home" className="mt-20 scroll-m-20">
      <div className=" p-6 max-w-xl mx-auto">
        <h1 className="text-2xl">Marvin Dominguez</h1>
        <span className=" bg-violet-300 text-violet-900 rounded-lg px-2">
          Ready for work!
        </span>
        <p className="text-xl mt-2">
          <span className="text-violet-400">Web Developer Junior</span>, mainly
          focused on Frontend, with some Backend knowledge, seeking to improve
          and be the best version of myself everyday. From Manizales, Colombia.
        </p>
        <Links />
      </div>
    </section>
  );
}
