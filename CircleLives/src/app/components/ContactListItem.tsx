import { motion } from "motion/react";
import { Mic, MapPin } from "lucide-react";

interface ContactListItemProps {
  id: string;
  name: string;
  avatar: string;
  lastMessage?: string;
  isVoiceMessage?: boolean;
  time: string;
  isOnline: boolean;
  hasLiveLocation?: boolean;
  unreadCount?: number;
  onClick?: () => void;
}

export function ContactListItem({
  name,
  avatar,
  lastMessage,
  isVoiceMessage,
  time,
  isOnline,
  hasLiveLocation,
  unreadCount,
  onClick,
}: ContactListItemProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex items-center gap-3 p-4 active:bg-muted/50 transition-colors cursor-pointer border-b border-border/50"
    >
      {/* Avatar with status */}
      <div className="relative flex-shrink-0">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <motion.div
          animate={isOnline ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-background ${
            isOnline ? "bg-[var(--status-online)]" : "bg-[var(--status-offline)]"
          }`}
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-medium truncate">{name}</h3>
          <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">{time}</span>
        </div>
        <div className="flex items-center gap-2">
          {hasLiveLocation && (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="w-3.5 h-3.5 text-accent fill-accent" />
            </motion.div>
          )}
          {isVoiceMessage ? (
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Mic className="w-3.5 h-3.5" />
              <span className="text-sm">Voice message</span>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground truncate">{lastMessage}</p>
          )}
        </div>
      </div>

      {/* Unread badge */}
      {unreadCount && unreadCount > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium flex-shrink-0"
        >
          {unreadCount > 9 ? "9+" : unreadCount}
        </motion.div>
      )}
    </motion.div>
  );
}
