import { motion } from "motion/react";
import { Phone, Mic, MicOff, Volume2, VolumeX, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const mockContact = {
  name: "Sarah Johnson",
  avatar: "https://images.unsplash.com/photo-1599651515421-43a8e7dbf212?w=400",
};

export function VoiceCallScreen() {
  const navigate = useNavigate();
  const { contactId } = useParams();
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [callStatus, setCallStatus] = useState<"connecting" | "active">("connecting");

  useEffect(() => {
    // Simulate call connecting
    const connectTimer = setTimeout(() => {
      setCallStatus("active");
    }, 2000);

    return () => clearTimeout(connectTimer);
  }, []);

  useEffect(() => {
    if (callStatus === "active") {
      const timer = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [callStatus]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleEndCall = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#eef2ff] to-[#f5f3ff] dark:from-[#0f1117] dark:via-[#1a1d29] dark:to-[#1f1b2e] flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-10 p-3 bg-card/80 backdrop-blur-xl rounded-full border border-border/50 shadow-lg"
      >
        <ArrowLeft className="w-5 h-5" />
      </motion.button>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        {/* Avatar with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          {/* Pulsing Rings */}
          {callStatus === "active" && (
            <>
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] blur-xl"
                style={{
                  width: "200px",
                  height: "200px",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] blur-xl"
                style={{
                  width: "200px",
                  height: "200px",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </>
          )}

          {/* Avatar */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-card shadow-2xl">
            <img
              src={mockContact.avatar}
              alt={mockContact.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Status Indicator */}
          <motion.div
            animate={
              callStatus === "active"
                ? { scale: [1, 1.2, 1] }
                : {}
            }
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-accent border-4 border-background shadow-lg"
          />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">{mockContact.name}</h1>
          <div className="flex items-center justify-center gap-2">
            {callStatus === "connecting" ? (
              <>
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
                <p className="text-lg text-muted-foreground">Connecting...</p>
              </>
            ) : (
              <>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-accent"
                />
                <p className="text-lg font-medium text-accent">{formatDuration(callDuration)}</p>
              </>
            )}
          </div>
        </motion.div>

        {/* Call Controls */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-6"
        >
          {/* Mute Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMuted(!isMuted)}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg ${
              isMuted
                ? "bg-destructive text-destructive-foreground"
                : "bg-card/80 backdrop-blur-xl border border-border/50"
            }`}
            style={{
              boxShadow: isMuted
                ? "0 8px 24px rgba(239, 68, 68, 0.3)"
                : "0 8px 24px rgba(0, 0, 0, 0.1)",
            }}
          >
            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </motion.button>

          {/* End Call Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleEndCall}
            className="w-20 h-20 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center shadow-2xl"
            style={{
              boxShadow: "0 12px 40px rgba(239, 68, 68, 0.4)",
            }}
          >
            <Phone className="w-8 h-8 rotate-[135deg]" />
          </motion.button>

          {/* Speaker Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSpeaker(!isSpeaker)}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg ${
              isSpeaker
                ? "bg-primary text-primary-foreground"
                : "bg-card/80 backdrop-blur-xl border border-border/50"
            }`}
            style={{
              boxShadow: isSpeaker
                ? "0 8px 24px rgba(79, 70, 229, 0.3)"
                : "0 8px 24px rgba(0, 0, 0, 0.1)",
            }}
          >
            {isSpeaker ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
          </motion.button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            End-to-end encrypted
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="pb-8 text-center relative z-10"
      >
        <p className="text-xs text-muted-foreground">CircleLive Voice Call</p>
      </motion.div>
    </div>
  );
}
