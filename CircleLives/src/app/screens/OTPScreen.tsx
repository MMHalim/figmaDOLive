import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/ui/input-otp";

export function OTPScreen() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    navigate("/permissions/contacts");
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
          {/* Illustration */}
          <div className="text-center mb-12">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] flex items-center justify-center shadow-2xl"
            >
              <span className="text-4xl">📱</span>
            </motion.div>
            <h1 className="text-3xl font-bold mb-2">Verify your number</h1>
            <p className="text-muted-foreground">
              We sent a code to <span className="font-medium text-foreground">+1 (555) 000-0000</span>
            </p>
          </div>

          {/* OTP Card */}
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-border/50">
            <div className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-4 block text-center">
                  Enter verification code
                </label>
                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} className="w-12 h-14 text-xl" />
                      <InputOTPSlot index={1} className="w-12 h-14 text-xl" />
                      <InputOTPSlot index={2} className="w-12 h-14 text-xl" />
                      <InputOTPSlot index={3} className="w-12 h-14 text-xl" />
                      <InputOTPSlot index={4} className="w-12 h-14 text-xl" />
                      <InputOTPSlot index={5} className="w-12 h-14 text-xl" />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              {/* Verify Button */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleVerify}
                disabled={otp.length !== 6}
                className="w-full py-4 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white rounded-2xl font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
                }}
              >
                Verify
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* Resend */}
              <div className="text-center">
                <span className="text-muted-foreground text-sm">Didn't receive code? </span>
                <button className="text-primary text-sm font-medium hover:underline">
                  Resend
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
