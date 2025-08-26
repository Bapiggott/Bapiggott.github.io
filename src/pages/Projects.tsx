import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Aero-LLM",
    blurb: "Distributed agents for UAV comms risk detection; fine-tuning & datasets.",
    tags: ["UAV", "Security", "LLM"],
    link: "https://arxiv.org/abs/2502.05220"
  },
  {
    title: "Net-GPT",
    blurb: "MITM-aware LLM for protocol interpretation; accuracy analyses.",
    tags: ["Networking", "Security", "LLM"],
    link: "https://dl.acm.org/doi/abs/10.1145/3583740.3626809"
  },
  {
    title: "Fitness-Pal Pro",
    blurb: "Create/log/share custom workouts. Web + Python + SQL.",
    tags: ["Web", "Python", "SQL"],
    link: "https://github.com/AlexMerlo1/Fitness-Pal-Pro"
  },
  {
    title: "LetterMatch",
    blurb: "Children’s spelling game built with Python, JS, React, Vite, and SQLite.",
    tags: ["Python", "React", "Vite", "SQLite"],
    link: "https://github.com/Bapiggott/LetterMatch"
  },
  {
    title: "DNN-FromScratch",
    blurb: "Custom FCNN & CNN components from scratch for CIFAR-10 classification.",
    tags: ["Python", "Deep Learning", "CNN", "FCNN"],
    link: "https://github.com/Bapiggott/CSI4140-DNN-FromScratch"
  },
  {
    title: "MovieDatabase",
    blurb: "Movie logging website using Python, HTML, CSS, and SQL.",
    tags: ["Python", "HTML", "CSS", "SQL"],
    link: "https://github.com/Bapiggott/MovieDatabase"
  },
  {
    title: "Heterogeneous Generative Dataset for UASes",
    blurb: "Created UAV dataset using digital twins, fuzzers, and physical UAVs for LLM training and cybersecurity threat detection.",
    tags: ["Dataset", "UAV", "LLM", "Security"],
    link: "https://ieeexplore.ieee.org/abstract/document/10211027"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  return (
    <div className="flex flex-col gap-10">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured <span className="text-cyan-300">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="rounded-2xl border border-white/10 bg-card p-5 hover:border-white/20 transition shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-medium">{p.title}</h3>
            <p className="mt-2 text-white/70">{p.blurb}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5"
                >
                  #{t}
                </span>
              ))}
            </div>
            {p.link && (
              <button
                onClick={() => setSelectedProject(p)}
                className="inline-block mt-4 text-cyan-300 hover:text-cyan-200"
              >
                Learn more →
              </button>
            )}
          </motion.article>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProject && (
         <div className="modal-overlay" style={{ background: "transparent" }}>
            <div className="modal-content bg-card bg-opacity-95 relative">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <p className="mt-2 text-white/70">{selectedProject.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
              >
                Close
              </button>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition"
              >
                Open Full Project →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
