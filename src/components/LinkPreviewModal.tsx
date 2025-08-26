import { motion } from "framer-motion";

interface LinkPreviewModalProps {
  url: string;
  title: string;
  onClose: () => void;
}

export default function LinkPreviewModal({ url, title, onClose }: LinkPreviewModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="bg-[#111] rounded-2xl shadow-xl max-w-5xl w-full h-[80vh] relative flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-3 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-xl transition"
          >
            ✕
          </button>
        </div>

        {/* iFrame Preview */}
        <iframe
          src={url}
          title={title}
          className="flex-1 w-full rounded-b-2xl"
          style={{
            border: "none",
            backgroundColor: "#fff",
          }}
        />
      </motion.div>
    </div>
  );
}
