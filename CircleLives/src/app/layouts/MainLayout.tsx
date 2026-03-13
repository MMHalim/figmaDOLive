import { Outlet, useNavigate, useLocation } from "react-router";
import { Home, MessageCircle, User, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

export function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { icon: Home, label: "Home", path: "/app" },
    { icon: MessageCircle, label: "Chats", path: "/app" },
    { icon: User, label: "Profile", path: "/app/profile" },
  ];

  const isActive = (path: string) => {
    if (path === "/app") {
      return location.pathname === "/app";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-screen flex flex-col bg-background max-w-md mx-auto">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="border-t border-border bg-card/80 backdrop-blur-xl"
      >
        <div className="flex items-center justify-around px-4 py-3 safe-area-inset-bottom">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <motion.button
                key={index}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center gap-1 py-2 px-4 relative"
              >
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon
                  className={`w-6 h-6 relative z-10 transition-colors ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}
                  strokeWidth={active ? 2.5 : 2}
                />
                <span
                  className={`text-xs relative z-10 transition-colors ${
                    active ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}

          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex flex-col items-center gap-1 py-2 px-4"
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6 text-muted-foreground" />
            ) : (
              <Moon className="w-6 h-6 text-muted-foreground" />
            )}
            <span className="text-xs text-muted-foreground">Theme</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
