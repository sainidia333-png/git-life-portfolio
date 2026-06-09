export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0D1117]/70 border-b border-white/5">

      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">

        <h1 className="text-xl font-extrabold tracking-wide">

          <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Diya Saini
          </span>

        </h1>

        <div className="flex gap-8 text-sm font-medium">

          <a
            href="#about"
            className="text-gray-400 hover:text-green-400 transition"
          >
            About
          </a>

          <a
            href="#experience"
            className="text-gray-400 hover:text-green-400 transition"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="text-gray-400 hover:text-green-400 transition"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-gray-400 hover:text-green-400 transition"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="text-gray-400 hover:text-green-400 transition"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}