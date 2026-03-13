import { motion } from "motion/react";
import { ArrowLeft, Phone, MessageCircle, Navigation, Users } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { MapMarkerAvatar } from "../components/MapMarkerAvatar";

const mockGroupMembers = [
  {
    id: "1",
    name: "Mom",
    avatar: "https://images.unsplash.com/photo-1664813495783-a7b19be83624?w=400",
    isOnline: true,
    distance: "0.8 km",
    lastSeen: "Active now",
  },
  {
    id: "2",
    name: "Dad",
    avatar: "https://images.unsplash.com/photo-1764084051438-369ad6a09334?w=400",
    isOnline: true,
    distance: "0.9 km",
    lastSeen: "Active now",
  },
  {
    id: "3",
    name: "Emma",
    avatar: "https://images.unsplash.com/photo-1717378706934-3f44829052e0?w=400",
    isOnline: true,
    distance: "15 km",
    lastSeen: "Active now",
  },
  {
    id: "4",
    name: "Mike",
    avatar: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=400",
    isOnline: false,
    distance: "—",
    lastSeen: "2 hours ago",
  },
  {
    id: "5",
    name: "Sarah",
    avatar: "https://images.unsplash.com/photo-1599651515421-43a8e7dbf212?w=400",
    isOnline: false,
    distance: "—",
    lastSeen: "5 hours ago",
  },
];

export function GroupMapScreen() {
  const navigate = useNavigate();
  const { groupId } = useParams();

  const activeMembersCount = mockGroupMembers.filter((m) => m.isOnline).length;

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="px-4 py-3 bg-card/80 backdrop-blur-xl border-b border-border flex items-center justify-between absolute top-0 left-0 right-0 z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex -space-x-2">
            {mockGroupMembers.slice(0, 3).map((member, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-card overflow-hidden bg-muted"
              >
                <img src={member.avatar} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-medium">Family</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Users className="w-3 h-3" />
              {activeMembersCount} active
            </p>
          </div>
        </div>
      </div>

      {/* Full Screen Map */}
      <div className="flex-1 bg-gradient-to-br from-[#eef2ff] to-[#f5f3ff] dark:from-[#1a1d29] dark:to-[#1f1b2e] relative overflow-hidden">
        {/* Simulated Map Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        {/* Map Markers */}
        <div className="relative h-full p-8 pt-24">
          {/* Position markers in different locations */}
          <div className="absolute top-32 left-20">
            <MapMarkerAvatar
              avatar={mockGroupMembers[0].avatar}
              name={mockGroupMembers[0].name}
              isOnline={mockGroupMembers[0].isOnline}
            />
          </div>
          <div className="absolute top-36 left-32">
            <MapMarkerAvatar
              avatar={mockGroupMembers[1].avatar}
              name={mockGroupMembers[1].name}
              isOnline={mockGroupMembers[1].isOnline}
            />
          </div>
          <div className="absolute bottom-48 right-24">
            <MapMarkerAvatar
              avatar={mockGroupMembers[2].avatar}
              name={mockGroupMembers[2].name}
              isOnline={mockGroupMembers[2].isOnline}
            />
          </div>

          {/* Center "You" marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
                <Navigation className="w-8 h-8 text-white" fill="white" />
              </div>
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs border border-border shadow-sm font-medium">
                You
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Legend */}
        <div className="absolute top-20 right-4 bg-card/90 backdrop-blur-xl rounded-2xl p-3 shadow-lg border border-border">
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--status-online)]" />
              <span>Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--status-recently-active)]" />
              <span>Recent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--status-offline)]" />
              <span>Offline</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sheet - Members List */}
      <motion.div
        initial={{ y: "60%" }}
        animate={{ y: "60%" }}
        drag="y"
        dragConstraints={{ top: 0, bottom: "60%" }}
        dragElastic={0.1}
        className="absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl shadow-2xl border-t border-border"
        style={{ height: "70%" }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-4">
          <div className="w-12 h-1.5 rounded-full bg-muted" />
        </div>

        {/* Members List */}
        <div className="px-4 pb-4">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Family Members
          </h3>
          <div className="space-y-2 overflow-y-auto" style={{ maxHeight: "calc(70vh - 120px)" }}>
            {mockGroupMembers.map((member) => (
              <motion.div
                key={member.id}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div
                      className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-card ${
                        member.isOnline ? "bg-[var(--status-online)]" : "bg-[var(--status-offline)]"
                      }`}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-xs text-muted-foreground">{member.lastSeen}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {member.isOnline && (
                    <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {member.distance}
                    </div>
                  )}
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <MessageCircle className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
