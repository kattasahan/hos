import { Navigate, Route, Routes } from "react-router-dom";

import Login from "@/pages/Login";
import Home from "@/pages/Home";
import B from "@/pages/B";
import A from "@/pages/A";
import { RoutesType } from "@/constants/types";
import ProtectedRoutes from "@/auth/ProtectedRoutes";

const routes: Array<RoutesType> = [
  { path: "/login", element: <Login />, protected: false },
  { path: "/home", element: <Home />, protected: true },
  { path: "/a", element: <A />, protected: true },
  { path: "/b", element: <B />, protected: true },
  { path: "*", element: <Navigate to="/login" />, protected: false },
];

function AppRouter() {
  return (
    <div>
      <Routes>
        {...routes.map((route) => (
          <Route
            path={route.path}
            element={
              route.protected ? (
                <ProtectedRoutes>{route.element}</ProtectedRoutes>
              ) : (
                <>{route.element}</>
              )
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default AppRouter;
