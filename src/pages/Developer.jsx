import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
export default function Developer() {
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
          Developer Journey
        </h1>

        <p className="text-gray-400 mb-12">
          git log --engineering
        </p>
        <div className="space-y-8 mb-20">

  <div className="border-l-4 border-green-500 pl-6">
    <p className="text-green-500 font-mono">
      commit 001
    </p>
    <h3 className="text-2xl font-bold">
      Started Programming
    </h3>
    <p className="text-gray-400">
      Learned C++ and problem solving fundamentals.
    </p>
  </div>

  <div className="border-l-4 border-green-500 pl-6">
    <p className="text-green-500 font-mono">
      commit 002
    </p>
    <h3 className="text-2xl font-bold">
      Entered DSA
    </h3>
    <p className="text-gray-400">
      Solved 100+ LeetCode problems.
    </p>
  </div>

  <div className="border-l-4 border-green-500 pl-6">
    <p className="text-green-500 font-mono">
      commit 003
    </p>
    <h3 className="text-2xl font-bold">
      Built AI Moderation System
    </h3>
    <p className="text-gray-400">
      Top 10 team in an international hackathon.
    </p>
  </div>

  <div className="border-l-4 border-green-500 pl-6">
    <p className="text-green-500 font-mono">
      commit 004
    </p>
    <h3 className="text-2xl font-bold">
      Web Development Internship
    </h3>
    <p className="text-gray-400">
      Built React dashboard for content moderation.
    </p>
  </div>

  <div className="border-l-4 border-green-500 pl-6">
    <p className="text-green-500 font-mono">
      commit HEAD
    </p>
    <h3 className="text-2xl font-bold">
      Built HunarHub
    </h3>
    <p className="text-gray-400">
      Full-stack marketplace platform.
    </p>
  </div>

</div>
<h2 className="text-4xl font-bold mb-8">
  HunarHub Architecture
</h2>
<div className="bg-[#161B22] rounded-xl p-8 mb-20">

  <div className="space-y-6 text-center">

    <div className="bg-[#0D1117] p-4 rounded-lg">
      Customer / Entrepreneur
    </div>

    <div>↓</div>

    <div className="bg-[#0D1117] p-4 rounded-lg">
      React Frontend
    </div>

    <div>↓</div>

    <div className="bg-[#0D1117] p-4 rounded-lg">
      Node.js + Express Backend
    </div>

    <div>↓</div>

    <div className="bg-[#0D1117] p-4 rounded-lg">
      MongoDB Atlas
    </div>

  </div>

</div>
<h2 className="text-4xl font-bold mb-8">
  Core Modules
</h2>
<div className="grid md:grid-cols-2 gap-6 mb-20">

  <div className="bg-[#161B22] p-6 rounded-xl">
    JWT Authentication
  </div>

  <div className="bg-[#161B22] p-6 rounded-xl">
    Product Marketplace
  </div>

  <div className="bg-[#161B22] p-6 rounded-xl">
    Service Bookings
  </div>

  <div className="bg-[#161B22] p-6 rounded-xl">
    Real-time Messaging
  </div>

  <div className="bg-[#161B22] p-6 rounded-xl">
    Razorpay Payments
  </div>

  <div className="bg-[#161B22] p-6 rounded-xl">
    Cloudinary Media Storage
  </div>

</div>
<h2 className="text-4xl font-bold mb-6">
  Current Status
</h2>

<div className="bg-[#161B22] p-8 rounded-xl font-mono">

  <p className="text-green-500 mb-4">
    $ git status
  </p>

  <p>
    On branch career
  </p>

  <br />

  <p>
    Current Objective:
  </p>

  <p className="text-green-400">
    Software Engineering Internship
  </p>

  <br />

  <p>
    Learning:
  </p>

  <p className="text-green-400">
    Advanced DSA
  </p>

  <p className="text-green-400">
    System Design
  </p>

  <br />

  <p>
    Next Commit:
  </p>

  <p className="text-green-400">
    SDE Intern
  </p>

</div>

      </div>
    </div>
  );
}