import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0D1117]/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-green-500">
          git-life
        </h1>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/recruiter">Recruiter</Link>
          <Link to="/developer">Developer</Link>
        </div>
      </div>
    </nav>
  );
}