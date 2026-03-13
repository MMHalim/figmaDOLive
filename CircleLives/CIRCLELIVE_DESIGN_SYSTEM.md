# CircleLive 2027 - Design System Documentation

## 📱 Overview
CircleLive is a modern mobile application UI/UX design for 2027, featuring real-time location sharing and chat functionality with a futuristic, clean, and minimal aesthetic.

---

## 🎨 Design System

### Color Palette

#### Light Mode
- **Primary**: `#4f46e5` (Electric Indigo)
- **Secondary**: `#a78bfa` (Soft Purple)
- **Accent**: `#10b981` (Neon Green - Live Location)
- **Background**: `#f8f9fb` (Neutral Light Gray)
- **Card**: `#ffffff` (White)

#### Dark Mode
- **Primary**: `#6366f1` (Lighter Indigo)
- **Secondary**: `#c4b5fd` (Lighter Purple)
- **Accent**: `#34d399` (Brighter Green)
- **Background**: `#0f1117` (Dark Charcoal)
- **Card**: `#1a1d29` (Dark Surface)

#### Status Colors
- **Online**: Green (`#10b981` / `#34d399`)
- **Recently Active**: Yellow/Amber (`#f59e0b` / `#fbbf24`)
- **Offline**: Gray (`#9ca3af` / `#6b7280`)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Features**: Optimized letter spacing, antialiasing
- **Base Size**: 16px

### Border Radius
- **Small**: `calc(1rem - 4px)`
- **Medium**: `calc(1rem - 2px)`
- **Large**: `1rem`
- **Extra Large**: `calc(1rem + 4px)`
- **Full**: `9999px` (Pills/Circles)

### Effects
- **Glassmorphism**: `backdrop-filter: blur(10px)` with semi-transparent backgrounds
- **Shadows**: Soft, layered shadows for depth
- **Gradients**: Smooth linear gradients from primary to secondary
- **Animations**: Smooth, spring-based transitions

---

## 📂 Screen Structure

### 1️⃣ Authentication Flow

#### Login Screen (`/`)
- Large logo with rotating animation
- Phone number input
- Gradient CTA button
- Links to Register and Forgot Password
- **Features**: Welcoming header, minimal form fields, floating elements

#### Register Screen (`/register`)
- Simplified onboarding
- Name, phone, password fields
- Terms & conditions checkbox
- Gradient CTA button
- **Features**: Clean form design, smooth transitions

#### OTP Screen (`/otp`)
- 6-digit OTP input using InputOTP component
- Resend code functionality
- Visual feedback for code entry
- **Features**: Large, accessible input slots, auto-focus

#### Forgot Password (`/forgot-password`)
- Simple phone number entry
- Send reset code button
- Back to login link
- **Features**: Minimal distraction, clear actions

### 2️⃣ Permission Screens

#### Contact Permission (`/permissions/contacts`)
- Large icon with pulsing animation
- Benefits list with checkmarks
- Allow/Skip actions
- **Features**: Educational, non-blocking

#### Notification Permission (`/permissions/notifications`)
- Bell icon with shake animation
- Benefits explanation
- Enable/Skip actions
- **Features**: Clear value proposition

### 3️⃣ Main Application

#### Members/Chats Screen (`/app`)
- **Header**:
  - CircleLive gradient logo
  - Live online count with pulsing indicator
  - Search bar with rounded corners
- **Tabs**: Friends | Family Groups
- **Friends List**:
  - Contact avatars with online status
  - Live location indicator (pulsing green pin)
  - Last message preview
  - Unread badge
  - Voice message indicator
- **Groups List**:
  - Stacked avatars
  - Member count
  - Active members with location
- **FAB**: Floating + button for creating groups
- **Features**: WhatsApp-style tabs, swipe gestures (future), smooth animations

#### Chat + Location Screen (`/app/chat/:contactId`)
- **Header**:
  - Back button
  - Contact info with live distance
  - Call, video, menu actions
- **Map Section** (30% height):
  - Real-time location marker
  - Pulsing ring animation
  - Profile avatar on map
  - Expand map button
  - Simulated map grid background
- **Chat Section** (70% height):
  - Message bubbles (sent/received)
  - Voice message players with waveform
  - Typing indicator (animated dots)
  - Message status (sent/delivered/seen)
  - Timestamp
- **Input Bar**:
  - Emoji picker
  - Text input (rounded pill)
  - Voice recording button (hold to record)
  - Send button (appears when typing)
