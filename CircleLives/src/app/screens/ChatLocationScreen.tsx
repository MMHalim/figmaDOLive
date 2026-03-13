import { motion } from "motion/react";
import { ArrowLeft, Phone, Video, MoreVertical, Send, Smile } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ChatBubble } from "../components/ChatBubble";
import { VoiceMessagePlayer } from "../components/VoiceMessagePlayer";
import { RecordingButton } from "../components/RecordingButton";
import { TypingIndicator } from "../components/TypingIndicator";
import { MapMarkerAvatar } from "../components/MapMarkerAvatar";

const mockContact = {
  name: "Sarah Johnson",
  avatar: "https://images.unsplash.com/photo-1599651515421-43a8e7dbf212?w=400",
  isOnline: true,
  location: "2.5 km away",
};

const mockMessages = [
  { id: "1", message: "Hey! Are you free this evening?", time: "10:30 AM", isSent: false },
  { id: "2", message: "Yes! What's up?", time: "10:32 AM", isSent: true, status: "seen" as const },
  {
    id: "3",
    message: "Want to grab coffee? I'm at the new place downtown",
    time: "10:33 AM",
    isSent: false,
  },
  {
    id: "4",
    message: "Sounds great! I can be there in 15 mins",
    time: "10:35 AM",
    isSent: true,
    status: "seen" as const,
  },
  { id: "5", message: "See you there! 👋", time: "10:36 AM", isSent: false },
];

export function ChatLocationScreen() {
  const navigate = useNavigate();
  const { contactId } = useParams();
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      // Add message logic here
      setMessage("");
    }
  };

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="px-4 py-3 bg-card border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 relative">
            <img src={mockContact.avatar} alt={mockContact.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-accent border-2 border-card" />
          </div>
          <div>
            <h3 className="font-medium">{mockContact.name}</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-accent"
              />
              {mockContact.location}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigate(`/voice-call/${contactId}`)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <Phone className="w-5 h-5" />
          </button>
          <button 
            onClick={() => navigate(`/video-call/${contactId}`)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-muted rounded-full transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ height: "30%" }}
        className="bg-gradient-to-br from-[#eef2ff] to-[#f5f3ff] dark:from-[#1a1d29] dark:to-[#1f1b2e] border-b border-border relative overflow-hidden"
        style={{ height: "30%" }}
      >
        {/* Simulated Map Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        {/* Map Content */}
        <div className="relative h-full flex items-center justify-center p-6">
          <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm px-3 py-2 rounded-full text-sm border border-border shadow-sm">
            Live location
          </div>
          <MapMarkerAvatar
            avatar={mockContact.avatar}
            name={mockContact.name}
            isOnline={mockContact.isOnline}
            isActive={true}
          />
        </div>

        {/* Expand Map Button */}
        <button className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-border shadow-sm hover:bg-card transition-colors flex items-center gap-2">
          <span>Expand Map</span>
        </button>
      </motion.div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        {mockMessages.map((msg, index) => (
          <ChatBubble
            key={msg.id}
            message={msg.message}
            time={msg.time}
            isSent={msg.isSent}
            status={msg.isSent ? msg.status : undefined}
            delay={index * 0.05}
          />
        ))}
        <VoiceMessagePlayer duration="0:12" isSent={false} />
        {isTyping && <TypingIndicator />}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-card border-t border-border">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-muted rounded-full transition-colors">
            <Smile className="w-6 h-6 text-muted-foreground" />
          </button>
          <div className="flex-1 bg-input-background border border-border rounded-3xl px-4 py-2.5 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-transparent focus:outline-none"
            />
          </div>
          {message.trim() ? (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleSend}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] text-white flex items-center justify-center shadow-lg"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          ) : (
            <RecordingButton />
          )}
        </div>
      </div>
    </div>
  );
}