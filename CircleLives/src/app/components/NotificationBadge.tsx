import { motion } from "motion/react";

interface NotificationBadgeProps {
  count: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function NotificationBadge({ count, max = 99, size = "md", className = "" }: NotificationBadgeProps) {
  if (count <= 0) return null;

  const displayCount = count > max ? `${max}+` : count.toString();

  const sizeClasses = {
    sm: "w-4 h-4 text-[10px]",
    md: "w-5 h-5 text-xs",
    lg: "w-6 h-6 text-sm",
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-destructive to-destructive/80 text-white flex items-center justify-center font-medium ${className}`}
      style={{
        boxShadow: "0 2px 8px rgba(239, 68, 68, 0.4)",
      }}
    >
      {displayCount}
    </motion.div>
  );
}
