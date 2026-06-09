import Navbar from "../components/Navbar";
import hunarhub from "../assets/hunarhub.png";
import profileImg from "../assets/diya.png";
import { motion } from "framer-motion";
import FadeUp from "../components/FadeUp";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "../components/ParticlesBackground";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white relative overflow-hidden">
      <ParticlesBackground />
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full"></div>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO SECTION */}
        <FadeUp>
          <section className="py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* LEFT SIDE */}
              

              <div>
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-green-500/30 bg-green-500/10 mb-8">
  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

  <span className="text-green-400 font-medium tracking-wide">
    AVAILABLE FOR INTERNSHIPS
  </span>
</div>
                <p className="text-green-500 uppercase tracking-[0.3em] text-sm mb-4">
                  Computer Science Student
                </p>

                <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
                  Hi, I'm
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                    Diya Saini
                  </span>
                </h1>
<TypeAnimation
  sequence={[
    "Full Stack Developer",
    2000,
    "MERN Stack Developer",
    2000,
    "AI/ML Enthusiast",
    2000,
    "Problem Solver",
    2000,
  ]}
  wrapper="div"
  speed={50}
  repeat={Infinity}
  className="text-2xl text-green-400 font-semibold mt-4"
/>

                <div className="flex gap-4 mt-8 flex-wrap">
                  <a
                    href="#projects"
                    className="bg-green-500 text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
                  >
                    View Projects
                  </a>

                  <a
                    href="/resume.pdf"
                    className="border border-gray-700 px-6 py-3 rounded-xl hover:border-green-500 transition"
                  >
                    Resume
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE */}

              <div className="flex justify-center">
                <motion.img
                  src={profileImg}
                  alt="Diya"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-72 h-72 object-cover rounded-full border-4 border-green-500 shadow-[0_0_50px_rgba(34,197,94,0.3)]"
                />
              </div>
            </div>
          </section>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          <div>
            <h3 className="text-4xl font-bold text-green-500">9.18</h3>
            <p className="text-gray-400">CGPA</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-500">1+</h3>
            <p className="text-gray-400">Internship</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-500">Top 10</h3>
            <p className="text-gray-400">Hackathon Finalist</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-500">2+</h3>
            <p className="text-gray-400">Major Projects</p>
          </div>
        </div>

        {/* ABOUT */}
        <FadeUp>
          <section id="about" className="mb-32">
            <p className="text-green-500 uppercase tracking-[0.3em] text-sm mb-4">
              About
            </p>

            <h2 className="text-5xl md:text-6xl font-extrabold mb-10">
  <span className="text-white">About</span>{" "}
  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
    Me.
  </span>
</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-400 leading-8 mb-6">
                  I'm Diya Saini, a Computer Science student passionate about
                  Full-Stack Development, Artificial Intelligence, and Software
                  Engineering.
                </p>

                <p className="text-gray-400 leading-8 mb-6">
                  I enjoy turning ideas into real applications, from designing
                  responsive interfaces to building scalable backend systems.
                </p>

                <p className="text-gray-400 leading-8">
                  My current focus is building production-ready web applications
                  while strengthening my problem-solving and AI skills.
                </p>
              </div>

              <div className="bg-[#161B22] border border-gray-800 rounded-2xl
hover:border-green-500/30 hover:-translate-y-1
transition duration-300 p-8">
                <h3 className="text-2xl font-semibold mb-6">Education</h3>

                <p className="text-green-500 font-medium">
                  B.Tech Computer Science
                </p>

                <p className="text-gray-400 mt-2">Banasthali University</p>

                <p className="text-gray-500 mt-2">2024 – 2028</p>

                <p className="text-white text-3xl font-bold mt-8">9.18 CGPA</p>
              </div>
            </div>
          </section>
        </FadeUp>
        {/* EXPERIENCE */}
        <FadeUp>
          <section id="experience" className="mb-32">
            <p className="text-green-500 uppercase tracking-[0.3em] text-sm mb-4">
              Experience
            </p>

            <h2 className="text-5xl md:text-6xl font-extrabold mb-10">
  <span className="text-white">My</span>{" "}
  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
    Experience.
  </span>
</h2>

            <div className="bg-[#161B22] border border-gray-800 rounded-2xl
