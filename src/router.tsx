import { createBrowserRouter } from "react-router-dom";
import Forget from "./pages/forget";
import GameMode from "./pages/gamemode";
import GetMode from "./pages/getMode";
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
  { path: "/game_mode", element:<GameMode/> },
  { path: "/pkmode", element:<PkMode/> },
  { path: "/pkgetmode", element:<PkGetMode/> },
  { path: "/getMode", element:<GetMode/> },

]);
export default router;
