import { motion } from "motion/react";

export function ContactSkeleton() {
  return (
    <div className="flex items-center gap-3 p-4">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-14 h-14 rounded-full bg-muted"
      />
      <div className="flex-1 space-y-2">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
          className="h-4 bg-muted rounded-full w-3/4"
        />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          className="h-3 bg-muted rounded-full w-1/2"
        />
      </div>
    </div>
  );
}

export function ChatSkeleton() {
  return (
    <div className="space-y-4 p-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className={`flex ${i % 2 === 0 ? "justify-end" : ""}`}>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
            className={`h-12 bg-muted rounded-3xl ${i % 2 === 0 ? "w-2/3" : "w-1/2"}`}
          />
        </div>
      ))}
    </div>
  );
}
