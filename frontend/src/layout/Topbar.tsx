import { useAuth } from "@/auth/Auth";
import showLayout from "@/utils/showLayout";
import { Button } from "primereact/button";

export default function Topbar() {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  if (showLayout()) return <></>;

  return (
    <div className="h-16 flex justify-between items-center bg-blue-300 px-6">
      <div>Topbar</div>
      <div>
        <Button
          label="Logout"
          icon="pi pi-sign-out"
          size="small"
          className="p-1.5 rounded"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}
