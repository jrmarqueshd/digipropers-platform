import { Navigate } from "react-router-dom";
import { needRedirect } from "./helpers";

export function RouteProtector({ children, protectType }: { children: JSX.Element, protectType: "auth" | "unAuth" }) {
  if (needRedirect[protectType]) {
    return <Navigate to={needRedirect[protectType]} replace />;
  }

  return children;
}