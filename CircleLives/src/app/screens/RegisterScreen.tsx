import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function RegisterScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    password: "",
  });

  const handleRegister = () => {
    navigate("/permissions/contacts");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#eef2ff] to-[#f5f3ff] dark:from-[#0f1117] dark:via-[#1a1d29] dark:to-[#1f1b2e] flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center"
      >
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] flex items-center justify-center shadow-2xl">
          <MapPin className="w-10 h-10 text-white" strokeWidth={2.5} />
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#a78bfa] bg-clip-text text-transparent">
          Join CircleLive
        </h1>
      </motion.div>

      {/* Register Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-md"
      >
        <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-border/50">
          <h2 className="text-2xl font-semibold mb-2">Create account</h2>
          <p className="text-muted-foreground mb-6">Get started with CircleLive</p>

          <div className="space-y-5">
            {/* Name Input */}
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3.5 bg-input-background rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3.5 bg-input-background rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className="w-full px-4 py-3.5 bg-input-background rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            {/* Register Button */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleRegister}
              className="w-full py-4 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white rounded-2xl font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              style={{
                boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
              }}
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* Login Link */}
            <div className="text-center pt-2">
              <span className="text-muted-foreground">Already have an account? </span>
              <button
                onClick={() => navigate("/")}
                className="text-primary font-medium hover:underline"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
