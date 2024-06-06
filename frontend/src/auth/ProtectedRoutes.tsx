import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

export default function ProtectedRoutes({ children }: { children: ReactNode }) {
  const location = useLocation();
  const auth = useAuth();

  if (!auth.user)
    return <Navigate to="/login" state={{ path: location.pathname }} />;

  return children;
}
