import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function DemoShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 text-sm font-medium"
      style={{
        boxShadow: "0 8px 32px rgba(99, 102, 241, 0.4)",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>
      <span>CircleLive 2027 UI Design</span>
    </motion.div>
  );
}
