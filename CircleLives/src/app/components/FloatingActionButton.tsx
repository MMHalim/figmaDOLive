import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface FloatingActionButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function FloatingActionButton({
  icon: Icon,
  onClick,
  variant = "primary",
  size = "lg",
}: FloatingActionButtonProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-14 h-14",
    lg: "w-16 h-16",
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${sizeClasses[size]} rounded-full shadow-lg flex items-center justify-center ${
        variant === "primary"
          ? "bg-gradient-to-br from-[#6366f1] to-[#4f46e5] text-white"
          : "bg-card border-2 border-primary/20 text-primary"
      }`}
      style={{
        boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
      }}
    >
      <Icon className={iconSizes[size]} />
    </motion.button>
  );
}