- **Features**: Split view design, glassmorphism, smooth scrolling

#### Group Map Screen (`/app/group/:groupId`)
- **Header**:
  - Back button
  - Group avatars stack
  - Group name and active count
- **Full Map View**:
  - All member markers with avatars
  - Pulsing rings for live locations
  - "You" marker in center with navigation icon
  - Distance indicators
  - Map legend (Online/Recent/Offline)
- **Bottom Sheet** (Draggable):
  - Members list with:
    - Avatar + online status
    - Last seen time
    - Distance from you
    - Quick call/chat buttons
  - Swipe handle
- **Features**: Interactive map, draggable sheet, real-time updates

#### Profile & Settings (`/app/profile`)
- **Header**:
  - Gradient background
  - Profile photo with camera edit button
  - Name and phone number
  - Live location sharing badge
- **Settings Sections**:
  - Status message input
  - Privacy & Location (toggle + settings)
  - Notifications (toggle + settings)
  - Help Center
  - About
- **Logout Button**: Red/destructive styling
- **Features**: Card-based layout, toggle switches, chevron navigation

---

## 🧩 Reusable Components

### ChatBubble
**Path**: `/src/app/components/ChatBubble.tsx`

**Props**:
- `message`: string
- `time`: string
- `isSent`: boolean
- `status`: "sent" | "delivered" | "seen"
- `delay`: number (animation delay)

**Features**:
- Gradient background for sent messages
- Rounded corners with tail
- Status indicators (single/double check)
- Smooth entry animation

---

### VoiceMessagePlayer
**Path**: `/src/app/components/VoiceMessagePlayer.tsx`

**Props**:
- `duration`: string
- `isSent`: boolean

**Features**:
- Animated waveform visualization
- Play/pause button
- Duration display
- Matches chat bubble styling

---

### ContactListItem
**Path**: `/src/app/components/ContactListItem.tsx`

**Props**:
- `id`, `name`, `avatar`, `lastMessage`
- `isVoiceMessage`: boolean
- `time`, `isOnline`, `hasLiveLocation`
- `unreadCount`, `onClick`

**Features**:
- Avatar with status dot
- Pulsing live location indicator
- Unread badge
- Tap animation
- Voice message icon

---

### GroupCard
**Path**: `/src/app/components/GroupCard.tsx`

**Props**:
- `id`, `name`, `memberCount`, `avatars`
- `lastMessage`, `time`, `activeMembersCount`
- `onClick`

**Features**:
- Stacked member avatars
- Active members count with location icon
- Gradient background
- Member count badge

---

### MapMarkerAvatar
**Path**: `/src/app/components/MapMarkerAvatar.tsx`

**Props**:
- `avatar`, `name`, `isOnline`, `isActive`

**Features**:
- Dual pulsing rings for live location
- Status indicator dot
- Name label below
- Hover scale effect
- Border styling for active state

---

### FloatingActionButton
**Path**: `/src/app/components/FloatingActionButton.tsx`

**Props**:
- `icon`: LucideIcon
- `onClick`, `variant`, `size`

**Features**:
- Gradient or outlined styles
- Scale animations
- Elevated shadow
- Multiple sizes (sm/md/lg)

---

### RecordingButton
**Path**: `/src/app/components/RecordingButton.tsx`

**Props**:
- `onRecordStart`, `onRecordEnd`, `onCancel`

**Features**:
- Hold to record interaction
- Animated recording timer
- Slide to cancel
- Visual recording indicator
- Pulsing red dot

---

### TypingIndicator
**Path**: `/src/app/components/TypingIndicator.tsx`

**Features**:
- Three animated dots
- Staggered bounce animation
- Matches chat bubble styling

---

### LoadingSkeleton
**Path**: `/src/app/components/LoadingSkeleton.tsx`

**Components**:
- `ContactSkeleton`: For contact list loading
- `ChatSkeleton`: For chat messages loading

**Features**:
- Shimmer/pulse animation
- Matches content layout
- Smooth opacity transitions

---

## 🎯 Key Design Features

### 1. Glassmorphism
- Used in headers, overlays, and floating elements
- `backdrop-filter: blur(10px)`
- Semi-transparent backgrounds
- Subtle border highlights

### 2. Live Location Indicators
- Pulsing concentric rings
- Dual animation layers
- Neon green accent color
- Smooth scale transitions

### 3. Smooth Animations
- Motion/React (Framer Motion) for all animations
- Spring-based transitions
- Staggered entrance animations
- Gesture-based interactions

