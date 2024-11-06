import Login from "./routes/Login";
import PlanBuilder from "./routes/PlanBuilder";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./routes/SignUp";
import ForgetPassword from "./routes/ForgetPassword";
import VerifyEmail from "./routes/VerifyEmail";
import UpdatePassword from "./routes/UpdatePassword";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthGuard from "./components/AuthGuard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoute>
      <PlanBuilder />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthGuard>
        <Login />
      </AuthGuard>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthGuard>
        <SignUp />
      </AuthGuard>
    ),
  },
  {
    path: "/forget-password",
    element: (
      <AuthGuard>
        <ForgetPassword />
      </AuthGuard>
    ),
  },
  {
    path: "/verify-email",
    element: (
      <AuthGuard>
        <VerifyEmail />
      </AuthGuard>
    ),
  },
  {
    path: "/update-password",
    element: (
      <AuthGuard>
        <UpdatePassword />
      </AuthGuard>
    ),
  },
]);

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
