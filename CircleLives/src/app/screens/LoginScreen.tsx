import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { DemoShowcase } from "../components/DemoShowcase";

export function LoginScreen() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    navigate("/otp");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#eef2ff] to-[#f5f3ff] dark:from-[#0f1117] dark:via-[#1a1d29] dark:to-[#1f1b2e] flex flex-col items-center justify-center p-6">
      <DemoShowcase />
      
      {/* Logo and Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] flex items-center justify-center shadow-2xl"
          style={{
            boxShadow: "0 20px 60px rgba(99, 102, 241, 0.4)",
          }}
        >
          <MapPin className="w-12 h-12 text-white" strokeWidth={2.5} />
        </motion.div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#a78bfa] bg-clip-text text-transparent mb-2">
          CircleLive
        </h1>
        <p className="text-muted-foreground">Stay connected with your circle</p>
      </motion.div>

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-md"
      >
        <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-border/50">
          <h2 className="text-2xl font-semibold mb-2">Welcome back</h2>
          <p className="text-muted-foreground mb-8">Enter your phone number to continue</p>

          <div className="space-y-6">
            {/* Phone Input */}
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-4 bg-input-background rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            {/* Login Button */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleLogin}
              className="w-full py-4 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white rounded-2xl font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              style={{
                boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
              }}
            >
              Continue
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* Forgot Password */}
            <button
              onClick={() => navigate("/forgot-password")}
              className="w-full text-center text-sm text-primary hover:underline"
            >
              Forgot password?
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-4 text-muted-foreground">or</span>
              </div>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <span className="text-muted-foreground">Don't have an account? </span>
              <button
                onClick={() => navigate("/register")}
                className="text-primary font-medium hover:underline"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-sm text-muted-foreground text-center"
      >
        Designed for 2027 • CircleLive
      </motion.p>
    </div>
  );
}