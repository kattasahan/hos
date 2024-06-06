import { NavLink } from "react-router-dom";
import showLayout from "@/utils/showLayout";
import { useState } from "react";

const routes = [
  { path: "/home", name: "Home", icon: "pi pi-home" },
  { path: "/a", name: "Apple", icon: "pi pi-inbox" },
  { path: "/b", name: "Bananna", icon: "pi pi-th-large" },
];

export default function Sidebar() {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExoand = () => {
    setExpand((prev) => !prev);
  };

  if (showLayout()) return <></>;

  return (
    <div className="h-full flex">
      <div
        className={`${
          expand ? "w-[200px]" : "w-[60px]"
        } bg-slate-300 h-full flex flex-col duration-150 ease-in-out`}
      >
        <div
          className={`flex p-1 h-[40px] ${
            expand ? "justify-end" : "justify-center"
          }`}
          onClick={handleExoand}
        >
          <i className={`${expand ? "pi pi-times" : "pi pi-bars"} text-xl`}></i>
        </div>
        {...routes.map(
          (route) =>
            route.name && (
              <NavLink
                to={route.path}
                className={`flex p-2 justify-center h-[40px]`}
              >
                <div
                  className={`w-[150px] flex gap-4 ${
                    !expand && "justify-center"
                  }`}
                >
                  <i className={`${route.icon} text-xl`}></i>
                  {expand && <div className="">{route.name}</div>}
                </div>
              </NavLink>
            )
        )}
      </div>
    </div>
  );
}
