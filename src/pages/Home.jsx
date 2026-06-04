import GitHero from "../components/GitHero";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import PathCard from "../components/PathCard";
import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
      const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0D1117] text-white ">
        <Navbar />
        <div className="p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">
          Diya Saini
        </h1>

        <TypeAnimation
  sequence={[
    "Building Products with MERN",
    2000,
     "commit 006: Built HunarHub",
    2000,
     "commit 005: Top 10 in Hackathon",
    2000,
    "commit HEAD: Seeking SDE Internship",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-xl text-gray-400"
/>
<p className="text-center text-gray-400 mb-12">
  Building products, solving problems, and growing one commit at a time.
</p>
<div className="flex justify-center gap-6 mb-10">

  <a
    href="https://github.com/sainidia333-png"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub size={30} />
  </a>

  <a
    href="https://www.linkedin.com/in/diya-saini-668832302"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin size={30} />
  </a>

</div>
<div className="text-center mb-12">
  <a
    href="/resume.pdf"
    download
    className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"
  >
    Download Resume
  </a>
</div>
        <GitHero />
        <div className="grid md:grid-cols-2 gap-6 mt-12">

  <PathCard
    title="Recruiter"
    description="See my skills, projects, achievements and resume."
    onClick={() => navigate("/recruiter")}
  />

  <PathCard
    title="Developer"
    description="Explore my engineering journey and project architecture."
    onClick={() => navigate("/developer")}
  />

</div>

        
</div>
      </div>
    </div>
  );
}