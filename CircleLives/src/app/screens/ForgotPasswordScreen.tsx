import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, KeyRound } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function ForgotPasswordScreen() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    navigate("/otp");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#eef2ff] to-[#f5f3ff] dark:from-[#0f1117] dark:via-[#1a1d29] dark:to-[#1f1b2e] flex flex-col p-6">
      {/* Header */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-foreground mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </motion.button>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Icon */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] flex items-center justify-center shadow-2xl">
              <KeyRound className="w-12 h-12 text-white" strokeWidth={2} />
            </div>
            <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
            <p className="text-muted-foreground">
              No worries, we'll send you reset instructions
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-border/50">
            <div className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-4 bg-input-background rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white rounded-2xl font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                style={{
                  boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
                }}
              >
                Send Reset Code
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <div className="text-center">
                <button
                  onClick={() => navigate("/")}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Back to login
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