hover:border-green-500/30 hover:-translate-y-1
transition duration-300 p-8">
              <p className="text-green-500 font-medium">
                Web Development Intern
              </p>

              <h3 className="text-2xl font-semibold mt-2">Unified Mentor</h3>

              <p className="text-gray-500 mt-2">Internship</p>

              <p className="text-gray-400 mt-6 leading-8">
                Worked on web development projects, gained hands-on experience
                with frontend and backend technologies, and learned real-world
                software development workflows.
              </p>
            </div>
          </section>
        </FadeUp>

        {/* PROJECTS */}
        <FadeUp>
          <section id="projects" className="mb-32">
            <p className="text-green-500 uppercase tracking-[0.3em] text-sm mb-4">
              Projects
            </p>

            <h2 className="text-5xl md:text-6xl font-extrabold mb-10">
  <span className="text-white">Featured</span>{" "}
  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
    Projects.
  </span>
</h2>

            {/* HunarHub */}
            <div className="bg-[#161B22] border border-gray-800 rounded-2xl
hover:border-green-500/30 hover:-translate-y-1
transition duration-300 p-8 mb-8">
              <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm">
                Featured Project
              </span>

              <img
                src={hunarhub}
                alt="HunarHub"
                className="rounded-xl mb-6 border border-gray-800"
              />

              <h3 className="text-3xl font-bold mt-6">HunarHub Marketplace</h3>

              <p className="text-gray-400 mt-4 leading-8">
                A full-stack marketplace platform connecting entrepreneurs and
                customers through products, services, secure payments,
                messaging, and reviews.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="border border-gray-700 px-3 py-1 rounded-full">
                  React
                </span>

                <span className="border border-gray-700 px-3 py-1 rounded-full">
                  Node.js
                </span>

                <span className="border border-gray-700 px-3 py-1 rounded-full">
                  Express
                </span>

                <span className="border border-gray-700 px-3 py-1 rounded-full">
                  MongoDB Atlas
                </span>

                <span className="border border-gray-700 px-3 py-1 rounded-full">
                  JWT
                </span>

                <span className="border border-gray-700 px-3 py-1 rounded-full">
                  Razorpay
                </span>

                <span className="border border-gray-700 px-3 py-1 rounded-full">
                  Cloudinary
                </span>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://hunarhub-jys9hyt9d-sainidia333-2202s-projects.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 text-black px-5 py-2 rounded-lg"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/sainidia333-png/hunarhub"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-gray-700 px-5 py-2 rounded-lg"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="bg-[#161B22] border border-gray-800 rounded-2xl
hover:border-green-500/30 hover:-translate-y-1
transition duration-300 p-8">
              <h3 className="text-2xl font-bold">
                Financial Habit Builder & Wealth Tracker
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                AI-powered platform helping users track expenses, understand
                spending habits, and improve financial decisions.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="border border-gray-700 px-3 py-1 rounded-full">
                  React
                </span>

                <span className="border border-gray-700 px-3 py-1 rounded-full">
                  Node.js
                </span>

                <span className="border border-gray-700 px-3 py-1 rounded-full">
                  MongoDB
                </span>

                <span className="border border-gray-700 px-3 py-1 rounded-full">
                  AI
                </span>
              </div>
            </div>
          </section>
        </FadeUp>

        <FadeUp>
          <section id="achievements" className="mb-32">
            <p className="text-green-500 uppercase tracking-[0.3em] text-sm mb-4">
              Achievements
            </p>

           <h2 className="text-5xl md:text-6xl font-extrabold mb-10">
  <span className="text-white">Achievements</span>{" "}
  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
    & Awards.
  </span>
</h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:-translate-y-1 hover:border-green-500/30 transition duration-300">
                <h3 className="text-4xl font-bold text-green-500">9.18</h3>
                <p className="mt-3 text-gray-400">
                  Current CGPA in B.Tech Computer Science
                </p>
              </div>

              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:-translate-y-1 hover:border-green-500/30 transition duration-300">
                <h3 className="text-4xl font-bold text-green-500">Top 10</h3>
                <p className="mt-3 text-gray-400">
                 Hackathon Finalist
                </p>
              </div>

              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:-translate-y-1 hover:border-green-500/30 transition duration-300">
                <h3 className="text-2xl font-bold text-green-500">Research</h3>
                <p className="mt-3 text-gray-400">
                  Research Intern at RV University in AI/ML
                </p>
              </div>

              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:-translate-y-1 hover:border-green-500/30 transition duration-300">
                <h3 className="text-2xl font-bold text-green-500">Clubs</h3>
                <p className="mt-3 text-gray-400">
                  Active Member of E-Cell & OSCode
                </p>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* SKILLS */}
        <FadeUp>
          <section id="skills" className="mb-32">
            <p className="text-green-500 uppercase tracking-[0.3em] text-sm mb-4">
              Skills
            </p>

            <h2 className="text-5xl md:text-6xl font-extrabold mb-10">
  <span className="text-white">Technical</span>{" "}
  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
    Skills.
  </span>
