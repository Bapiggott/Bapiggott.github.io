import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(false);
    setError("");
    setLoading(true);

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
    "service_4zm96vm",
    "template_bxkro2k",
    formRef.current!,
    "umbizuJzzq0Dx6NJS"
    );

      setSent(true);
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="rounded-2xl border border-white/10 bg-card p-5"
      >
        <label className="block text-sm mb-2">Your Email</label>
        <input
          name="from_email"
          required
          type="email"
          className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2"
          placeholder="you@example.com"
        />

        <label className="block text-sm mt-4 mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2"
          placeholder="Say hi!"
        />

        <button
          className="mt-4 rounded-xl px-5 py-3 bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium shadow-soft disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {sent && <p className="mt-3 text-green-300">✅ Message sent successfully!</p>}
        {error && <p className="mt-3 text-red-400">{error}</p>}
      </form>

      <p className="mt-6 text-white/70 text-center">
        Or email me directly:{" "}
        <a className="text-cyan-300" href="mailto:brettapiggott@gmail.com">
          brettapiggott@gmail.com
        </a>
      </p>
    </motion.div>
  );
}
