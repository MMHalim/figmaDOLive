import { motion } from "motion/react";
import { Check, CheckCheck } from "lucide-react";

interface ChatBubbleProps {
  message: string;
  time: string;
  isSent: boolean;
  status?: "sent" | "delivered" | "seen";
  delay?: number;
}

export function ChatBubble({ message, time, isSent, status = "seen", delay = 0 }: ChatBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className={`flex items-end gap-2 mb-3 ${isSent ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`max-w-[75%] px-4 py-2.5 rounded-3xl ${
          isSent
            ? "bg-gradient-to-br from-[#6366f1] to-[#4f46e5] text-white rounded-br-md"
            : "bg-card border border-border rounded-bl-md"
        }`}
        style={{
          backdropFilter: "blur(10px)",
        }}
      >
        <p className="text-[15px] leading-relaxed">{message}</p>
        <div className={`flex items-center gap-1 mt-1 ${isSent ? "justify-end" : ""}`}>
          <span className={`text-[11px] ${isSent ? "text-white/70" : "text-muted-foreground"}`}>
            {time}
          </span>
          {isSent && (
            <div className="text-white/70">
              {status === "sent" && <Check className="w-3.5 h-3.5" />}
              {status === "delivered" && <CheckCheck className="w-3.5 h-3.5" />}
              {status === "seen" && <CheckCheck className="w-3.5 h-3.5 text-accent" />}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
