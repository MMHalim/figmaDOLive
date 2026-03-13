import { motion } from "motion/react";
import { Bell, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

export function NotificationPermissionScreen() {
  const navigate = useNavigate();

  const handleAllow = () => {
    navigate("/app");
  };

  const handleSkip = () => {
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#eef2ff] to-[#f5f3ff] dark:from-[#0f1117] dark:via-[#1a1d29] dark:to-[#1f1b2e] flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          {/* Icon with animation */}
          <motion.div
            animate={{
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] flex items-center justify-center shadow-2xl"
          >
            <Bell className="w-16 h-16 text-white" strokeWidth={2} />
          </motion.div>

          <h1 className="text-3xl font-bold mb-3">Stay Updated</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Get notified when friends share their location or send messages
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {/* Benefits */}
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-border/50 space-y-4">
            {[
              "Instant message notifications",
              "Location sharing alerts",
              "Real-time updates from your circle",
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-foreground">{benefit}</p>
              </motion.div>
            ))}
          </div>

          {/* Allow Button */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleAllow}
            className="w-full py-4 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white rounded-2xl font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
            style={{
              boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
            }}
          >
            Enable Notifications
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="w-full py-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            Maybe later
          </button>
        </motion.div>
      </div>
    </div>
  );
}
