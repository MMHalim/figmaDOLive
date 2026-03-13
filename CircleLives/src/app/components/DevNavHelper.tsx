import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const routes = [
  { path: "/", label: "Login" },
  { path: "/register", label: "Register" },
  { path: "/otp", label: "OTP" },
  { path: "/forgot-password", label: "Forgot Password" },
  { path: "/permissions/contacts", label: "Contact Permission" },
  { path: "/permissions/notifications", label: "Notification Permission" },
  { path: "/app", label: "Members/Chats" },
  { path: "/app/chat/1", label: "Chat + Location" },
  { path: "/voice-call/1", label: "Voice Call" },
  { path: "/video-call/1", label: "Video Call" },
  { path: "/app/group/family", label: "Group Map" },
  { path: "/app/profile", label: "Profile" },
  { path: "/showcase", label: "🎨 Component Showcase" },
];

export function DevNavHelper() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Only show in development
  if (import.meta.env.PROD) return null;

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-2xl"
        style={{
          boxShadow: "0 8px 32px rgba(168, 85, 247, 0.4)",
        }}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed left-4 bottom-20 z-50 bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border max-w-xs overflow-hidden"
          >
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold text-sm">Quick Navigation</h3>
              <p className="text-xs text-muted-foreground">Dev Helper</p>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {routes.map((route) => (
                <button
                  key={route.path}
                  onClick={() => {
                    navigate(route.path);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-sm hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0 ${
                    location.pathname === route.path
                      ? "bg-primary/10 text-primary font-medium"
                      : ""
                  }`}
                >
                  {route.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}