import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import GoogleScholarIcon from "../components/GoogleScholarIcon";
import "./Home.css";

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
    title: "Fitness-Pal Pro ",
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

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[number]>(null);

  return (
    <>
      {/* Page-scoped animated background (overrides global body bg visually) */}
      <div className="bg-animated" aria-hidden />

      <div className="home-container relative z-10 flex flex-col gap-12">
        {/* Top Section */}
        <motion.div
          className="hero-section text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="hero-title text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Hi, I’m <span className="text-cyan-300">Brett</span> — exploring{" "}
            <span className="text-purple-300">intelligent systems</span> and building tools
            that make an impact.
          </h1>
          <p className="hero-subtitle mt-5 text-white/70">
            CS & Math @ Oakland University. Passionate about AI, machine learning, and creating applications that solve real problems.
          </p>

          {/* Social Links */}
          <div className="social-links mt-6 flex justify-center gap-6 text-3xl text-white/80">
            <motion.a href="https://github.com/Bapiggott" target="_blank" rel="noreferrer" className="hover:text-white" whileHover={{ scale: 1.2 }}>
              <FaGithub />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/brett-piggott-82462b277" target="_blank" rel="noreferrer" className="hover:text-white" whileHover={{ scale: 1.2 }}>
              <FaLinkedin />
            </motion.a>
            <motion.a href="https://leetcode.com/u/bapiggott/" target="_blank" rel="noreferrer" className="hover:text-white" whileHover={{ scale: 1.2 }}>
              <SiLeetcode />
            </motion.a>
            <motion.a href="https://scholar.google.com/citations?user=16ANt88AAAAJ&hl=en" target="_blank" rel="noreferrer" className="hover:text-white" whileHover={{ scale: 1.2 }}>
              <GoogleScholarIcon size={28} />
            </motion.a>
          </div>

          {/* Buttons */}
          <div className="hero-buttons mt-8 flex justify-center gap-4">
            <a href="#/projects" className="btn-outline rounded-xl px-5 py-3 border shadow-soft transition">
              View Projects
            </a>
            <a href="#/resume" className="btn-primary rounded-xl px-5 py-3 text-black font-medium shadow-soft transition">
              Resume
            </a>
          </div>
        </motion.div>

        {/* Project Showcase */}
        <motion.div
          className="project-carousel overflow-hidden relative w-full max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...projects, ...projects].map((p, i) => (
              <div
                key={i}
                className="project-card flex-shrink-0 w-72 rounded-2xl border bg-card p-5 hover:border-white/20 transition shadow-soft"
              >
                <h3 className="text-xl font-medium">{p.title}</h3>
                <p className="mt-2 text-white/70">{p.blurb}</p>
                <div className="project-tags mt-3 flex flex-wrap gap-2">
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
                    className="inline-block mt-3 text-cyan-300 hover:text-cyan-200"
                  >
                    Learn more →
                  </button>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

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

              <div className="modal-buttons">
            <button
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Full Project →
            </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
