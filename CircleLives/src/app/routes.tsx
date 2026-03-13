import { createBrowserRouter } from "react-router";
import { LoginScreen } from "./screens/LoginScreen";
import { RegisterScreen } from "./screens/RegisterScreen";
import { OTPScreen } from "./screens/OTPScreen";
import { ForgotPasswordScreen } from "./screens/ForgotPasswordScreen";
import { MainLayout } from "./layouts/MainLayout";
import { RootLayout } from "./layouts/RootLayout";
import { MembersScreen } from "./screens/MembersScreen";
import { ChatLocationScreen } from "./screens/ChatLocationScreen";
import { GroupMapScreen } from "./screens/GroupMapScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { ContactPermissionScreen } from "./screens/ContactPermissionScreen";
import { NotificationPermissionScreen } from "./screens/NotificationPermissionScreen";
import { ComponentShowcase } from "./screens/ComponentShowcase";
import { VoiceCallScreen } from "./screens/VoiceCallScreen";
import { VideoCallScreen } from "./screens/VideoCallScreen";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <LoginScreen />,
      },
      {
        path: "/register",
        element: <RegisterScreen />,
      },
      {
        path: "/otp",
        element: <OTPScreen />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordScreen />,
      },
      {
        path: "/permissions/contacts",
        element: <ContactPermissionScreen />,
      },
      {
        path: "/permissions/notifications",
        element: <NotificationPermissionScreen />,
      },
      {
        path: "/showcase",
        element: <ComponentShowcase />,
      },
      {
        path: "/voice-call/:contactId",
        element: <VoiceCallScreen />,
      },
      {
        path: "/video-call/:contactId",
        element: <VideoCallScreen />,
      },
      {
        path: "/app",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <MembersScreen />,
          },
          {
            path: "chat/:contactId",
            element: <ChatLocationScreen />,
          },
          {
            path: "group/:groupId",
            element: <GroupMapScreen />,
          },
          {
            path: "profile",
            element: <ProfileScreen />,
          },
        ],
      },
    ],
  },
]);