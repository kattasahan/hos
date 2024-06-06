import { BrowserRouter } from "react-router-dom";

import Sidebar from "@/layout/Sidebar";
import Topbar from "@/layout/Topbar";
import AppRouter from "@/layout/AppRouter";
import { AuthProvider } from "@/auth/Auth";

export default function Layout() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <div className="flex h-screen w-screen">
            <Sidebar />
            <div className="w-full h-full flex flex-col">
              <Topbar />
              <AppRouter />
            </div>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
