import { motion, AnimatePresence } from "motion/react";
import { Mic, X } from "lucide-react";
import { useState } from "react";

interface RecordingButtonProps {
  onRecordStart?: () => void;
  onRecordEnd?: () => void;
  onCancel?: () => void;
}

export function RecordingButton({ onRecordStart, onRecordEnd, onCancel }: RecordingButtonProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  const handleTouchStart = () => {
    setIsRecording(true);
    onRecordStart?.();
    // Simulate timer
    const interval = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);
    // Store interval for cleanup
    (window as any).recordingInterval = interval;
  };

  const handleTouchEnd = () => {
    setIsRecording(false);
    onRecordEnd?.();
    setRecordingTime(0);
    clearInterval((window as any).recordingInterval);
  };

  const handleCancel = () => {
    setIsRecording(false);
    onCancel?.();
    setRecordingTime(0);
    clearInterval((window as any).recordingInterval);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isRecording && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 flex items-center gap-3"
          >
            {/* Cancel button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleCancel}
              className="w-8 h-8 rounded-full bg-destructive/10 text-destructive flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Recording indicator */}
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-lg">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-destructive"
              />
              <span className="text-sm font-medium">{formatTime(recordingTime)}</span>
            </div>

            {/* Swipe to cancel instruction */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-muted-foreground whitespace-nowrap"
            >
              ← Slide to cancel
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Record button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
          isRecording
            ? "bg-gradient-to-br from-[#6366f1] to-[#4f46e5] text-white shadow-lg"
            : "bg-muted text-foreground"
        }`}
      >
        <Mic className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