### 4. Dark Mode Support
- Automatic theme detection
- Toggle in bottom navigation
- Optimized color contrast
- Consistent component styling

### 5. Mobile-First Design
- Max width constraint (md: 28rem)
- Touch-optimized tap targets (min 44px)
- Bottom navigation for thumb reach
- Safe area insets for notched devices

### 6. Gradient Accents
- Primary to secondary color gradients
- Used in CTAs, headers, avatars
- Smooth 135deg angle
- Text gradients for branding

---

## 📐 Layout Patterns

### Card Layout
```tsx
<div className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-border/50">
  {/* Content */}
</div>
```

### Gradient Button
```tsx
<button className="bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white rounded-2xl">
  {/* Text */}
</button>
```

### Status Indicator
```tsx
<div className="w-4 h-4 rounded-full bg-[var(--status-online)] animate-pulse" />
```

### Glassmorphic Header
```tsx
<div className="bg-card/80 backdrop-blur-xl border-b border-border">
  {/* Header content */}
</div>
```

---

## 🚀 Animation Examples

### Pulsing Location Ring
```tsx
<motion.div
  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
  transition={{ duration: 2, repeat: Infinity }}
/>
```

### Message Entry
```tsx
<motion.div
  initial={{ opacity: 0, y: 20, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.3 }}
/>
```

### Tab Animation
```tsx
<motion.div layoutId="activeTab" transition={{ type: "spring", bounce: 0.2 }} />
```

---

## 🎨 Design Tokens (CSS Variables)

All design tokens are defined in `/src/styles/theme.css` and accessible via:
- `var(--primary)`
- `var(--secondary)`
- `var(--accent)`
- `var(--status-online)`
- `var(--glass-bg)`
- And more...

---

## 📱 Responsive Behavior

- **Mobile Portrait**: Primary design (320px - 480px)
- **Mobile Landscape**: Adapts with same components
- **Tablet**: Centered with max-width constraint
- **Desktop**: Centered mobile preview (for development)

---

## ✨ Bonus Features Included

1. ✅ Contact Permission Screen
2. ✅ Notification Permission Screen
3. ✅ Empty States (via LoadingSkeleton)
4. ✅ Voice Recording Animation
5. ✅ Loading Skeletons

---

## 🔄 Navigation Flow

```
Login → OTP → Contact Permission → Notification Permission → Main App
  ↓
Register → Contact Permission → Notification Permission → Main App

Main App:
├── Members (Friends/Groups)
├── Chat + Location
├── Group Map
└── Profile & Settings
```

---

## 💡 Developer Handoff Notes

### For Flutter Implementation:
1. **Colors**: Use exact hex values from theme
2. **Animations**: Match duration and easing functions
3. **Spacing**: Use 4px base unit (multiples of 4)
4. **Shadows**: Layer multiple shadows for depth
5. **Border Radius**: 16px default (adjustable)
6. **Typography**: Inter font at specified weights
7. **Components**: All components are modular and reusable
8. **State Management**: Prepare for real-time location and chat updates
9. **Permissions**: Native contact and notification permission flows
10. **Gestures**: Swipe, hold, drag interactions

### Performance Considerations:
- Optimize map rendering for multiple markers
- Implement virtual scrolling for long contact lists
- Cache avatar images
- Throttle location updates
- Debounce search input

---

## 📊 Component Hierarchy

```
App
├── ThemeProvider
└── RouterProvider
    ├── Auth Screens
    │   ├── LoginScreen
    │   ├── RegisterScreen
    │   ├── OTPScreen
    │   └── ForgotPasswordScreen
    ├── Permission Screens
    │   ├── ContactPermissionScreen
    │   └── NotificationPermissionScreen
    └── MainLayout
        ├── MembersScreen
        ├── ChatLocationScreen
        ├── GroupMapScreen
        └── ProfileScreen
```

---

## 🎯 Design Goals Achieved

✅ Clean, modern, minimal, intuitive  
✅ Optimized for mobile-first  
✅ Futuristic 2027 aesthetic  
✅ Soft gradients & glassmorphism  
✅ Smooth animations  
✅ Dark + Light mode  
✅ High readability  
✅ One-hand usage optimization  
✅ Large tap targets  
✅ Fast navigation  
✅ Real-time UI indicators  
✅ Accessibility considerations  

---

**CircleLive 2027** - A beautiful evolution of social location-sharing apps 🚀
