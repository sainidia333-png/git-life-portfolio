import { motion } from "framer-motion";
export default function PathCard({
  title,
  description,
  onClick,
}) {
  return (
    <motion.div
  whileHover={{
    scale: 1.05,
    borderColor: "#2EA043",
  }}
  whileTap={{ scale: 0.97 }}
  onClick={onClick}
  className="bg-[#161B22] border border-gray-700 rounded-xl p-6 cursor-pointer"
>
    
      <h2 className="text-2xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}