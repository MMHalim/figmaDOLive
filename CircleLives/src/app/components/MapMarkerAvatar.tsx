import { motion } from "motion/react";

interface MapMarkerAvatarProps {
  avatar: string;
  name: string;
  isOnline: boolean;
  isActive?: boolean;
}

export function MapMarkerAvatar({ avatar, name, isOnline, isActive = false }: MapMarkerAvatarProps) {
  return (
    <div className="relative">
      {/* Pulsing ring for live location */}
      {isOnline && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute inset-0 rounded-full bg-accent"
            style={{ width: "56px", height: "56px", left: "-4px", top: "-4px" }}
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5,
            }}
            className="absolute inset-0 rounded-full bg-accent"
            style={{ width: "56px", height: "56px", left: "-4px", top: "-4px" }}
          />
        </>
      )}

      {/* Avatar */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={`relative w-12 h-12 rounded-full border-3 ${
          isActive ? "border-primary" : "border-white dark:border-gray-800"
        } overflow-hidden shadow-lg cursor-pointer`}
        style={{
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </motion.div>

      {/* Status dot */}
      <div
        className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-800 ${
          isOnline ? "bg-[var(--status-online)]" : "bg-[var(--status-offline)]"
        }`}
      />

      {/* Name label */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs border border-border shadow-sm">
        {name}
      </div>
    </div>
  );
}
