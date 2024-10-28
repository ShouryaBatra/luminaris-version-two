import Login from "./routes/Login";
import PlanBuilder from "./routes/PlanBuilder";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./routes/SignUp";
import ForgetPassword from "./routes/ForgetPassword";
import VerifyEmail from "./routes/VerifyEmail";
import UpdatePassword from "./routes/UpdatePassword";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanBuilder />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/update-password",
    element: <UpdatePassword />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}