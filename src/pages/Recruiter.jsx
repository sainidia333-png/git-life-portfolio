import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import ProjectGallery from "../components/ProjectGallery";
export default function Recruiter() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white p-8">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <Link
    to="/"
    className="text-green-500 hover:underline"
  >
    ← Back to Home
  </Link>

        <h1 className="text-5xl font-bold mb-4">
          Diya Saini
        </h1>

        <p className="text-xl text-gray-400 mb-12">
          Computer Science Student • Full Stack Developer
        </p>
        <div className="grid md:grid-cols-4 gap-6 mb-16">

  <div className="bg-[#161B22] p-6 rounded-xl">
    <h2 className="text-3xl font-bold text-green-500">
      9.18
    </h2>
    <p>CGPA</p>
  </div>

  <div className="bg-[#161B22] p-6 rounded-xl">
    <h2 className="text-3xl font-bold text-green-500">
      100+
    </h2>
    <p>LeetCode Problems</p>
  </div>

  <div className="bg-[#161B22] p-6 rounded-xl">
    <h2 className="text-3xl font-bold text-green-500">
      Top 10
    </h2>
    <p>International Hackathon</p>
  </div>

  <div className="bg-[#161B22] p-6 rounded-xl">
    <h2 className="text-3xl font-bold text-green-500">
      MERN
    </h2>
    <p>Full Stack Developer</p>
  </div>

</div>
<h2 className="text-3xl font-bold mb-6">
  Featured Project
</h2>
<div className="bg-[#161B22] p-8 rounded-xl mb-16">

  <h3 className="text-2xl font-bold text-green-500 mb-4">
    HunarHub
  </h3>

  <p className="text-gray-300 mb-6">
    Digital marketplace for local micro-entrepreneurs
    to showcase products and services online.
  </p>

  <div className="grid md:grid-cols-2 gap-6">

    <div>
      <h4 className="font-bold mb-3">
        Features
      </h4>

      <ul className="space-y-2 text-gray-400">
        <li>Customer & Entrepreneur Dashboards</li>
        <li>Marketplace</li>
        <li>Bookings</li>
        <li>Real-time Messaging</li>
        <li>Wishlist</li>
        <li>Reviews & Ratings</li>
        <li>Notifications</li>
        <li>Payment Integration</li>
      </ul>
    </div>

    <div>
      <h4 className="font-bold mb-3">
        Tech Stack
      </h4>

      <ul className="space-y-2 text-gray-400">
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB Atlas</li>
        <li>JWT Authentication</li>
        <li>Tailwind CSS</li>
        <li>Cloudinary</li>
        <li>Razorpay</li>
      </ul>
      <ProjectGallery />
    </div>

  </div>

</div>
<h2 className="text-3xl font-bold mb-6">
  Experience
</h2>
<div className="space-y-6 mb-16">

  <div className="bg-[#161B22] p-6 rounded-xl">
    <h3 className="text-xl font-bold">
      Web Development Intern
    </h3>
    <p className="text-green-500">
      Unified Mentor
    </p>
    <p className="text-gray-400 mt-2">
      Built React-based dashboard for
      real-time content analysis and moderation.
    </p>
  </div>

  <div className="bg-[#161B22] p-6 rounded-xl">
    <h3 className="text-xl font-bold">
      Graphic Designer
    </h3>
    <p className="text-green-500">
      Oscode
    </p>
  </div>

  <div className="bg-[#161B22] p-6 rounded-xl">
    <h3 className="text-xl font-bold">
      Volunteer
    </h3>
    <p className="text-green-500">
      E-Cell
    </p>
  </div>

</div>
<h2 className="text-3xl font-bold mb-6">
  Connect
</h2>

<div className="flex flex-wrap gap-4">

  <a
    href="https://github.com/sainidia333-png"
    target="_blank"
    className="bg-green-600 px-6 py-3 rounded-lg"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/diya-saini-668832302"
    target="_blank"
    className="bg-green-600 px-6 py-3 rounded-lg"
  >
    LinkedIn
  </a>

  <a
    href="https://leetcode.com/u/n71EuDAsJp/"
    target="_blank"
    className="bg-green-600 px-6 py-3 rounded-lg"
  >
    LeetCode
  </a>
  <a
  href="/resume.pdf"
  download
  className="inline-block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
>
  Download Resume
</a>

</div>

      </div>
    </div>
  );
}
