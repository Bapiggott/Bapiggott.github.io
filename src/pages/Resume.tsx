import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      className="max-w-6xl mx-auto py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-semibold text-center mb-6">My Resume</h2>

      <div className="rounded-xl border border-white/10 bg-card shadow-soft overflow-hidden">
        <iframe
          src={`${import.meta.env.BASE_URL}PiggottResume.pdf`}
          className="w-full h-[80vh]"
          title="Resume"
        />
      </div>

      <div className="flex justify-center mt-6">
        <a
          href={`${import.meta.env.BASE_URL}PiggottResume.pdf`}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium shadow-soft"
        >
          Open Fullscreen
        </a>
      </div>
    </motion.div>
  );
}
