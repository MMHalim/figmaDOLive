import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Video,
  VideoOff,
  Mic,
  MicOff,
  Camera,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const mockContact = {
  name: "Sarah Johnson",
  avatar: "https://images.unsplash.com/photo-1599651515421-43a8e7dbf212?w=400",
};

export function VideoCallScreen() {
  const navigate = useNavigate();
  const { contactId } = useParams();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
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

  useEffect(() => {
    // Auto-hide controls after 3 seconds
    if (showControls) {
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showControls]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleEndCall = () => {
    navigate(-1);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className="min-h-screen bg-[#0f1117] flex flex-col relative overflow-hidden"
      onClick={() => setShowControls(!showControls)}
    >
      {/* Remote Video (Full Screen) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1d29] to-[#1f1b2e]">
        {/* Simulated Video Stream */}
        <div className="w-full h-full flex items-center justify-center">
          {callStatus === "connecting" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-8">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] blur-2xl"
                />
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img
                    src={mockContact.avatar}
                    alt={mockContact.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{mockContact.name}</h2>
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
                <p className="text-white/70">Connecting...</p>
              </div>
            </motion.div>
          ) : (
            <img
              src={mockContact.avatar}
              alt={mockContact.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Local Video (Picture-in-Picture) */}
      <motion.div
        drag
        dragConstraints={{
          top: 20,
          left: 20,
          right: window.innerWidth - 140,
          bottom: window.innerHeight - 200,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className={`absolute ${
          isFullscreen ? "top-4 right-4" : "top-4 right-4"
        } rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl cursor-move z-20`}
        style={{
          width: isFullscreen ? "120px" : "120px",
          height: isFullscreen ? "180px" : "180px",
        }}
      >
        {isVideoOff ? (
          <div className="w-full h-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] flex items-center justify-center">
            <VideoOff className="w-8 h-8 text-white" />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1d29] to-[#1f1b2e]">
            {/* Simulated local video - in real app this would be camera feed */}
            <div className="w-full h-full flex items-center justify-center text-white/50">
              <Camera className="w-8 h-8" />
            </div>
          </div>
        )}
      </motion.div>

      {/* Top Bar - Status */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 z-30 px-6 py-4 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-accent"
                />
                <span className="text-white font-medium">{formatDuration(callDuration)}</span>
              </div>
              <button
                onClick={toggleFullscreen}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-5 h-5 text-white" />
                ) : (
                  <Maximize2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Bar - Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="absolute bottom-0 left-0 right-0 z-30 px-6 pb-8 pt-6 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-md"
          >
            <div className="flex items-center justify-center gap-4">
              {/* Camera Switch Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg"
              >
                <Camera className="w-6 h-6 text-white" />
              </motion.button>

              {/* Video Toggle Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVideoOff(!isVideoOff)}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${
                  isVideoOff
                    ? "bg-destructive text-destructive-foreground"
                    : "bg-white/10 backdrop-blur-xl border border-white/20 text-white"
                }`}
                style={{
                  boxShadow: isVideoOff
                    ? "0 8px 24px rgba(239, 68, 68, 0.4)"
                    : "0 8px 24px rgba(0, 0, 0, 0.2)",
                }}
              >
                {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
              </motion.button>

              {/* End Call Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleEndCall}
                className="w-16 h-16 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center shadow-2xl"
                style={{
                  boxShadow: "0 12px 40px rgba(239, 68, 68, 0.5)",
                }}
              >
                <Phone className="w-7 h-7 rotate-[135deg]" />
              </motion.button>

              {/* Mute Toggle Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMuted(!isMuted)}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${
                  isMuted
                    ? "bg-destructive text-destructive-foreground"
                    : "bg-white/10 backdrop-blur-xl border border-white/20 text-white"
                }`}
                style={{
                  boxShadow: isMuted
                    ? "0 8px 24px rgba(239, 68, 68, 0.4)"
                    : "0 8px 24px rgba(0, 0, 0, 0.2)",
                }}
              >
                {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
              </motion.button>

              {/* Placeholder for balance */}
              <div className="w-14 h-14" />
            </div>

            {/* Control Labels */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="w-14 text-center text-xs text-white/70">Flip</span>
              <span className="w-14 text-center text-xs text-white/70">Video</span>
              <span className="w-16 text-center text-xs text-white/70">End</span>
              <span className="w-14 text-center text-xs text-white/70">Mute</span>
              <span className="w-14" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Name Overlay */}
      <AnimatePresence>
        {showControls && callStatus === "active" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-20 left-6 z-20"
          >
            <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <p className="text-white text-sm font-medium">{mockContact.name}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Encryption Info */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-20 right-6 z-20"
          >
            <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <p className="text-white/70 text-xs">🔒 Encrypted</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
