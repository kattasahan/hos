import { useState } from "react";

import { LoginCreds } from "@/constants/types";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { useAuth } from "@/auth/Auth";

export default function Login() {
  const [loginCreds, setLoginCreds] = useState<LoginCreds>({
    username: "",
    password: "",
  });

  const auth = useAuth();

  const handleLogin = () => {
    auth.login(loginCreds);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex gap-12 flex-col drop-shadow-2xl bg-white p-12 rounded-xl">
          <div className="flex flex-col gap-2 items-center">
            <div>Logo</div>
            <div className="text-3xl font-bold">Login</div>
          </div>
          <div className="flex gap-6 flex-col">
            <FloatLabel>
              <InputText
                value={loginCreds.username}
                onChange={(e) =>
                  setLoginCreds((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
              />
              <label htmlFor="username">User Name</label>
            </FloatLabel>
            <FloatLabel>
              <Password
                value={loginCreds.password}
                onChange={(e) =>
                  setLoginCreds((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                feedback={false}
              />
              <label htmlFor="password">Password</label>
            </FloatLabel>
            <Button
              label="Login"
              onClick={handleLogin}
              disabled={
                loginCreds.username && loginCreds.password ? false : true
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
