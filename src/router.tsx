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
import ChangePassword from "./pages/changePassword";
import FightingChoose from "./pages/pkGetmode/pages/fighting_choose";
import Fighting from "./pages/pkGetmode/pages/fighting";





const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LoginPage/> },
  { path: "/register", element:<Register/> },
  { path: "/forget", element:<Forget/> },
  { path: "/changePassword", element:<ChangePassword/>},
  { path: "/gameMode", element:<GameMode/> },
  { path: "/pkMode", element:<PkMode/> },
  { path: "/pkgetMode", element:<PkGetMode/> },
  { path: "/pkgetMode/fightingChoose", element:<FightingChoose/> },
  { path: "/pkgetMode/fighting", element:<Fighting/> },
  { path: "/getMode", element:<GetMode/>, },
  { path: "/getMode/getModeResult" ,element:<GetModeResult/>}

]);
export default router;
