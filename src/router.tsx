import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Pk from "./pages/pk";
import PkGet from "./pages/pkget";
import Get from "./pages/get";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/pk", element: <Pk/> },
  { path: "/pkGet", element: <PkGet/> },
  { path: "get", element: <Get/> },
]);
export default router;
