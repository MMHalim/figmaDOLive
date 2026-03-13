import { motion } from "motion/react";
import { Users, MapPin } from "lucide-react";

interface GroupCardProps {
  id: string;
  name: string;
  memberCount: number;
  avatars: string[];
  lastMessage?: string;
  time: string;
  activeMembersCount: number;
  onClick?: () => void;
}

export function GroupCard({
  name,
  memberCount,
  avatars,
  lastMessage,
  time,
  activeMembersCount,
  onClick,
}: GroupCardProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex items-center gap-3 p-4 active:bg-muted/50 transition-colors cursor-pointer border-b border-border/50"
    >
      {/* Group Avatar Stack */}
      <div className="relative flex-shrink-0 w-14 h-14">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex -space-x-2">
            {avatars.slice(0, 2).map((avatar, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-background overflow-hidden bg-muted"
              >
                <img src={avatar} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium truncate">{name}</h3>
            <Users className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{memberCount}</span>
          </div>
          <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">{time}</span>
        </div>
        <div className="flex items-center gap-2">
          {activeMembersCount > 0 && (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-1 text-accent"
            >
              <MapPin className="w-3.5 h-3.5 fill-accent" />
              <span className="text-xs font-medium">{activeMembersCount} active</span>
            </motion.div>
          )}
          {lastMessage && (
            <p className="text-sm text-muted-foreground truncate flex-1">{lastMessage}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
