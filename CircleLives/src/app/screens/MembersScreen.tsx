import { motion } from "motion/react";
import { Search, Plus, MapPin } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ContactListItem } from "../components/ContactListItem";
import { GroupCard } from "../components/GroupCard";
import { FloatingActionButton } from "../components/FloatingActionButton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

const mockFriends = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1599651515421-43a8e7dbf212?w=400",
    lastMessage: "See you there! 👋",
    time: "2m ago",
    isOnline: true,
    hasLiveLocation: true,
    unreadCount: 2,
  },
  {
    id: "2",
    name: "Mike Davis",
    avatar: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=400",
    lastMessage: "Thanks for the help!",
    time: "15m ago",
    isOnline: true,
    hasLiveLocation: true,
  },
  {
    id: "3",
    name: "Emma Wilson",
    avatar: "https://images.unsplash.com/photo-1760552069572-6a6caeeb82d9?w=400",
    lastMessage: "",
    isVoiceMessage: true,
    time: "1h ago",
    isOnline: false,
    hasLiveLocation: false,
  },
  {
    id: "4",
    name: "James Brown",
    avatar: "https://images.unsplash.com/photo-1764084051438-369ad6a09334?w=400",
    lastMessage: "Let's meet up tomorrow",
    time: "3h ago",
    isOnline: true,
    hasLiveLocation: true,
    unreadCount: 1,
  },
];

const mockGroups = [
  {
    id: "family",
    name: "Family",
    memberCount: 5,
    avatars: [
      "https://images.unsplash.com/photo-1664813495783-a7b19be83624?w=200",
      "https://images.unsplash.com/photo-1717378706934-3f44829052e0?w=200",
    ],
    lastMessage: "Mom: Dinner at 7pm",
    time: "10m ago",
    activeMembersCount: 3,
  },
  {
    id: "work",
    name: "Work Squad",
    memberCount: 8,
    avatars: [
      "https://images.unsplash.com/photo-1599651515421-43a8e7dbf212?w=200",
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=200",
    ],
    lastMessage: "Meeting at 3pm",
    time: "1h ago",
    activeMembersCount: 5,
  },
];

export function MembersScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("friends");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 bg-gradient-to-b from-background to-transparent">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#a78bfa] bg-clip-text text-transparent">
              CircleLive
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-accent"
              />
              <p className="text-sm text-muted-foreground">
                {mockFriends.filter((f) => f.isOnline).length} friends online
              </p>
            </div>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-card border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="mx-6 mb-4 bg-muted/50 p-1 rounded-2xl">
          <TabsTrigger value="friends" className="flex-1 rounded-xl data-[state=active]:bg-card">
            Friends
          </TabsTrigger>
          <TabsTrigger value="groups" className="flex-1 rounded-xl data-[state=active]:bg-card">
            Family Groups
          </TabsTrigger>
        </TabsList>

        {/* Friends Tab */}
        <TabsContent value="friends" className="flex-1 overflow-y-auto m-0">
          {mockFriends.map((friend, index) => (
            <ContactListItem
              key={friend.id}
              {...friend}
              onClick={() => navigate(`/app/chat/${friend.id}`)}
            />
          ))}
        </TabsContent>

        {/* Groups Tab */}
        <TabsContent value="groups" className="flex-1 overflow-y-auto m-0">
          {mockGroups.map((group, index) => (
            <GroupCard
              key={group.id}
              {...group}
              onClick={() => navigate(`/app/group/${group.id}`)}
            />
          ))}
        </TabsContent>
      </Tabs>

      {/* Floating Action Button */}
      <div className="absolute bottom-24 right-6">
        <FloatingActionButton icon={Plus} />
      </div>
    </div>
  );
}
