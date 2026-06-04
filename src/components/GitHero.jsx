import { motion } from "framer-motion";
export default function GitHero() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="bg-[#161B22] rounded-xl p-6 border border-gray-700 max-w-4xl mx-auto shadow-xl"
>
      <div className="text-green-500 font-mono text-lg mb-4">
        $ git log --career
      </div>

      <div className="font-mono text-gray-300 space-y-6">
        <div>
  <p className="text-yellow-400">commit 001</p>
  <p>Started B.Tech CSE at Banasthali Vidyapith</p>
</div>

<div>
  <p className="text-yellow-400">commit 002</p>
  <p>Joined E-Cell and Campus Activities</p>
</div>

<div>
  <p className="text-yellow-400">commit 003</p>
  <p>Worked as Graphic Designer at Oscode</p>
</div>

<div>
  <p className="text-yellow-400">commit 004</p>
  <p>Built AI Content Moderation System</p>
</div>

<div>
  <p className="text-yellow-400">commit 005</p>
  <p>Web Development Internship at RV University</p>
</div>

<div>
  <p className="text-green-500">commit HEAD</p>
  <p>Building HunarHub & Seeking SDE Internship</p>
</div>
      </div>
    </motion.div>
  );
}