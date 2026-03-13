import { useState } from "react";
import { ArrowLeft, MessageCircle, Users, MapPin, Phone, Video } from "lucide-react";
import { useNavigate } from "react-router";
import {
  ChatBubble,
  VoiceMessagePlayer,
  ContactListItem,
  GroupCard,
  MapMarkerAvatar,
  FloatingActionButton,
  NotificationBadge,
  EmptyState,
  TypingIndicator,
  ContactSkeleton,
} from "../components";

export function ComponentShowcase() {
  const navigate = useNavigate();
  const [showTyping, setShowTyping] = useState(true);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-xl border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-semibold">Component Showcase</h1>
            <p className="text-xs text-muted-foreground">CircleLive Design System</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Chat Bubbles */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Chat Bubbles</h2>
          <div className="space-y-2">
            <ChatBubble
              message="Hey! How are you doing?"
              time="10:30 AM"
              isSent={false}
            />
            <ChatBubble
              message="I'm doing great! Thanks for asking 😊"
              time="10:32 AM"
              isSent={true}
              status="seen"
            />
            <ChatBubble
              message="Want to grab coffee later?"
              time="10:33 AM"
              isSent={false}
            />
          </div>
        </section>

        {/* Voice Messages */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Voice Messages</h2>
          <div className="space-y-3">
            <VoiceMessagePlayer duration="0:12" isSent={false} />
            <VoiceMessagePlayer duration="0:45" isSent={true} />
          </div>
        </section>

        {/* Typing Indicator */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Typing Indicator</h2>
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={() => setShowTyping(!showTyping)}
              className="px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-sm"
            >
              Toggle
            </button>
            <span className="text-sm text-muted-foreground">
              {showTyping ? "Showing" : "Hidden"}
            </span>
          </div>
          {showTyping && <TypingIndicator />}
        </section>

        {/* Contact List Items */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Contact List Items</h2>
          <div className="bg-card rounded-2xl overflow-hidden border border-border">
            <ContactListItem
              id="1"
              name="Sarah Johnson"
              avatar="https://images.unsplash.com/photo-1599651515421-43a8e7dbf212?w=400"
              lastMessage="See you there! 👋"
              time="2m ago"
              isOnline={true}
              hasLiveLocation={true}
              unreadCount={3}
            />
            <ContactListItem
              id="2"
              name="Mike Davis"
              avatar="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=400"
              lastMessage=""
              isVoiceMessage={true}
              time="15m ago"
              isOnline={false}
              hasLiveLocation={false}
            />
          </div>
        </section>

        {/* Group Cards */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Group Cards</h2>
          <div className="bg-card rounded-2xl overflow-hidden border border-border">
            <GroupCard
              id="family"
              name="Family"
              memberCount={5}
              avatars={[
                "https://images.unsplash.com/photo-1664813495783-a7b19be83624?w=200",
                "https://images.unsplash.com/photo-1717378706934-3f44829052e0?w=200",
              ]}
              lastMessage="Mom: Dinner at 7pm"
              time="10m ago"
              activeMembersCount={3}
            />
          </div>
        </section>

        {/* Map Markers */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Map Markers</h2>
          <div className="bg-gradient-to-br from-[#eef2ff] to-[#f5f3ff] dark:from-[#1a1d29] dark:to-[#1f1b2e] rounded-2xl p-8 flex items-center justify-center gap-8">
            <MapMarkerAvatar
              avatar="https://images.unsplash.com/photo-1599651515421-43a8e7dbf212?w=400"
              name="Sarah"
              isOnline={true}
            />
            <MapMarkerAvatar
              avatar="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=400"
              name="Mike"
              isOnline={false}
            />
          </div>
        </section>

        {/* Floating Action Buttons */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Floating Action Buttons</h2>
          <div className="flex items-center gap-4 flex-wrap">
            <FloatingActionButton icon={MessageCircle} size="sm" />
            <FloatingActionButton icon={Phone} size="md" variant="secondary" />
            <FloatingActionButton icon={Video} size="lg" />
          </div>
        </section>

        {/* Notification Badges */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Notification Badges</h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-muted" />
              <div className="absolute -top-1 -right-1">
                <NotificationBadge count={3} size="sm" />
              </div>
            </div>
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-muted" />
              <div className="absolute -top-1 -right-1">
                <NotificationBadge count={25} size="md" />
              </div>
            </div>
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-muted" />
              <div className="absolute -top-1 -right-1">
                <NotificationBadge count={150} size="lg" max={99} />
              </div>
            </div>
          </div>
        </section>

        {/* Empty State */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Empty State</h2>
          <div className="bg-card rounded-2xl border border-border">
            <EmptyState
              icon={Users}
              title="No contacts yet"
              description="Add friends to start chatting and sharing locations"
              action={{
                label: "Add Contact",
                onClick: () => alert("Add contact clicked"),
              }}
            />
          </div>
        </section>

        {/* Loading Skeletons */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Loading Skeletons</h2>
          <div className="bg-card rounded-2xl overflow-hidden border border-border">
            <ContactSkeleton />
            <ContactSkeleton />
            <ContactSkeleton />
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Color Palette</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <div className="h-16 rounded-xl bg-[#4f46e5] flex items-center justify-center text-white text-sm font-medium">
                Primary
              </div>
              <div className="h-16 rounded-xl bg-[#a78bfa] flex items-center justify-center text-white text-sm font-medium">
                Secondary
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-16 rounded-xl bg-[#10b981] flex items-center justify-center text-white text-sm font-medium">
                Accent
              </div>
              <div className="h-16 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#4f46e5] flex items-center justify-center text-white text-sm font-medium">
                Gradient
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
