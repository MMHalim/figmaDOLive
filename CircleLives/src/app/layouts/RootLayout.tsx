import { Outlet } from "react-router";
import { DevNavHelper } from "../components/DevNavHelper";

export function RootLayout() {
  return (
    <>
      <Outlet />
      <DevNavHelper />
    </>
  );
}
