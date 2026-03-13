import { motion } from "motion/react";
import { Play, Pause } from "lucide-react";
import { useState } from "react";

interface VoiceMessagePlayerProps {
  duration: string;
  isSent: boolean;
}

export function VoiceMessagePlayer({ duration, isSent }: VoiceMessagePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const waveformBars = [4, 8, 12, 6, 10, 14, 7, 11, 5, 9, 13, 6, 10, 8, 12];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-3 max-w-[280px] px-4 py-3 rounded-3xl ${
        isSent
          ? "bg-gradient-to-br from-[#6366f1] to-[#4f46e5] text-white rounded-br-md ml-auto"
          : "bg-card border border-border rounded-bl-md"
      }`}
    >
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
          isSent ? "bg-white/20 hover:bg-white/30" : "bg-primary/10 hover:bg-primary/20"
        }`}
      >
        {isPlaying ? (
          <Pause className={`w-4 h-4 ${isSent ? "text-white" : "text-primary"}`} />
        ) : (
          <Play className={`w-4 h-4 ${isSent ? "text-white" : "text-primary"} ml-0.5`} />
        )}
      </button>

      <div className="flex items-center gap-0.5 flex-1 h-8">
        {waveformBars.map((height, i) => (
          <motion.div
            key={i}
            className={`w-1 rounded-full ${isSent ? "bg-white/60" : "bg-primary/60"}`}
            style={{ height: `${height}px` }}
            animate={isPlaying ? { height: [`${height}px`, `${height + 4}px`, `${height}px`] } : {}}
            transition={{
              duration: 0.5,
              repeat: isPlaying ? Infinity : 0,
              delay: i * 0.05,
            }}
          />
        ))}
      </div>

      <span className={`text-xs ${isSent ? "text-white/70" : "text-muted-foreground"}`}>
        {duration}
      </span>
    </motion.div>
  );
}
