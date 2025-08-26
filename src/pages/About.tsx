import { motion } from "framer-motion";


export default function About() {
  return (
    <motion.div
      className="prose prose-invert max-w-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-white/80 leading-relaxed">
        I'm a Computer Science and Mathematics student at <span className="text-cyan-300 font-medium">Oakland University</span>, specializing in{" "}
        <span className="text-cyan-300">Artificial Intelligence</span>.  
        My work focuses on applied machine learning, large language models, and intelligent decision-making systems. I enjoy building impactful tools and collaborating on research.
      </p>

      {/* Skills Section */}
      <h3 className="mt-8 text-2xl font-semibold">Skills & Tools</h3>
      <div className="grid sm:grid-cols-2 gap-6 mt-3">
        <div>
          <h4 className="font-medium text-white/80 mb-2">Programming Languages</h4>
          <ul className="grid grid-cols-2 gap-2">
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">Python</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">Java</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">C</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">C#</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">JavaScript / TypeScript</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">SQL</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-white/80 mb-2">AI & Machine Learning</h4>
          <ul className="grid grid-cols-2 gap-2">
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">Fine-tuning LLMs</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">PyTorch / TensorFlow</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">Hugging Face</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">pandas / NumPy</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">Dataset Curation</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">ML Pipelines</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-white/80 mb-2">Tools & Platforms</h4>
          <ul className="grid grid-cols-2 gap-2">
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">React / Vite</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">Tailwind CSS</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">Docker</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">Git / GitHub</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">Linux CLI</li>
            <li className="bg-white/5 px-3 py-2 rounded-md border border-white/10">VS Code</li>
          </ul>
        </div>
      </div>

      {/* Experience Section */}
      <h3 className="mt-8 text-2xl font-semibold">Experience</h3>
      <div className="mt-4 space-y-5">
        {/* Research Assistant */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <h4 className="text-lg font-semibold">Research Assistant</h4>
          <p className="text-white/60">Oakland University • Rochester, MI • Dec 2022 – Apr 2025</p>
          <ul className="list-disc list-inside mt-2 text-white/80">
            <li>Conducting research on AI-driven cybersecurity and UAV communication systems.</li>
            <li>Fine-tuned ML models and curated datasets to enhance UAV security and decision-making.</li>
            <li>Collaborated with team members to optimize fine-tuning techniques and data workflows.</li>
          </ul>
        </div>

        {/* Grader */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <h4 className="text-lg font-semibold">Computer Science Grader</h4>
          <p className="text-white/60">Oakland University • Rochester, MI • Jan 2024 – May 2024</p>
          <ul className="list-disc list-inside mt-2 text-white/80">
            <li>Graded assignments for the “Design and Analysis of Algorithms” course.</li>
            <li>Provided detailed feedback to improve student understanding.</li>
            <li>Created code-based assignments for practical algorithm implementation.</li>
          </ul>
        </div>
      </div>

      {/* Conference Section */}
      <h3 className="mt-8 text-2xl font-semibold">Conference Presentation</h3>
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-3">
        <h4 className="text-lg font-semibold">Presenter — Michigan Space Grant Consortium (NASA)</h4>
        <p className="text-white/60">Ann Arbor, MI • Oct 2024</p>
        <p className="mt-2 text-white/80">
          Presented <span className="text-cyan-300 italic">"Enhancing Efficiency and Security of Unmanned Aerial Vehicles with AI and Large Language Models"</span> at a NASA-supported conference, focusing on UAV security and efficiency.
        </p>
      </div>

      {/* Publications Section */}
      <h3 className="mt-8 text-2xl font-semibold">Publications</h3>
      <ul className="mt-3 space-y-4">
        <li className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="font-semibold">Net-GPT: A LLM-empowered man-in-the-middle chatbot for UAVs</p>
          <p className="text-white/60">Proceedings of the 8th ACM/IEEE Symposium on Edge Computing • 23 citations • 2023</p>
        </li>
        <li className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="font-semibold">Aero-LLM: A distributed framework for secure UAV communication</p>
          <p className="text-white/60">arXiv preprint arXiv:2502.05220 • 4 citations • 2025</p>
        </li>
        <li className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="font-semibold">Heterogeneous Generative Dataset for UASes</p>
          <p className="text-white/60">IEEE International Conference on Mobility, Operations, Services • 1 citation • 2023</p>
        </li>
      </ul>
    </motion.div>
  );
}
