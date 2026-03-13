import { motion } from "motion/react";
import {
  Camera,
  MapPin,
  Bell,
  Lock,
  HelpCircle,
  LogOut,
  ChevronRight,
  Shield,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Switch } from "../components/ui/switch";

export function ProfileScreen() {
  const navigate = useNavigate();
  const [locationSharing, setLocationSharing] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="h-full overflow-y-auto bg-background pb-20">
      {/* Header with Profile */}
      <div className="bg-gradient-to-br from-[#6366f1] to-[#4f46e5] pt-12 pb-8 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="relative">
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1599651515421-43a8e7dbf212?w=400"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-lg"
              >
                <Camera className="w-5 h-5" />
              </motion.button>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4">Sarah Johnson</h2>
            <p className="text-white/80">+1 (555) 123-4567</p>
            <div className="mt-3 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-white" />
              <span className="text-sm text-white">Sharing live location</span>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="px-6 py-6 space-y-6">
        {/* Status Message */}
        <div className="bg-card rounded-3xl p-4 border border-border shadow-sm">
          <label className="text-sm text-muted-foreground mb-2 block">Status Message</label>
          <input
            type="text"
            placeholder="Hey there! I'm using CircleLive"
            className="w-full bg-transparent focus:outline-none"
          />
        </div>

        {/* Privacy & Location */}
        <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm">
          <h3 className="px-4 pt-4 pb-2 font-semibold flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Privacy & Location
          </h3>
          <div className="divide-y divide-border">
            <div className="px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Location Sharing</p>
                  <p className="text-sm text-muted-foreground">Share your live location</p>
                </div>
              </div>
              <Switch checked={locationSharing} onCheckedChange={setLocationSharing} />
            </div>
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Privacy Settings</p>
                  <p className="text-sm text-muted-foreground">Who can see your location</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm">
          <h3 className="px-4 pt-4 pb-2 font-semibold flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            Notifications
          </h3>
          <div className="divide-y divide-border">
            <div className="px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Messages and updates</p>
                </div>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Notification Settings</p>
                  <p className="text-sm text-muted-foreground">Customize preferences</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Other */}
        <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm">
          <h3 className="px-4 pt-4 pb-2 font-semibold">Other</h3>
          <div className="divide-y divide-border">
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <p className="font-medium">Help Center</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <p className="font-medium">About CircleLive</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Logout */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="w-full py-4 bg-destructive/10 text-destructive rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-destructive/20 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </motion.button>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-4">
          <p>CircleLive 2027</p>
          <p className="mt-1">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
