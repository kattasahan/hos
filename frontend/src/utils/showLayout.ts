import { useLocation } from "react-router-dom";

function showLayout() {
  const { pathname } = useLocation();
  return ["/login"].includes(pathname);
}

export default showLayout;
