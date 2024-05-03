import { createBrowserRouter } from "react-router-dom";
import Forget from "./pages/forget";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import Register from "./pages/register";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LoginPage/> },
  { path: "/Register", element:<Register/> },
  { path: "/Forget", element:<Forget/> },

]);
export default router;
