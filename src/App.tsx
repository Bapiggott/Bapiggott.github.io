import { Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";


export default function App() {
  return (
    <div className="min-h-full">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a className="font-semibold tracking-wide text-white/90 hover:text-white" href="#/">BP</a>
          <div className="flex gap-6 text-white/70">
            {[
              { to: "/", label: "Home" },
              { to: "/projects", label: "Projects" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `hover:text-white transition ${isActive ? "text-white" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <Routes>
          <Route path="/" element={<PageWrap><Home /></PageWrap>} />
          <Route path="/projects" element={<PageWrap><Projects /></PageWrap>} />
          <Route path="/about" element={<PageWrap><About /></PageWrap>} />
          <Route path="/contact" element={<PageWrap><Contact /></PageWrap>} />
          <Route path="/resume" element={<PageWrap><Resume /></PageWrap>} />
        </Routes>
      </main>

      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/60">
          © {new Date().getFullYear()} Brett Piggott — Built with React, Tailwind, Framer Motion.
        </div>
      </footer>
    </div>
  );
}

function PageWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      className="py-12"
      initial={{ opacity: 0, y: 12, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