</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#161B22] border border-gray-800 rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Frontend</h3>

                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  React
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  HTML
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  CSS
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  JavaScript
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  Tailwind CSS
</span>
                </div>
              </div>

              <div className="bg-[#161B22] border border-gray-800 rounded-2xl
hover:border-green-500/30 hover:-translate-y-1
transition duration-300 p-6">
                <h3 className="font-semibold mb-4">Backend</h3>

                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  Node.js
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  Express.js
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  REST APIs
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  JWT
</span>
                </div>
              </div>

              <div className="bg-[#161B22] border border-gray-800 rounded-2xl
hover:border-green-500/30 hover:-translate-y-1
transition duration-300 p-6">
                <h3 className="font-semibold mb-4">Database</h3>

                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  MongoDB
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  MongoDB Atlas
</span>
                </div>
              </div>

              <div className="bg-[#161B22] border border-gray-800 rounded-2xl
hover:border-green-500/30 hover:-translate-y-1
transition duration-300 p-6">
                <h3 className="font-semibold mb-4">Languages</h3>

                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  C++
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  Java
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  JavaScript
</span>
                </div>
              </div>

              <div className="bg-[#161B22] border border-gray-800 rounded-2xl
hover:border-green-500/30 hover:-translate-y-1
transition duration-300 p-6">
                <h3 className="font-semibold mb-4">Tools</h3>

                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  Git
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  GitHub
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  Postman
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  Cloudinary
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  Vercel
</span>
                </div>
              </div>

              <div className="bg-[#161B22] border border-gray-800 rounded-2xl
hover:border-green-500/30 hover:-translate-y-1
transition duration-300 p-6">
                <h3 className="font-semibold mb-4">Currently Learning</h3>

                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  AI/ML
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  Python
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  Pandas
</span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
  NumPy
</span>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* CONTACT */}
        <FadeUp>
          <section id="contact" className="pb-32 text-center">
            <p className="text-green-500 uppercase tracking-[0.3em] text-sm mb-4">
              Contact
            </p>

            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
  <span className="text-white">Let's</span>{" "}
  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
    Connect.
  </span>
</h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              I'm currently open to internships, collaborations, and
              opportunities where I can learn and contribute.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">

  <a
    href="mailto:saini.dia333@gmail.com"
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition"
  >
    <p className="text-green-500 text-sm">EMAIL</p>
    <p className="font-semibold mt-2">saini.dia333@gmail.com</p>
  </a>

  <a
    href="https://linkedin.com/in/diya-saini-668832302"
    target="_blank"
    rel="noreferrer"
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition"
  >
    <p className="text-green-500 text-sm">LINKEDIN</p>
    <p className="font-semibold mt-2">Connect With Me</p>
  </a>

  <a
    href="https://github.com/sainidia333-png"
    target="_blank"
    rel="noreferrer"
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition"
  >
    <p className="text-green-500 text-sm">GITHUB</p>
    <p className="font-semibold mt-2">View My Code</p>
  </a>

</div>
          </section>
        </FadeUp>
        <h3 className="text-4xl font-extrabold mb-4 drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]"></h3>
        <footer className="border-t border-white/10 mt-20 py-16">

  <div className="text-center">

    <h3 className="text-4xl font-extrabold mb-4">

      <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
        Diya Saini
      </span>

    </h3>

    <p className="text-gray-400 mb-8">
      Full Stack Developer • AI/ML Enthusiast • Problem Solver
    </p>

    <div className="flex justify-center gap-8 mb-8 flex-wrap">

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
        href="#achievements"
        className="text-gray-400 hover:text-green-400 transition"
      >
        Achievements
      </a>

      <a
        href="#contact"
        className="text-gray-400 hover:text-green-400 transition"
      >
        Contact
      </a>

    </div>

    <div className="flex justify-center gap-6 mb-8">

      <a
        href="https://github.com/sainidia333-png"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-green-400 transition"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/diya-saini-668832302"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-green-400 transition"
      >
        LinkedIn
      </a>

      <a
        href="https://leetcode.com/u/n71EuDAsJp/"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-green-400 transition"
      >
        LeetCode
      </a>

    </div>

    <p className="text-gray-500 text-sm">
      © 2026 Diya Saini • Built with React & Tailwind CSS
    </p>

  </div>

</footer>
            
      </div>
    </div>
  );
}
