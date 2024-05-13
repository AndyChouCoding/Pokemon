import { createBrowserRouter, Outlet } from "react-router-dom";
import Forget from "./pages/forget";
import GameMode from "./pages/gamemode";
import GetMode from "./pages/getMode";
import GetModeResult from "./pages/getMode/pages";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import PkGetMode from "./pages/pkGetmode";
import PkMode from "./pages/pkMode";
import Register from "./pages/register";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LoginPage/> },
  { path: "/register", element:<Register/> },
  { path: "/forget", element:<Forget/> },
  { path: "/gameMode", element:<GameMode/> },
  { path: "/pkMode", element:<PkMode/> },
  { path: "/pkgetMode", element:<PkGetMode/> },
  { path: "/getMode", element:<GetMode/>, children:[{path:"/getMode/getModeResult" ,element:<GetModeResult/>}],},

]);
export default router;
